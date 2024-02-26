import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GamePage from "../../pages/game";
import mockRouter from "next-router-mock";

describe("Game Page", () => {
  it("should render A to Z letters", () => {
    render(<GamePage />);

    const alphabetButtons = screen.getAllByRole("button", { name: /^[A-Z]$/ }); // single character

    expect(alphabetButtons).toHaveLength(26); // Number of alphabets
    alphabetButtons.forEach((button) => {
      expect(button).toBeDefined();
    });
  });

  it("shows the loading and then same number of inputs as there are letters in the word", async () => {
    mockRouter.push("/game?type=noun");
    render(<GamePage />);

    expect(screen.getByText("Loading")).toBeDefined();
    expect(await screen.findAllByRole("textbox")).toHaveLength(5); // response with msw handler, 'hello'
  });

  it("should route to home page when the back button is clicked", async () => {
    const user = userEvent.setup();
    render(<GamePage />);

    const backButton = await screen.findByLabelText("Go back");
    await user.click(backButton);

    expect(mockRouter.asPath).toEqual("/");
  });

  it("should refetch word when the reset button is clicked", async () => {
    mockRouter.push("/game?type=noun");
    const user = userEvent.setup();
    render(<GamePage />);

    expect(screen.getByText("Loading")).toBeDefined();
    expect(await screen.findAllByRole("textbox")).toBeDefined();

    const resetButton = await screen.findByLabelText("Reset game");
    await user.click(resetButton);

    expect(screen.getByText("Loading")).toBeDefined();
    expect(await screen.findAllByRole("textbox")).toBeDefined();
  });

  it("shows a lose message when user fails to guess correctly within a limited number of attempts", async () => {
    mockRouter.push("/game?type=noun");
    const user = userEvent.setup();
    render(<GamePage />);

    await screen.findAllByRole("textbox");

    // word: 'hello'
    // limit: 8
    await user.click(screen.getByRole("button", { name: "A" }));
    await user.click(screen.getByRole("button", { name: "B" }));
    await user.click(screen.getByRole("button", { name: "C" }));
    await user.click(screen.getByRole("button", { name: "D" }));
    await user.click(screen.getByRole("button", { name: "F" }));
    await user.click(screen.getByRole("button", { name: "H" })); // correct
    await user.click(screen.getByRole("button", { name: "X" }));
    await user.click(screen.getByRole("button", { name: "Y" }));
    await user.click(screen.getByRole("button", { name: "Z" }));

    expect(screen.getByText(/lose/i)).toBeDefined();
  });

  it("shows a victory text when you answer correctly within a limited number of attempts", async () => {
    mockRouter.push("/game?type=noun");
    const user = userEvent.setup();
    render(<GamePage />);
    await screen.findAllByRole("textbox");

    await user.click(screen.getByRole("button", { name: "H" }));
    await user.click(screen.getByRole("button", { name: "E" }));
    await user.click(screen.getByRole("button", { name: "L" }));
    await user.click(screen.getByRole("button", { name: "A" })); // incorrect
    await user.click(screen.getByRole("button", { name: "O" }));

    expect(screen.getByText(/win/i)).toBeDefined();
  });
});

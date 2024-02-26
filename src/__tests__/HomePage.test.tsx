import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("Home Page", () => {
  it("should render Drowdown component", () => {
    render(<HomePage />);

    const dropdown = screen.getByRole("button", { name: "Select type..." });

    expect(dropdown).toBeDefined();
  });

  it("should have 4 type labels when the Dropdown is clicked", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    expect(screen.getByRole("link", { name: "Noun" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Verb" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Adjective" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Adverb" })).toBeDefined();
  });

  it("should close the dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    await user.click(document.body);

    expect(screen.queryByRole("link", { name: "Noun" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Verb" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Adjective" })).toBeNull();
    expect(screen.queryByRole("link", { name: "Adverb" })).toBeNull();
  });

  it("should route to game page when 'Noun' is clicked", async () => {
    const user = userEvent.setup();
    render(<HomePage />, { wrapper: MemoryRouterProvider });

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    const nounBox = screen.getByText("Noun");
    await user.click(nounBox);

    expect(mockRouter.asPath).toEqual("/game?type=noun");
  });

  it("should route to game page when 'Verb' is clicked", async () => {
    const user = userEvent.setup();
    render(<HomePage />, { wrapper: MemoryRouterProvider });

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    const verbBox = screen.getByText("Verb");
    await user.click(verbBox);

    expect(mockRouter.asPath).toEqual("/game?type=verb");
  });

  it("should route to game page when 'Adjective' is clicked", async () => {
    const user = userEvent.setup();
    render(<HomePage />, { wrapper: MemoryRouterProvider });

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    const adjectiveBox = screen.getByText("Adjective");
    await user.click(adjectiveBox);

    expect(mockRouter.asPath).toEqual("/game?type=adjective");
  });

  it("should route to game page when 'Adverb' is clicked", async () => {
    const user = userEvent.setup();
    render(<HomePage />, { wrapper: MemoryRouterProvider });

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    const adverbBox = screen.getByText("Adverb");
    await user.click(adverbBox);

    expect(mockRouter.asPath).toEqual("/game?type=adverb");
  });
});

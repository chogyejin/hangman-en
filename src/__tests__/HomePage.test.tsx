import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/index";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

vi.mock("next/router", () => require("next-router-mock"));

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

    // "getBy..." throws a descriptive error if no elements match
    expect(screen.getByText("Noun")).toBeDefined();
    expect(screen.getByText("Verb")).toBeDefined();
    expect(screen.getByText("Adjective")).toBeDefined();
    expect(screen.getByText("Adverb")).toBeDefined();
  });

  it("should close the dropdown when clicking outside", async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    const dropdown = screen.getByRole("button", { name: "Select type..." });
    await user.click(dropdown);

    await user.click(document.body);

    // "queryBy..." returns null if no elements match
    expect(screen.queryByText("Noun")).toBeNull();
    expect(screen.queryByText("Verb")).toBeNull();
    expect(screen.queryByText("Adjective")).toBeNull();
    expect(screen.queryByText("Adverb")).toBeNull();
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
});

import "vitest-canvas-mock";
import { vi, afterAll, afterEach, beforeAll, beforeEach } from "vitest";
import { server } from "@/mocks/server";
import mockRouter from "next-router-mock";

vi.mock("next/router", () => require("next-router-mock"));

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  mockRouter.setCurrentUrl("/");
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

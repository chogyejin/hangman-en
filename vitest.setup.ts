import "vitest-canvas-mock";

import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "@/mocks/server";

beforeAll(() => {
  server.listen();
  vi.mock("next/router", () => require("next-router-mock"));
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

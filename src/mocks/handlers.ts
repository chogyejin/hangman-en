import { delay, http, HttpResponse } from "msw";
import { isValidGameType } from "@/lib/utils/gameType";

export const handlers = [
  http.get("/api/randomword", async ({ request }) => {
    const url = new URL(request.url);
    const gameType = url.searchParams.get("type");

    if (!isValidGameType(gameType)) {
      return new HttpResponse(null, { status: 404 });
    }

    await delay("real");

    return HttpResponse.json({ word: "hello" });
  }),
];

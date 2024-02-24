import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/randomword", ({ request }) => {
    console.log(request.url);
    const url = new URL(request.url);

    const gameType = url.searchParams.get("type");

    if (!gameType) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json({ word: "hello" });
  }),
];

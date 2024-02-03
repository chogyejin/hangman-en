import { range } from "@/lib/utils/range";

// ["A", "B", ... "Z"]
export const ALPAHBET = range("A".charCodeAt(0), "Z".charCodeAt(0)).map((x) =>
  String.fromCharCode(x)
);

// canvas item list
export const DRAW_LIST = [
  null,
  "gallows",
  "head",
  "body",
  "rightHarm",
  "leftHarm",
  "rightLeg",
  "leftLeg",
] as const;

// try count
export const MAX_COUNT = DRAW_LIST.length;

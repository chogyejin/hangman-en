import { range } from "@/lib/utils/range";

// A B C ... Z
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

type ExcludeFirstElement<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...infer U
]
  ? U[number]
  : never;

export type DrawListItem = ExcludeFirstElement<typeof DRAW_LIST>;

// try count
export const MAX_COUNT = DRAW_LIST.length;

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

// 0 1 2 ... (count - 1)
export type Count = IntRange<0, typeof MAX_COUNT>;

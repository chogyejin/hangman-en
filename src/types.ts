import { DRAW_LIST, MAX_COUNT } from "./constants";

type ExcludeFirstElement<T extends readonly unknown[]> = T extends readonly [
  unknown,
  ...infer U
]
  ? U[number]
  : never;

export type DrawListItem = ExcludeFirstElement<typeof DRAW_LIST>;

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

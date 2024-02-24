import { GAME_TYPE_LIST } from "@/constants";

const contains = <T extends string>(
  array: ReadonlyArray<T>,
  value: string
): value is T => {
  return array.some((item) => item === value);
};

export const isValidGameType = (type: string | string[] | undefined | null) => {
  if (!type || Array.isArray(type)) {
    return false;
  }

  if (!contains(GAME_TYPE_LIST, type)) {
    return false;
  }

  return true;
};

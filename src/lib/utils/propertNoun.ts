export const isProperNoun = (word: string) => {
  if (word.charAt(0).match(new RegExp(/^[A-Z]/))) {
    return true;
  }
  return false;
};

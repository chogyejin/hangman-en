export const hasLetter = (word: string, letter: string) => {
  if (word.includes(letter.toLocaleLowerCase())) {
    return true;
  }
  return false;
};

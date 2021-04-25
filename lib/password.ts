export const defaultCharacters =
  "~!@#%^&*_+-=;,./_+|:abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// const allCharacters = "`~!@#$%^&*()_+-=[]\\;',./_+{}|:\"<>?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function generatePassword(length: number, characters: string): string {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(getRandomArbitrary(characters.length));
  }
  return result;
}

function getRandomArbitrary(max: number): number {
  return Math.floor(Math.random() * max);
}

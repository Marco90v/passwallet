import { CHARACTERS_LOWER, CHARACTERS_UPPER, CHARACTERS_NUMBER, CHARACTERS_SYMBOL } from "@utils/const";

export const keyGenerate = (long:number):string => {
  let key = "";
  for (let i = 0; i < long; i++) {
    const randomType = Math.floor(Math.random() * 4);
    // console.log(randomType);
    switch (randomType) {
      case 0:
        key += CHARACTERS_LOWER.charAt(Math.floor(Math.random() * CHARACTERS_LOWER.length));
        break;
      case 1:
        key += CHARACTERS_UPPER.charAt(Math.floor(Math.random() * CHARACTERS_UPPER.length));
        break;
      case 2:
        key += CHARACTERS_NUMBER.charAt(Math.floor(Math.random() * CHARACTERS_NUMBER.length));
        break;
      case 3:
        key += CHARACTERS_SYMBOL.charAt(Math.floor(Math.random() * CHARACTERS_SYMBOL.length));
        break;
    }
  }
  return key;
};

export const capitalize = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
import CryptoJS from "crypto-js";
import { CHARACTERS_LOWER, CHARACTERS_UPPER, CHARACTERS_NUMBER, CHARACTERS_SYMBOL } from "@utils/const";

const keySize = import.meta.env.keySize;
const ivSize = import.meta.env.ivSize;
const iterations = import.meta.env.iterations;

// const keySize = 256;
// const ivSize = 128;
// const iterations = 5000;

// console.log(keySize, ivSize, iterations)

export const keyGenerate = (long?:number):string => {
  let key = "";
  const l = long || Math.floor(Math.random() * 8) + 15;
  for (let i = 0; i < l; i++) {
    const randomType = Math.floor(Math.random() * 4);
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

export const createSalt = (length:number=8) => {
  const salt = CryptoJS.lib.WordArray.random(length).toString();
  return salt;
}

export const encript = (text:string, pass:string, salt:string) => {
  // console.log(text, pass, salt);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize/32,
    iterations: iterations
  });

  const iv = CryptoJS.lib.WordArray.random(ivSize/8);
  // return CryptoJS.AES.encrypt(text, key, secret).toString();
  // const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

  const encrypted = CryptoJS.AES.encrypt(text, key, { 
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
    hasher: CryptoJS.algo.SHA256
  });
  const hmac = CryptoJS.HmacSHA256(encrypted.toString(), key); // Generar HMAC

  return encrypted.toString() + ":" + iv.toString(CryptoJS.enc.Hex) + ":" + hmac.toString();
};

export const decrypt = (encrypted:string, pass:string, salt:string) => {
  // const [encryptedText,ivHex, hmacHex] = encrypted.split(":");
  const parts = encrypted.split(":");
  if (parts.length !== 3) {
    throw new Error("El formato de los datos cifrados es inválido.");
  }
  const [encryptedText,ivHex, hmacHex] = parts;
  const iv = CryptoJS.enc.Hex.parse(ivHex);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize/32,
    iterations: iterations
  });

  const hmac = CryptoJS.HmacSHA256(encryptedText, key);
  if (hmac.toString() !== hmacHex) {
    throw new Error("Los datos cifrados han sido manipulados o están corruptos.");
  }

  // const iv = CryptoJS.lib.WordArray.random(ivSize/8);
  // return CryptoJS.AES.encrypt(text, key, secret).toString();
  // const iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

  const decrypted = CryptoJS.AES.decrypt(encryptedText, key, { 
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
    hasher: CryptoJS.algo.SHA256
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
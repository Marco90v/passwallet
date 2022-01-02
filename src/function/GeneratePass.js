const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSYUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]_{}";

const randon = () => Math.round(Math.random() * ((caracteres.length-1) - 0) + 0);

const GeneratePass = () => {
  let p = "";
  for (let index = 0; index < 12; index++) p = p + caracteres[randon()];
  return p;
}

export {GeneratePass};
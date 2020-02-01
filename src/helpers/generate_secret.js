const crypto = require('crypto');

const secretKeyCallback = (err, buffer) => {
  const token = buffer.toString('hex');
  console.log(token);
};

const generateSecretKey = () => {
  return crypto.randomBytes(128, (err, buffer) => secretKeyCallback(err, buffer));
};

/*
CLIENTS
e58361c9cb64f2b7022a8984da04db0f0a44682689affb953b64d2db4daeaa12474ac015cf47f32e028f512ff4973a91a07726f6e8300cd0761a5a426233d17d423a47beeaf37181fc2dca63c3f786f30a69777e167606223c53c0740158e73b7f60ffeb536a68030540ba35b06a58bcf765cdbf8bc89167954dadf6cbb729a
2be71286078d5cbe8bd7dd5cde238564903c2c7ad7b0b4f2513b9f1b90e9ac4aa781851648314431ea5d55609178a98afd371bd889019549bcc4e1f47b6daa99fff30bb6a9ee5f581f06714998fae97d2dca6310e899f8414c02170edd60db8c7db8d286cc11fecac9b39e826570abfdb2babfb834b756caed9018761b8198c8
c254a5edd20045f08c64a11ba0d50163750353f04baaedcfb92e110374155a0ba22145266d15e513504718b1a21b59820d1af312e7b9c67bfc686c7336d65484a38e8dbfb45b5a16131c2aedb51cd92ac6ef735f567d930e459bc777123d7289e804050b63fb5492e4498cd80015e419b8c968c2dcd1e86652f266d376d603e9
709955bbe95ffe974a4fdddebfdfc6b123739b0e6291db94f35a6d3ad84a5430e68a4f3f86263c9b4c08585fbc40eb5a34812f5a7dfa41ef7a132eae1fd7303408e1cfbcf5a92c353881eaebef69ff1be89bac1df6d8aa8f40d1efba313aa60d4087556acfe639209f8678bc66c2959a0c9d817681a1e0df528107227497b4eb
3f3cd7fb7276ecb480319f26d7940af23745d32952e144b8a30b9794c911225d64218df7146989775f62e8468a71a972428a2be71a91e2f30c05318248f47f64486ba5fac375a9049dcf41fd26bf2de911171da87383611f11a5442d0ec926fb806e5999a260daaf1ad19232be2eea9707e51fba05033edc01da8c480edbc74a
*/

const API_KEY = Buffer.from(
  '6a598d35b9cecb046c579ea1c60a0eb966389acc0b73405f9234cb0cb313b89a7da4fb214b47f980e784d69369e03236ce26a3b4fb246a1ddec80a43d68edb4d089809661d1f8132d061388b1567588437f5fe32742a22e0d9a80f491f52cb45f4bef0b974bfd8c912e0ba59df6b08541f0e25c67cd34384c5c422ef8d93bc20'
).toString('base64');
const CLIENT_KEY = Buffer.from(
  '3f3cd7fb7276ecb480319f26d7940af23745d32952e144b8a30b9794c911225d64218df7146989775f62e8468a71a972428a2be71a91e2f30c05318248f47f64486ba5fac375a9049dcf41fd26bf2de911171da87383611f11a5442d0ec926fb806e5999a260daaf1ad19232be2eea9707e51fba05033edc01da8c480edbc74a'
).toString('base64');

const generateHASH = () => {
  return Buffer.from(
    crypto
      .createHmac('sha256', CLIENT_KEY)
      .update(API_KEY)
      .digest('hex')
  ).toString('base64');
};

const init = () => {
  const algorithm = process.argv[2];
  if (algorithm === 'hash') {
    let value = generateHASH();
    console.log(value);
  } else if (algorithm === 'secretKey') {
    generateSecretKey();
  } else {
    console.log('Provide an algorithm to execute.');
  }
};

init();

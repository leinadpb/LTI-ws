const crypto = require('crypto');
const fs = require('fs');

/* Generate private and public keys

Private: openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -pkeyopt rsa_keygen_pubexp:3 -out privateKey.pem
Public from private: openssl pkey -in privateKey.pem -out publicKey.pem -pubout

**/

const init = () => {
  try {
    // See keys/README.md on how to generate this key
    const private_key = fs.readFileSync('src/helpers/privateKey.pem', 'utf-8');

    // to be signed
    const clientKey = 'e58361c9cb64f2b7022a8984da04db0f0a44682689affb953b64d2db4daeaa12474ac015cf47f32e028f512ff4973a91a07726f6e8300cd0761a5a426233d17d423a47beeaf37181fc2dca63c3f786f30a69777e167606223c53c0740158e73b7f60ffeb536a68030540ba35b06a58bcf765cdbf8bc89167954dadf6cbb729a'.toString(
      'base64'
    );

    // Signing
    const signer = crypto.createSign('RSA-SHA256');
    signer.write(clientKey);
    signer.end();

    // Returns the signature in output_format which can be 'binary', 'hex' or 'base64'
    const signature = signer.sign(private_key, 'base64');

    console.log('Digital Signature: ', signature);

    // Write signature to the file `signature.txt`
    console.log(signature);
    fs.writeFileSync('src/helpers/signature.txt', signature);
  } catch (e) {
    console.log('Error generating signature: ', e.message);
  }
};

const verify = clientKey => {
  try {
    // See keys/README.md on how to generate this key
    const public_key = fs.readFileSync('src/helpers/publicKey.pem', 'utf-8');

    // Signature from sign.js
    const signature = fs.readFileSync('src/helpers/signature.txt', 'utf-8');

    // Signing
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.write(clientKey);
    verifier.end();

    // Verify file signature ( support formats 'binary', 'hex' or 'base64')
    const result = verifier.verify(public_key, signature, 'base64');

    return result;
  } catch (e) {
    console.log('Error verifying signature: ', e.message);
  }
};

module.exports = {
  verify
};

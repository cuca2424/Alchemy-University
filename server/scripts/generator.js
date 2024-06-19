const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { toHex } = require("ethereum-cryptography/utils.js");

const privateKey = secp256k1.utils.randomPrivateKey()
const publicKey = secp256k1.getPublicKey(privateKey)
const address = `0x${(toHex(publicKey)).slice(-20)}`

console.log("Private Key: " + toHex(privateKey))
console.log("Public Key: " + toHex(publicKey))
console.log("Address: " + address)



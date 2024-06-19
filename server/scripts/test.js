const { secp256k1 } = require("ethereum-cryptography/secp256k1.js");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils.js");
const { sha256 } = require("ethereum-cryptography/sha256.js")

const privateKey = secp256k1.utils.randomPrivateKey()
const publicKey = secp256k1.getPublicKey(privateKey)
const address = `0x${(toHex(publicKey)).slice(-20)}`

console.log("Private Key: " + privateKey)
console.log("Public Key: " + publicKey)
console.log("Address: " + address)

const message = toHex(sha256(utf8ToBytes("gabriel é lindo")));
const signature = secp256k1.sign(message, toHex(privateKey))
console.log(signature)

function signMessage(privateKey) {
    const message = toHex(sha256(utf8ToBytes("gabriel é lindo")));
    return secp256k1.sign(message, privateKey);
}

console.log(signMessage(privateKey))



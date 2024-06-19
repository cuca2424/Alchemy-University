import { secp256k1 } from 'ethereum-cryptography/secp256k1';
import { toHex, utf8ToBytes } from 'ethereum-cryptography/utils';
import { sha256 } from 'ethereum-cryptography/sha256';

export function verifySignature(signature, publicKey) {
    const message = toHex(sha256(utf8ToBytes("gabriel é lindo")))
    return secp256k1.verify(signature, message, publicKey)
}
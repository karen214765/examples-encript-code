// Karen Villa
// Jose Luis Rios

const NodeRSA = require('node-rsa')
const crypto = require('crypto')
const algorithm = 'aes-256-cbc'
const key = new NodeRSA({b: 512})

// Implementacion del algoritmo RSA.
const text = 'Implementando el algoritmo rsa!'

const encrypted = key.encrypt(text, 'base64')
console.log('encrypted with node-rsa: ', encrypted)
const decrypted = key.decrypt(encrypted, 'utf8')
console.log('decrypted with node-rsa: ', decrypted)

// Implementacion del algoritmo AES.
let password = "C1rcu70523#"
let message = "There is no problem so bad, that you can't make it worse."

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, password)
    let crypted = cipher.update(text, "utf8", "hex")

    crypted += cipher.final("hex")

    console.log("Mensaje encriptado aes: ", crypted)

    return crypted
}

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, password)
    let dec = decipher.update(text, "hex", "utf8")

    dec += decipher.final("utf8")

    return dec
}

let messageEnc = encrypt(message)

console.log("Mensaje desencriptado aes: ", decrypt(messageEnc))

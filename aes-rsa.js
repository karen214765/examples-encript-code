const crypto = require('crypto')
const algorithm = 'aes-256-cbc'

let password = "C1rcu70523#"
let message = "There is no problem so bad, that you can't make it worse."

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, password)
    let crypted = cipher.update(text, "utf8", "hex")

    crypted += cipher.final("hex")

    console.log("Mensaje encriptado: ", crypted)

    return crypted
}

function decrypt(text) {
    let decipher = crypto.createDecipher(algorithm, password)
    let dec = decipher.update(text, "hex", "utf8")
    
    dec += decipher.final("utf8")

    return dec
}

let messageEnc = encrypt(message)

console.log("Mensaje desencriptado: ", decrypt(messageEnc))
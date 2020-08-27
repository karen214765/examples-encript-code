const NodeRSA = require('node-rsa');
const key = new NodeRSA({b: 512});

const text = 'Implementando el algoritmo rsa!';

const encrypted = key.encrypt(text, 'base64');
console.log('encrypted with node-rsa: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted with node-rsa: ', decrypted);

const Blockchain = require ('./blockchain.js');
const bitcoin = new Blockchain;

bitcoin.createNewBlock(1, 'nonsencehashes', 'newhash');
bitcoin.createNewTransaction(200, 'Santiagoaddress', 'Amaliaaddress');
bitcoin.createNewBlock(123123, 'testesetes', '09das0f');
bitcoin.createNewTransaction(5000, 'Santiagoaddress', 'Amaliaaddress');
bitcoin.createNewTransaction(20, 'Santiagoaddress', 'Amaliaaddress');
bitcoin.createNewTransaction(412, 'Santiagoaddress', 'Amaliaaddress');

console.log(bitcoin);
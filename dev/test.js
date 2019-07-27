const Blockchain = require ('./blockchain.js');
const bitcoin = new Blockchain;


const previusBlockHash = 'nfaobfasobfasbfiasjbfs';
const currentBlockData = [
    {
        amount: 10,
        sender: 'Santiagoaddres',
        recipient: 'Amaliaaddress'
    },{
        amount: 324,
        sender: 'fasdgffr55tt',
        recipient: 'cw553g6544v4'
    },{
        amount: 675,
        sender: 'v45v54byvrhnr',
        recipient: 'Amaliaa8f879ds6faddress'
    },
];
console.log(bitcoin.hashBlock(previusBlockHash, currentBlockData, 118731 ))


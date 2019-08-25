const Blockchain = require ('./blockchain.js');
const bitcoin = new Blockchain();




const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1566731906812,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1566731957903,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1566732430592,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "9917165a28404e0cbf2048fe04119e52",
    "transactionId": "4b9e7c57c70a4a899b29e716ad25362f"
    },
    {
    "amount": 10,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "38aaafe98e814b29b2ec0f74cc5ab29f"
    },
    {
    "amount": 123,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "38915e281ca14bc7a900471a993700b7"
    },
    {
    "amount": 34,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "837c3f3c8395403ab50848f945e1f774"
    }
    ],
    "nonce": 18424,
    "hash": "0000f2b58ba4442cf2e6ded5608edb59292716da222f405b9dfa799ae7f3d29c",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1566732467346,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "9917165a28404e0cbf2048fe04119e52",
    "transactionId": "55495454ebf948c886653d950f9e01ab"
    },
    {
    "amount": 154,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "af0491db4eff4ece993eda594c6d10d4"
    },
    {
    "amount": 65,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "0d57de1c685a4ad0abd8e9d711b18c3d"
    },
    {
    "amount": 76,
    "sender": "G98FA7DTSVDSV9",
    "recipient": "7FGY09SDFY0S9DFY",
    "transactionId": "a96f0837db8e46a8aa6011c25046fd54"
    }
    ],
    "nonce": 2526,
    "hash": "0000fe00ccf3d89b603324771ed76a73ec7a39e7925a74997a2de94ff3f39445",
    "previousBlockHash": "0000f2b58ba4442cf2e6ded5608edb59292716da222f405b9dfa799ae7f3d29c"
    },
    {
    "index": 5,
    "timestamp": 1566732482139,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "9917165a28404e0cbf2048fe04119e52",
    "transactionId": "b51e63b156fa41cd82f8355e2f73157c"
    }
    ],
    "nonce": 29957,
    "hash": "0000fbcff97469d7667b0fd18b63b3c701e3c1f594100301a0dfa63901e0ed27",
    "previousBlockHash": "0000fe00ccf3d89b603324771ed76a73ec7a39e7925a74997a2de94ff3f39445"
    },
    {
    "index": 6,
    "timestamp": 1566732484174,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "9917165a28404e0cbf2048fe04119e52",
    "transactionId": "923bc0ee783a4bc9959b474a71fb4a6e"
    }
    ],
    "nonce": 187498,
    "hash": "0000299b60e5c96176d2b0b74c4e0c985bf00e096770c25d4ddd449757add251",
    "previousBlockHash": "0000fbcff97469d7667b0fd18b63b3c701e3c1f594100301a0dfa63901e0ed27"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "9917165a28404e0cbf2048fe04119e52",
    "transactionId": "216b42557396424bbffd6509ef9dca62"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }
console.log('VALID: ', bitcoin.chainIsValid(bc1.chain))
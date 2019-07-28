const express = require ('express');
const app = express();
const Blockchain = require('./blockchain.js');
const bodyParser = require ('body-parser');
const uuid = require ('uuid');
const port = process.argv[2];
const rp = require ('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function(req, res){
    res.send(bitcoin);
});
app.post('/transaction', function(req, res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note: `Transaction will be added in block ${blockIndex}.`});
});
app.get('/mine', function(req, res){

    const lastBlock = bitcoin.getLastBlock();
    const previusBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    }
    const nonce = bitcoin.proofOfWork(previusBlockHash, currentBlockData);
    const blockHash = bitcoin.hashBlock(previusBlockHash, currentBlockData, nonce);
    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    const newBlock = bitcoin.createNewBlock(nonce, previusBlockHash, blockHash);
    res.json({
        note: "new block mined successfully",
        block: newBlock
    });
});
app.post('/register-and-broadcast-node', function(req, res){
    const newNodeUrl = req.body.newNodeUrl;
    if(bitcoin.networkNodes.indexOf(newNodeUrl) == -1 )bitcoin.networkNodes.push(newNodeUrl);
    const regNodesPromises = [];
    bitcoin.networkNodes.forEach(networkNodeUrl =>{
        const requestOptions =  {
            uri: networkNodeUrl + '/register-node',
            method: 'POST',
            body: { newNodeUrl },
            json: true
        };
        regNodesPromises.push(rp(requestOptions));
        
    })
    Promise.all(regNodesPromises)
    .then(data=>{
        const bulkRegisterOptions = {
            uri: newNodeUrl + '/register-nodes-bulk',
            method: 'POST',
            body: { allNetworkNodes: [...bitcoin.networkNodes, bitcoin.currentNodeUrl]},
            json: true
        };
        return rp(bulkRegisterOptions)
    })
    .then(data => {
        res.json( { note: 'New node register with network successfully'});
    });
});
app.post('register-node', function(req, res){

});
app.post('/register-nodes-bulk', function(req, res){

});




app.listen(port, function(){
    console.log(`Server listening on port: ${port}`);
});
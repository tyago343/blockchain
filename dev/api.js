const express = require ('express');
const app = express();
const blockchain = require('./blockchain.js');
const bodyParser = require ('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function(req, res){
    res.send('blockchain')
});
app.post('/transaction', function(req, res){
    res.send(req.body)
});
app.get('/mine', function(req, res){
    res.send('mine');
});





app.listen(8080, function(){
    console.log('Server listening on port: 8080')
});
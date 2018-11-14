


var jayson = require('jayson');
var client = jayson.client.http('http://147.46.240.248:40001');

for(var i = 0; i < 10; i++){
   request_eth_sendTX(client)
}

function request_eth_sendTX(client){
    client.request('eth_sendTransaction', [{
        "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "gas": "0x76c0", // 30400
        "gasPrice": "0x9184e72a000", // 10000000000000
        "value": "0x9184e72a", // 2441406250
        "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
    }],
        function (err, response) {
            if (err) {
                console.log('putData - request is error', err)

            }
            else {
                if (response.result == null) {
                    console.log('putData - transaction is rejected', response)
                }
            }
        }
    )
}

//curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'


/* const options = {
    method: 'POST',
    url: 'http://147.46.240.248:40001',
    body: {"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{ "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
    "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    "gas": "0x76c0", // 30400
    "gasPrice": "0x9184e72a000", // 10000000000000
    "value": "0x9184e72a", // 2441406250
    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}
    json: true  // JSON stringifies the body automatically
  }
  
  request(options)
    .then(function (response) {
        console.log(response.result);
    })
    .catch(function (err) {
        console.log(err.result);
    }) */
/* function test(){
    $.ajax({
        method: "POST",
        url: "http://147.46.240.248:40001",
        data: {"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{ "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
        "gas": "0x76c0", // 30400
        "gasPrice": "0x9184e72a000", // 10000000000000
        "value": "0x9184e72a", // 2441406250
        "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],"id":1}
        })
        .done(function( msg ) {
        alert( "Data Saved: " + msg );
        });
    }
    test(); */
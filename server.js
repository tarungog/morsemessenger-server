var Pusher = require('pusher');
var readline = require('readline');

var pusher = new Pusher({
  appId: '311977',
  key: '7d21169e336fb7244895',
  secret: '7357f1380b714288bb23',
  encrypted: true
});

pusher.trigger('test_channel', 'message_event', {
  "message": "what up homeslice"
});

app.post('/messages', function(req, res){
  var message = req.body;
  console.log("Message Received:" + message);
  pusher.trigger('messages', 'new_message', message);
  res.json({success: 200});
});

function send_message_test(test_message) {
    pusher.trigger('test_channel', 'message_event', {
        "message": test_message
    });
}

var rl = readline.createInterface(process.stdin, process.stdout);
console.log("type exit to quit");
rl.setPrompt('Send a message> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "exit") rl.close();
    send_message_test(line);
    rl.prompt();
}).on('close',function(){
    console.log('l8r');
    process.exit(0);
});



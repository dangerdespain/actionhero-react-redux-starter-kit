const ActionheroClient = require('../redux/utils/ahClient.js')
const client = new ActionheroClient({ url : 'http://localhost:8080' })

client.on('connected',    function(){ console.log('ws-connected!') })
client.on('disconnected', function(){ console.log('ws-disconnected :(') })

client.on('error',        function(err){ console.log('ws-error', err.stack) })
client.on('reconnect',    function(){ console.log('ws-reconnect') })
client.on('reconnecting', function(){ console.log('ws-reconnecting') })

client.on('alert',        function(message){ alert(message) })
client.on('api',          function(message){ alert(message) })

client.on('welcome',      function(message){ console.log('ws-welcome', message); })
// client.on('say',          function(message){ console.log('ws-say', message); })

client.connect(function(err, details){
  if(err != null){
    console.log(err);
  }else{
    client.roomAdd("defaultRoom");
  }
});


export default function getClient (opts) {
  return client
}
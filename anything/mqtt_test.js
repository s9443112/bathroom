

var mqtt = require('mqtt');
var AsyncConsole = require('asyncconsole');

var client  = mqtt.connect('mqtt://140.125.33.105')


 
client.on('connect', function () {
  client.subscribe('c8764');
  client.publish('c8764', 'Hello mqtt');
})
 

var input = new AsyncConsole('> ',function(command) {
    client.publish('c8764', command);
})

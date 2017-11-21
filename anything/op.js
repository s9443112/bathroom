var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://139.162.72.78');
 

  client.subscribe('c876333');
  //client.publish('c876334', 'Hello mqtt')

 
client.on('message', function (topic, message) {
  // message is Buffer
  
  if(typeof message.toString() == 'object'){
    console.log(message.toString());
    x = JSON.parse(message.toString());
    if(x.topic=='ES001-1'){
      client.publish('c876333', 'w');
    }
  }
 
  

  
  if(message.toString()=='w'){
    console.log("w");
  }
  
})
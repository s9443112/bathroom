var mqtt = require('mqtt');


var config = {
    port: 1883,
    clientId: 'nodejs'
};



var client = mqtt.connect('mqtt://140.125.33.105', config);


client.on('connect', function () {
    console.log("連上去了");
    client.subscribe('bathroom');
    //client.publish('bathroom', '4567777777');
});

client.on('message', function (topic, message) {
    // message is Buffer 
    console.log(message.toString());
    x= JSON.parse(message.toString());
    console.log(x.topic);
});


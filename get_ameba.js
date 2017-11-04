var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://140.125.33.105');

const mqtt_topic = 'c8765'

client.on('connect', function () {
    for (i = 0; i < 5; i++) {
        client.subscribe(mqtt_topic);
        //client.publish(mqtt_topic, 'W')
    }
});
client.on('message', function (topic, message) {

    console.log(topic + " : " + message.toString());
    var information_8051 = {
        'topic': topic,
        'message': message
    }
    event.emit('8051_checkout', information_8051);
    setTimeout(function(){
        console.log("bye");
        client.end();
    },1500);

});
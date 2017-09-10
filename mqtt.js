var mqtt = require('mqtt');

var config = {
    port: 1883,
    clientId: 'nodejs'
};


var client = mqtt.connect('mqtt://140.125.33.105', config);


var linebotpush = '幹你媽拉';
_push_mqtt(linebotpush);

client.on('connect', function () {
    console.log("連上去了");
    client.subscribe('c8764');
    client.publish('c8764', '4567777777');
});

client.on('message', function (topic, message) {
    // message is Buffer 
    console.log(message.toString());
    //client.end()
});

function _push_mqtt(linebotpush) {
    client.on('connect', function () {
        console.log('c8764進來了');
        client.publish('c8764', linebotpush);
    });
}
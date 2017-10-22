var fs = require("fs");

module.exports = {

    'SSLoptions': {
        'key': fs.readFileSync('./ssl_config/private.pem'),
        'cert': fs.readFileSync('./ssl_config/certificate.pem')
    }
}

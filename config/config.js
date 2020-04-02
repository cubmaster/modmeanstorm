var path = require('path');
var rootPath = path.normalize(__dirname + '/views');
var pjson = require('../package.json');
var pname = pjson.name;
module.exports = {
    development: {
        db: process.env.MONGODB  || "mongodb://localhost:27017/"+ pname.toLowerCase(),
        rootPath: rootPath,
        SSL: false,
        port: process.env.PORT || 3000,
        privateKey: "ImmaPrivateKey",
        Auth:'Forms'

    },
    production: {
        rootPath: rootPath,
        SSL: process.env.PORT || false,
        db: process.env.MONGODB ,
        port: process.env.PORT || 80,
        privateKey: process.env.PRIVATEKEY || 'Forms',
        Auth: process.env.AUTH || 'Forms',
    }
};

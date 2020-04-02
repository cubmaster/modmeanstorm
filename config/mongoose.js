
const mods = require('./models.js');
const dataInit = require('./dataInit.js');
const mongoose = require('mongoose');


module.exports = function (app,config) {
    console.info("Connected to " + config.db);
    mongoose.connect(config.db, {
        promiseLibrary: require('bluebird'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() =>  console.log('connection successful'))
      .catch((err) => console.error(err));

    mods.initialize();

    dataInit.initialize();

}
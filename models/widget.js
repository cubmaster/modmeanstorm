

var mongoose = require('mongoose');


module.exports =function() {

    let widget = mongoose.Schema({
        name: String,
        color: String,
    });
    mongoose.model('widget', widget);

}
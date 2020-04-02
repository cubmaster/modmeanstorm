

var mongoose = require('mongoose');


module.exports =function() {

    var MenuItems = mongoose.Schema({
        text: String,
        icon: String,
        path:String,
        role: String,
        group: []
    });
    mongoose.model('menuItems', MenuItems);
    var Menus = mongoose.Schema({
        name: String,
        menuItems:[MenuItems]
    });



    mongoose.model('menus', Menus);
}
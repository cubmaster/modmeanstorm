var fs = require('fs'),
    path = require('path');

exports.initialize = function() {

    var modelsPath = path.join(__dirname, '../models');
    var models = [];
   fs.readdirSync(modelsPath).forEach(function (file) {

       models.push('../models/' + file);
    });


        var l = models.length;
        for (var i = 0; i < l; i++) {

            require(models[i])();
        }


};
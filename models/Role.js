/**
 * Created by wmcclellan on 4/2/2015.
 */

let mongoose = require('mongoose');

module.exports = function() {

    let role = mongoose.Schema({
        Right: {type: String, enum: ['Read.', 'Write', 'Edit', 'Submit']},
        Name: String
    });

    mongoose.model('role', role);

};

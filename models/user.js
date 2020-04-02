var mongoose = require('mongoose');

var encrypt = require('../utilities/encryption');


module.exports =function() {

    var userSchema = mongoose.Schema({
        email: {type: String},
        firstName: {type: String},
        lastName: {type: String},
        username: {
            type: String,
            required: '{PATH} is required!',
            unique: true
        },
        salt: {type: String},
        password: {type: String},
        roles: [{type:String}],
        auth: { type : mongoose.Schema.Types.Mixed},
        profileImage:  {
            fieldname:String,
            originalname: String,
            encoding: String,
            mimetype:String,
            buffer:String,
            size: Number

        }
    });

    userSchema.methods = {
        authenticate: function (passwordToMatch,cb) {


            return cb(null,encrypt.hashPwd(this.salt, passwordToMatch) === this.password);
        },
        hasRole: function (role) {
            return this.roles.indexOf(role) > -1;
        }

    };


    mongoose.model('User', userSchema);

}

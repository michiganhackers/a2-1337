var mongoose    = require('mongoose');

var jsonSchema = {

    email: String,
    name: String,
    major: String,
    year: String,
    github: String,
    personalSite: String

}

var userSchema = mongoose.Schema(jsonSchema);

userSchema.methods.getSchema = function() {
    var keys = [];
    for (key in jsonSchema) {
        keys.push(key);
    }
    return keys;
}

module.exports = mongoose.model('User', userSchema);
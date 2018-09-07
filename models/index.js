var mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = {
    Headline: require("./Headline"),
    Note: require("./Note")
}
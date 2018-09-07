var mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = {
    Headline: require("./models/Headline"),
    Note: require("./Note")
}
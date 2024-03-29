const dbConfig = require("../config/config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.Ecommerce = require("./ecommerce.model.js")(mongoose);
db.Users = require ("./users.model.js")(mongoose);
module.exports = db;
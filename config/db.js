const mongoose = require("mongoose");

const url ="mongodb://127.0.0.1:27017/backData"
const connection = mongoose.connect(url);

module.exports = connection;
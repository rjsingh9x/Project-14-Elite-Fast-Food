const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    pname : {
        type : String,
        required: true
    },
    quantity : String
   
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
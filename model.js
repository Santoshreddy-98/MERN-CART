const mongoose  = require('mongoose');

const Product = mongoose.Schema({ 
product : {
    type :  String,
    required : true
},
data : {

    type: Date,
    default: Date.now
}

})

 module.exports = mongoose.model('product',Product)
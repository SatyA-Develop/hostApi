const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    category:  {
        type: String,
    },
    image: {
        type: String
    },
    links:{
        type: Array
     }
})

module.exports = mongoose.model("Product", productSchema);
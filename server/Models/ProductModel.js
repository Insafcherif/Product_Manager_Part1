const mongoose = require ('mongoose')

const ProductSchema = new mongoose.Schema ({
    Title : {
        type : String, 
        required :[true, "{PATH} must be present"],
        minilength: [3, "{PATH} must be at least 3 characters"]
    },
    Price : {
        type : Number, 
        required :[true, "{PATH} must be present"],

    }, 
    Description : {
        type: String, 
        required :[true, "{PATH} must be present"],
        minilength: [5, "{PATH} must be at least 5 characters"]

    }, 

}, {timestamps:true}) 

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product
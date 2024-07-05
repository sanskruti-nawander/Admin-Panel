const mongoose=require('mongoose')

const productSchema=mongoose.Schema(
    {
        id:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:[true, "Please enter a product title"]
        },
        description:{
            type:String,
            required:[true, "Please enter a product description"]
            
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },

    },
    {
        timestamps:true
    }
)

const Product=mongoose.model('Product',productSchema);
module.exports=Product;
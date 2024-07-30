const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    catId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categoryTbl"

    },
    subCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCatTbl"
    },
    extCatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"extCatTbl"
    }
})

const productModel=mongoose.model('productTbl',productSchema)

module.exports=productModel
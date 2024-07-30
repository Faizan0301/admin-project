const mongoose=require('mongoose');

const subCatSchema=new mongoose.Schema({
    name:String,
    extCatId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"extCatTbl"
    }]
})

const subCatModel=mongoose.model('subCatTbl',subCatSchema)

module.exports=subCatModel
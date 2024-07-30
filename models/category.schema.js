const mongoose=require('mongoose');

const catSchema=new mongoose.Schema({
    name:String,
    subCatId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subCatTbl"
    }]
})

const catModel=mongoose.model('categoryTbl',catSchema)

module.exports=catModel
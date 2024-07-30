const extCatModel = require("../models/extcat.schema")
const subCatModel = require("../models/subCat.schema")

const extCatPage = async(req, res) => {
    let subCats=await subCatModel.find({});
    return res.render('pages/addExtCategory',{subCats})
}
const addExtCat = async (req, res) => {
    let {name,subCatId}=req.body;
    try {
        await extCatModel.create(req.body);
        let subCat=await subCatModel.findById(subCatId);
        let extCat=await extCatModel.findOne({name:name});
        subCat.extCatId.push(extCat._id);
        await subCat.save();
        res.redirect('back')
    } catch (error) {
        res.send(error.message)
    }
}

const viewExtCat=async(req,res)=>{
    try {
        let extCat = await extCatModel.find({});
        return res.render('pages/viewExtCategory',{extCat})
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {extCatPage,addExtCat,viewExtCat}
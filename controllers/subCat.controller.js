const catModel = require("../models/category.schema")
const subCatModel = require("../models/subCat.schema")

const subCatPage = async (req, res) => {
    let cats = await catModel.find({})
    return res.render('pages/addSubCategory', { cats })
}
const addSubCat = async (req, res) => {
    let { name, catId } = req.body;
    try {
        await subCatModel.create(req.body);
        let cat = await catModel.findById(catId);
        let subCat = await subCatModel.findOne({ name: name })
        cat.subCatId.push(subCat._id);
        await cat.save();
        res.redirect('back')
    } catch (error) {
        res.send(error.message)
    }
}

const viewSubCat = async (req, res) => {
    try {
        let subCat = await subCatModel.find({}).populate('extCatId');
        // return res.render('pages/viewSubCategory', { subCat })
        return res.send(subCat)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = { subCatPage, addSubCat, viewSubCat }
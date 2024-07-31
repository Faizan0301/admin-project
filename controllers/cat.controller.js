const catModel = require("../models/category.schema")

const catPage = (req, res) => {
    try {
        return res.render('pages/addCategory')
    } catch (error) {

    }
}
const addCat = async (req, res) => {
    try {
        await catModel.create(req.body)
        res.redirect('back')
    } catch (error) {
        res.send(error.message)
    }
}

const viewCat = async (req, res) => {
    try {
        let category = await catModel.find({}).populate({
            path: 'subCatId',
            populate: {
                path: 'extCatId',
            }
        });
        return res.render('pages/viewCategory',{category})
        // return res.json(category);
    } catch (error) {
        res.send(error.message)
    }
}
const getCat = async (req, res) => {
    try {
        const data = await catModel.find({}).populate({
            path: 'subCatId',
            populate: {
                path: 'extCatId'
            }
        });
        return res.json(data);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { catPage, addCat, viewCat, getCat }
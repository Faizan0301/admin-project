const catModel = require("../models/category.schema")
const extCatModel = require("../models/extcat.schema")
const productModel = require("../models/prodect.schema")
const subCatModel = require("../models/subCat.schema")

const addProduct = async (req, res) => {
    try {
        await productModel.create({ ...req.body, image: req.file.path })
        return res.redirect('back')
    } catch (error) {
        return res.send(error.message)
    }
}

const productPage = async (req, res) => {
    let cats = await catModel.find({}).populate({
        path: 'subCatId',
        populate: {
            path: 'extCatId'
        }
    });
    
    return res.render('pages/addProduct', { cats })
}
const viewProduct = async (req, res) => {
    try {
        let products = await productModel.find({}).populate({
            path: 'catId',
            name:String
        }).populate({
            path: 'subCatId',
            name:String
        }).populate({
            path: 'extCatId',
            name:String
        });

        return res.render('pages/viewProduct',{
            products
        });
        // return res.json(products)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = { addProduct, productPage, viewProduct }
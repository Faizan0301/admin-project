const catModel = require("../models/category.schema")
const productModel = require("../models/prodect.schema")
const fs = require('fs');

const addProduct = async (req, res) => {
    let {title,description,price,image,catId,subCatId,extCatId,id}=req.body
    if (req.body.id) {
        if (req.file) {
            let image = req.file.path
            try {
                const data = await productModel.findByIdAndUpdate(id, { title,description,price,image,catId,subCatId,extCatId })
                let oldImg = data.image
                fs.unlinkSync(oldImg)
                req.flash('info', 'update')
                return res.redirect('/product/view')
            } catch (error) {
                return res.send(error.message)
            }

        } else {
            try {
                await productModel.findByIdAndUpdate(id, {title,description,price,image,catId,subCatId,extCatId})
                req.flash('info', 'update')
                return res.redirect('/product/view')
            } catch (error) {
                return res.send(error.message)
            }
        }
    }else{
        let image = req.file.path
        try {
            await productModel.create({ title,description,price,image,catId,subCatId,extCatId })
            req.flash('info', 'add')
            return res.redirect('/product/view')
        } catch (error) {
            return res.send(error.message)
        }
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
            name: String
        }).populate({
            path: 'subCatId',
            name: String
        }).populate({
            path: 'extCatId',
            name: String
        });
        return res.render('pages/viewProduct', {
            products, info: req.flash('info')
        });
        // return res.json(products)
    } catch (error) {
        res.send(error.message)
    }
}
const editPage = async (req, res) => {
    try {
        let product = await productModel.findById(req.params.id).populate({
            path: 'catId',
            name: String
        }).populate({
            path: 'subCatId',
            name: String
        }).populate({
            path: 'extCatId',
            name: String
        });
        let cats = await catModel.find({});
        return res.render('pages/editPage', { product,cats, info: req.flash('info') })
    } catch (error) {
        res.send(error.message)
    }
}
const prodectDelete = async (req, res) => {
    let { id } = req.params;
    try {
        let data = await productModel.findByIdAndDelete(id);
        fs.unlinkSync(data.image)
        req.flash('info', 'delete')
        return res.redirect('back')
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = { addProduct, productPage, viewProduct, prodectDelete,editPage }
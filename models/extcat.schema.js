const mongoose = require('mongoose');

const extCatSchema = new mongoose.Schema({
    name: String
})

const extCatModel = mongoose.model('extCatTbl', extCatSchema)

module.exports = extCatModel
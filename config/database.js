const mongooase = require('mongoose')

require('dotenv').config();

const URL = process.env.DB_URL

console.log(URL);

const db = async () => {
    await mongooase.connect(URL)
    console.log("Database connected...");
}

module.exports=db
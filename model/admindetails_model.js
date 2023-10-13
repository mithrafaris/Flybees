const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email:String,
    password:String
})
const Admin = db.model('Admin',adminSchema)
module.exports = Admin
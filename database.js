const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("Posteos","root","",{
    host: "localhost",
    dialect: "mysql"
})
module.exports = { sequelize }
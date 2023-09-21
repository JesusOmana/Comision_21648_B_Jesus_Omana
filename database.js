const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("posteos_jesus","root","",{
    host: "localhost",
    dialect: "mysql",
})
module.exports = { sequelize }
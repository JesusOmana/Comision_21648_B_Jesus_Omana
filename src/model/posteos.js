const { sequelize } = require("../../database")
const { DataTypes } = require("sequelize");


const NoteModel = sequelize.define("posteos_jesus", {
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    url: DataTypes.TEXT,
});

module.exports = { NoteModel }
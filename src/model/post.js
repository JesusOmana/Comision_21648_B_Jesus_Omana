const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database")

const NoteModel = sequelize.define("notas", {
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    url: DataTypes.TEXT,
});

module.exports = { NoteModel }
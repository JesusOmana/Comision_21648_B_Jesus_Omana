const express= require("express")
const morgan= require("morgan")
const cors= require("cors")
const app =  express()
const { sequelize } = require("./database")


/* middleware */
app.use(morgan("dev"))
app.use(cors())

app.use(require("./src/routes/tareas.routes"))

app.set("view engine", "ejs")

app.listen(3000, () => {
    sequelize.authenticate()

    console.log("servidor")
})
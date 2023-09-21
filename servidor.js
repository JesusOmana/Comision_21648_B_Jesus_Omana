const express= require("express")
const morgan= require("morgan")
const cors= require("cors")
const app =  express()
const { sequelize } = require("./database")


/* middleware */
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use(express.static("public"))
app.set("view engine", "ejs")


/* routes! */
app.use(require("./src/routes/tareas.routes"))
app.set("views",__dirname + "/views")
app.get("/",(req, res)=> {
    res.render("index")
})

app.listen(3000, () => {
    /* se cambio de authenticate a SYNC para que me cree
    la tabla en caso de que no exista */
    sequelize.sync({ force: true });

    console.log("servidor 3000")
})
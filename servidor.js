const express=require("express")
const morgan=require("morgan")
const cors=require("cors")
const app=express()
const { sequelize }=require("./database")

/* middleware */
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"))
app.set('view engine', 'ejs')
app.set("views",__dirname + "/views")

/* app.use("/", express.static("public")) */
app.use(express.static(__dirname + "/public"))
/* routes! */
app.use("/posteos", require("./src/routes/tareas.routes"))

app.listen(3000, () => {
    /* se cambio de authenticate a SYNC para que me cree
    la tabla en caso de que no exista */
    sequelize.sync({ force: false });

    console.log("servidor 3000")
})
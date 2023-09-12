const express= require("express")
const morgan= require("morgan")
const cors= require("cors")
const app =  express()

app.use(morgan("combined"))
app.use(cors())

app.use(require("./routes/tareas.routes"))

app.listen(3000, console.log("servidor numero 3000"))
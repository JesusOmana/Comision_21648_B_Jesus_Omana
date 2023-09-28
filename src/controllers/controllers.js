const {NoteModel} = require ("../model/posteos.js")

function abrirFormulario (req, res) {
res.render("formulario")
}

/* se usa el metodo .create para almacenar los datos y poder crear el 
posteo, se le colocan los valores que se consideran para crear el post */

async function crearPosteo (req, res) {
    const {titulo, contenido, url} = req.body

    await NoteModel.create({
        titulo:titulo,
        contenido:contenido,
        url:url
    })

    res.redirect("/posteos")
    
}
/* primero se requiere el id para determinar que post se quiere eliminar
luego se usa el metodo destroy, pero a destroy hay que decirle que 
eliminar de lo contrario elimina todo (OJO), entonces se usa una condicion
WHERE para que compare la Id solicitada sea igual a la Id a eliminar */
async function borrarPosteo(req, res) {
    const postId = req.params.id;
    const posteos = await NoteModel.findByPk(postId)
    await posteos.destroy()
    res.redirect("/posteos")
}
/* se solicita el id del post que se quiere editar y ademas se traen los valores posibles
a modificar (titulo, contenido y url), luego se usa el metodo update para modificar y
y se le pasan los valores a modificar, se usa la condicion WHere para determinar cuando
se va a cambiar, es decir, cuando id sea igual a id.*/
async function formularioEditarPosteo(req,res) {
    const id = req.params.id
/* cambiar el nombre del id */
    const posteos_jesus = await NoteModel.findByPk(id)

        if (!posteos_jesus){
            return res.redirect("/posteos")
        }
    res.render("editar-posteo", {posteos_jesus})
}

async function editarPosteo (req, res) {
    const {id, titulo, contenido, url} = req.body

    const posteos_jesus = await NoteModel.findByPk(id)

    await posteos_jesus.update({titulo, contenido, url})
    res.redirect("/posteos")
    
}

/* se usa el metodo findAll para buscar todo los posteos y se pide
que responda con un metodo json para ver la lista, colocar entre parentesis
alltask para que sepa que resultado tiene que devolver*/
async function enlistadoPosteo(req,res) {

    const allTasks = await NoteModel.findAll()

    res.render("posteos",{allTasks})
}
/* para buscar un solo post se requiere el parametro ID para luego usar 
el metodo findByPk que busca de todo los arrays creados quien tiene el
id y se coloca un If para dar como respuesta en caso de que no se encuentre
el Id, al final devuelve un metodo json que se le debe colocar el valor a 
devolver que seria Task */
async function individualPosteo(req,res) {

    const id = req.params.id

    const task = await NoteModel.findByPk(id)
    
/*         if (task==null) {
            return res.send("La tarea que busca no se encuentra")
        } */
    res.render("unicoposteo", {task})
}

module.exports = {
    crearPosteo,
    abrirFormulario,
    borrarPosteo,
    editarPosteo,
    enlistadoPosteo,
    individualPosteo,
    formularioEditarPosteo,
}
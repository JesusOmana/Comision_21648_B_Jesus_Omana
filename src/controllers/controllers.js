const {NoteModel} = require ("../model/post.js")

/* se usa el metodo .create para almacenar los datos y poder crear el 
posteo, se le colocan los valores que se consideran para crear el post */

async function crearPost (req, res) {
    const {titulo, contenido, image} = req.body

    await NoteModel.create({titulo,contenido,image})

    res.send("crear posteo")
}

/* primero se requiere el id para determinar que post se quiere eliminar
luego se usa el metodo destroy, pero a destroy hay que decirle que 
eliminar de lo contrario elimina todo (OJO), entonces se usa una condicion
WHERE para que compare la Id solicitada sea igual a la Id a eliminar */

async function borrarPost(req,res) {
    const id = req.params.id

    await NoteModel.destroy({
        where: {
            id: id
        }
    })

    res.send("borrar posteo")
}


/* se solicita el id del post que se quiere editar y ademas se traen los valores posibles
a modificar (titulo, contenido y url), luego se usa el metodo update para modificar y
y se le pasan los valores a modificar, se usa la condicion WHere para determinar cuando
se va a cambiar, es decir, cuando id sea igual a id.*/

async function editarPost(req,res) {
    const id = req.params.id
    const {titulo, contenido, image } = req.body

    await NoteModel.update({titulo,contenido,image},{
        where: {
            id:id
        }
    })

    res.send("editar posteo")
}

/* se usa el metodo findAll para buscar todo los posteos y se pide
que responda con un metodo json para ver la lista, colocar entre parentesis
alltask para que sepa que resultado tiene que devolver*/
async function enlistadoPost(req,res) {

    const allTasks = await NoteModel.findAll()

    res.json(allTasks)
}

/* para buscar un solo post se requiere el parametro ID para luego usar 
el metodo findByPk que busca de todo los arrays creados quien tiene el
id y se coloca un If para dar como respuesta en caso de que no se encuentre
el Id, al final devuelve un metodo json que se le debe colocar el valor a 
devolver que seria Task */
async function individualPost(req,res) {

    const id = req.params.id

    const task = await NoteModel.findByPk(id)
    
        if (task==null) {
            return res.send("La tarea que busca no se encuentra")
        }

    res.json(task)
}

module.exports = {
    crearPost,
    borrarPost,
    editarPost,
    enlistadoPost,
    individualPost,
}
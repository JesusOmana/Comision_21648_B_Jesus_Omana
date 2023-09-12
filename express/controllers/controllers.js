function crearPost(req,res) {
    res.send("crear posteo")
}
function borrarPost(req,res) {
    res.send("borrar posteo")
}
function editarPost(req,res) {
    res.send("editar posteo")
}
function enlistadoPost(req,res) {
    res.send("lista de posteo")
}
function individualPost(req,res) {
    res.send("unico posteo")
}

module.exports = {
    crearPost,
    borrarPost,
    editarPost,
    enlistadoPost,
    individualPost,
}
const { Router } = require ("express")

const router = Router()

const {
    crearPosteo,
    abrirFormulario,
    borrarPosteo,
    editarPosteo,
    enlistadoPosteo,
    individualPosteo,
    formularioEditarPosteo,
} =require("../controllers/controllers")

router.get("/",enlistadoPosteo)
router.get("/paginapost",abrirFormulario)
router.get("/editar/:id",formularioEditarPosteo)
router.post ("/crearpost",crearPosteo)
router.post("/editar/",editarPosteo)
router.get("/unicoposteo/:id",individualPosteo)
router.get("/eliminar/:id",borrarPosteo)


module.exports = router
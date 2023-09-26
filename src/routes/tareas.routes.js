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
} =require("../../src/controllers/controllers")

router.get("/",enlistadoPosteo)
router.get("/paginapost",abrirFormulario)
router.post ("/crearpost",crearPosteo)
router.get("/editar/:id",formularioEditarPosteo)
router.post("/editar",editarPosteo)
router.get("/:id",individualPosteo)
router.get("/eliminar/:id",borrarPosteo)


module.exports = router
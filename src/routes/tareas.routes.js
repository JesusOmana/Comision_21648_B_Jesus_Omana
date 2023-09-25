const { Router } = require ("express")

const router = Router()

const {
    crearPosteo,
    abrirFormulario,
    borrarPosteo,
    editarPosteo,
    enlistadoPosteo,
    individualPosteo,
} =require("../../src/controllers/controllers")

router.get("/",enlistadoPosteo)
router.get("/paginapost",abrirFormulario)
router.post("/crearpost",crearPosteo)
router.get("/:id",individualPosteo)
router.delete("/:id",borrarPosteo)
router.put("/:id",editarPosteo)

module.exports = router
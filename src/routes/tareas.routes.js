const { Router } = require ("express")

const router = Router()

const {
    crearPosteo,
    borrarPosteo,
    editarPosteo,
    enlistadoPosteo,
    individualPosteo,
} =require("../../src/controllers/controllers")

router.get("/",enlistadoPosteo)
router.get("/:id",individualPosteo)
router.get("/crearpost",crearPosteo)
router.delete("/:id",borrarPosteo)
router.put("/:id",editarPosteo)

module.exports = router
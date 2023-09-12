const { Router } = require ("express")

const router = Router()

const {
    crearPost,
    borrarPost,
    editarPost,
    enlistadoPost,
    individualPost,
} =require("../controllers/controllers")

router.get("/",enlistadoPost)
router.get("/:id",individualPost)
router.post("/",crearPost)
router.delete("/:id",borrarPost)
router.put("/:id",editarPost)

module.exports = router
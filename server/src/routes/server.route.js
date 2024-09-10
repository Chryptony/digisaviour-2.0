const router = require("express").Router();

const {all,create,destroy,find,update}= require("../controllers/server.controller")

router.get('/',all);
router.post('/',create);
router.get('/:id',find);
router.put('/:id',update);
router.delete('/:id',destroy);

module.exports = router
const express= require('express');
const router = express.Router();
const prodCrtl = require('../controllers/publicidad.controllers');


router.get('/', prodCrtl.getProductos);
router.get('/:id', prodCrtl.getProducto);
router.post('/', prodCrtl.newProductos);
// router.put('/:id', prodCrtl.modificarProducto);
router.delete('/:id', prodCrtl.deleteProducto);

module.exports = router;

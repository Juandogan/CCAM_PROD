const express= require('express');
const router = express.Router();
const prodCrtl = require('../controllers/productos.controllers');

router.get('/:id', prodCrtl.getProducto);
router.get('/', prodCrtl.getProductos3);
router.post('/', prodCrtl.newProductos);
router.put('/:id', prodCrtl.modificarProducto);
router.delete('/:id', prodCrtl.deleteProducto);

module.exports = router;

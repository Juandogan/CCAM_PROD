const mongoose = require('mongoose');
const { Schema } = mongoose;



// ARTICULO CCAM
const ProductoSchema = new Schema({
 
  fechaCreate:{type: String, required : false},
  fechaModify:{type: String, required : false},
  titulo:{type: String, required : false},
  subtitulo:{type: String, required : false},
  nota:{type: String, required : false},
  imagen1:{type: String, required : false},
  imagen2:{type: String, required : false},
  imagen3:{type: String, required : false},
  categoria:{type: String, required : false},
  aux:{type: Number, required : false},
  vistas: {type: Number, require : false},
  autor:{type: String, required : false},
  tituloImagen:{type: String, required : false},



  //mercadoPago
    title:{type: String, required: false},
    unit_price:{type: Number, required: false}, 
    quantity:{type: Number, required: false} 


  //pedidosAdm
  
  

});


module.exports = mongoose.model('ProductoSchema', ProductoSchema); 

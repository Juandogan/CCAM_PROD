const mongoose = require('mongoose');
const { Schema } = mongoose;



// ARTICULO CCAM
const ProductoSchema = new Schema({
 
  fecha:{type: String, required : false},
  fechaMod:{type: String, required : false},
  titulo:{type: String, required : false},
  tituloAlt:{type: String, required : false},
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
  art1:{type: String, required : false},
  art2:{type: String, required : false},
  art3:{type: String, required : false},
  art4:{type: String, required : false},
  art5:{type: String, required : false},
  art6:{type: String, required : false},
  posicion:{type: String, required : false},





  //mercadoPago
    title:{type: String, required: false},
    unit_price:{type: Number, required: false}, 
    quantity:{type: Number, required: false} 


  //pedidosAdm
  
  

});


module.exports = mongoose.model('ProductoSchema', ProductoSchema); 

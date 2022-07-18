const mongoose = require('mongoose');
const { Schema } = mongoose;



// ARTICULO CCAM
 const PublicidadSchema = new Schema({
  
  fecha:{type: String, required : false},
  fechaMod:{type: String, required : false},
  Imagen1:{type: String, required : false}, 
  Imagen2:{type: String, required : false}, 
  Imagen3:{type: String, required : false}, 
  Imagen4:{type: String, required : false}, 
  Imagen5:{type: String, required : false}, 
  Imagen6:{type: String, required : false}, 
  Imagen7:{type: String, required : false}, 
  Imagen8:{type: String, required : false}, 
  Imagen9:{type: String, required : false}, 
  Imagen10:{type: String, required : false}, 
});


module.exports = mongoose.model('PublicidadSchema', PublicidadSchema); 


const productosCtrl = {};
const Productos  = require('../models/productos')

//GET
productosCtrl.getProductos2 = async (req,res) =>{
const productos = await Productos.find({},{_id:1, titulo:1, imagen1:1, posicion:1, categoria:1, vistas:1, fecha:1, fechaMod:1, 
correos:1, subtitulo:1, comentarios:1, contadorComentarios:1
});
res.json(productos);

};

productosCtrl.getProductos = async (req,res) =>{
    const productos = await Productos.find({categoria:"revista"});
    res.json(productos);

    };

//POST
productosCtrl.newProductos = async(req,res) => {
    const productos = new Productos({
        contadorComentarios: req.body.contadorComentarios,
        comentarios:req.body.comentarios,
        fecha:req.body.fecha,
        fechaMod:req.body.fechaMod,
        titulo:req.body.titulo,
        tituloAlt:req.body.tituloAlt,
        subtitulo:req.body.subtitulo,
        nota:req.body.nota,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        categoria:req.body.categoria,
        likes:req.body.likes,
        vistas:req.body.vistas,
        autor:req.body.autor,
        fotografia:req.body.fotografia,
        edicionFotografia:req.body.edicionFotografia,
        posicion:req.body.posicion,
        art1:req.body.art1,
        art2:req.body.art2,
        art3:req.body.art3,
        art4:req.body.art4,
        art5:req.body.art5,
        art6:req.body.art6,
        art7:req.body.art7,        
        art8:req.body.art8,
        art9:req.body.art9,
        art10:req.body.art10,
        art11:req.body.art11,
        art12:req.body.art12,


        resultadoID:req.body.resultadoID,
        resultadoID2:req.body.resultadoID2,
        resultadoID3:req.body.resultadoID3,
        resultadoID4:req.body.resultadoID4,
        resultadoID5:req.body.resultadoID5,
        resultadoID6:req.body.resultadoID6,
        resultadoID7:req.body.resultadoID7,
        resultadoID8:req.body.resultadoID8,
        resultadoID9:req.body.resultadoID9,
        resultadoID10:req.body.resultadoID10,
        resultadoID11:req.body.resultadoID11,
        resultadoID12:req.body.resultadoID12,


     
        resultadoCategoria:req.body.resultadoCategoria,
        resultadoCategoria2:req.body.resultadoCategoria2,
        resultadoCategoria3:req.body.resultadoCategoria3,
        resultadoCategoria4:req.body.resultadoCategoria4,
        resultadoCategoria5:req.body.resultadoCategoria5,
        resultadoCategoria6:req.body.resultadoCategoria6,
        resultadoCategoria7:req.body.resultadoCategoria7,
        resultadoCategoria8:req.body.resultadoCategoria8,
        resultadoCategoria9:req.body.resultadoCategoria9,
        resultadoCategoria10:req.body.resultadoCategoria10,
        resultadoCategoria11:req.body.resultadoCategoria11,
        resultadoCategoria12:req.body.resultadoCategoria12,

        resultadoImagen:req.body.resultadoImagen,
        resultadoImagen2:req.body.resultadoImagen2,
        resultadoImagen3:req.body.resultadoImagen3,
        resultadoImagen4:req.body.resultadoImagen4,
        resultadoImagen5:req.body.resultadoImagen5,
        resultadoImagen6:req.body.resultadoImagen6,        
        resultadoImagen7:req.body.resultadoImagen7,
        resultadoImagen8:req.body.resultadoImagen8,
        resultadoImagen9:req.body.resultadoImagen9,
        resultadoImagen10:req.body.resultadoImagen10,
        resultadoImagen11:req.body.resultadoImagen11,
        resultadoImagen12:req.body.resultadoImagen12,
        
        


    });
       await productos.save();
       res.json('Articulo creado!');

};


//GET POR ID
 productosCtrl.getProducto = async(req,res) => { 

    try {
        const productos = await Productos.findById(req.params.id);
        res.json(productos);
      } catch (err) {
        res.json('no encontrado')
      }
    

};

//MODIFICAR
productosCtrl.modificarProducto = async (req,res) => {
    const { id } = req.params;
    const producto = { 
        contadorComentarios: req.body.contadorComentarios,
        comentarios:req.body.comentarios,
        fechaMod:req.body.fechaMod,
        titulo:req.body.titulo,
        tituloAlt:req.body.tituloAlt,
        subtitulo:req.body.subtitulo,
        nota:req.body.nota,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        categoria:req.body.categoria,
        likes:req.body.likes,
        vistas:req.body.vistas,
        tituloImagen: req.body.tituloImagen,
        autor:req.body.autor,
        fotografia:req.body.fotografia,
        edicionFotografia:req.body.edicionFotografia,
        art1:req.body.art1,
        art2:req.body.art2,
        art3:req.body.art3,
        art4:req.body.art4,
        art5:req.body.art5,
        art6:req.body.art6,
        art7:req.body.art7,        
        art8:req.body.art8,
        art9:req.body.art9,
        art10:req.body.art10,
        art11:req.body.art11,
        art12:req.body.art12,


        resultadoID:req.body.resultadoID,
        resultadoID2:req.body.resultadoID2,
        resultadoID3:req.body.resultadoID3,
        resultadoID4:req.body.resultadoID4,
        resultadoID5:req.body.resultadoID5,
        resultadoID6:req.body.resultadoID6,
        resultadoID7:req.body.resultadoID7,
        resultadoID8:req.body.resultadoID8,
        resultadoID9:req.body.resultadoID9,
        resultadoID10:req.body.resultadoID10,
        resultadoID11:req.body.resultadoID11,
        resultadoID12:req.body.resultadoID12,


     
        resultadoCategoria:req.body.resultadoCategoria,
        resultadoCategoria2:req.body.resultadoCategoria2,
        resultadoCategoria3:req.body.resultadoCategoria3,
        resultadoCategoria4:req.body.resultadoCategoria4,
        resultadoCategoria5:req.body.resultadoCategoria5,
        resultadoCategoria6:req.body.resultadoCategoria6,
        resultadoCategoria7:req.body.resultadoCategoria7,
        resultadoCategoria8:req.body.resultadoCategoria8,
        resultadoCategoria9:req.body.resultadoCategoria9,
        resultadoCategoria10:req.body.resultadoCategoria10,
        resultadoCategoria11:req.body.resultadoCategoria11,
        resultadoCategoria12:req.body.resultadoCategoria12,

        resultadoImagen:req.body.resultadoImagen,
        resultadoImagen2:req.body.resultadoImagen2,
        resultadoImagen3:req.body.resultadoImagen3,
        resultadoImagen4:req.body.resultadoImagen4,
        resultadoImagen5:req.body.resultadoImagen5,
        resultadoImagen6:req.body.resultadoImagen6,        
        resultadoImagen7:req.body.resultadoImagen7,
        resultadoImagen8:req.body.resultadoImagen8,
        resultadoImagen9:req.body.resultadoImagen9,
        resultadoImagen10:req.body.resultadoImagen10,
        resultadoImagen11:req.body.resultadoImagen11,
        resultadoImagen12:req.body.resultadoImagen12,
        
                               

    };
    
       await Productos.findByIdAndUpdate(id, {$set: producto}, {new: true});
       res.json('Articulo modificado!');

};

//ELIMINAR
productosCtrl.deleteProducto = async (req,res) => {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);
    res.json("Eliminado!");
};

//Mercadopago

// productosCtrl.nuevoPago = async (req,res) => {
//     var { id } = req.params
//      id = Number(id);
//      mercadopago.configure({access_token: 'TEST-5952899216905685-020218-5db2793d7558989dbee92f29a816339a-205944115'});
   
//   let preference = { 

//     back_urls: {
//         success: "http://192.168.43.55:4200/mercadopagofin/",
//         failure: "http://192.168.43.55:4200/mercadopagofin/",
//         pending: "http://192.168.43.55:4200/mercadopagofin/"
//     },
//     auto_return: "approved",
      
//     items: [
//         { title: 'Jethro Caps ',
//           unit_price: (id),
//           currency_id: 'ARS',
//           quantity: 1,
          
//         }
//             ]

       
    
//     };
  
//     await mercadopago.preferences.create(preference)
//     .then(function(res){  
//     global.init_point = res.body.init_point;
//     console.log(global.init_point)}).catch(function(error){console.log(error);});
//     res.json({link: (global.init_point)}); 
// };



// productosCtrl.pagoResp = async (req,res) => {
//         await  res.json(req.query);    
//         console.log('loquellega',req.query)
        
        


// };



module.exports = productosCtrl
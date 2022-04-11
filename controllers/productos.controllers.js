// const MercadoPagoSchema  = require('../models/mercadopago')
// const mercadopago = require ('mercadopago');
// API

const productosCtrl = {};
const Productos  = require('../models/productos')

//GET
productosCtrl.getProductos = async (req,res) =>{
const productos = await Productos.find();
res.json(productos);

};

//POST
productosCtrl.newProductos = async(req,res) => {
    const productos = new Productos({      
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
        autor:req.body.autor


    });
       await productos.save();
       res.json('Articulo creado!');

};


//GET POR ID
 productosCtrl.getProducto = async(req,res) => { 
    const productos = await Productos.findById(req.params.id);
    res.json(productos);

};

//MODIFICAR
productosCtrl.modificarProducto = async (req,res) => {
    const { id } = req.params;
    const producto = { 
        fechaMod:req.body.fechaMod,
        fecha:req.body.fecha,
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
        autor : req.body.autor,
        art1 : req.body.art1,
        art2 : req.body.art2,
        art3 : req.body.art3,
        art4 : req.body.art4,
        art5 : req.body.art5,
        art6 : req.body.art6,
                               

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
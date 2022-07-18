// const MercadoPagoSchema  = require('../models/mercadopago')
// const mercadopago = require ('mercadopago');
// API

const productosCtrl = {};
const Productos  = require('../models/publicidad')

//GET
productosCtrl.getProductos = async (req,res) =>{
const productos = await Productos.find({},{titulo:1});
res.json(productos);

};



//POST
productosCtrl.newProductos = async(req,res) => {
    const productos = new Productos({      

      
      fechaMod:req.body.fechaMod,
      fecha:req.body.fecha,
      imagen1:req.body.imagen1,
      imagen2:req.body.imagen2,
      imagen3:req.body.imagen3,
      imagen3:req.body.imagen4,
      imagen3:req.body.imagen5,
      imagen3:req.body.imagen6,
      imagen3:req.body.imagen7,
      imagen3:req.body.imagen8,
      imagen3:req.body.imagen9,
      imagen3:req.body.imagen10,
        


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

        fechaMod:req.body.fechaMod,
        fecha:req.body.fecha,
        imagen1:req.body.imagen1,
        imagen2:req.body.imagen2,
        imagen3:req.body.imagen3,
        imagen3:req.body.imagen4,
        imagen3:req.body.imagen5,
        imagen3:req.body.imagen6,
        imagen3:req.body.imagen7,
        imagen3:req.body.imagen8,
        imagen3:req.body.imagen9,
        imagen3:req.body.imagen10,

        

                               

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
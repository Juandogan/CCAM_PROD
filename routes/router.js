const { Router } = require('express');
const jwt = require('jsonwebtoken')
const User = require('./userModel')
const router = Router()



router.get('/' , (req, res)=> res.send('hello word'))

router.post('/signup' , async (req, res)=>{ 
    // res.send('llega')
 
 const { email, password } = req.body
 const newUser = new User({ email, password })
 await newUser.save() 

const token = jwt.sign({_id: newUser._id}, 'secretKey' )

 res.status(200).json({token})

})

router.post('/signin', async (req,res)=>{
const {email, password} = req.body;
const user = await User.findOne({email});
if(!user) return res.status(400).send('No exite usuario');
if(user.password  !== password) return res.status(401).send('Contraseña incorrecta');
const token = jwt.sign({_id: user._id},'secretKey')
console.log(token)
return res.json(token)

})
// router.get('tareas'){}; 
router.get('public', (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

});

// router.get('tareas'){}; 
router.get('private', verifyToken, (req,res)=>{
    res.json([{
        _id:'1' ,
        name:'teste',
        descripcion:'quepaso',
        date:'Hoy es lunes'
    
    }])

})
    


module.exports = router


function verifyToken(req, res, next){
    if(!req.headers.authorization) {
    return res.status(401).send('Sin autorizacion')
}
const token = req.headers.authorization.split(' ')[1]
        if (token === "null"){
            return res.status(401).send('Sin autorizacion')
        }

const payload = jwt.verify(token, 'secretKey')
            req.userID = payload._id
            next();

}

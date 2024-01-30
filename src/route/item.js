const { Router } = require("express")
const router = Router();

products =[
    {"id":1,"name":"shirts","price":2000},
    {"id":2,"name":"shoes","price":3500},
    {"id":3,"name":"pants","price":2055}
]

router.get('/',(req,res)=>{
    //res.cookie("token","test",{maxAge:5000})
    res.cookie("cookiename","this is a cookie ",{maxAge:5000,signed:false,httponly:true})
    res.send(products);
});

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    const product = products.find((product) => product.id == id );
    res.send(product);
});

// router.get('/:price',(req,res)=>{
//     const price = req.params.price;
//     const product = products.find((product) => product.price == price );

//     res.send(product);
// });


router.post('/',(res,req)=>{
    console.log(req.body);
    products.push(req.body);
    res.sendStatus(201);
    res.send(products);

})
module.exports =  router; 
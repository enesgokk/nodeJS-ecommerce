const express=require("express");
const app=express();
const moongose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors")
const userRoute=require("./router/user");
const authRoute=require("./router/auth");
const productRoute=require("./router/product");
const cartRoute=require("./router/cart");
const orderRoute=require("./router/order");
const stripeRoute=require("./router/stripe");

dotenv.config();

moongose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connect is successfull"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);
app.use("/api/checkout",stripeRoute);

app.get("/",(req,res)=>{
    res.json({
        message:"Hello backend"
    })
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running")
})
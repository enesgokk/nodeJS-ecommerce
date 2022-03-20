const express=require("express");
const app=express();
const moongose=require("mongoose");
const dotenv=require("dotenv");
const userRoute=require("./router/user");
const authRoute=require("./router/auth");

dotenv.config();

moongose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connect is successfull"))
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);

app.listen(process.env.PORT || 5000,()=>{
    console.log("backend server is running")
})
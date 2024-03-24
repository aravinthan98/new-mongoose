
const express=require('express');
const app=express();
require('dotenv').config();
const mongoose=require('mongoose');
const taskRoutes=require('./routes/TaskRouters')



app.use((req,res,next)=>{
    console.log("path" +req.path + "method "+req.method);
    next();
})
// app.get('/',(req,res)=>{
//     res.send('Hello word to all')
// })
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("port listening to 4700")
    })
}).catch((error)=>console.log(error))

app.use('/api/tasks',taskRoutes)
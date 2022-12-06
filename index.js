const express= require('express');
const app =express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("<h1>Hello world</h1>");
})
app.get('/about',(req,res)=>{
    res.send(`<h1>Hello : ${req.body.name}</h1>`);
})
app.listen(port,()=>{
    console.log(`the app listern on ${port}`)
})
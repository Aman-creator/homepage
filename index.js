const express=require('express');
var app=express();
var http=require('http').Server(app);
var PORT = process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/home.html');
    
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname +'/about.html');
    
});
app.get('/services', (req,res)=>{
    res.sendFile(__dirname + '/services.html');
});
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname +'/contact.html');
    
});
http.listen(PORT,function(){
    console.log('server is running on localhost:3000');
});
 

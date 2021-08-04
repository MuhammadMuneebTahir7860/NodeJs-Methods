var express =require('express');
var cors=require('cors');
var bodyParser = require('body-parser');

var app=express();

app.use(bodyParser.urlencoded({
    extended:true,
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    let responseData=[
        {
        name:'Muneeb',
        Class:'Web and Mobile',
        Batch:'03',
        RollNo:'17180',
    },
    {
        name:'Zain',
        Class:'Web and Mobile',
        Batch:'02',
        RollNo:'16780',
    },   {
        name:'Faizan',
        Class:'Web and Mobile',
        Batch:'01',
        RollNo:'12080',
    },   {
        name:'Bilal',
        Class:'Web and Mobile',
        Batch:'03',
        RollNo:'11180',
    },
]
    res.status(200).json(responseData);
})
app.post('/post',function(req,res){
    res.send("Server is Working Hello")
})
app.delete('/delete',function(req,res){
    res.send("Server is Working Hello")
})
app.put('/put',function(req,res){
    res.send("Server is Working Hello")
})


app.listen('5000',(error)=>{
    if(error){
        console.log(error.message);
    }
})
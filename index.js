const express = require('express');     // return a function
const app = express();                  // return an object
const bodyParser =require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
const fs = require('fs');
const Joi =require("joi");
const { POINT_CONVERSION_UNCOMPRESSED } = require('constants');
app.use(express.json());
app.use(express.static('public'));




//main website
// To respond to http get request
app.get('/'/* path or url '/' represrnts route of the website*/, /* callback function */(req, res) => {
    // This req object has a bunch of useful propereties u can refrence documentation for more info
    res.send('welcome to LMS , you can use CRUD operations using api in the website URL. ex:/api/courses/create');
    
  
});

//arrays
const courses=
[



];

const students=
[
    


];


let Cname=[];
let Ccode=[];
let Cid=[];
let Sname=[];
let Scode=[];
let Sid=[];
let Sdes=[];





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// to get all courses
app.get('/api/courses', (req, res) => {
    res.send('');
});


// to create
app.get('/api/courses/create', (req, res) => {
    //res.send("");

    
    
    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile("./course_create.html",null,function(error,data){
    res.write(data);
    });
    
    
});


// to delete
app.get('/api/courses/delete', (req, res) => {
    res.send("");
});



// to update
app.get('/api/courses/update', (req, res) => {
    res.send("");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// to get all students
app.get('/api/students', (req, res) => {
    res.send("");
});

// to create
app.get('/api/students/create', (req, res) => {
    //res.send("");


    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile("./student_create.html",null,function(error,data){
    res.write(data);
    });
    
});



// to delete
app.get('/api/students/delete', (req, res) => {
    res.send("");
});



// to update
app.get('/api/students/update', (req, res) => {
    res.send("");
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// post request for create

//create student
app.post('/api/students',(req,res)=>{
    //validation
    const schema ={
        name:Joi.string().required(),
        code:Joi.string().length(7)
    };

    //const result=Joi.valid(req.body,schema);
    if(req)
    {
      
        res.status(400).send("name can only have letters , apostrophe and dashes. \n code must be exactly 7 characters ");  
        return;
    }
   
    
    const student ={
        id: students.length+1,
        name: req.body.name,
        code:req.body.code
    };
    students.push(student);
    res.send(students);
});

//craete course
app.post('/api/courses',(req,res)=>{
    //validation

    const course ={
        id: courses.length+1,
        name: req.params.name,
        code:req.body.code,
        description:req.body.description
    };
    courses.push(req.params);
    res.send(courses);
});









//listener
// Environment variable
const port = process.env.PORT || 3000;

app.listen(port /*PortNumber*/, () => console.log(`Listeneing on port ${port}......`) /* optionally a function that called when the app starts listening to the given port */);











/*
app.post('/api/courses/create',urlencodedParser,function(req,res){

    res.writeHead(200,{"Content-Type":"text/html"});
    fs.readFile("./course_create.html",null,function(error,data){
    res.write(data);
    });
    // Prepare output in JSON format
    response ={
    first_name:req.body.first_name,
    last_name:req.body.last_name
    };
    //console.log(response);
    res.end(JSON.stringify(response));
    })
    var server =app.listen(8081,function(){
    
    
    })
    */

//classes
/*
class student{
    constructor(name , code,id){
    this.name=name;
    this.code=code;
    this.id=id;
    }
    static update(name,code,id){
    this.name=name;
    this.code=code;
    this.id=id;


    }
    
    }
       

    class course{
        constructor(name,code,id,description){
            this.name=name;
            this.code=code;
            this.id=id;
            this.description=description;


        }
        update(name,code,id,description){
            this.name=name;
            this.code=code;
            this.id=id;
            this.description=description;

        }
    }


*/
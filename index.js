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
    res.send(courses);
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
app.get('/api/courses/:id', (req, res) => {
    res.send("");
});



// to update
app.put('/api/courses/:id', (req, res) => {
    const course =courses.find(c=>c.id===parseInt(req.params.id));
    if(!course)res.status(404).send("no course found with the given id !");
    //validation
    reexp=new RegExp("^[a-zA-Z-']{3}[0-9]{3}");
    
    let sname=JSON.stringify(req.body.code);

    
    if(req.body.name.length<5)
    {
        res.status(400).send(" name is required and must be at least 5 characters ");  
        return;

    }

    else if(req.body.code.length!=6||!reexp.test(req.body.code))
    {
        res.status(400).send("code is required and must match 3 letters followed by 3 numbers.  ");  
        return;
    }
    
    
    else if(req.body.description.length>200)
    {
        res.status(400).send(" description max length is 200 characters ");  
        return;

    }
    
    course.name= req.body.name;
    course.code=req.body.code;
    course.description=req.body.description;
    res.send(courses);


   
   
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// to get all students
app.get('/api/students', (req, res) => {
    res.send(students);
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
app.get('/api/students/:id', (req, res) => {
    res.send("");
});



// to update
app.get('/api/students/:id', (req, res) => {
    res.send("");
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// post request for create

//create student
app.post('/api/students',urlencodedParser,(req,res)=>{
    //validation
    /*
    const schema ={
        name:Joi.string().min(1).required(),
        code:Joi.string().length(7)
    };

    const result=Joi.validate(req.body,schema);
    if(result)
    {
        
        res.status(400).send("name can only have letters , apostrophe and dashes. \n code must be exactly 7 characters ");  
        return;
    }
   *///1|2|3|4|5|6|7|8|9|0|!|@|#|%|^|&|*|(|)|_|+|=|.|<|>|,|      "/[a-zA-Z]+"-"*'''[a-zA-Z]*$"
    reexp=new RegExp("[^a-zA-Z-']");
    reexp2=new RegExp("[^']");
    var regex = /^[a-zA-Z-]+$/g;
    re = new RegExp("1|2|3|4|5|6|7|8|9|0");
    let sname=JSON.stringify(req.body.name);

    if(req.body.name.length<1||reexp.test(req.body.name))
    {
        res.status(400).send("name is required and can only have letters , apostrophe and dashes.  ");  
        return;
    }
    
    
    else if(req.body.code.length!=7)
    {
        res.status(400).send(" code is required and must be exactly 7 characters ");  
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
app.post('/api/courses',urlencodedParser,(req,res)=>{
    //validation
    reexp=new RegExp("^[a-zA-Z-']{3}[0-9]{3}");
    
    let sname=JSON.stringify(req.body.code);

    
    if(req.body.name.length<5)
    {
        res.status(400).send(" name is required and must be at least 5 characters ");  
        return;

    }

    else if(req.body.code.length!=6||!reexp.test(req.body.code))
    {
        res.status(400).send("code is required and must match 3 letters followed by 3 numbers.  ");  
        return;
    }
    
    
    else if(req.body.description.length>200)
    {
        res.status(400).send(" description max length is 200 characters ");  
        return;

    }


    const course ={
        id: courses.length+1,
        name: req.body.name,
        code:req.body.code,
        description:req.body.description
    };
    courses.push(course);
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
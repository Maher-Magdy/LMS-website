const express = require('express');     // return a function
const app = express();                  // return an object
//main website
// To respond to http get request
app.get('/'/* path or url '/' represrnts route of the website*/, /* callback function */(req, res) => {
    // This req object has a bunch of useful propereties u can refrence documentation for more info
    res.send('welcome to LMS , you can use CRUD operations using api in the website URL. ex:/api/courses/create');
});
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
//arrays

let Cname=[];
let Ccode=[];
let Cid=[];
let Sname=[];
let Scode=[];
let Sid=[];
let Sdes=[];







// to get all courses
app.get('/api/courses', (req, res) => {
    res.send('');
});


// to create
app.get('/api/courses/create', (req, res) => {
    res.send("");
});


// to delete
app.get('/api/courses/delete', (req, res) => {
    res.send("");
});



// to update
app.get('/api/courses/update', (req, res) => {
    res.send("");
});


// to get all students
app.get('/api/students', (req, res) => {
    res.send("");
});

// to create
app.get('/api/students/create', (req, res) => {
    res.send("");
});



// to delete
app.get('/api/students/delete', (req, res) => {
    res.send("");
});



// to update
app.get('/api/students/update', (req, res) => {
    res.send("");
});

















//listener
// Environment variable
const port = process.env.PORT || 3000;

app.listen(port /*PortNumber*/, () => console.log(`Listeneing on port ${port}......`) /* optionally a function that called when the app starts listening to the given port */);




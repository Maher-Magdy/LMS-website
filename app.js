// function sayHello(name){
//     console.log('Hello ' + name);
// }

// sayHello('Ahmed');

// //This will throw error as window and document objects are part of browser runtime environment in node we have other objects
// console.log(window);




//global object where we can access it from any file we can write it global.console.log() or window.console.log()
//console.log();


// // this var or function is not added to the global object their scope is this file app.js
// var message = '';
// console.log(global.message); //will throw error

// in node every file is a module and the vars and functions defined in that file arescoped to that module and they are not available outside module
//console.log(module);







/*****************************************************load logger module****************************************/
// // return exported object
// //var logger = require('./logger'); //we don't have this in browser
// // it's better to store the store the result in const var so we don't accidentally overwrite this var
// const logger = require('./logger');
// console.log(logger);
// logger.log('message');




/******************************************************Path Module**********************************************/
// const path = require('path'); //path now is object
// var pathObj = path.parse(__filename);
// console.log(pathObj);





/******************************************************OS Module************************************************/
// const os = require('os');
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// //console.log('Total memory:  ' + totalMemory);

// //Template string helps us to build string without concatenation
// console.log(`Total memory:  ${totalMemory}`);
// console.log(`Free memory:  ${freeMemory}`);




/*******************************************************File system module**************************************/
// //every operation here is sync or async in real world apps we use async methods but sync methods are foe symplicity
// const fs = require('fs');
// var files = fs.readdirSync('./'); //return all files and folders in in the current folder, files will be string array
// console.log(files);

// // async methods are called after completion of sync operation
// // async ops need callback function
// fs.readdir('./', function (err, files) {
//     if (err)
//         console.log('error: ', err);
//     else
//         console.log('Results:   ', files);
// })




/********************************************************Events module*******************************************/
// const EventEmitter = require('events'); //class
// const emitter = new EventEmitter(); //instance

// //order is important
// // //Register a listener without arguments
// // emitter.on('messageLogged', function () {
// //     console.log('Listener called');
// // })

// // //raise an event
// // emitter.emit('messageLogged'/*name of event*/);

// //Register a listener with arguments
// emitter.on('messageLogged', function (arg) { //arg or e or eventArg
//     console.log('Listener called', arg);
// })

// // //arrow function
// // emitter.on('messageLogged', (arg) => { //arg or e or eventArg
// //     console.log('Listener called', arg);
// // })

// // //raise an event with argument
// // emitter.emit('messageLogged'/*name of event*/,1 /*ID*/, 'url');
// emitter.emit('messageLogged'/*name of event*/, { id: 1, url: 'http://' });










/**********************************************************Extending EventEmitter**********************************************/
// const EventEmitter = require('events'); //class
// const emitter = new EventEmitter(); //instance

// //arrow function
// emitter.on('messageLogged', (arg) => { //arg or e or eventArg
//     console.log('Listener called', arg);
// })

// //when we call this function event will not work 
// // because we are working with two different instances in app.js and in logger.js
// const log = require('./logger');
// log('message');



// const EventEmitter = require('events'); //class

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener using the same object
// logger.on('messageLogged', (arg) => { //arg or e or eventArg
//     console.log('Listener called', arg);
// })

// logger.log('message');





/*************************************************************HTTP Module**********************************************/
// // One of the powerful building blocks of node is HTTP module that we use for creating networking apps for example we creating 
// // a web server that listens for HTTP requests on a given port 

// const http = require('http');

// // This server is an EventEmitter so it has all the capabilities of event emitter
// // This server object raises differnt kinds events that u can respond to
// const server = http.createServer();     // Create a web server

// // For every new request this server raises an event so we use on method to handle this event
// server.on('connection' /* name of event in documentation */, (Socket) => {
//     console.log('New Connection.......');
// });

// server.listen(3000 /*PortNumber*/);
// console.log('Listening on port 3000......');


// const http = require('http');
// const server = http.createServer(/*CallBack function*/ function (req, res) { //res, req are objects
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }
//     if (req.url === '/api/courses') {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });

// server.listen(3000);
// console.log('Listening on port 3000......');

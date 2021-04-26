


const express = require('express');     // return a function
const app = express();                  // return an object
// To respond to http get request
app.get('/'/* path or url '/' represrnts route of the website*/, /* callback function */(req, res) => {
    // This req object has a bunch of useful propereties u can refrence documentation for more info
    res.send('Hello World');
});
// to get all courses
app.get('/api/courses', (req, res) => {
    res.send("kkk");
});
// Environment variable
const port = process.env.port || 3000

app.listen(port /*PortNumber*/, () => console.log(`Listeneing on port ${port}......`) /* optionally a function that called when the app starts listening to the given port */);




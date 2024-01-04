//to run the node.js file we write "node ./file_name.js".
//Here we will write "node ./index.js".

//type "clear" to clear out all the above commands.

//npm is a package manager->any existing package can be installed using npm.
//to initialise the package.json file,type "npm init" in the terminal window.

//express is a node js framework
//npm install express=>command to install express
//the above package installs all the node modules which are important to run express js commands

//any variable/object/fucntion initialised in node js is a module.
//modules are transeferrable
// const a=40;
// const a={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a/b)*100)
//     }
// };



//module.exports=module_name->exports the module
//this is file based export-import
// module.exports=a;


//The below are the types of exports.
//file based,build in,third party.



//build in modules are the ones that you dont have to download separately
// const fs=require("fs")
//Below we are reading the contents of the file "sample.txt" and initiating a callback function.
//If there is data available in the file,we print the data,else we show error message
// UTF-8 is a character encoding specification that ensures compatibility and consistent presentation across most operating systems, applications, and language character sets.
//fs.readFle("file_name","type_of_data",(callback_func1,callbackfunc_2)=>{})
// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err){
//         return err
//     }
//     else{
//         console.log(data)
//     }
// })

/*Asynchronous function means that as the function is getting processed,it doesnt hinder the flow of the program and may print the contents after
it as well.It means that even as the function is getting processed, the program other than the function will continue to be executed.*/ 
// console.log("This will appear before the function as the above function is asynchronous.")




//This a synchronised execution of the function wherein first the function is executed ad then any preceeding commands are executed.
// const fs=require("fs")
// console.log(fs.readFileSync("./sample.txt","utf-8"))

// console.log("I am Second")






//Asynchronous writing in a file,same concept of asynchronous reading of the file.
// const fs=require('fs');
// const a="This is Made by 6pp";
//fs.writeFile("new_file_name",type of data,callbcak function()=>{})
// fs.writeFile("./sample2.txt",a,()=>{
//     console.log("Written")
// })
// console.log("I am third")


//We dont make a callback function for synchronous reading and writing.
// const fs=require('fs')
// const a="This is made by karthik nadar";
// fs.writeFileSync("sample2.txt",a)

// console.log("I am fourth");




//gives the extension of the file.
// const path=require("path");
// const a=path.extname("/node/index.js")
// console.log(a)


//generates random pokemon names
// const pokemon=require("pokemon")
// console.log(pokemon.random());




//creating a server
const { clear } = require("console");
const { response } = require("express");
const http=require("http");
const fs=require("fs")
const PORT=2000;
const hostname="localhost";
const home=fs.readFileSync("./index.html","utf-8")




//"request" is what we want and "response" is the output/webpage we get in return for out "request".
//http.createServer((parameter_for_request,parameter_for_response) =>{})
const server=http.createServer((request,response)=>{
    if(request.url==="/"){
        return response.end(home)
    }
    if(request.url==="/about"){
        return response.end(" <h1> About page  </h1>" );
    }
    if(request.url==="/contact"){
        return response.end("<h1>Contact Page<h1>")
    }
    if(request.url==="/Services"){
        return response.end("<h1>Services Page<h1>")
    }
    else{
        return response.end("404 page not found")
    }
})
//          (portnumber,hostname)
server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT}`)
})



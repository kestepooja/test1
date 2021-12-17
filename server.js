var app=require('http');
var express=require('express');

//use some library to create a server
//write some lines of codeto generate html output
var app=express();

var onDefault=function(req,res)
{
res.send("<h1> DataSherpa </h1>"+
          "<hr/>"+
		  "<ol>"+
		  "<li> Big data </li>"+
		   "<li> ML</li>"+
		    "<li> AI</li>"+
			 "<li>Python</li>"
);
};

var onAboutUs=function(req,res)
{
res.send("Auther:Pooja");
};

//configure http incoming request handling logic
app.get("/",onDefault);
app.get("/aboutus",onAboutUs);

app.listen(8081);//continuosly wait fro client request
console.log("Server is listening on port 8081");
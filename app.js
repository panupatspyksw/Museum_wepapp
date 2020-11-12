var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 8000;




app.use(express.static("public"));
app.use(express.static("img"));

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get("/",function(req,res){
    res.render("home")
})



// app.get("/bye",function(req,res){
// 	res.send("" + req.session.username);
// })

// app.get("/speak",function(req,res){
// 	res.send("path some word");
// })


// app.get("/post",function(req,res){
// 	res.render("post");
// })

// app.get("/speak/:word/:times",function(req,res){
// 	var word = req.params.word;
// 	var count = req.params.times;
// 	var times = Number(count)+1;
// 	if(times*0 != 0){
// 		res.send("INPUT NUMBER NOT A TEXT YOU DONKEY!!");
// 	}
// 	else{
// 	var result = "";
// 	for(var i = 0; i<= times; i++){
// 	result += word+" ";
// 	}
// 			res.send(result);
// 	}
// })

// app.get("/message/:text",function(req,res){
// 	var word = req.params.text;
// 	res.render("index",{message:word});
// })

app.get("*",function(req,res){
	res.send("page not found.")
})
app.listen(port, () => {
  console.log("Server Connected!!");
})
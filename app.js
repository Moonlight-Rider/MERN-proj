const express = require('express');

const app = express();
app.get("/", function(req, res)
{
    res.send("hello people");
});
app.get("/about", function(req, res)
{
    res.send("hello people");
});
app.get("/contact", function(req, res)
{
    res.send("hello people");
});
app.get("/signin", function(req, res)
{
    res.send("hello people");
});
app.get("/signup", function(req, res)
{
    res.send("hello people");
});
app.listen(3000,function() {
    console.log(`success`);
} );
// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

console.log(new Date("2015-12-25"))

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

console.log(/^\d+$/.test("1451001600000"))
console.log(/^\d+$/.test("1451001asf600000"))
console.log(/^\d+$/.test("1451001600000asa"))
console.log(/^\d+$/.test("faf1451001600000"))

app.get('/api/', (req, res) => {
  let newDate = new Date()
    res.json({"unix": newDate.getTime(), "utc": newDate.toUTCString()})
})

app.get('/api/:date?', (req, res) => {
  let isNum = /^\d+$/.test(req.params.date),
  newDate
  if(isNum){
    newDate = new Date(Number(req.params.date))
  }else{
    newDate = new Date(req.params.date)
  }
    if(newDate == "Invalid Date") {
      res.json({error : "Invalid Date"})
    } 
    res.json({"unix": newDate.getTime(), "utc": newDate.toUTCString()})
})
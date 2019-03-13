const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.send("Dobrý den.");
});

app.get("/contact", function(req, res) {
  res.send("Gymnázium, Arabská 14, Praha 6");
});
app.get("/about", function(req, res) {
  res.send("Bla, Bla, Bla");
});
app.get("/calc", function(req, res) {
  var formular = "<form action'/calc' method='post'>";
  formular += "<input type='text' name='num1' placeholder='První číslo' />";
  formular += "<input type='text' name='num2' placeholder='Druhé číslo' />";
  formular += "<button type='submit' name='submit'>Kalkuluj!</button>";
  formular += "<form>";

  res.send(formular);
});
app.post("/calc", function(req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);

  var result = n1 + n2;

  res.send("Součet je: " + result);
});
app.get("/fibo/:n", function(req, res) {
  var n = Number(req.params.n);
  var a = 0;
  var b = 1;
  var c;

  for (var x = 0; x <= n; x++) {
    res.send(a + b);
  }
});
app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});

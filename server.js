const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require ('path');

if (process.env.NODE_ENV === "production") {
    app.use(express.static("index.html"));
  }
  // Add routes, both API and view
  app.use(routes);

  app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
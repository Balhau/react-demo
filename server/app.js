
const express = require('express')
const app = express()
const path = require('path');
const port = 8080

const BUILD_FOLDER="/build"

app.get('/*', (req, res) => {
  res.sendFile(__dirname+BUILD_FOLDER+"/index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const http = require('http');
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;
const appDir = path.resolve(__dirname, 'build');

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(appDir));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(appDir, 'index.html'));
});

http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
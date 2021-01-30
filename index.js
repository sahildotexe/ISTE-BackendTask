const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/square-by-post', (req, res) => {
  return res.send(`Square of number is: ${req.body.num*req.body.num}.`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
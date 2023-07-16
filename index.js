const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/shopRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

require('./util/db');

app.use(cors());
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port number ${port}`);
});

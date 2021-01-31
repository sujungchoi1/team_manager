const express = require("express");
const cors = require("cors");

const app = express();
const port = 8010;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose.configure');

require('./server/routes/routes')(app);

app.listen(port, () => console.log(`You are on port ${port}`));
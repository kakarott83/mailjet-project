const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');

('use strict');

require('dotenv').config();
const appRoute = require('./routes/route');

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(express.json());

/*Routes*/
app.use('/api', appRoute);

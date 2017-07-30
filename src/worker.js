const dotenv = require('dotenv').config();
const FB = require('./business/facebook.busuness');

const fb = new FB(5000);
fb.start();
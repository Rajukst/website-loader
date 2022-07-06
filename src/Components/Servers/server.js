const express = require('express');
const cors= require('cors');
const cheerio = require('cheerio');
const app= express();
app.use(cors())
const port= process.env.PORT || 5000;

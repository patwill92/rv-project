import express from 'express'
import fs from 'fs'

import query from '../helpers/query'

const {queryDealers} = query();
const app = express();

app.route('/dealers')
    .get((req, res) => {
        const {dealers} = JSON.parse(fs.readFileSync('src/data/dealers.json'));
        res.json({...queryDealers(['service', 'installation', 'residential'], dealers), dealers})
    });

app.route('/form')
    .post((req, res) => {
        res.json({message: `Thank you, ${req.body.name}, we'll get back to you shortly!`})
    });

export default app;


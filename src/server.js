import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import {matchRoutes} from 'react-router-config'
import directory from 'serve-index'
import fs from 'fs'

import routes from './client/Routes'
import renderer from './helpers/renderer';
import {serverStore as createServerStore} from './redux/store'
import dealerRoutes from './routes/api'

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', directory('public'));
app.use(express.static('public'));
app.use('/api', dealerRoutes);


app.get('*', (req, res) => {
    const store = createServerStore();
    const promises = matchRoutes(routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData(fs) : null
    }).filter(promise => promise);
    Promise.all(promises).then((promise) => {
        if (promise[0]) {
            promise.forEach((promise) => {
                promise.forEach(({data, func}) => {
                    if (data) {
                        req.dispatchData = data;
                        return store.dispatch(func(req))
                    }
                    return store.dispatch(func())
                })
            })
        }
        const content = renderer(req, store, {}, routes);
        res.send(content);
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

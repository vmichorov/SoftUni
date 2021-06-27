const express = require('express');
const { PORT } = require('./config');

const databeseCfg = require('./config/database');
const expressCfg = require('./config/express');
const routerCfg = require('./config/router');

startApp();
async function startApp() {
    const app = express();
    await databeseCfg(app);
    expressCfg(app);
    routerCfg(app);

    app.get('/', (req, res) => {
        res.send('It works!');
    })

    app.listen(PORT, () => {
        console.log(`Application started on http://localhost:${PORT}`);
    });
}
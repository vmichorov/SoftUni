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

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
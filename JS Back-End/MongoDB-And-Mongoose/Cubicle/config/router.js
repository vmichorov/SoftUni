const { notFound } = require('../controllers/404');
const { about } = require('../controllers/about');
const { createAcc, postAcc } = require('../controllers/accessory');
const { create, post } = require('../controllers/create');
const { details, attach, postAttach } = require('../controllers/details');
const { home } = require('../controllers/home');

module.exports = (app) => {
    app.get('/', home);
    app.get('/about', about);
    app.get('/details/:id', details);
    app.get('/create', create);
    app.post('/create', post);
    app.get('/accessory/create', createAcc);
    app.post('/accessory/create', postAcc);
    app.get('/details/:id/attach', attach);
    app.post('/details/:cubeId/attach', postAttach);
    app.all('*', notFound);
}
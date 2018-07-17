const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const config = require('./config');
const { httpHandler } = require('./HttpHandler');
const debug = require('debug')('5eplay-demo')

const app = new Koa();

let api = new Router();
api.get('*', httpHandler);

// let router = new Router();
// router.use('/api', api.routes(), api.allowedMethods());
// router.use('/', home)
app.use(cors());
app.use(api.routes());
app.listen(config.port,  () => debug(`listening on port ${config.port}`));
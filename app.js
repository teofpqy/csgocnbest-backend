const Koa = require('koa');
const config = require('./config')
const debug = require('debug')('hltv-demo')

const app = new Koa();

const router = require('./routes');
app.use(router.routes());
app.listen(config.port,  () => debug(`listening on port ${config.port}`));
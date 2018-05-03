const router = require('koa-router')({
  prefix: '/csgo'
});


const controllers = require('../controllers');

router.get('/matches', controllers.matches);

module.exports = router;
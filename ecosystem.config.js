module.exports = {
  apps : [{
    name      : '5eplay-API',
    script    : './app.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],
};

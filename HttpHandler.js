const axios = require('axios');
const config = require('./config');

const api = axios.create({
    baseURL: config.proxyBaseUrl,
    timeout: 1000,
});

const httpHandler = async (ctx) => {
    const requestUrl = ctx.request.url;
    const response = await api.get(requestUrl);
    ctx.body = response.data;
}

module.exports = {
    httpHandler,
}
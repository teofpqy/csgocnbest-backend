const axios = require('axios');
const api = axios.create({
    baseURL: 'https://csgo.5eplay.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
})
const httpHandler = async (ctx) => {
    const requestUrl = ctx.request.url;
    const response = await api.get(requestUrl);
    ctx.body = response.data;
}

module.exports = {
    httpHandler,
}
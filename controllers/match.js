const { HLTV } = require('hltv');

module.exports = async (ctx, nxet) => {
  const matches = await HLTV.getMatches();
  ctx.body = matches;
}
const { createClient } = require('bedrock-protocol');
function join() {
  createClient({
    host: 'congdongbanthan.mcsh.io',
    port: 30207,
    username: 'BotAFK'
  }).on('kick', join).on('error', join);
}
join();
const { createClient } = require('bedrock-protocol');
function join() {
  console.log('Trying to join...');
  createClient({
    host: 'congdongbanthan.mcsh.io',
    port: 30207,
    username: 'BotAFK'
  })
    .on('connect', () => console.log('BotAFK connected'))
    .on('kick', (reason) => console.log('Kicked:', reason))
    .on('error', (e) => console.log('Error:', e.message))
    .on('close', () => { console.log('Closed, reconnect...'); setTimeout(join, 5000); });
}
join();

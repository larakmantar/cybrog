const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

module.exports = client => {
   var oyun = [
     "-davet| Komudu ile botu davet et",
        "-help| komutu ile yardim alabilirsin",
    ];
  setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

 console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  client.user.setStatus("dnd");

        client.user.setActivity(oyun[random], "idle"); 
        }, 2 * 9000); 
}


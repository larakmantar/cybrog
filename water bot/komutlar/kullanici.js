const Discord = require("discord.js")
exports.run = async(client, message) => {
	
	let prefix = '-'
	const codare = new Discord.RichEmbed()
.setAuthor(`Water Bots Kullanici Yardım Menüsü`)
.setThumbnail('https://cdn.discordapp.com/attachments/760173908367900772/763782806248620042/waterbot.jpg')
.setTitle(`Water Bots Kullanici Yardım Komutları`)
 .setDescription  (`-rol-bilgi rol hakkinda bilgi verir \n -sunucu-pp sunucu resmini gosterir \n -ping botun pingini verir \n -say istatistik verir \n -davetlerim davetlermizi gosterir \n -istatistik botun bilgilerini verir`)
.setFooter(`water bots`)
.setImage("https://cdn.discordapp.com/attachments/744133412951949383/765268992331481178/standard_1.gif") 
  return message.channel.send(codare)
};




exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'kullanıcı', 
    description: 'The Help Command',
    usage: 'kullanıcı'
  };
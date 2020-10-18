const Discord = require("discord.js")
exports.run = async(client, message) => {
	
	let prefix = '-'
	const codare = new Discord.RichEmbed()
       .setAuthor(`Water Bots Yardım Menüsü`)
       .setThumbnail('https://cdn.discordapp.com/attachments/760173908367900772/763782806248620042/waterbot.jpg')
       .setTitle(`Water Bots Yardım Komutları`)
       .setDescription  (`-eglence  eglence komutlarını gösterir \n -moderasyon Moderasyon Komutlarını Gösterir. \n -kullanıcı Kullanıcı Komutlarını Gösterir.`)
       .addField("» Linkler", ` \n [Davet Et](https://discord.com/oauth2/authorize?client_id=765223575376363560&scope=bot&permissions=2080767167)` + "**  **" + `\n  [Destek Sunucusu](https://discord.gg/pdG7w9D)`  + "**  **" + `\n [Web Sitesi](yakinda)  `, false)
       .setFooter(`water bots`)
       .setImage("https://cdn.discordapp.com/attachments/744133412951949383/765268992331481178/standard_1.gif") 
  return message.channel.send(codare)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};
exports.help = {
  name: 'help',
  description: '[Admin Komutu]',
  usage: 'help'
};
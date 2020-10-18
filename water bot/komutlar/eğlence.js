const Discord = require("discord.js")
exports.run = async(client, message) => {
	
	let prefix = '-'
	const codare = new Discord.RichEmbed()
.setAuthor(`Water Bots Eglence Yardım Menüsü`)
.setThumbnail('https://cdn.discordapp.com/attachments/760173908367900772/763782806248620042/waterbot.jpg')
.setTitle(`Water Bots Eglence Komutları`)
 .setDescription  (`-mcödül <yazi> mc odulu verir \n -yazı-tura yazı tura oynar \n -sayı-tahmini \n -adam-asmaca`)
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
    name: 'eglence', 
    description: 'The Help Command',
    usage: 'eglence'
  };
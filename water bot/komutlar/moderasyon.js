const Discord = require("discord.js")
exports.run = async(client, message) => {
	
	let prefix = '-'
	const codare = new Discord.RichEmbed()
.setAuthor(`Water Bots Yardım Menüsü`)
.setThumbnail('https://cdn.discordapp.com/attachments/760173908367900772/763782806248620042/waterbot.jpg')
.setTitle(`Water Bots Yardım Komutları`)
 .setDescription  (`-ototag Sunucuya girenlere otomatik tag verir. \n -ototagkanal tag kanalini ayarlar \n -rol-bilgi Rollerin bilgilerini gösterir.\n -talep talep acmaniza yarar \n -sustur @kisi sesteki bir kisiyi susturur \n -kanal-kilitle kanali kilitler\n\ -davet-sıfırla davetleri sifirlar n\ davet-kanal-sıfırla davet kanalini sifirlar n\ -davet botu sunucunuza davet eder \n -davet-stokla davetleri stoklar \n -davet-oluştur davet oluşturur \n -davet-sil daveti siler \n -davet-kanal davet kanali oluşturur \n -davet-ekle bir kisiye davet ekler \n -capslock-engel capslocku engeller \n -sesli-susur sesliden susturur \n -duyuru <yazi> \n -mute <sure> mute atar \n -unmute <kisi> muteyi geri acar \n -oylama oylama yapar \n -giveaway cekilis yapar \n -otorol otorolu ayarlar \n -ban bir kisiye ban atar`)
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
    name: 'moderasyon', 
    description: 'The Help Command',
    usage: 'moderasyon'
  };
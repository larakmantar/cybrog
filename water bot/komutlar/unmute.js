const Discord = require("discord.js");
const ms = require("ms");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;

var mutelirolu = "Muted"; //MUTELENDİGİ ZAMAN VERİLECEK ROLU  BURAYA YAZINIZ...

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR"))
    return message.channel.send("Maleseef yetkin yok");
  let mutekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!mutekisi)
    return message.reply(
      `:warning: Lütfen bir kullanıcı etiketleyiniz! \nDoğru Kullanım; \`${prefix}unmute <@kullanıcı>\``
    );
  if (mutekisi.hasPermission("KICK_MEMBERS"))
    return message.reply(
      `:warning: Yetkili bir kişiyi unmuteleyemem! \nDoğru Kullanım; \`${prefix}unmute <@kullanıcı>\``
    );
  let muterol = message.guild.roles.find(`name`, mutelirolu);
  if (!muterol) {
    try {
      muterol = await message.guild.createRole({
        name: mutelirolu,
        color: "RANDOM",
        permissions: []
      });
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  await mutekisi.removeRole(muterol.id);
  message.reply(
    `<@${mutekisi.id}> kullanıcısının mutesi açıldı!`
  );

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["un-mute"],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: "unmute",
  description: "Etiketlediğiniz kişiye belirttiğiniz süre kadar mute atar.",
  usage: "unmute <@kullanıcı>>"
};
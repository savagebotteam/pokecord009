const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'incidents');
  if (!logchannel) return message.reply('I cannot find a incidents channel');
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":no_entry_sign: **Error:** You don't have the **Ban Members** permission!");
  if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply(`:redTick: I cannot ban that member`);
  message.guild.member(user).ban();;

  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(`:hammer: Bippity boppity **BAN**! I\'ve logged the ban in the incidents  channel.`)
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  category: "Moderation",
  description: 'Bans the mentioned user.',
  usage: 'ban [mention] [reason]'
};
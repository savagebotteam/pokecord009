const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let logchannel = message.guild.channels.find('name', 'incidents');
  if (!logchannel) return message.reply('I cannot find a incidents channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setTimestamp()
    .addField('Action:', 'Kick')
    .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
  message.channel.send(':white_check_mark: Success! I\'ve logged the kick in <#576585970279907339>.')
  return client.channels.get(logchannel.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  category: "Moderation",
  description: 'Kicks the mentioned user.(needs a incidents channel to send kicks)',
  usage: 'kick [mention] [reason]'
};
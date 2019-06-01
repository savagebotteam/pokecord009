const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  let modlog = message. guild.channels.find('name', 'incidents');
  if (!modlog) return message.reply('I cannot find a incidents channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
  const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .addField('Action:', 'Unban')
    .addField('User:', user.username)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(`:hammer: Bippity boppity **UNBAN**! I\'ve logged the unban in the incidents channel.`)
  return client.channels.get(modlog.id).send({embed});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  category: "Moderation",
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
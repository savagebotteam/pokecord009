const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("servers")
    .setColor(0xFF4500);

  message.channel.send(embed).then(m => {
  	embed
     	.setTitle("Servers List !")
  		.addField('Name', client.guilds.map(g => g.name))
      
      
      m.edit(embed);
  });
};

exports.help = {
  name: "servers",
  category: "General",
  description: "Servers LIST",
  usage: "servers"
};

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("UPVOTE")
    .setColor(0xFF4500);

  message.channel.send(embed).then(m => {
  	embed
     	.setTitle("**Updated As Of Date June 3 2019**")
  		.setDescription("**Version** : 1.2")
      .setDescription("Added New Commands : **1 Upvote DBL**,**2 Update**,3 **Activity GAME Server,Users,help Cmd**,Music Play Command BETA ** ")
      
      m.edit(embed);
  });
};

exports.help = {
  name: "upvote",
  category: "General",
  description: "Upvote Me Now!",
  usage: "upvote"
};

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("UPVOTE")
    .setColor(0xFF4500);

  message.channel.send(embed).then(m => {
  	embed
     	.setTitle("**UPVOTE** **ME**")
  		.setDescription("Upvote Me On **DBL**");

      m.edit(embed);
  });
};

exports.help = {
  name: "upvote",
  category: "General",
  description: "Upvote Me Now!",
  usage: "upvote"
};

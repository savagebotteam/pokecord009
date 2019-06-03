const ytdl = require('ytdl-core');
 
 
 
 
module.exports.run = async (bot, message, args) => {
 
 
if (!message.member.voiceChannel) return message.channel.send('Please connect to a voice channel!');
 
 
 
if (!args[0]) return message.channel.send('Please input a URL.');
 
 
let validate = await ytdl.validateURL(args[0]);
 
 
if (!validate) return message.channel.send('Please input a **valid** URL.');
 
 
 
let info = await ytdl.getInfo(args[0]);
 
 
let connection = await message.member.voiceChannel.join();
 
 
let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));
 
 
 
message.channel.send('Now playing: ${info.title}');
 
  }
 
 
 
  module.exports.help = {
    name: "play"
  }
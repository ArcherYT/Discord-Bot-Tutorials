const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const prefix = "!"

client.on("ready",() => {
console.log("Logged in as")
console.log(client.user.username)
console.log(client.user.id)
console.log("------")
console.log("Online!")
client.user.setStatus("online")
client.user.setActivity(' all tutorials', {type: 'LISTENING'})
});
client.on('message', message => {
  if (message.content === prefix+'avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});
client.on('message', message => {
	if (message.content === prefix+'ping') {
message.channel.send(`**Pong** ${client.ws.ping} beats per seconds`);
	} else if (message.content === '!beep') {
		message.channel.send('Boop.');
	}
});
 
client.on('message', message => { // Creating a message listner
if(message.content === prefix+"help") { //Making the embed
let embed = new MessageEmbed()
.setTitle("Command List")
.setDescription("****!help - Shows you all the current commands \n !ping - Replys with pong \n !avatar - Shows Your Avatar!**** ")
.setColor("RANDOM")
message.channel.send(embed)// sending the embed
}
});

client.on('message', message => {
  if (message.content === prefix+'fruit') {
    message.react('🍇 ');
     message.react('🍉');
     message.react('🍏');
     message.react('🥝');
     message.react('🍌');
    
  }
});


client.login("Replace-This-With-Your-Token");

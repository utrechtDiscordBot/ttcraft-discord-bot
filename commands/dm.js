const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Alleen staff leden kunnen dit.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Speler niet gevonden.");

    var bericht = arguments.join(" ").slice(22);
    user.send(bericht);
    if(bericht){ 
        return message.channel.send(`Het bericht is verstuurd naar ${user}!`);
    } else if(!bericht) return message.channel.send(`Geef ook een bericht mee om te sturen naar ${user}!`);

    

}


module.exports.help = {
    name: "dm"
}
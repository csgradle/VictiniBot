module.exports = {
    name: "dm",
    description: "DMs a user. Only the bot owner can use this command.",
    aliases: [],
    usage: '[user ID] [message]',
    async execute(msg, args) {
        if(!(msg.author.id == '326532809948659713')) return msg.reply("you need to be the owner of this bot to use this!");
        if(args.length >= 2) {
            let index = require('../../index.js');
            const id = args.shift();
            let message = '';
            if(args.length > 1) {
                message = args.join(" ");
            } else {
                message = args[0];
            }
            //const user = msg.guild.members.cache.get(id);
            const user = await index.client.users.fetch(id, false, true);
            user.send(message);
            msg.delete();
        } else if(args.length > 0) {
            msg.channel.send("you need to mention a user ID and add a message!");
        }
    }
}
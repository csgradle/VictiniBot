// https://discord.com/oauth2/authorize?client_id=487412160553680906&scope=bot
module.exports = {
    name: "invite",
    description: "gets a link to invite the bot to your server",
    aliases: [],
    usage: '',
    execute(msg, args) {
        msg.reply("You can invite me to your server here: https://discord.com/oauth2/authorize?client_id=487412160553680906&scope=bot");
    }
}
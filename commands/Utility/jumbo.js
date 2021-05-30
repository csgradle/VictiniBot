module.exports = {
    name: "jumbo",
    description: "sends a full image of an emoji",
    aliases: ['large'],
    usage: '[emoji]',
    execute(msg, args) {
        if(msg.content.match(/<:.+?:\d+>/g)) {
            msg.channel.send("https://cdn.discordapp.com/emojis/"+msg.content.match(/<:.+?:\d+>/g)[0].match(/\d+/g)+".png");
            
        } else if (msg.content.match(/<a:.+?:\d+>/g)) {
            msg.channel.send("https://cdn.discordapp.com/emojis/"+msg.content.match(/<a:.+?:\d+>/g)[0].match(/\d+/g)+".gif");
        } else {
            msg.channel.send("please include an emoji in your message");
            
        }
    }
}
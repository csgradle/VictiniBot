module.exports = {
    name: "avatar",
    description: "gets the avatar of a user",
    aliases: ['av', 'pfp'],
    usage: '[user]',
    execute(msg, args) {
        if(!msg.mentions.members.first()) {
            msg.channel.send(`${msg.author.username}'s avatar:`);
            msg.channel.send(msg.author.displayAvatarURL({format:"png",dynamic:true}));
        } else {
            msg.channel.send(`${msg.mentions.members.first().user.username}'s avatar:`);
            msg.channel.send(msg.mentions.members.first().user.displayAvatarURL({format:"png",dynamic:true}));
        }
    }
}
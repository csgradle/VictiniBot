module.exports = {
    name: "avatar",
    description: "gets the avatar of a user",
    aliases: ['av', 'pfp'],
    usage: '[user]',
    execute(msg, args) {
        if(msg.mentions.length == 0) {
            msg.channel.send(`${msg.author.username}'s avatar: <${msg.author.displayAvatarURL({format:"png",dynamic:true})}>`);
        } else {
            console.log(msg.mentions.members.first().name);
            msg.channel.send(`${msg.mentions.members.first().user.username}'s avatar:`);
            msg.channel.send(msg.mentions.members.first().user.displayAvatarURL({format:"png",dynamic:true}));
        }
    }
}
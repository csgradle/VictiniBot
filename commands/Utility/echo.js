module.exports = {
    name: 'echo',
    description: 'echoes whatever you say!',
    aliases: ['say'],
    usage: "[message]",
    async execute(msg, args) {
        if(args.length > 0) {
            msg.channel.send(args.join(" "));
        }
        
        msg.delete().then(msg => console.log(`echo from ${msg.author.username}`));
        
    }
}
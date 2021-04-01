module.exports = {
    name: "skip",
    description: "skips a song",
    aliases: [],
    usage: '',
    execute(msg, args) {
        
        const index = require('../../index.js');
        const server = index.servers[msg.guild.id];
        if(server.dispatcher) {
            server.dispatcher.end();
            msg.channel.send('skipping song');
        }
    }
}
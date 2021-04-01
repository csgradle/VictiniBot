
module.exports = {
    name: "stop",
    description: "stops the music and leaves the voice channel",
    aliases: [],
    usage: '',
    execute(msg, args) {
        
        const index = require('../../index.js');
        const server = index.servers[msg.guild.id];
        if(!msg.guild.me.voice.channel)  {
            msg.channel.send('i\'m not in a voice channel!');
            return;
        }
        server.queue = [];
        
        msg.guild.me.voice.channel.leave();
        msg.channel.send('goodbye music!');
        
    }
}
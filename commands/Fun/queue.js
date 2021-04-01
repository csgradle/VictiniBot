
module.exports = {
    name: "queue",
    description: "stops the music and leaves the voice channel",
    aliases: [],
    usage: '',
    execute(msg, args) {
        const index = require('../../index.js');
        const server = index.servers[msg.guild.id];
        let data = "**Songs:**\n";
        for(let i = 0; i < server.queue.length; i++) {
            data += `\`>\` ${i}: ${server.queue[i]}\n`;
        }
        msg.channel.send(data);
    }
}
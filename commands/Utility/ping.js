module.exports = {
    name: "ping",
    description: "Checks the latency of the bot",
    aliases: [],
    usage: '',
    async execute(msg, args) {
        let index = require('../../index.js');

        msg.channel.send('Loading data').then (async (message) =>{
            message.delete()
            message.channel.send(`🏓Latency is ${message.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(index.client.ws.ping)}ms`);
          });
    }
}
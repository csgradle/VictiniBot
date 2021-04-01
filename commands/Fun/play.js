const ytdl = require('ytdl-core');
function play(connection, msg) {
    let index = require('../../index.js');

    let servers = index.servers;
    let server = servers[msg.guild.id];
    try {
        server.dispatcher = connection.play(ytdl(server.queue[0], { filter: 'audioonly' }));
    } catch(error) {
        msg.channel.send('error. couldn\'t play song.');
        return;
    }
    server.queue.shift();

    server.dispatcher.on("finish", function() {
        
        if(server.queue[0]) play(connection, msg);
        else connection.channel.leave();
    });
}
module.exports = {
    name: "play",
    description: "plays a song",
    aliases: [],
    usage: '[user]',
    async execute(msg, args) {
        if(args.length == 1) {
            
            if(!msg.member.voice.channel) {
                msg.channel.send('please join a voice channel');
                return;
            }
            let index = require('../../index.js');
            let servers = index.servers;
            if(!servers[msg.guild.id]) servers[msg.guild.id] = {
                queue: []
            };
            let server = servers[msg.guild.id];
            
            let link = ""+args[0];
            server.queue.push(link);
            msg.channel.send('added song to queue');
            if(!msg.guild.voice || !msg.guild.voice.channelID) msg.member.voice.channel.join().then(function(connection) {
                msg.channel.send('joined vc!');
                play(connection, msg);
            });
        } else {
            msg.channel.send('give me a youtube link to play!');
        }
    }
}
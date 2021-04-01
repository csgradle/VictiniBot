
module.exports = {
    name: "play",
    description: "plays a song",
    aliases: [],
    usage: '[user]',
    async execute(msg, args) {
        if(args.length == 1) {
            let link = args[0];
            const ytdl = require('ytdl-core');
            try {
                let voiceChannel = msg.member.voice.channel;
                voiceChannel.join().then(connection => {
                    const stream = ytdl(link, { filter: 'audioonly' });
                    const dispatcher = connection.play(stream);
                    dispatcher.on('finish', () => voiceChannel.leave());
                });
            } catch {
                msg.channel.send('error! please send a proper link and join a voice channel.');
            }
        } else {
            msg.channel.send('give me a youtube link to play!');
        }
    }
}
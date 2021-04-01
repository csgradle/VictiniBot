const { MessageFlags } = require("discord.js");

module.exports = {
    name: "gifprune",
    description: "prunes gifs in a channel",
    aliases: [],
    usage: '[delete count]',
    execute(msg, args) {
        if(args.length == 0) {
            let deleted = 0;
            const messages = msg.channel.messages.cache.array();
            for(let i = 0; i < messages.length; i++) {
                
                if(messages[i].embeds.length > 0){
                    if(messages[i].embeds[0].type.toString() == 'gifv') {
                        messages[i].delete();
                        deleted++;
                    }
                }
            }
            if(deleted == 0) {
                msg.channel.send('couldn\'t find any gifs to delete!');
            } else {
                msg.channel.send(deleted + ' messages deleted.').then(sentMessage => sentMessage.delete({ timeout:5000 }));
            }
        } else {
            const delCount = +args[0];
            let deleted = 0;
            const messages = msg.channel.messages.cache.array();
            for(let i = messages.length-1; i >= 0 && deleted < delCount; i--) {
                console.log(i);
                if(messages[i].embeds.length > 0){
                    if(messages[i].embeds[0].type.toString() == 'gifv') {
                        messages[i].delete();
                        deleted++;
                        
                    }
                }
            }
            if(deleted == 0) {
                msg.channel.send('couldn\'t find any gifs to delete!');
            } else {
                msg.channel.send(deleted + ' messages deleted.');
            }
        }
    }
}
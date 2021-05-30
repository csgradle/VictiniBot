module.exports = {
    name: "edits",
    description: "checks the edits on a message",
    aliases: [],
    usage: '[message ID]',
    async execute(msg, args) {
        let message;
        
        try {
            message = await msg.channel.messages.fetch(args[0]);
        } catch {
            msg.reply('please give me a message ID number');
            return;
        }
        console.log(message);
        if(!message._edits) {
            msg.reply('that message doen\'t have any edits, or it\'s from too long ago!');
            return;
        }
        
        const edits = message._edits;
        if(message._edits.length == 0) {
            msg.reply('that message has no edits!');
            return;
        }

        let data = '**EDITS:** (ordered by latest edit)\n';
        
        for(let i = 0; i < edits.length; i++) {
            let edit = edits[i].content;
            data += "\`>\`  " + edit + "\n";
        }
        msg.channel.send(data);
    }
}
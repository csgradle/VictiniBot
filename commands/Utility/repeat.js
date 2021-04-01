
module.exports = {
    name: "repeat",
    description: "repeats a certain phrase. only the bot owner can use this command.",
    aliases: [],
    usage: '[amount] [timeout] [message]',
    async execute(msg, args) {
        let amount = args.shift();
        let time = args.shift();
        let message = args.join(" ");
        if(!(msg.author.id == '326532809948659713')) return msg.reply("you need to be the owner of this bot to use this!");
        let i = 0;
        console.log("set a repeat in " + msg.channel.name + " for " + amount + " times, " + time + "ms, " + message + ".");
        const repeat = setInterval(function() { 
            msg.channel.send(message); 
            i++;
            if(i > amount) clearInterval(repeat);
        }, time);
        
    }
}
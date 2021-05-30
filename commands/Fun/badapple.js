module.exports = {
    name: "badapple",
    description: "renders bad apple for you! please don't abuse the command ;-;",
    aliases: [],
    usage: '',
    async execute(msg, args) {
        msg.channel.send("command in development...");
        return;
        msg.channel.send("Starting...");
        const videoText = require("../videoText.json")
        fr.onload = function(e) { 
            videoText = JSON.parse(e.target.result);
            
        }
        await wait(1000);
        var fr = new FileReader();

        
    }
}
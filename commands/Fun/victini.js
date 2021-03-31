
require("dotenv").config();

const fetch = require("node-fetch");
module.exports = {
    name: "victini",
    description: "returns a gif of victini, or just a gif search",
    aliases: ["v", 'gif', 'gifsearch', 'tenor'],
    usage: "[gif search keywords]",
    async execute(msg, args) {
        let keywords = "victini";
        if(args.length > 0) {
            keywords = args.join(" ");
        }
        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_TOKEN}`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(json.results.length * Math.random());
        msg.channel.send(json.results[index].url);

    }
}
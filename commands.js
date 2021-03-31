const { prefix } = require('./config.json');

const fs = require('fs');
let commands = {};
const commandFolders = fs.readdirSync('./commands');
for(const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        commands[command.name] = command;
    }
}

module.exports = {
    respond (msg) {
        let tokens = msg.content.split(' ');
        let commandName = tokens.shift(); // removes first index and returns it
        if(commandName.substring(0,2) === "v!"){
            commandName = commandName.substring(2).toLowerCase();
            if(!(commandName in commands)) return;
            
            const command = commands[commandName];
            try {
                command.execute(msg, tokens);
            } catch (error) {
                console.error(error);
                msg.reply('sorry bud, there was an error trying to execute that command :(');
            }
        }
    },
    commandList: commands,
    
}
// pokemon type chart?
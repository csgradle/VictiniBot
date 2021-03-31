const { prefix } = require('../../config.json');

module.exports = {
    name: 'help',
    description: 'shows all commands',
    aliases: ['h', 'commands'],
    usage: '[command name]',
    execute(msg, args) {
        if(args.length == 0) {
            let commandHandler = require('../../commands.js');
            let data = '';
            for(const command in commandHandler.commandList) {
                data += '\`' + command.toString() + '\`,';   
            }
            data = data.substring(0, data.length-1);
            msg.channel.send(`✨Here's a list of my commands!✨ (prefix: \`${prefix}\`)\n` + data + `\nTo see more about a specific command, try using \`${prefix}help [commandName]\``);
        } else {
            let key = args[0];
            let commandHandler = require('../../commands.js');
            if(!(key in commandHandler.commandList)) { 
                msg.channel.send('That command doesn\'t exist! did you perhaps mistype it?');
                return;
            }
            let data = '';
            let cmd = commandHandler.commandList[key];
            data += '**Command Name: **' + cmd.name.toString() + '\n';
            data += '**Description: **' + cmd.description.toString() + '\n';
            data += '**Usage: **' + prefix + cmd.name.toString() + " " + cmd.usage.toString();

            msg.channel.send(data);
        }
        
    },
};
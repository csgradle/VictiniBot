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

        if((" "+msg.content+" ").includes(' lit ') && msg.author.id=='416002170991935488') {
            msg.reply("i think you mean LITERALLY");
        }

        let lower = msg.content.toLowerCase();
        if(msg.guild.id == '660282758693912651' && (lower.includes('fried') ||lower.includes('フライド')) && (lower.includes('chicken') || lower.includes('チキン') )) {
            msg.delete().then(msg.channel.send(msg.author.username + ", you have been warned for saying something bad >:(").then(console.log(msg.author.username + " was warned for saying \"" + msg.content + "\"")));
        }
        if(msg.content=='chicken') {
            msg.channel.send('is awesome!');
        }
        if(msg.content=='v!sus' && msg.guild.id == '766083218301779970') {
            msg.channel.send("⠀⠀⠀⡯⡯⡾⠝⠘⠀⠀sus⠀⠀⠀⠀⠀⠀sus⠀⠀⢊⠘⡮⣣⠪⠢⡑⡌\n"+
            "⠀⠀⠀⠟⠝⠈⠀⠀⠀⠡⠀⠠⢈⠠⢐⢠⢂⢔⣐⢄⡂⢔⠀⡁⢉⠸⢨⢑⠕⡌\n"+
            "⠀⠀⡀⠁⠀sus⡀⢂⠡⠈⡔⣕⢮⣳⢯⣿⣻⣟⣯⣯⢷⣫⣆⡂⠀⠀⢐⠑⡌\n"+
            "⢀⠠⠐⠈⠀⢀⢂⠢⡂⠕⡁⣝⢮⣳⢽⡽⣾⣻⣿⣯⡯⣟⣞⢾⢜⢆⠀⡀⠀⠪\n"+
            "⣬⠂sus⢀⢂⢪⠨⢂⠥⣺⡪⣗⢗⣽⢽⡯⣿⣽⣷⢿⡽⡾⡽⣝⢎⠀⠀⠀⢡\n"+
            "⣿⠀⠀⠀⢂⠢⢂⢥⢱⡹⣪⢞⡵⣻⡪⡯⡯⣟⡾⣿⣻⡽⣯⡻⣪⠧⠑⠀⠁⢐\n"+
            "⣿⠀⠀⠀⠢⢑⠠⠑⠕⡝sus⡝⡎⣞⢽⡹⣕⢯⢻⠹⡹⢚⠝⡷⡽⡨⠀⠀⢔\n"+
            "⣿⡯⠀⢈⠈⢄⠂⠂⠐⠀⠌⠠⢑⠱⡱⡱⡑⢔⠁⠀⡀⠐⠐⠐⡡⡹⣪⠀⠀⢘\n"+
            "⣿⣽⠀⡀⡊⠀⠐⠨⠈⡁⠂⢈⠠⡱⡽⣷⡑⠁⠠⠑⠀⢉⢇⣤⢘⣪⢽⠀⢌⢎\n"+
            "⣿⢾⠀⢌⠌⠀⡁⠢⠂⠐⡀⠀⢀⢳⢽⣽⡺⣨⢄⣑⢉⢃⢭⡲⣕⡭⣹⠠⢐⢗\n"+
            "⣿⡗⠀⠢⠡⡱⡸⣔⢵⢱⢸⠈⠀⡪⣳⣳⢹⢜⡵⣱⢱⡱⣳⡹⣵⣻⢔⢅⢬⡷\n"+
            "⣷⡇⡂⠡⡑⢕⢕⠕⡑⠡⢂⢊⢐⢕⡝⡮⡧⡳⣝⢴⡐sus⡫⡒⣕⢏⡮⣷⡟\n"+
            "⣷⣻⣅⠑⢌⠢⠁⢐⠠⠑⡐⠐⠌⡪⠮⡫⠪⡪⡪⣺⢸⠰⠡⠠⠐⢱⠨⡪⡪⡰\n"+
            "⣯⢷⣟⣇⡂⡂⡌⡀⠀⠁⡂⠅⠂⠀⡑⡄⢇⠇⢝⡨⡠⡁⢐⠠⢀⢪⡐⡜⡪⡊\n"+
            "⣿⢽sus⡄⠕⡅⢇⠂⠑⣴⡬⣬⣬⣆⢮⣦⣷⣵⣷⡗⢃⢮⠱⡸⢰⢱⢸⢨⢌\n"+
            "⣯⢯⣟⠸⣳⡅⠜⠔⡌⡐⠈⠻⠟sus⣿⣿⠿⡻⣃⠢⣱⡳⡱⡩⢢⠣⡃⠢⠁\n"+
            "⡯⣟⣞⡇⡿⣽⡪⡘⡰⠨⢐⢀⠢⢢⢄⢤⣰⠼⡾⢕⢕⡵⣝⠎⢌⢪⠪⡘⡌⠀\n"+
            "⡯⣳⠯⠚⢊⠡⡂⢂⠨⠊⠔⡑⠬⡸⣘⢬⢪⣪⡺⡼⣕⢯⢞⢕⢝⠎⢻⢼⣀⠀\n"+
            "⠁⡂⠔⡁⡢⠣⢀⠢⠀sus⡐⡱⡘⡔⡕⡕⣲⡹⣎⡮⡏⡑⢜sus⢩⣗⣯⣟\n"+
            "⢀sus⠀⡂⡃⠅⠊⢄⢑⠠⠑⢕⢕⢝⢮⢺⢕⢟⢮⢊⢢⢱⢄⠃⣇⣞⢞⣞⢾\n"+
            "⢀⠢⡑⡀⢂⢊⠠⠁⡂⡐⠀⠅⡈⠪⠪⠪⠣⠫⠑⡁⢔sus⣜⢦⡰⡎⡯⡾⡽");
        }

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
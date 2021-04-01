console.log("boop boop!");

require("dotenv").config();

const fetch = require('node-fetch');
const Discord = require('discord.js');

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('bot is up and running!');
    client.user.setActivity('v!help', { type: 'WATCHING' });
}
const commandHandler = require("./commands");
client.on('message', commandHandler.respond);

let servers = {};

module.exports = {
    client: client,
    servers
}
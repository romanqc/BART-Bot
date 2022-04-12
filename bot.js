
require('dotenv').config();

const Discord = require('discord.js');
//the thing that connects the bot to the api
const client = new Discord.Client();

//need to authenticate the bot
//paste token
client.login(process.env.BOTTOKEN);

//insure that the bot is calling back, or the bot is working
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('bot.js is working');
}

const commandHandler = require('./commands.js');

client.on('message', commandHandler);

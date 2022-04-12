const fetch = require("node-fetch");

const map = require("./commands/map.js");
const bart = require("./commands/bart.js");
const help = require("./commands/help.js");
const line = require("./commands/line.js");
const abbr = require("./commands/abbr.js");
const gif = require("./commands/gif.js");
const math = require("./commands/math.js");
const spec = require("./commands/spec.js");

const commands = {
    map: map,
    bart: bart,
    help: help,
    line: line,
    abbr: abbr,
    gif: gif,
    math: math,
    spec: spec,
    titles: [
        'map', 
        'bart',
        'help',
        'line',
        'abbr',
        'gif',
        'math',
        'spec'
    ],
};


module.exports = async function (msg) {
    if (msg.channel.id == process.env.CHANNELID1 || process.env.CHANNELID2 || process.env.CHANNELID3 || 818230761118367844 || process.env.CHANNELTEST || 819370410315481160) {
        let tokens = msg.content.split(" "); //take the string and split it into an array
        let command = tokens.shift();        //shift the array over one unit
        if (command.charAt(0) == '.') {      //command is an array containing all characters after '!'
            command = command.substring(1);
            if (commands.titles.includes(command)) {
                commands[command](msg, tokens);
            }
            else {
                msg.channel.send('command error');
            }
        }
    }
};
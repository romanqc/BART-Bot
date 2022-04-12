module.exports = async function (msg) {

    var helpMessage = 'go to ' + msg.guild.channels.cache.get(process.env.CHANNELIDREF).toString();
    msg.channel.send(helpMessage);
    //msg.channel.send(attachment);
    //console.log(response);

};
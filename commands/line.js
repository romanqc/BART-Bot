
const lines = {
    lineNames: [
        "red", 
        "blue", 
        "green", 
        "orange", 
        "yellow",
     ],
 };

module.exports = async function (msg, args) {

    let keywords = " ";
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    if (lines.lineNames.includes(keywords)) {
        if (keywords == 'blue') {
            msg.channel.send('**' + 'Blue Line' + '**', {files: ["./commands/img/blueline.jpg"]});
        }
        if (keywords == 'red') {
            msg.channel.send('**' + 'Red Line' + '**', {files: ["./commands/img/redline.jpg"]});
        }
        if (keywords == 'yellow') {
            msg.channel.send('**' + 'Yellow Line' + '**', {files: ["./commands/img/yellowline.jpg"]});
        }
        if (keywords == 'orange') {
            msg.channel.send('**' + 'Orange Line' + '**', {files: ["./commands/img/orangeline.jpg"]});
        }
        if (keywords == 'green') {
            msg.channel.send('**' + 'Green Line' + '**', {files: ["./commands/img/greenline.jpg"]});
        }
    }
    else {
        msg.channel.send('invalid line');
    }
}
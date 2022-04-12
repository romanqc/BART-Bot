
module.exports = async function (msg, args) {

    let keywords = " ";
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    msg.channel.send('**' + 'Bart Map' + '**', {files: ["./commands/img/bartmap.png"]});
};
const stations = {
    stationAbbrs: [
        "12th", "16th", "19th", "24th", "ashb", "antc", 
        "balb", "bayf", "bery", "cast", "civc", "cols", 
        "colm", "conc", "daly", "dbrk", "dubl", "deln", 
        "plza", "ember", "frmt", "ftvl", "glen", "hayw", 
        "lafy", "lake", "mcar", "mlbr", "mlpt", "mont", 
        "nbrk", "ncon", "oakl", "orin", "pitt", "pctr", 
        "phil", "powl", "rich", "rock", "sbrn", "sfia", 
        "sanl", "shay", "ssan", "ucty", "warm", "wcrk", 
        "wdub", "woak"
    ],
    stationNames: [
        "12th", "16th", "19th", "24th", "ashby", "antioch", "balboa park", "bay fair", "berryessa", "castrovalley", "civic center", 
        "coliseum", "colma", "concord", "daly city", "downtown berkeley", 
        "dublin pleasanton", "el Cerrito del norte", "el cerrito plaza", "embarcadero", "fremont", "fruitvale", "glen park",
        "hayward", "lafayette", "lake merritt", "macarthur", "millbrae", 
        "milpitas", "montgomery", "north berkeley", "north concord", "oakland airport", "orinda", "pittsburg", "pittsburg center", 
        "pleasant hill", "powell", "richmond", "rockridge", 
        "san bruno", "sf airport", "san leandro", "south hayward", "south sf", "union city", "warm springs", "walnut creek",
        "west dublin", "west oakland", 
    ],
};

module.exports = async function (msg, args) {

    let keywords = " ";
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    if (stations.stationNames.includes(keywords)) {
        let position = stations.stationNames.indexOf(keywords);
        let returnAbbr = stations.stationAbbrs[position];
        msg.channel.send( 'the abbreviation is: ' + '**' + returnAbbr + '**');
    }
    else {
        msg.channel.send('invalid station name');
    }

};
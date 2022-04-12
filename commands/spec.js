const { Message } = require("discord.js");
const fetch = require("node-fetch");

const stations = {
   stationAbbr: [
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


    if (stations.stationAbbr.includes(keywords) || stations.stationNames.includes(keywords)) {

        if (stations.stationNames.includes(keywords)) {
            let position = stations.stationNames.indexOf(keywords);
            let returnAbbr = stations.stationAbbr[position];
            keywords = returnAbbr.toUpperCase();
        } 
        else if (stations.stationAbbr.includes(keywords)) {
            keywords = keywords.toUpperCase();
        }

        let url = `https://api.bart.gov/api/etd.aspx?cmd=etd&orig=${keywords}&key=Q52K-PUEI-929T-DWEI&json=y`;
        let response = await fetch(url);
        let json = await response.json();
        const checkBartTrains = checkBartETD();
        msg.channel.send(checkBartTrains);

        function checkBartETD() {
            let checkMessage = [];
            let bartObjectTree = Object.keys(json.root.station[0]);
            if(bartObjectTree.length == 3 && bartObjectTree[2] == 'etd'){
                const trainsComingMessage = createBartTrainsMessage();
                checkMessage = trainsComingMessage;
            } else {
                checkMessage = 'bart trains are currently not running';
            }
            return checkMessage;
        }

        function createBartTrainsMessage() {
            let bartMessage = [];
            for (let i = 0; i < json.root.station[0].etd.length; i++) {
                for (let j = 0; j < json.root.station[0].etd[i].estimate.length; j++) {
                    bartMessage[i] =
                    '``' + (i+1) + '``' + 
                    'Train: ' + '**' + json.root.station[0].etd[i].destination + '**, ' + 
                    'Arriving in: ' + '**' + json.root.station[0].etd[i].estimate[j].minutes + 'min**';
                }
            }
            return bartMessage;
        }
    } 
    else {
        msg.channel.send('invalid station name or abbreviation');
    }
    
}


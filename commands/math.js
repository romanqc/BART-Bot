const symbols = {
    mathSymbols: ['+', '-', '*', '/'],
};

module.exports = async function (msg, args) {

    let keywords = " ";
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    let toArr = keywords.split("");

    if (toArr.includes('+')) {
        msg.channel.send(Number(aNumber()) + Number(bNumber()));
        if (aNumber() == '1' && bNumber() == '1') {
            msg.channel.send('u dont know what 1+1 is? ok...');
        }
        if (aNumber() == '9' && bNumber() == '10') {
            msg.channel.send('**' + ' SIKE ' + '**' + 'its 21!');
        }
    }
    else {
        msg.channel.send("huh, i dont understand this");
    }



    function aNumber() {
        let a = [];
        for (let i = 0; i < toArr.length; i++) {
            if (toArr.indexOf('+') > i){
                a[i] = toArr[i];
            }
        }
        a = a.join("");
        return a;
    }

    function bNumber() {
        let b = [];
        for (let i = 0; i < toArr.length; i++) {
            if (toArr.indexOf('+') < i){
                b[i] = toArr[i];
            }
        }
        b = b.join("");
        return b;
    }
}

// arrayOfLetters = keywords.split(" ");
// positionOfPlus = keywords.indexOf('+');
// let a = new Number(arrayOfLetters[0]);
// let b = new Number(arrayOfLetters[2]);
// let c = a+b;
// msg.channel.send(c);

// for (let i = 0; i < toArr.length; i++) {
//     let a = [];
//     if (toArr.indexOf('+') < i) {
//         a = toArr[i];
//         msg.channel.send(a);
//     }
// }




////////////////THIS IS WORKING FOR ADDITION:

// let keywords = " ";
//     if (args.length > 0) {
//         keywords = args.join(" ");
//     }
//     let toArr = keywords.split("");

//     if (toArr.includes('+')) {
//         msg.channel.send(Number(aNumber()) + Number(bNumber()));
//         if (aNumber() == '1' && bNumber() == '1') {
//             msg.channel.send('u a lil dummy, u dunno wut 1 + 1 is. i might just hurt u, u lil bich');
//         }
//     }
//     else {
//         msg.channel.send("huh, wtf is this");
//     }



//     function aNumber() {
//         let a = [];
//         for (let i = 0; i < toArr.length; i++) {
//             if (toArr.indexOf('+') > i){
//                 a[i] = toArr[i];
//             }
//         }
//         a = a.join("");
//         return a;
//     }

//     function bNumber() {
//         let b = [];
//         for (let i = 0; i < toArr.length; i++) {
//             if (toArr.indexOf('+') < i){
//                 b[i] = toArr[i];
//             }
//         }
//         b = b.join("");
//         return b;
//     }

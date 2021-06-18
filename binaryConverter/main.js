function reverseString(str) {
    return str.split("").reverse().join("");
}

function decimal() {

    var bin = document.getElementById("binary").value
    var dec = 0;
    var tempBinInts = [];
    var bin = reverseString(bin);

    for (i=0; i<=bin.length-1; i++) {
        tempBinInts.push(bin[i]);
    }

    console.log(tempBinInts)

    for (var i=0; i<=bin.length-1; i++) {
        dec += tempBinInts[i]*2**(i)
    }

    result = document.getElementById("result").innerHTML = dec;
}

let size = {
    "small": {"dp":"5", "explorer":500, "pro":900},
    "medium": {"dp": "10", "explorer": 750,  "pro":1350},
    "large": {"dp": "15", "explorer": 1200, "pro": 2160},
    "enterprise": {"dp": ">15", "explorer": 1500, "pro": 2700}
}

let a = 50*10**6;
let b = 50*10**6;
let c = 150*10**6;
let d = 1150*10**6;

let overA = [0.0000080, 0.0000015];
let overB = [0.0000011, 0.0000008];
let overC = [0.0000009, 0.0000005];
let overD = [0.0000009, 0.0000002];

//let userSize = "large";
//let dp = 1150*10**6;


function subscription(userSize) {

    /// questo mi serve per passare value al valore della funzione 
    value = userSize;
    var datapoint = "";
    var subExplorer = 0;
    var subPro = 0;
        
    if (userSize === "small") {
        datapoint = size["small"].dp
        subExplorer = size["small"].explorer
        subPro = size["small"].pro
        } else if (userSize === "medium") {
        datapoint = size["medium"].dp
        subExplorer = size["medium"].explorer
        subPro = size["medium"].pro
        } else if (userSize === "large") {
        datapoint = size["large"].dp
        subExplorer = size["large"].explorer
        subPro = size["large"].pro
        } else {
        datapoint = size["enterprise"].dp
        subExplorer = size["enterprise"].explorer
        subPro = size["enterprise"].pro
        }
    
    document.getElementById("result_size").innerHTML = "DataPoints: " + datapoint + " Explorer: " + subExplorer + " Pro: " + subPro
    console.log({dp:datapoint, subExplorer:subExplorer, subPro:subPro})    
    return {dp:datapoint, subExplorer: subExplorer, subPro:subPro};
    
}

function fee (dp) {
    
    value = dp;
    if (value == "large") {
        dp = 150*10**6
    }else if (value == "little") {
        dp = 5*10**6
    }
    
    var feeExplorer = 0
    var feePro = 0
        
    if (dp > d) {
        feeExplorer = dp*overA[0]+(dp-b)*overB[0]+(dp-c)*overC[0]+(dp-d)*overD[0]
        feePro = dp*overA[1]+(dp-b)*overB[1]+(dp-c)*overC[1]+(dp-d)*overD[1]
        } else if (dp > c) {
        feeExplorer = dp*overA[0]+(dp-b)*overB[0]+(dp-c)*overC[0]
        feePro = dp*overA[1]+(dp-b)*overB[1]+(dp-c)*overC[1]
        } else if (dp > b) {
        feeExplorer = dp*overA[0]+(dp-b)*overB[0]
        feePro = dp*overA[1]+(dp-b)*overB[1]
        } else if (dp < b) {
        feeExplorer = dp*overA[0]
        feePro = dp*overA[1]
        }
    
    document.getElementById("result_dp").innerHTML = "Monthly Fee Explorer: " + feeExplorer + " Monthly Fee Pro: " + feePro
    console.log({feeExplorer: feeExplorer, feePro: feePro})    
    return {feeExplorer: feeExplorer, feePro: feePro}    
}



//console.log(subscription(userSize))
//console.log(fee(dp))


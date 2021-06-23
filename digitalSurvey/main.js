var score = 0;

var poorest = "Mmmm, diciamo che non ci stai neanche provando. Mi pare che la tua azienda non sia pronta a competere in un ecosistema digitale. Probabilmente i tuoi competitor ti stanno insidiando e il business non procede più come ai vecchi tempi. Ti suggeriamo di correre ai ripari e rendere la tua azienda dinamica e competitiva; ci sono un sacco di possibilità per far crescere la tua attività!";

var poor = "Ogni lungo viaggio inizia con un passo! E il tuo viaggio è certamente iniziato. La strada davanti a te è lunga ma sei una persona curiosa e attenta e non mancherai di trovare spunti di miglioramento; i risultati non tarderanno ad arrivare, ma non demordere!";

var medium = "La macchina digitale è partita! Ti stai guardando intorno e predendo confidenza con gli strumenti digitali, forse già ottenendo le prime soddisfazioni. Continua a studiare e a sperimentare per diventare un vero campione del digitale (e il tuo business sarà il primo a beneficiarne!)";

var high = "Accidenti ci stai dando dentro! La tua azienda è sicuramente tra i riferimenti del settore per quanto concerne il livello di digitalizzazione; sei al passo con il progresso tecnologico e non ti mancano conoscenze e competenze. Continua così!"

var highest = "Abbiamo un campione! La tua azienda primeggia in quanto a conoscenza e uso di strumenti di digitalizzazione; è forse lo standard al quale ambiscono i tuoi competitor. Sfrutta questa tua conoscenza per educare il mercato e far crescere consapevolezza. Tutti ne beneficieranno, la tua azienda in primis!"

function evaluate (choice) {
    

    if (choice === "smallest") {
        score += 0;
    } else if (choice === "small") {
        score += 5;
    } else if (choice === "medium") {
        score += 10;
    } else if (choice === "high") {
        score += 15;
    } else if (choice === "highest") {
        score += 20;
    }

}

function assessment () {

    var touchpoint = document.getElementById("touchpoint").value;
    evaluate(touchpoint)

    var roles = document.getElementById("roles").value;
    evaluate(roles)

    var tools = document.getElementById("tools").value;
    evaluate(tools)

    var smart = document.getElementById("smart").value;
    evaluate(smart)

    var inbound = document.getElementById("inbound").value;
    evaluate(inbound)

    var customer = document.getElementById("customer").value;
    evaluate(customer)

    if (score < 20) {
        result = poorest;
    } else if (score === 120) {
        result = highest;
    } else if (score > 90 && score < 120) {
        result = high;
    } else if (score > 50 && score <= 90) {
        result = medium;
    } else if (score >= 20 && score <= 50) {
        result = poor;
    }

    //result = score;

    document.getElementById("resultTitle").innerHTML="Il tuo Risultato: ";
    
    document.getElementById("result").innerHTML=result;

    console.log(score)

    score = 0;
}
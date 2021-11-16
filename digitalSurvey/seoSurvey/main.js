// test results

var score = 0;

var poorest = "Mi pare ci sia molto lavoro da fare! Ma non preoccupare! Siamo qui per questo; la cosa più difficile è iniziare, poi tutto viene di conseguenza.";

var poor = "Ogni lungo viaggio inizia con un passo! E il tuo viaggio è certamente iniziato. La strada davanti a te è lunga ma sei una persona curiosa e attenta e non mancherai di trovare spunti di miglioramento; affidati a un esperto per avere il giusto boost!";

var medium = "Ti sei messo in moto! Ti stai guardando intorno e predendo confidenza con gli strumenti digitali, forse già ottenendo le prime soddisfazioni. Con l'affiancamento di un esperto SEO, la tua azienda è pronta a spiccare il volo! ";

var high = "Accidenti ci stai dando dentro! Vale la pena studiare un piano SEO specialistico per il tuo settore, e iniziare a insediare le prime posizioni dei tuoi competitors!"

var highest = "Abbiamo un campione! Forse potresti pensare allora a investire anche in contenuti promozionali, digital PR, e advertising sui motori di ricerca. Così potrai davvero raggiungere il top! Parliamone!"

// regex validation (formal validation only)

function validateEmail(inputEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputEmail).toLowerCase());
}

// converting answers to a score 

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

// main function (linked to the submit button)

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

    // add here any further questions, with the same structure as above

    // evaluating the score (adjust accordingly if more questions are added; each new question = +5)

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

    var email = document.getElementById("email").value;

    if (validateEmail(email) !== true ) {
        result = "Hai inserito una mail valida?"
    }

    document.getElementById("resultTitle").innerHTML="Il tuo Risultato: ";
    
    document.getElementById("result").innerHTML=result;

    console.log(score)

    score = 0;
}
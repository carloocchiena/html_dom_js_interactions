function petType (pet) {
    
    value = pet;
    var foodType = "";

    if (pet === "dog") {
        foodType = "meat"
    } else if (pet === "cat") {
        foodType = "fishes"
    } else if (pet === "bird") {
        foodType = "seeds"
    }

    return foodType
}

function petSize (size) {
    
    value = size;
    var foodQ = "";

    if (size === "small") {
        foodQ = "a little"
    } else if (size === "large") {
        foodQ = "a lot"
    }

    return foodQ
}

function result () {
    /// anche qui, attingo alle variabili dal DOM e le uso per far girare le mie funzioni
    /// la differenza rispetto alla modifica dinamica come nel pricing ark è che lì l'azione onchange chiamava /// direttamente esecuzione della funzione
    var pet = document.getElementById("type").value;
    var size = document.getElementById("size").value;

    items = petType(pet)
    quant = petSize(size)

    var food = `You should give to your pet ${quant} of ${items}`;

    document.getElementById("food").innerHTML=food;
}
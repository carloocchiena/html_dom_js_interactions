/// prendi gli elementi dal DOM e usali per popolare la funzione; ritorna la variabile nel dom, che è un div bianco prima che giri la funzione
function sayHello () {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var hello = `Welcome on board ${fName} ${lName}`;

    document.getElementById("hello").innerHTML = hello;
}
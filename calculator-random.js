function changer (id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}

function calculator(){
    var element = document.getElementById("op");
    var cadena = element.innerHTML.split("+");
    var aux = 0;
    aux = parseInt(aux);
    for(i = 0; i<cadena.length; i++){
        aux += parseInt(cadena[i]);
    }
    aux = " = " + aux;
    changer("res",aux);
}

function numAleatorio(){
    return Math.floor(Math.random() * 100);
}

function another(){
    var aleatorio1 = numAleatorio();
    var aleatorio2 = numAleatorio();
    var newValue = aleatorio1 + "+" + aleatorio2;
    changer("res","")
    changer("op",newValue);
}

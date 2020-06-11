function asignaEcuacion() {
    let fecha = getFecha();
    let date = new Date();
    fecha.value =date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
    let ecuacion = getEcuacion();
    this.a = randomInt(20, -20, 0);
    this.b = randomInt(20, -20, 21);
    this.c = randomInt(20, -20, this.b);
    this.intentos = 0;
    ecuacion.value = this.b >= 0 ?
        this.a + "x+" + this.b + "=" + this.c :
        this.a + "x" + this.b + "=" + this.c;
    posiblesResultados();
    inicializar();
}
function inicializar() {
    let resultado = getResultado();
    resultado.innerHTML = "";
    let solucion = getSolucion();
    solucion.value = "";
    let otra = getBotonOtra();
    otra.hidden = true;
}
function randomInt(min, max, dif) {
    let num = Math.floor(Math.random() * (max + 1 - min)) + min;
    num = num !== dif ? num : randomInt(min, max);
    return num;
}
function posiblesResultados() {
    this.resultados = new Array();
    this.resultados.push((this.c - this.b) / this.a);
    this.resultados.push(this.res2 = (this.c - this.b) + "/" + this.a);
    this.resultados.push(resultados[0].toFixed(2));
    if ((this.c - this.b) < 0 && this.a < 0) {
        this.resultados.push(Math.abs((this.c - this.b)) + "/" + Math.abs(this.a));
    }
    else if ((this.c - this.b) < 0 && this.a > 0) {
        this.resultados.push(Math.abs((this.c - this.b)) + "/" + (this.a - this.a - this.a));
    }
    else if ((this.c - this.b) > 0 && this.a < 0) {
        this.resultados.push(((this.c - this.b) - (this.c - this.b) - (this.c - this.b)) + "/" + Math.abs(this.a));
    }
    else {
        this.resultados.push((this.c - this.b) + "/" + this.a);
    }
}

function valida() {
    this.intentos += 1;
    let error = !validaIgual() ? "Incorrecto" : "Correcto";
    if (error == "Correcto") {
        let otra = getBotonOtra();
        otra.hidden = false;
    }
    let resultado = getResultado();
    resultado.innerHTML = this.intentos + error;
}
function opciones(opc) {
    let solucion = getSolucion();
    return solucion.value == opc;
}

function validaIgual() {
    let respuesta = this.resultados.find(opciones) != undefined ? true : false;
    return respuesta;
}
function getEcuacion() {
    return document.getElementById("ecuacion");
}
function getSolucion() {
    return document.getElementById("solucion");
}
function getResultado() {
    return document.getElementById("resultado");
}
function getBotonOtra() {
    return document.getElementById("otra");
}
function getFecha() {
    return document.getElementById("fecha");
}

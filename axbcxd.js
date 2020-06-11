//ax+c=cx+d
function asignaEcuacion() {
    let fecha = getFecha();
    let date = new Date();
    fecha.value =date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();
    let ecuacion = getEcuacion();
    this.a = randomInt(20, -20, 21);
    this.b = randomInt(20, -20, 21);
    this.c = randomInt(20, -20, this.a);
    this.d = randomInt(20, -20, 21);
    this.intentos = 0;
    // let varA = this.a==1?"":this.a;
    // let varC = this.c==1?"":this.c;
    if (this.a==1){
        varA="";
    }
    else if (this.a==-1){
        varA="-";
    }
    else{
        varA=this.a;
    }
    if (this.c==1){
        varC="";
    }
    else if (this.c==-1){
        varC="-";
    }
    else{
        varC=this.c;
    }
    
    if(this.b>=0&&this.d>=0){
        ecuacion.value=varA + "x+" + this.b + "=" + varC +"x+"+ this.d;
    }
    else if(this.b>=0){
        ecuacion.value=varA + "x+" + this.b + "=" + varC +"x"+ this.d;   
    }
    else if(this.d>=0){
        ecuacion.value=varA + "x" + this.b + "=" + varC +"x+"+ this.d;   
    }
    else{
        ecuacion.value=varA + "x" + this.b + "=" + varC +"x"+ this.d;   
    }
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
    num = num !== 0 && num!== dif ? num : randomInt(min, max);
    return num;
}
function posiblesResultados() {
    this.resultados = new Array();
    this.resultados.push((this.d - this.b) / (this.a-this.c));
    this.resultados.push((this.d - this.b) + "/" + (this.a-this.c));
    this.resultados.push(resultados[0].toFixed(2));
    if ((this.d - this.b) < 0 && (this.a-this.c) < 0) {
        this.resultados.push(Math.abs((this.d - this.b)) + "/" + Math.abs(this.a-this.c));
    }
    else if ((this.d - this.b) < 0 && (this.a-this.c) > 0) {
        this.resultados.push(Math.abs((this.d - this.b)) + "/" + ((this.a-this.c)-(this.a-this.c)-(this.a-this.c)));
    }
    else if ((this.d - this.b) > 0 && (this.a-this.c) < 0) {
        this.resultados.push(((this.d - this.b) - (this.d - this.b) - (this.d - this.b)) + "/" + Math.abs((this.a-this.c)));
    }
    else {
        this.resultados.push((this.d - this.b) + "/" + ((this.a-this.c)-(this.a-this.c)-(this.a-this.c)));
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

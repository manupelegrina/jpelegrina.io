
function calculo_financiamiento ( valor , cuotas){

    valor = parseFloat(valor);
    cuotas = parseInt(cuotas);

    let loan = 0;

    if(valor > 0 && cuotas == 3){
        loan = valor + (monto * 0.15);
        return loan
    }
    else if(valor > 0 && cuotas == 6){
        loan = valor + (monto * 0.45);
        return loan
    }
    else if(valor > 0 && cuotas == 12){
        loan = valor + (monto * 0.70);
        return loan
    }
    else if(valor > 0 && cuotas == 1){
        return valor
    }
} 






/*Prestamo*/

console.log("Le damos la bienvenida a Send & Loan");

let valor ("");

while (valor != "SALIR") {

    let nombre = prompt("Ingrese su nombre por favor");
    let opcion_usuario = prompt(nombre, "Desea solicitar un prestamo o enviar dinero");
    valor = prompt("Ingrese que cantidad de dinero va a solicitar");

    let cuotas = prompt("¿Desea financiarlo en 1, 3 ,6 o 12 cuotas?");

    let resultado = calculo_financiamiento(valor, cuotas);


    console.log("Resumen de su solicitud");
    console.log("Importe a solicitar: ", valor);
    console.log("Cuotas: ", cuotas);
    console.log("Total: ", resultado);






}
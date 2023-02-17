
/*function calculo_financiamiento ( valor , cuotas){

    valor = parseFloat(valor);
    cuotas = parseInt(cuotas);

    let loan = 0;

    if(valor > 0 && cuotas == 3){
        loan = valor + (valor * 0.15);
        return loan
    }
    else if(valor > 0 && cuotas == 6){
        loan = valor + (valor * 0.45);
        return loan
    }
    else if(valor > 0 && cuotas == 12){
        loan = valor + (valor * 0.70);
        return loan
    }
    else if(valor > 0 && cuotas == 1){
        return valor
    }
} 






/*Prestamo*

console.log("Le damos la bienvenida a Send & Loan");

let nombre = prompt("Ingrese su nombre por favor");

let opcion_usuario = prompt(nombre, "Desea un prestamo o enviar");

let valor = "";

if (opcion_usuario == "prestamo") {

    valor = prompt("Ingrese que cantidad de dinero va a solicitar");


        if (valor != 0) {


            let cuotas = prompt("¿Desea financiarlo en 1, 3 ,6 o 12 cuotas?");

            let resultado = calculo_financiamiento(valor, cuotas);


            console.log("Resumen de su solicitud");
            console.log("Importe a solicitar: ", valor);
            console.log("Cuotas: ", cuotas);
            console.log("Total: ", resultado);



        }
        

}
else if (opcion_usuario == "envio"){*/
    






    


/*Envío*/



class Paquetes {
    constructor(nombre, precio, stock) {

        this.nombre = nombre;

        this.precio = precio;

        this.stock = stock;
        
    }

    //METODOS
    get_datos() {
        console.log("<----INFO DE LOS PAQUETES---->");

        console.log("Nombre: ", this.nombre);

        console.log("Precio: ", this.precio);

        console.log("Stock: ", this.stock);

        console.log("");
    }


    get_stock() {

        if (this.stock > 0) {
            return true
        }
        else {
            return false
        }
    }



    set_venta(cantidad) {

        if (this.stock >= cantidad) {
            console.log("Gracias por confiar en nosotros");
            this.stock = this.stock - cantidad;
            return true
        }
        else {
            console.log("No se puede realizar la compra por falta de disponibilidad");
            return false
        }

    }

}









let paquete_uno = new Paquetes("Basico" , 5000 , 5);
let paquete_dos = new Paquetes("Premium" , 12000 , 5);
let paquete_tres = new Paquetes("Exclusivo" , 19000 , 5);


paquete_uno.get_datos();
paquete_dos.get_datos();
paquete_tres.get_datos();



function busqueda_producto( Paquetes ){

    return producto.nombre == compra_user
}


let compra_user = prompt("Ingrese el nombre del paquete que quiere comprar");

let resultado_busqueda = lista_productos.find( busqueda_producto );


if( resultado_busqueda != undefined ){
    //SE ENCONTRO EL PRODUCTO QUE QUIERE COMPRAR//

    if( resultado_busqueda.get_stock()){
       //CHEQUEO SI TENGO STOCK DEL PRODUCTO

       let unidades = prompt("¿Cuantas unidades queres?");
       
       if( resultado_busqueda.venta_stock( unidades )){
            //CHEQUEO SI TENGO TANTAS UNIDADES DEL PRODUCTO
            console.log(`Gracias por comprar ${unidades} unidades de ${resultado_busqueda.nombre}`);
       }
       else{
            console.log("No se puede realizar la compra");
            console.log("Stock disponible: ", resultado_busqueda.stock );        
       }
    }
    else{
        console.log("No tenemos stock del producto: ", resultado_busqueda.nombre);
    }

    resultado_busqueda.get_datos();
}
else{
    console.log("No se encontro el producto: ", compra_user);
}

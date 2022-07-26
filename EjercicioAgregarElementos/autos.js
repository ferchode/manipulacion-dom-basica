let v1;
let v2;
let v3;
let seguir;
let autos = [];

function agregarAuto (){

    let p1 = prompt("Ingresa marca");
    v1 = p1;

    let p2 = prompt("Ingresa modelo");
    v2 = p2;

    let p3 = prompt("Ingresa year");
    v3 = p3;

    let continuar = prompt("Ingresa 1 para seguir, ingresa 2 para detenerte");
    seguir = continuar;

    for (let i = 0; i < autos.length; i++) {
    
        auto(autos[i]);
        
    }

    if (seguir != 1) {

        alert("Registraste tu carro");
        
    } else if (seguir == 1){
    
        agregarAuto();
    }

    function auto (marca, modelo, año){

        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    
    let nuevoAuto = autos.push(new auto( v1, v2, v3));


} 

agregarAuto();






    





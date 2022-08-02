let v1;
let saveCoins = 0; // Se crea la variable de forma global para que con cada iteracion de la funcion se vaya almacenando la informacion, se vincula en la linea 29
let seguir;

function pregunta1(){

    let p1 = prompt('Escribe en numeros el valor que deseas ahorrar');
    v1 = p1;

    let p2 = prompt('Seguir = 1 parar = 2');
    seguir = p2;

    if(seguir != 1){

         alert('Ahorrado')              

    }
    else if(seguir == 1){

        pregunta1();
    }

    let value = function obtenerCoins(){

        let ahorro = Number(v1);
    
        function countCoins() {
            
            saveCoins += ahorro;
            console.log(`MoneyBox: $${saveCoins}`);
    
        }
        
        return countCoins();

    }

    value();
   
}

pregunta1();








let op1 = "piedra";
let op2 = "papel";
let op3 = "tijera";

let usuario;
let maquina;

if (usuario == maquina) {
 
    console.log("Empate panita");
}
else if( usuario==op1 && maquina==op2 || usuario==op2 && maquina==op3 || usuario==op3 && maquina==op1){


    console.log("Perdiste mi pana");

}
else if( usuario==op1 && maquina==op3 || usuario==op2 && maquina==op1 || usuario==op3 && maquina==op2){


    console.log("Ganaste mi rey");
}

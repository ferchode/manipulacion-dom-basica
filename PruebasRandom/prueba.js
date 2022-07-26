let deudas = [
    
    {deuda: 3000, entidad: "Bank Tank"}, 
    
    {deuda: 5000, entidad: "Banco Taco"}
];

let dineroAhorrado = [
    
    {dinero: 60000, mes: "Enero"}, 
    
    {dinero: 60000, mes: "Febrero"}

];


let valoresDeuda = deudas.map(function(valor){ 
    
    return valor.deuda;

});

let valoresAhorrados = dineroAhorrado.map(function(valor){

    return valor.dinero;

});


function dineroReal(real){

    let valorDeuda = valoresDeuda[0] + valoresDeuda[1];
    let valorAhorrado = valoresAhorrados[0] + valoresAhorrados[1];
    let valorReal = valorAhorrado - valorDeuda;

    console.log("Tu dinero real es $" + valorReal);
   
}

dineroReal();
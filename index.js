// Ejercicio Onready
// Imaginemos una concesionaria de autos y motos.
// Crear un programa cuyo punto de entrada sea un index.js en donde, 
// al ejecutarse, se visualiza lo siguiente por consola y se termina la ejecución:

// Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
// Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00
// Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
// Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50
// =============================
// Vehículo más caro: Peugeot 208
// Vehículo más barato: Honda Titan
// Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50

// Ejercicio extra (si lo haces sumas puntos)
// =============================
// Vehículos ordenados por precio de mayor a menor:
// Peugeot 208
// Peugeot 206
// Yamaha YBR
// Honda Titan



const db = [
    {   
        Marca: "Peugeot",
        Modelo: "206",
        Puertas: 4,
        Precio: "200.000,00"
    },
    {
        Marca: "Honda",
        Modelo: "Titan",
        Cilindrada: "125c",
        Precio: "60.000,00"
    },
    {
        Marca: "Peugeot",
        Modelo: "208",
        Puertas: 5,
        Precio: "250.000,00"
    },
    {
        Marca: "Yamaha",
        Modelo: "YBR",
        Cilindrada: "160c",
        Precio: "80.500,50"
    }

]


const seeDB = (letra) => {

    var cheapVehicle = {};
    var expensiveVehicle = {};
    var withLetter = {};
    var min = parseInt(db[0].Precio.replace(/[^\d]/g, ''));
    var max = 0;

    //renderizar la lista de vehículos
    db.forEach(vehiculo => {
        if(vehiculo.Puertas)
            console.log('Marca: '+ vehiculo.Marca + ' // '+'Modelo: '+ vehiculo.Modelo + ' // '+'Puertas: '+ vehiculo.Puertas + ' // '+'Precio: $'+ vehiculo.Precio + ' //');
        else 
            console.log('Marca: '+ vehiculo.Marca + ' // '+'Modelo: '+ vehiculo.Modelo + ' // '+'Cilindrada: '+ vehiculo.Cilindrada + ' // '+'Precio: $'+ vehiculo.Precio + ' //');
    });

    console.log('=============================');

    //encontrar el vehiculo más caro y barato
    db.forEach(vehiculo => {

        let precio = parseInt(vehiculo.Precio.replace(/[^\d]/g, ''));

        if (precio > max){
            max = precio;
            expensiveVehicle = vehiculo;
        }
        
        if(precio < min){
            min = vehiculo.Precio;
            cheapVehicle = vehiculo;
        }

        if (vehiculo.Modelo.includes(letra)){
            withLetter = vehiculo;
        }            
    });

    console.log('Vehículo más caro: '+ expensiveVehicle.Marca + ' ' + expensiveVehicle.Modelo);
    console.log('Vehículo más barato: '+ cheapVehicle.Marca+ ' '+ cheapVehicle.Modelo);
    console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + withLetter.Marca+ ' '+withLetter.Modelo+ ' $'+ withLetter.Precio);

    console.log('=============================');

    //orden de la base de datos por precios de mayor a menor
    db.sort(function(a, b){

        let precioA = parseInt(a.Precio.replace(/[^\d]/g, ''));
        let precioB = parseInt(b.Precio.replace(/[^\d]/g, ''));

        if(precioA > precioB)
            return -1;
        if(precioA < precioB)
            return 1;
        return 0;
    })

    console.log('Vehículos ordenados por precio de mayor a menor: ');
    db.forEach(vehiculo => {
        console.log(vehiculo.Marca + ' ' + vehiculo.Modelo);
    })


}

seeDB('Y');


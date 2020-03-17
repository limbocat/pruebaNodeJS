//Objeto Literal
//: ./ muestra los archivos en el directorio actual
//: ../ va un paso para atras y te muestra las posibles carpetas
let pokemon = {
    nombre: "manucho",
    tipo: "fuego",
    color: "rojo",
    vida: '500HP',
    altura: '1.70',
    ataque: [
        {
            atk1: "patada",
            atk2: "golpe",
            atk3: "ojazo",
            atk4: "silbido"
        }
    ],
    elementos: {
        elm1: "orbe",
        elm2: "amuleting",
        elm3: "hojas",
    }

}

console.log(pokemon);

let Perro = {
    raza: "pitbul",
    color: "negro",
    nombre: "Doggo",
    vacunas: 7,
    padres:
        {
           padre1: "DoggoPadre",
           padre2: "DoggoMadre",
           padre3: [{
               padre: "Maxi",
               madre: "Maxila"
           }]
       }
}
console.log(Perro);
//console.log(Perro.padres.padre3[0].padre);
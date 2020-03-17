
const colores = ['rojo', 'azul', 'amarillo','rosa'];
const colectivos = [60, 720, 15, 21];

const presentacionColores = colores.map(
    function(color){
        const result = `Mi color es: ${color}`;
    //console.log(result);
    return result;
    }
);

//console.log(colores.shift());
let colectivosAmpliados = colectivos.unshift(50, 55);
console.log(colectivosAmpliados);
console.log(colectivos);

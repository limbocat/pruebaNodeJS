//Process
const n1 = parseInt(process.argv[2]);
const n2 = parseInt(process.argv[3]);
const operacion = process.argv[4];
let ret = 0;

switch(operacion){
    case "+":
        n1 + n2
        break;
    case "-":
        n1 - n2
        break
    case "*":
        n1 * n2
        break
    case "/":
        n1 / n2
        break
    default:
        ret = -1
};

//console.log(n1);
//console.log(n2);
//console.log(n1 + n2);
//console.log(typeof n1);

console.log(n1 + n2);
console.log(operacion);
console.log(ret);
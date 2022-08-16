//Binary to decimal
function binarioADecimal(num) {
    let decimal = 0;
    for(let i = 0; i < num.length; i++){
        decimal += num[i]*Math.pow(2, (num.length -1 - i));
    }
    return decimal;
}

binarioADecimal("1011");


//Binary to decimal using for in
function binario2ADecimal(num){
    let suma = 0;
    for(let i in num){
        suma += num[i]*Math.pow(2, (num.length -1 - i));
    }
    return suma;
}

binario2ADecimal("1011");


//Practicing for in
function sumaArray(a){
    let sumaTotal = 0;
    for(let j in a){
        sumaTotal += a[j];
    }
    return sumaTotal;
}
let a = [1, 2, 3, 4, 5]
sumaArray(a);



//Decimal to binary
const convertidorBinario = (num)=>{
    let almacenador = []
    while (num!==0){
        let residuo = parseInt(num%2)
        num = Math.floor(num/2);
        almacenador.push(residuo);
        console.log(`El Div es: ${num} y el Residuo:${residuo}`);
    }
    return almacenador
}
convertidorBinario(9);
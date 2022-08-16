//Binary to decimal
function binarioADecimal(num) {
    let decimal = 0;
    for(let i = 0; i < num.length; i++){
        decimal += num[i]*Math.pow(2, (num.length -1 - i));
    }
    return decimal;
}

binarioADecimal("100101");


//Binary to decimal using for in
function binario2ADecimal(num){
    let suma = 0;
    for(let i in num){
        suma += num[i]*Math.pow(2, (num.length - 1 - i));
    }
    return suma;
}

binario2ADecimal("100101");


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
    let binario = [];
    while(num !== 0 ){
        let residuo = num%2;
        binario.push(residuo);
        num = Math.floor(num/2);
    }
    return binario.reverse().toString().replace(/,/g, "");
}
convertidorBinario(15);


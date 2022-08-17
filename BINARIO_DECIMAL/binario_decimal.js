function binarioDecimal(num){
    // let decimal = 0;
    // for(let i in num){
    // decimal += num[i] * Math.pow(2, (num.length - 1 - i));
    // }
    // return decimal; 
    return parseInt(num, 2);
}

function decimalBinario(num){
    // let binario = [];
    // while(num !== 0 ){
    //     let residuo = num%2;
    //     binario.push(residuo);
    //     num = Math.floor(num/2);
    // }
    // return binario.reverse().toString().replace(/,/g, "");
    return num.toString(2);
}

// binarioDecimal("100101");
// decimalBinario(37);

module.exports = {
    binarioDecimal,
    decimalBinario,
  }

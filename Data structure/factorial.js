function nFactorial(n) {
    if(n<0){
        console.log("No existe el factorial de un numero negativo");
      return 0;
    } else{
      return (n === 1 || n ==0) ? 1 : n * nFactorial(n - 1); 
    }
   
  }
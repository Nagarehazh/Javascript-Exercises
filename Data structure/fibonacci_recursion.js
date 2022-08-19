/* 0 1 1
1. a0 = 0  
2. a1 = 1 
3. a2 = a0 + a1  
4. a3 = a1 + a2
5. a4 = a2 + a3
n = (n-2) + (n-1)

*/

function nFibonacci(n) {
    return n < 2 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
  }


  nFibonacci(8);


  /*Print Fibonacci serie until a limit.

  function imprimirFibonacci(limit){
    const fib = [0,1];
    for(let i = 2; i < limit; i++){
        fib[i] = fib[i-1] + fib[i-2];
        
    }
    return fib;

}

console.log(imprimirFibonacci(10))*/
function nFibonacci(n) {
    return n <= 1 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
  }
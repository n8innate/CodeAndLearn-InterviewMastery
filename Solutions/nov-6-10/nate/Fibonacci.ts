/*
    Create a class named Fibonacci. 
    It should have one method called "atN" which will return the value at the nth place in the fibonacci sequence.
    **Bonus: Use recursion 
*/

class Fibonacci {
  // Recursive method to find the Fibonacci number at the nth place
  public atN(n: number): number {
    // Stopper: If value is <= 0 
    if (n <= 0){ 
      throw new Error("Please make sure to give a value greater than 0") 
    };

    if (n === 1){ return 0 };
    if (n === 2){ return 1 };
    
    return this.atN(n - 1) + this.atN(n - 2);
  }
}

// ---- Test new class and method
const fib = new Fibonacci();

console.log(fib.atN(6));  //--> 5 

// --- Recusrion ---

// strategy for solving problems by defining the problem in terms of itself.
// For example, to sum the elements of a list, we would take the first element, 
//and add it to the sum of the remaining elements

//-- Recursion in JS ---
// often recursion code is simpler than a while loop

const iterativeFactorial = (n) => {
    let result = 1;
    while(n > 0) {
      result *= n;
      n -= 1;
    }
    return result;
  }
  
  // Set fourFactorial
  
  
  
  module.exports = {
    iterativeFactorial
  };

  
//Hash Functions

// Also known as compression functions
// The output of a hash function always contains less data than the input

//Basic Hash Maps

//Need 3 Things:

// 1) Associated Data 
// 2) Array of a fixed size
// 3) Has function that translates keys of our array into indexes in the array 

// hash value = ((number of 'a's in album title) + (number of e's in album title))

// Collisions - same hash for 2 different keys
// 2 strategies
//1) Separate Chaining - Instead of an array of values, array of linked lists
//2) Open Adressing: 
//     a)Linear Probing - Continue looking for an idex if the first choice is taken
//     b)


// --- Hash Function Logic ---

// declare Hashcode variable with value of 0

// for each character in the key 
//   add the sum of the current character code
//   value and hashCode to hashCode
// return hashCode 

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// ALGORITHM CHECKING FOR VALID CARDS
const validateCred = array => {
  //removing last digit:
  let check = array.pop()

  //reversing remaingin array:
  let reversed = array.reverse();

  //doubling every other digit in array:
  let doubleOdds = reversed.map((num, index) => {
    if (index % 2 == 0) {
      return num * 2;
    } else {
      return num
    }
  })
  
  
  // making all digits less than 9
  let lessThan9 = doubleOdds.map(a => (a > 9) ? (a - 9) : a );


  // Adding all digits in the array
  let sum = lessThan9.reduce((a, b) => a + b);


  // validation check
  let validation = (sum + check)  % 10 == 0 ? true : false;
  return validation
}

// console.log(validateCred(mystery5));


const findInvalidCards = nesArray => {

  const group = nesArray.filter(arr => validateCred(arr) === false)
  return group
}

// console.log(findInvalidCards(batch))
console.log(' ')


// --- Creating list of companies who issued invalid cards ---

// Storing bacth of invalid cards inside new variable:
let invalidBatch = findInvalidCards(batch);
console.log(invalidBatch)
console.log(' ')

// Reversing the order of each array in the batch
let reReversed = []
// invalidBatch.forEach((a) => {
//   reReversed.push(a.sort());
  
// })
console.log(reReversed)
console.log(' ')



// Testing .reverse()
 let array = [[1, 2] , [3, 4], [5, 6], [7, 8]]
 console.log(array.reverse())
 
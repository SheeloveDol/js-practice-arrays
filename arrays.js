let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// My codes below:

// Removing the last string of the array
secretMessage.pop();
console.log(secretMessage.length);


// Step 2: Adding 'to' and 'Program' to array
secretMessage.push('to', 'Program');
// console.log(secretMessage)

secretMessage[7] = 'right';
// console.log(secretMessage)

// Step 3: Removing the first string of the array
secretMessage.shift();
// console.log(secretMessage)

// Step 4: adding 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
// console.log(secretMessage)

// Step 5: Replacing 'get' 'right' 'the' 'first' 'time' with 'know'
secretMessage.splice(6, 5, 'know');
// console.log(secretMessage)

// Step 6: Joining the array to form a sentence.
console.log(secretMessage.join(' '));
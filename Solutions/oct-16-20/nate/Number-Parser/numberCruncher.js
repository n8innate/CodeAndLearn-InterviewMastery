const fs = require('fs');
const path = require('path');

// ---- Get Path to JSON
const numbersFile = path.join(__dirname, '../numbers.json');

// ---- Read JSON
fs.readFile(numbersFile, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Error reading JSON: ${err}`);
    return;
  };

  try {
    const numbersData = JSON.parse(data)["numbers"];
  
    const sum = numbers =>  numbers.reduce((acc, cur) => { return acc += cur }, 0);
    const average = numbers => sum(numbers)/numbers.length
    const product = numbers => numbers.reduce((acc, cur) => { return acc *= cur }, 1);
    
    console.log(`
      Sum: ${sum(numbersData)}
      Average: ${average(numbersData)}
      Product: ${product(numbersData)}
      `)
  } catch (err) {
    console.error(`Error parsing JSON data: ${err}`);
  }
});

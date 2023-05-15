//define a range
const startRange = 2;
const endRange = 50;

//for loop
for (let i = startRange; i <= endRange; i++) {
  let isPrime = true;

  //nested loop
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i + " is a prime number.");
  }
}
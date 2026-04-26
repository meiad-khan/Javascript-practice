const createCounter = () => {
  let count = 0;
  return (amount) => {
    count += amount;
    return count;
  }    // Inner function is accesing the outer function's variable, this is closure.
}

const counter = createCounter();
console.log(counter(90));
console.log(counter(40));
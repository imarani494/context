function createCounter() {
  let count = 0; 

  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    }
  };
}


const counter = createCounter();

console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.getCount());  


console.log(counter.count); 

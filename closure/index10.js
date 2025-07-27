function outerFunction() {
  const message = "Hello from the outer function!";


  return function innerFunction() {
    console.log(message);
  };
}


const greet = outerFunction();


greet(); 

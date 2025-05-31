const newpromise = new Promise((resolve , reject) => {
    setTimeout(() => resolve(5) , 1000)
})

newpromise.then(result => {
    console.log("result" , result*2)
})

Promise.resolve(10)
  .then(x => x + 5)
  .then(x => x * 2)
  .then(x => console.log(x)); // Output?

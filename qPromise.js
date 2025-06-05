const p = new Promise((resolve, reject) => {
  reject("Failed");
});

p.then(res => console.log(res))
 .catch(err => console.log("Error:", err));

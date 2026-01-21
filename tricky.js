// 1st question 

// var a = 1
// function foo(){
//  var a = 2
//  console.log(a)
// }
// foo()
// console.log(a);


//2nd 


// function foo(){
//     a = 2
//   }
//   foo()
//   console.log(a);

// 3

// let a = {};
// let b = { key: "b" };
// let c = { key: "c" };
// console.log(a[c])
// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// 4th

// let obj1 = { key: "value" };
// let obj2 = obj1;
// let obj3 = obj2;

// obj1.key = "new value";
// obj2 = { key: "another value" };

// console.log(obj1.key, obj2.key, obj3.key);
// // ans "new value"; "another value" value

// 5th 

// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };

// const c = obj.b;

// obj.b();
// c();




//6th questions 

for (let i = 0; i < 5; i++) {
    let x = 0;

  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}

// Ans - 1
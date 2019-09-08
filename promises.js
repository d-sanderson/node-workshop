//  Promises examples

//  Refact the example below to use a Promise instead of a Callback
// let action = (cb) => {
//   setTimeout(function() {
//     cb('hey');
//   }, 5000)
// }

// action(function(arg) {
//   console.log(arg);
// });

// Promise version of above code

const promise_action = () =>
    new Promise( (res, rej) => {
    setTimeout(function() {
      res('hey');
    }, 5000);
  });
promise_action().then((word) => console.log(word))
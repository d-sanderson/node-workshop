let fs = require('fs')

// Creating a promise
let readFile = () => new Promise((res, rej) => {
  fs.readFile('./package.json', (err, file) => {
    return err ? rej(err) : res(file.toString())
  });
});

// Consuming a promise
// readFile()
//   .then((file) => console.log(file))
//   .catch(err => console.log(err))
// const logFile = () => readFile().then(() => readFile());


// readFile()
// .then(logFile)
// .then(sendEmail)
// .then(callHome)
// .catch((err) => console.log(err))

const readAllFiles = () => {
  let promises = [readFile(), readFile(), readFile()];
  return Promise.all(promises);
}

const logFile = () => {
  return readFile()
  .then(() => readFile());
}

readAllFiles().then(files => console.log(files))
// fs.readFile('./package.json', (err, file) => {
//   console.log(file.toString())
// })
console.log('first')
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

// const promise_action = () =>
//     new Promise( (res, rej) => {
//     setTimeout(function() {
//       rej(new Error('noooo'));
//     }, 5000);
//   });

// promise_action().then((word) => console.log(word))

// let promise = promise_action()

// promise.then((word) => console.log(word)).catch(err => console.log('ERROR', err))


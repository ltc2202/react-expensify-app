const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'harry',
    //   age: 23
    // });
    reject('Something went wrong');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((e) => {
  console.log(e);
});

console.log('after');
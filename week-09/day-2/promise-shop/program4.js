var promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
});

promise.then((value) => { 
  console.log('MAIN PROGRAM');
  console.log(value);
});
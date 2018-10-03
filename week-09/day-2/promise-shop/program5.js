'use strict';

// Shortcut of only error handling in then is catch
var promise = new Promise((fulfill, reject) => {
  reject(new Error('THIS IS WAT WORKING'));
});

promise.catch((error) => { console.log(error.message) });

// Shortcut of 'fulfill' is resolve
var promise2 = Promise.resolve('SECRET VALUE');
promise2.then((fulfill) => { console.log(fulfill)});

// Shortcut of 'error" is reject 
var promise3 = Promise.reject('THIS IS ERROR MY FRIEND');
promise3.catch( (reject) => {console.log(reject)} )
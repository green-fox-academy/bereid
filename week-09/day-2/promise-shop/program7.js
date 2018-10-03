'use strict';

const attachTitle = (string) => {
  return "DR. " + string;
}

const promise = new Promise( (fulfill) => {
  fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);
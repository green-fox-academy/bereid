'use strict';

const parsePromised = () => {
  try {
    let promise = new Promise((fullfil, reject) => {
    });
  } catch {
    throw new Error
  }
}


doSomethingRisky().then(doAnotherRiskyThing).then(null, console.log);
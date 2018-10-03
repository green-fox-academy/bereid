var promise = new Promise((fullfill, reject) => {
  fullfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

const onReject = (error) => {
  console.log(error.message);
}

promise.then((fullfill) => {console.log(fullfill)}, onReject);
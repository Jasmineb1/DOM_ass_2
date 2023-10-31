//using promises

function sumWithPromises() {
    return new Promise((resolve, reject) => {
      let sum = 0;
      for (let i = 1; i <= 4; i++) {
        sum += i;
      }
      resolve(sum);
    });
  }
  
  sumWithPromises().then(sum => {
    console.log("Sum of first four natural numbers (using promises): " + sum);
  });
  
  //using cb


    function sumWithCallbacks(callback) {
        let sum = 0;
        for (let i = 1; i <= 4; i++) {
          sum += i;
        }
        callback(sum);
      }
      
      function displaySum(sum) {
        console.log("Sum of first four natural numbers (using callbacks): " + sum);
      }
      
      sumWithCallbacks(displaySum);
      
//asyn-await


  
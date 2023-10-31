
const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('successful'); 
        reject('rejected');
    }, 2000);
});

promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

console.log('hello');

//chaining  promises
function fetchData(DEMO_URL){
    return fetch(DEMO_URL).then(response => response.json());

}
function processData(data){
    return processData;
}
function handleData(error){
    console.error('an error occured:', error);
    
}















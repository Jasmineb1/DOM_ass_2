// const DEMO_URL = "https://course-api.com/react-store-products"

// const request = fetch(DEMO_URL).then((response)=>{
// console.log(response)
// return response.json()
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log("Error occurred",error)
// })
// // console.log(request);

//promises with call back
const DEMO_URL = "https://course-api.com/react-store-products"

function fetchData(DEMO_URL,callback){
    fetch(DEMO_URL).then((response)=>{
        console.log(response)
        return response.json()

}).then((data)=>{
    callback(data)
}).catch((error)=>{
    console.log("Error occurred",error)
})
}

function handleData(data) {
    for (let i = 0; i < 12 ; i++) {
        console.log(`Product: ${data[i]["name"]}, Price: ${data[i]["price"]}`);
    }
    const listElement = document.getElementById('list');
    listElement.innerHTML = `Product: ${data[0]["name"]}, Price: ${data[0]["price"]}`;
}

fetchData(DEMO_URL,handleData)
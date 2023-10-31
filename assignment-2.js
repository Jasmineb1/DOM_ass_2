//A html webpage with all the details of one of the products from our demo_url using promises

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
    
        console.log(`id:${data[1]["id"]},Product: ${data[1]["name"]},Image: ${data[1]["image"]}, Price: ${data[1]["price"]}, Color: ${data[1]["color"]}`);
    
        const listElement = document.getElementById('list');
        listElement.innerHTML = (`id:${data[1]["id"]},Product: ${data[1]["name"]},Image: ${data[1]["image"]}, Price: ${data[1]["price"]}, Color: ${data[1]["color"]}`);
    }
    fetchData(DEMO_URL,handleData)
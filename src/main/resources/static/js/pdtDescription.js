/*to pass selection into array when customer selects and add item to cart
create a [CHECK ON IDEA] predetermined unique id that contains details 
(productname,dimension,price) that is added with customer's selection
that we tabulate all data into a table for customer to view when cart button is selected
have to use FETCH API?

*/
const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString); //browser API URLSearchParam
const getId = URLParams.get("id");
console.log(getId);

// const getPdtDetails = JSON.parse(window.localStorage.getItem(getId));
const getPdtDetails = window.localStorage.getItem(getId);
console.log("aaa" + getPdtDetails);


console.log(getPdtDetails.name);
console.log(getPdtDetails.length);
console.log(getPdtDetails.width);
console.log(getPdtDetails.height);


document.querySelector("#productName").innerText= getPdtDetails.name;
document.querySelector("#productDescription").innerText = getPdtDetails.description;
document.querySelector("#productImg").src = getPdtDetails.imageUrl;
document.querySelector("#productPrice").innerText = "$"+getPdtDetails.price;
document.querySelector("#length").innerText= getPdtDetails.length;
document.querySelector("#width").innerText= getPdtDetails.width;
document.querySelector("#height").innerText= getPdtDetails.height;

//ERROR undefined :(


// const itemObj = {
//     id: getPdtDetails.id,
//     name: getPdtDetails.name,
//     description: getPdtDetails.description,
//     type: getPdtDetails.type,
//     length: getPdtDetails.length,
//     width: getPdtDetails.width,
//     height: getPdtDetails.height,
//     price: getPdtDetails.price,
//     imageUrl: getPdtDetails.imageUrl
// };


// function loadproduct(getPdtDetails){

//     let id = getPdtDetails.id,
//     name = getPdtDetails.name,
//     description = getPdtDetails.description,
//     type = getPdtDetails.type,
//     length = getPdtDetails.length,
//     width = getPdtDetails.width,
//     height = getPdtDetails.height,
//     price = getPdtDetails.price,
//     imageUrl = getPdtDetails.imageUrl;

//     document.querySelector("#productName").innerText= name;
//     document.querySelector("#productDescription").innerText = description;
//     document.querySelector("#productImg").src = imageUrl;
//     document.querySelector("#productPrice").innerText = price;
// }

// function loadproduct(getPdtDetails){
//     document.querySelector("#productName").innerText= getPdtDetails.getItem(name);
//     document.querySelector("#productDescription").innerText = getPdtDetails.getItem(description);
//     document.querySelector("#productImg").src = getPdtDetails.getItem(imageUrl);
//     document.querySelector("#productPrice").innerText = getPdtDetails.getItem(price);
// }


// function loadproduct() {
//     let text = "";
//     let name = document.querySelector("#productName").innerText;
//     let (i = 0; i < localStorage.length; i++){
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key); 

//     text = localStorage.getItem(key)  + "<br>" ;

//     }
//    name.innerHTML += text;
// }











// function submitAddCart(){
//     //When user clicks on  add to cart button
  
//         //store input values into the variables based on id, eg fullName, etc...
//         const colour= document.querySelector("#colour").value;
//         const quantity = document.querySelector("#quantity").value;
  

//           const addCart ={
//               name: name,
//               colour: colour,
//               quantity: quantity,

//             }
        
//         addCartList.push(addCart);
//         console.log(addCartList);
  
          
//   }//End of submitaddtocartfunction





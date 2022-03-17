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

const getPdtDetails = window.localStorage.getItem(getId);
console.log("aaa" + getPdtDetails);

//ERROR undefined :(
function getPdtDetails(){
    document.getElementById("productName").innerHTML= localStorage.getItem("name");
}

function submitAddCart(){
    //When user clicks on  add to cart button
  
        //store input values into the variables based on id, eg fullName, etc...
        const colour= document.querySelector("#colour").value;
        const quantity = document.querySelector("#quantity").value;
  

          const addCart ={
              name: name,
              colour: colour,
              quantity: quantity,

            }
        
        addCartList.push(addCart);
        console.log(addCartList);
  
          
  }//End of submitaddtocartfunction





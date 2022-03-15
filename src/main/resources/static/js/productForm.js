
//class array
const addProductList =[];
let checkboxChecked = [];
let isCheckBoxChecked = false;

//Start of product detail input
  function submitAddProduct(){
  //When user clicks on  button


      //store input values into the variables based on id, eg fullName, etc...
      const name = document.querySelector("#name").value;
      const type= document.querySelector("#type").value;
      const description = document.querySelector("#description").value;
      const price = document.querySelector("#price").value;
      const length = document.querySelector("#length").value;
      const width = document.querySelector("#width").value;
      const height = document.querySelector("#height").value; 

      if (!isCheckBoxChecked) {
        document.querySelector("#lightbrown").setCustomValidity("Please select at least one");
        document.querySelector("#lightbrown").reportValidity();
      }
      else {
        //If all validation is done, all values to be stored in an array of objects
        const productDetail ={
            name: name,
            type: type,
            description: description,
            price : price,
            length: length, 
            width: width,
            height: height,
          }
      
      addProductList.push(productDetail);
      console.log(addProductList);

      alert("Submission complete!")
        }
}//End of submitaddproductfunction


//Perform Validation for checkboxes, store the selected value(s) so as to pass to backend database
function validateCheckBox()
{
    /*
    1) For every checkboxes, create an eventlistener for any changes of the checkboxes (checked or unchecked)    
    */

    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    //checkboxes variable will contain all the checkboxes as objects, and it is NodeList (A list of HTML Elements) 
    checkboxes.forEach(checkbox => {

        //change is an event (e.g. click, onMouseOver, OnDrag)
        checkbox.addEventListener('change', function() {

            checkboxChecked = Array.from(checkboxes)
                                         .filter(checkbox => checkbox.checked)
                                         .map(checkbox => checkbox.value);

            console.log(checkboxChecked);

            if (checkboxChecked.length == 0) {
                isCheckBoxChecked = false;
            }
            else {
                isCheckBoxChecked = true;

                
                document.querySelector("#lightbrown").setCustomValidity("");
                document.querySelector("#lightbrown").reportValidity();
            }

            //console.log(isCheckBoxChecked);
        });


    });
}

validateCheckBox();
//End of product detail input


//Start of submit function
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})//End of submit function

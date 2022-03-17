const productsControl = new ProductsController();
let storeImage = ""

//When user clicks on 'Save Item', calls API to add items to the database
//Add an 'onsubmit' event listener for productform to add a product
addNewProduct.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the inputs
    const newName= document.querySelector('#newName');
    const newType = document.querySelector('#newType');
    const mewDescription = document.querySelector('#newDescription');
    const newPrice = document.querySelector('#newPrice');
    const newLength = document.querySelector('#newLength');
    const newWidth = document.querySelector('#newWidth');
    const newHeight = document.querySelector('#newHeight');
    const newImageUrl = document.querySelector('#newImageFile');


    /*
        Do the Validation code here
    */

    // Get the values of the inputs - variable names to be same as MySQL columns
    const name = newName.value;
    const type = newType.value;
    const description = newDescription.value;
    const price = newPrice.value;
    const length = newLength.value;
    const width = newWidth.value;
    const height = newHeight.value;


    //for HTML5 spec - a file uploaded to the browser should not be reveal the real local path from
    //the user machine based on security. Browser will append a fakepath
    //("C:\\fakepath\t-shirt_new.jpg") to the path for the file information
    //console.log(newItemImageUrl.value); //reflect the path of the image that is uploaded

    const imageUrl = newImageUrl.value.replace("C:\\fakepath\\", "");
    //imageUrl=t-shirt_new/jpg

  // Clear the form
    newName.value = '';
    newType.value = '';
    newDescription.value = '';
    newPrice.value = '';
    newLength.value = '';
    newWidth.value = '';
    newHeight.value = '';
    newImageUrl.value = '';

    // Add the task to the task manager
    productsControl.addItem(name, type, description, price, length, width, height, imageUrl,
    storeImage);

});

//Get the image object
// select file input
const input = document.querySelector('#newImageFile');

// add event listener
input.addEventListener('change', () => {
    storeImage = input.files[0];
});
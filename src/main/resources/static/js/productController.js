const createHTMLList = (index, name, type, description, price, length, width, height,imageURL) =>
`
<div class="col-lg-4 col-md-6 d-flex justify-content-center mb-4">
    <div id="productdisplay" class="card">
        <div class="slide slidetop">
            <div class="content">
                <img class="card-img-top" src=${imageURL} alt="Product Item">
            </div>
        </div>
        <div class="slide slidebtm">
            <div class="content">
                <div id="card-btm" class="card-body row">
                    <div class="col-lg-8">
                        <h4 class="card-title">${name}</h4>
                    </div>
                    <div class="col-lg-4">
                        <p id="price" class="mb-2 text-end"><span>$${price}</span></p>
                    </div>
                    <hr>
                </div>
                <div id="btnStyle" class="d-grid gap-2 col-12 mx-0">
                    <a id="${index}" class="btn btn-dark" href="#" data-toggle="modal" data-target="#productModal">View More Detail</a>
                </div>
            </div>
        </div>
    </div>
</div>
`;

function displayProductDetails(item)
{
    let myStorage = window.localStorage;
    myStorage.clear();
    myStorage.setItem(item.id, JSON.stringify(item));
    location.href="productdescription?id=" + item.id;
}


class ProductsController 
{
    constructor()
    {
        this._items = [];
    }
    addItem(name, type, description, price, length, width, height, imageUrl,
    imageObject)
        {
            let productController = this;
            const formData = new FormData();
            formData.append('name', name);
            formData.append('type', type);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('length', length);
            formData.append('width', width);
            formData.append('height', height);
            formData.append('imageUrl', imageUrl);
            formData.append('imagefile',imageObject);

//           fetch('http://localhost:8080/product/add', {
           fetch('https://heptagone.herokuapp.com/product/add', {
                 method: 'POST',
                 body: formData
                 })
                 .then(function(response) {
                     console.log(response.status);
                     if (response.ok) {
                         alert("Successfully Added Product!")
                     }
                 })
                 .catch((error) => {
                     console.error('Error:', error);
                     alert("Error adding item to Product")
                 });
        }

    renderProductPage()
        {
            let productHTMLList = [];
            for (let i=0; i<this._items.length; i++)
            {
                const item = this._items[i];
                const productHTML = createHTMLList(i, item.name, item.type, item.description,
                 item.price,item.length, item.width, item.height, item.imageUrl);
                productHTMLList.push(productHTML);
            }
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#cardSection').innerHTML = pHTML; //reuse in below searchPdt as ''
            for (let i=0; i<this._items.length; i++)
            {
                const item = this._items[i];
                document.getElementById(i).addEventListener("click", function() { displayProductDetails(item);} );
            }
        }




    displayItem()
        {
            let productController = this;
            productController._items = [];
//            fetch('http://localhost:8080/product/all')
            fetch('https://heptagone.herokuapp.com/product/all')
                .then((resp) => resp.json())
                .then(function(data) {
                    console.log("2. receive data")
                    console.log(data);
                    data.forEach(function (item, index) {
                        const itemObj = {
                            id: item.id,
                            name: item.name,
                            type: item.type,
                            description: item.description,
                            length: item.length,
                            width: item.width,
                            height: item.height,
                            color: item.color,
                            price: item.price,
                            imageUrl: item.imageUrl
                       };
                        productController._items.push(itemObj);//create method and filter for search
                  });
                  productController.renderProductPage();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
        filterPdt(searchString) //filter() removes items from array
        {
            //console.log(searchString)//OK
            let tempAllItems = this._items;//save all items first one side
            let filteredItem= this._items.filter((item)=>{ //filter item with criteria
            return(
               item.name.toLowerCase().includes(searchString) ||
               item.description.toLowerCase().includes(searchString) ||
               item.type.toLowerCase().includes(searchString)
                );
           });
           //if criteria met, return item.
           if (filteredItem.length > 0) {
               console.log('Criteria Met')//OK
               this._items = filteredItem;
               this.renderProductPage(); //renders page again
            }//if no criteria met, return nothing ('')->from renderProductPage
            else if (typeof filteredItem != "undefined") {
            document.querySelector('#cardSection').innerHTML = '';
            }
            this._items = tempAllItems //show initial items prior to filter()
        }

}
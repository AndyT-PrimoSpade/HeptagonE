const createHTMLList = (index, name, description, price, imageURL) =>
`
<div class="col-lg-4 col-md-6 d-flex justify-content-center mb-5">
    <div class="card">
        <img class="card-img-top" src=${imageURL} alt="Product Item">
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <hr>
            <div class="row">
                <div class="col-lg-9">
                    <p class="card-text text-start">${description}</p>
                </div>
                <div class="col-lg-3">
                    <h6 class="mb-2 text-end"><span>$${price}</span></h6>
                </div>
                <div id="btnStyle" class="d-grid gap-2 col-12 mx-0">
                    <a id="${index}" class="btn btn-dark" href="#"
                    data-toggle="modal" data-target="#productModal">View More Detail</a>
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
    addItem(name, description, type, length, width, height, price, imageUrl, imageObject)
        {
            let productController = this;
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('type', type);
            formData.append('length', length);
            formData.append('width', width);
            formData.append('height', height);
            formData.append('price', price);
            formData.append('imageUrl', imageUrl);
            formData.append('imagefile',imageObject);

           fetch('http://localhost:8080/product/add', {
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
                const productHTML = createHTMLList(i, item.name, item.description, item.price, item.imageUrl);
                productHTMLList.push(productHTML);
            }
            const pHTML = productHTMLList.join('\n');
            document.querySelector('#cardSection').innerHTML = pHTML;
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
            fetch('http://localhost:8080/product/all')
                .then((resp) => resp.json())
                .then(function(data) {
                    console.log("2. receive data")
                    console.log(data);
                    data.forEach(function (item, index) {
                        const itemObj = {
                            id: item.id,
                            name: item.name,
                            description: item.description,
                            type: item.type,
                            length: item.length,
                            length: item.width,
                            length: item.height,
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
}

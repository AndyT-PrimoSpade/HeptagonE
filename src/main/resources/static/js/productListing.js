const productsControl = new ProductsController();
const searchBar = document.getElementById('searchBar');
let searchString;

function loadData()
{
    productsControl.displayItem();
}

function handleSearch(e) {
    searchString=e.target.value.toLowerCase();
    productsControl.filterPdt(searchString)
}
searchBar.addEventListener('keyup', handleSearch); //search on keyup event
// document.getElementById("searchBtn").addEventListener("click", function(e){e.preventDefault()});
loadData();
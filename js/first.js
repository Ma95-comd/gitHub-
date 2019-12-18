function first()
{
    var x = document.getElementById("test").value;

    document.getElementById("testResult").innerHTML = x;
}

var productsContainer = [];

var inputs = document.getElementsByClassName("form-control");

function addProduct() {


    var productName = document.getElementById("productNameInp").value;
    var productPrice = document.getElementById("productPriceInp").value;
    var productCategory = document.getElementById("productCategoryInp").value;
    var productDesc = document.getElementById("productDescInp").value;




    var product =
    {
        name: productName,
        price: productPrice,
        category: productCategory,
        desc: productDesc,
    }

    productsContainer.push(product);

    clearForm();
    displayProducts();
}

function clearForm()
{
    
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function displayProducts()
{

var temp = "";
for(var i = 0 ; i < productsContainer.length ;i++)
{
    temp +=`<div class="col-md-4">
        <div class="project">
            <img src="images/2.jpg" class="img-fluid">
            <h4>`+productsContainer[i].name+`<span class="ml-3 badge badge-info">`+productsContainer[i].category+`</span>
            </h4>
            <p>`+productsContainer[i].desc+`</p>
            <span class="badge badge-pill badge-success">`+productsContainer[i].price+`</span>

        </div>
    </div>
`;
}

document.getElementById("productsRow").innerHTML = temp;

}





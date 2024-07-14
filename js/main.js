//CRUD project
//----------------------------------------
var productNameInput = document.getElementById("productName");
var productDescInput = document.getElementById("productDesc");
var productPriceInput = document.getElementById("productPrice");

var arr=[];
display(arr);

function addProduct() {
    var product = {
        productName: productNameInput.value,
        productDesc: productDescInput.value,
        productPrice: productPriceInput.value
    }
    arr.push(product);
    localStorage.setItem("product", JSON.stringify(arr));
    display(arr);
    clearForm();
}

function display(productList) {
    var container = "";
    if (productList.length == 0) {
        container=`<td vh-100 class="alert alert-danger text-center" colspan="4" >There Is No Data!</td>`
        let tbody = document.getElementById("tbody")
        tbody.innerHTML = container;
        }
    else{
        for (var i = 0; i < productList.length; i++) {
            
            container +=
                `<tr>
                    <td>${productList[i].productName}</td>
                    <td>${productList[i].productDesc}</td>
                    <td>${productList[i].productPrice}</td>
                    <td>
                    <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
                    <button class="btn btn-success" onclick="updateButton(${i})">Update</button>

                    </td>
                    
                </tr>`
        }
        document.getElementById("tbody").innerHTML = container;
    }

}

function clearForm() {
    productNameInput.value = "";
    productDescInput.value = "";
    productPriceInput.value = "";
}


function deleteProduct(index) {
    arr.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(arr));
    display(arr);
}

function searchA(inputName) {
    var searchArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].productName.includes(inputName) == true) {
            searchArr.push(arr[i]);
        }
    }
    display(searchArr);
}

function updateButton(index) {
    productNameInput.value = arr[index].productName;
    productDescInput.value = arr[index].productDesc;
    productPriceInput.value = arr[index].productPrice;

    var elementToUpdate = document.getElementById("toUpdate");
    elementToUpdate.innerHTML = "Update";
    elementToUpdate.onclick = () => updateProduct(index);
    // elementToUpdate.addEventListener("click",()=>updateProduct(index)); 
}
function updateProduct(index) {
    var product = {
        productName: productNameInput.value,
        productDesc: productDescInput.value,
        productPrice: productPriceInput.value
    }
    arr[index] = product;
    localStorage.setItem("product", JSON.stringify(arr));
    var elementToUpdate = document.getElementById("toUpdate");
    elementToUpdate.innerHTML = "Add";
    elementToUpdate.onclick = () => addProduct(index);
    display(arr);
    //clearForm();
}

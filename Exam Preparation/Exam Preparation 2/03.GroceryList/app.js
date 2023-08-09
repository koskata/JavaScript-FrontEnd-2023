const baseUrl = `http://localhost:3030/jsonstore/grocery/`;

const list = document.getElementById("tbody");

const buttons = {
    addProduct: document.getElementById("add-product"),
    updateProduct: document.getElementById("update-product"),
    loadProducts: document.getElementById("load-product")
};

const inputs = {
    name: document.getElementById("product"),
    count: document.getElementById("count"),
    price: document.getElementById("price")
};

buttons.loadProducts.addEventListener('click', loadProductsHandler);
buttons.addProduct.addEventListener('click', addProductHandler);
buttons.updateProduct.addEventListener('click', updateProductHandler);

let currId = "";

function updateProductHandler() {
    if (Object.values(inputs).some(input => input.value === "")) {
        return;
    }

    const product = {
        product: inputs.name.value,
        count: inputs.count.value,
        price: inputs.price.value
    };

    fetch(baseUrl + currId, {
        method: "PATCH",
        body: JSON.stringify(product)
    });

    loadProductsHandler();
    Object.values(inputs).forEach(input => {
        input.value = "";
    });
}

async function addProductHandler(e) {
    e?.preventDefault();
    if (Object.values(inputs).some(input => input.value === "")) {
        return;
    }

    const product = {
        product: inputs.name.value,
        count: inputs.count.value,
        price: inputs.price.value
    };

    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(product)
    });

    loadProductsHandler();
    Object.values(inputs).forEach(input => {
        input.value = "";
    });
}

async function loadProductsHandler(e) {
    e?.preventDefault();
    const res = await (await fetch(baseUrl)).json();

    list.textContent = "";

    Object.values(res).forEach(item => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.className = "name";
        td1.textContent = item.product;
        let td2 = document.createElement("td");
        td2.className = "count-product";
        td2.textContent = item.count;
        let td3 = document.createElement("td");
        td3.className = "product-price";
        td3.textContent = item.price;
        let td4 = document.createElement("td");
        td4.className = "btn";
        let updateBtn = document.createElement("button");
        updateBtn.className = "update";
        updateBtn.textContent = "Update";
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener('click', deleteBtnHandler);
        updateBtn.addEventListener('click', updateBtnHandler);

        function updateBtnHandler() {
            inputs.name.value = item.product;
            inputs.count.value = item.count;
            inputs.price.value = item.price;

            buttons.updateProduct.disabled = false;
            buttons.addProduct.disabled = true;

            currId = item._id;
        }

        function deleteBtnHandler() {
            fetch(baseUrl + item._id, {
                method: "DELETE"
            });

            loadProductsHandler();
        }

        td4.appendChild(updateBtn);
        td4.appendChild(deleteBtn);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        list.appendChild(tr);
    });
}
function addItem() {
    let textToValidate = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let li = document.createElement("li");

    li.appendChild(document.createTextNode(textToValidate));

    list.appendChild(li);
}
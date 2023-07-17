function addItem() {
    let textToValidate = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let li = document.createElement("li");

    li.appendChild(document.createTextNode(textToValidate));

    const deleteButton = document.createElement("a");
    deleteButton.href = "#";
    deleteButton.textContent = "[Delete]";
    deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove();
    })

    li.appendChild(deleteButton);

    list.appendChild(li);
}
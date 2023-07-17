function addItem() {
    let menu = document.getElementById("menu");

    let option = document.createElement("option");

    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;

    option.textContent = itemText;
    option.value = itemValue;

    menu.appendChild(option);

    const inputs = Array.from(document.querySelectorAll("input[type=text]"));
    inputs.forEach(input => {
        input.value = "";
    });
}
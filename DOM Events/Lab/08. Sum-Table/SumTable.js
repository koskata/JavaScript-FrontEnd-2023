function sumTable() {
    let secondColumn = document.querySelectorAll("tr td:nth-child(2)");

    let sum = 0;

    for (const col of secondColumn) {
        sum += Number(col.textContent);
    }

    let sumBox = document.getElementById("sum");

    sumBox.textContent = sum;
}
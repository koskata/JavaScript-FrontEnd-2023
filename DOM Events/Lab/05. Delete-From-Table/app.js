function deleteByEmail() {
    let deletedText = document.getElementById('result');

    let inputBox = document.getElementsByTagName('input')[0].value;

    let secondColumn = document.querySelectorAll(
        "#customers tr td:nth-child(2)");



    for (let td of secondColumn) {
        if (td.textContent === inputBox) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            deletedText.textContent = "Deleted."
            return;
        }
        
    }

    deletedText.textContent = "Not found."


}
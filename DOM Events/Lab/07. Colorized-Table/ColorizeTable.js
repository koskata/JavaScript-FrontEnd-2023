function colorize() {
    let secondColumn = document.querySelectorAll("tr:nth-child(even)");
    
    for (const col of secondColumn) {
        col.style.background = "Teal"
    }
}
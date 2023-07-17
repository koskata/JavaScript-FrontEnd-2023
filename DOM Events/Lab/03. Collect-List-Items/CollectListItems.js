function extractText() {
    let arr = Array.from(document.getElementsByTagName('li'));

    let textarea = document.getElementById('result');

    for (const item of arr) {
        textarea.value += item.textContent + "\n";
    }
}
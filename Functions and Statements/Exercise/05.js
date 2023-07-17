function palindromeIntegers(array) {

    let isValid = true

    for (let i = 0; i < array.length; i++) {
        let numberAsString = array[i].toString()
        let numberAsStringReversed = numberAsString.split('').reverse().join('')

        if (numberAsString === numberAsStringReversed) {
            isValid = true
            console.log(isValid)
        } else {
            isValid = false
            console.log(isValid)
        }
    }
}


palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])

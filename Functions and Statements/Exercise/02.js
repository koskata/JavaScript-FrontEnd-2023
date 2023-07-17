function addAndSubtract(intOne, intTwo, intThree) {
    function sum(intOne, intTwo) {
        return intOne + intTwo
    }
    
    function subtract(func, intThree) {
        return func - intThree
    }
    
    let sumFuncResult = sum(intOne, intTwo)
    let subtractFuncResult = subtract(sumFuncResult, intThree)
    
    console.log(subtractFuncResult)
}

addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)








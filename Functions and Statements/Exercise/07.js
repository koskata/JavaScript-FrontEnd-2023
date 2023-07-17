function NxNMatrix(n) {

    let string = "";

    for (let i = 0; i < n; i++) {
        string = "";

        for (let j = 0; j < n; j++) {
            string += n.toString() + " ";
        }
        console.log(string);
    }

}

NxNMatrix(3);
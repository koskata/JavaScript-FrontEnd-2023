function solve(string) {
    let separated = string.split(" ");

    let res = {};

    for (let word of separated) {

        word = word.toLocaleLowerCase();

        if (res.hasOwnProperty(word)) {
            res[word]++;
        }
        else{
            res[word] = 1;
        }
    }

    let filtered = Object.entries(res).filter(([word,count]) => {
        if(count%2==1){
            return true;
        }else{
            return false;
        }
    });

    console.log(filtered.map(entry => entry[0]).join(' '));
}

solve('Cake IS SWEET is Soft CAKE sweet Food');
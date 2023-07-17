function tickets(day, age) {
    let result;
    if (day === 'Weekday') {
        if (age >= 0 && age <= 18) {
            if (age >= -1000 && age <= 1000) {
                result = 12;
                console.log(`${result}$`);
            } 
        }
        else if (age > 18 && age <= 64) {
            if (age >= -1000 && age <= 1000) {
                result = 18;
                console.log(`${result}$`);
            }
        }
        else if (age > 64 && age <= 122) {
            if (age >= -1000 && age <= 1000) {
                result = 12;
                console.log(`${result}$`);
            }
        }
        else{
            console.log(`Error!`);
        }
    }

    if (day === 'Weekend') {
        if (age >= 0 && age <= 18) {
            if (age >= -1000 && age <= 1000) {
                result = 18;
                console.log(`${result}$`);
            }
        }
        else if (age > 18 && age <= 64) {
            if (age >= -1000 && age <= 1000) {
                result = 20;
                console.log(`${result}$`);
            }  
        }
        else if (age > 64 && age <= 122) {
            if (age >= -1000 && age <= 1000) {
                result = 15;
                console.log(`${result}$`);
            }
        }
        else{
            console.log(`Error!`);
        }
    }

    if (day === 'Holiday') {
        if (age >= 0 && age <= 18) {
            if (age >= -1000 && age <= 1000) {
                result = 5;
                console.log(`${result}$`);
            }
        }
        else if (age > 18 && age <= 64) {
            if (age >= -1000 && age <= 1000) {
                result = 12;
                console.log(`${result}$`);
            }
        }
        else if (age > 64 && age <= 122) {
            if (age <= 0) {
                result = 10;
                console.log(`${result}$`);
            }
        }
        else{
            console.log(`Error!`);
        }
    }

    
}

tickets('Weekday', 42);
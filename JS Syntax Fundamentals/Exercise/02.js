function solve(people, type, day) {

    let totalPrice = 0;

    if (type === "Students") {
        if (day === "Friday") {
            totalPrice = people * 8.45;
        }
        else if (day === "Saturday") {
            totalPrice = people * 9.8;
        }
        else if (day === "Sunday") {
            totalPrice = people * 10.46;
        }

        if (people >= 30) {
            totalPrice -= totalPrice * 0.15;
        }
    }


    if (type === "Business") {
        if (people >= 100) {
            people -= 10;
        }

        if (day === "Friday") {
            totalPrice = people * 10.9;
        }
        else if (day === "Saturday") {
            totalPrice = people * 15.6;
        }
        else if (day === "Sunday") {
            totalPrice = people * 16;
        }
    }


    if (type === "Regular") {
        if (day === "Friday") {
            totalPrice = people * 15;
        }
        else if (day === "Saturday") {
            totalPrice = people * 20;
        }
        else if (day === "Sunday") {
            totalPrice = people * 22.5;
        }

        if (people >= 10 && people <= 20) {
            totalPrice -= totalPrice * 0.05;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
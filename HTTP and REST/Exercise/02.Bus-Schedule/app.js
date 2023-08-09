function solve() {

    const info = document.querySelector("#info .info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let bus = {
        name: "",
        next: "depot"
    };

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${bus.next}`)
        .then((res) => res.json())
        .then((busStop) => {
            bus = busStop;
            arriveBtn.disabled = false;
            departBtn.disabled = true;
            info.textContent = `Next stop ${bus.name}`;
        })
        .catch( () => {
            info.textContent = `Error`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        });
        
        
    }

    async function arrive() {
        
        arriveBtn.disabled = true;
        departBtn.disabled = false;
        info.textContent = `Arriving at ${bus.name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
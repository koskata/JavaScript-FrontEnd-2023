function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const list = document.getElementById("buses");
    const stopName = document.getElementById("stopName");

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
    .then((res) => res.json())
    .then((busStop) => {
        stopName.textContent = busStop.name;

        list.innerHTML = "";
        Object.entries(busStop.buses).map(([ busNumber, timeInnMinutes ]) => {
            const item = document.createElement("li");

            item.textContent = `Bus ${busNumber} arrives in ${timeInnMinutes}`;

            list.appendChild(item);
        });
    })
    .catch( () => {
        stopName.textContent = "Error";
    });
    
}
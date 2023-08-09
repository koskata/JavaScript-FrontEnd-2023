const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

const list = document.getElementById("list");

const buttons = {
    addVacation: document.getElementById("add-vacation"),
    editVacation: document.getElementById("edit-vacation"),
    loadVacations: document.getElementById("load-vacations")
};

const inputs = {
    name: document.getElementById("name"),
    days: document.getElementById("num-days"),
    date: document.getElementById("from-date")
};

let currId = "";

buttons.loadVacations.addEventListener('click', loadVacationsHandler);
buttons.addVacation.addEventListener('click', addVacationHandler);
buttons.editVacation.addEventListener('click', editVacationHandler);

function editVacationHandler() {

    if (Object.values(inputs).some(input => input.value === "")) {
        return;
    }

    const vacation = {
        name: inputs.name.value,
        days: inputs.days.value,
        date: inputs.date.value
    };

    fetch(baseUrl + currId, {
        method: "PUT",
        body: JSON.stringify(vacation)
    });

    loadVacationsHandler();
    buttons.editVacation.disabled = true;
    buttons.addVacation.disabled = false;
    

    ///////////////
    Object.values(inputs).forEach(input => {
        input.value = "";
    });
    ///////////////////////////////////////////////
}

async function addVacationHandler(e) {

    e.preventDefault();

    if (Object.values(inputs).some(input => input.value === "")) {
        return;
    }

    const vacation = {
        name: inputs.name.value,
        days: inputs.days.value,
        date: inputs.date.value
    };

    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(vacation)
    });

    loadVacationsHandler();
    Object.values(inputs).forEach(input => {
        input.value = "";
    });
}

async function loadVacationsHandler() {
    const res = await (await fetch(baseUrl)).json();

    list.textContent = "";

    Object.values(res).forEach(item => {
        let div = document.createElement("div");
        div.className = "container";
        let h2 = document.createElement("h2");
        h2.textContent = item.name;
        let h3_1 = document.createElement("h3");
        h3_1.textContent = item.date;
        let h3_2 = document.createElement("h3");
        h3_2.textContent = item.days;
        let changeBtn = document.createElement("button");
        changeBtn.className = "change-btn";
        changeBtn.textContent = "Change";
        let doneBtn = document.createElement("button");
        doneBtn.className = "done-btn";
        doneBtn.textContent = "Done";

        changeBtn.addEventListener('click', changeBtnHandler);
        doneBtn.addEventListener('click', doneBtnHandler);

        function doneBtnHandler() {
            fetch(baseUrl + item._id, {
                method: "DELETE"
            });

            loadVacationsHandler();
        }

        function changeBtnHandler() {
            
            inputs.name.value = item.name;
            inputs.days.value = item.days;
            inputs.date.value = item.date;

            currId = item._id;

            buttons.editVacation.disabled = false;
            buttons.addVacation.disabled = true;

            div.remove();
        }

        div.appendChild(h2);
        div.appendChild(h3_1);
        div.appendChild(h3_2);
        div.appendChild(changeBtn);
        div.appendChild(doneBtn);

        list.appendChild(div);
    });;
}   


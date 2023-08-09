window.addEventListener('load', solve);

function solve() {

    let counterTasks = 1;

    let allTasksPoints = [];

    const section = document.getElementById("tasks-section");
    const totalSprintPoints = document.getElementById("total-sprint-points");
    let totalPoints = 0;

    const copyOfInputs = {
        title: "",
        description: "",
        label: "",
        points: "",
        assignee: ""
    };

    const inputs = {
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        label: document.getElementById("label"),
        points: document.getElementById("points"),
        assignee: document.getElementById("assignee")
    };

    const buttons = {
        createTask: document.getElementById("create-task-btn"),
        deleteTask: document.getElementById("delete-task-btn")
    };

    buttons.createTask.addEventListener('click', createTaskHandler);
    

    function createTaskHandler() {

        if (Object.values(inputs).some(input => input.value === "")) {
            return;
        }

        let article = document.createElement("article");
        article.id = `task-${counterTasks}`;
        article.className = `task-card`;
        let div1 = document.createElement("div");
        if (inputs.label.value === "Feature") {
            div1.className = `task-card-label feature`;
        }
        else if (inputs.label.value === "Low Priority Bug") {
            div1.className = `task-card-label low-priority`;
        }
        else if (inputs.label.value === "High Priority Bug") {
            div1.className = `task-card-label high-priority`;
        }
        div1.textContent = `${inputs.label.value} ☉`;
        let h3 = document.createElement("h3");
        h3.className = `task-card-title`;
        h3.textContent = inputs.title.value;
        let p = document.createElement("p");
        p.className = `task-card-description`;
        p.textContent = inputs.description.value;
        let div2 = document.createElement("div");
        div2.className = `task-card-points`;
        div2.textContent = `Estimated at ${inputs.points.value} pts`;
        let div3 = document.createElement("div");
        div3.className = `task-card-assignee`;
        div3.textContent = `Assigned to: ${inputs.assignee.value}`;
        let div4 = document.createElement("div");
        div4.className = `task-card-actions`;
        let button = document.createElement("button");
        button.textContent = "Delete";

        allTasksPoints.push(inputs.points.value);

        counterTasks++;

        document.getElementById("task-id").textContent = article.id;

        for (const key in inputs) {
            copyOfInputs[key] = inputs[key].value;
        }

        button.addEventListener('click', delBtnHandler);

        function delBtnHandler() {
            for (const key in copyOfInputs) {
                inputs[key].value = copyOfInputs[key];
                inputs[key].disabled = true;
            }

            buttons.deleteTask.disabled = false;
            buttons.createTask.disabled = true;

            buttons.deleteTask.addEventListener('click', deleteTaskHandler);

            function deleteTaskHandler() {
                article.remove();

                let index = allTasksPoints.indexOf(inputs.points.value);

                allTasksPoints.splice(index, 1);

                totalPoints = 0;
                allTasksPoints.forEach(points => {
                    totalPoints += Number(points);
                    totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
                });

                for (const key in inputs) {
                    inputs[key].disabled = false;
                    inputs[key].value = "";
                }

                buttons.deleteTask.disabled = true;
                buttons.createTask.disabled = false;

                counterTasks--;
            }
        }

        totalPoints = 0;
                allTasksPoints.forEach(points => {
                    totalPoints += Number(points);
                    totalSprintPoints.textContent = `Total Points ${totalPoints}pts`;
                });

        div4.appendChild(button);
        article.appendChild(div1);
        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(div2);
        article.appendChild(div3);
        article.appendChild(div4);

        section.appendChild(article);

        Object.values(inputs).forEach(input => {
            input.value = "";
        });;
    }
}
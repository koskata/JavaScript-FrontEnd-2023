// TODO:

const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

const buttons = {
    loadBoard: document.getElementById("load-board-btn"),
    addTask: document.getElementById("create-task-btn")
};

const buttonTextContentToNext = {
    ToDo: "In Progress",
    "In Progress": "Code Review",
    "Code Review": "Done",
    Done: "Close",
};

const lists = {
    ToDo: document.querySelector("#todo-section .task-list"),
    "In Progress": document.querySelector("#in-progress-section .task-list"),
    "Code Review": document.querySelector("#code-review-section .task-list"),
    Done: document.querySelector("#done-section .task-list"),
};

const inputs = {
    title: document.getElementById("title"),
    description: document.getElementById("description")
};

function attachEvents() {
    buttons.loadBoard.addEventListener('click', loadBoardHandler);
    buttons.addTask.addEventListener('click', addTaskHandler);
}

async function addTaskHandler() {
    const task = {
        title: inputs.title.value,
        description: inputs.description.value,
        status: "ToDo"
    };

    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(task)
    });

    loadBoardHandler();
    inputs.title.value = "";
    inputs.description.value = "";
}

async function loadBoardHandler() {
    const res = await (await fetch(baseUrl)).json();

    Object.values(lists).forEach(list => {
        list.textContent = "";
    });

    Object.values(res).forEach(item => {
        let li = document.createElement("li");
        li.className = "task";
        let h3 = document.createElement("h3");
        h3.textContent = item.title;
        let p = document.createElement("p");
        p.textContent = item.description;
        let button = document.createElement("button");
        if (item.status === "Done") {
            button.textContent = "Close";
        }
        else {
            button.textContent = `Move to ` + buttonTextContentToNext[item.status];
        }

        button.addEventListener('click', moveBtnHandler);

        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(button);

        function moveBtnHandler() {

            let method = "";
            if (item.status === "Done") {
                method = "DELETE";
                fetch(baseUrl + item._id, {
                    method,
                });
            }
            else {
                method = "PATCH";
                fetch(baseUrl + item._id, {
                    method,
                    body: JSON.stringify({
                        ...item,
                        status: buttonTextContentToNext[item.status]
                    }),
                });
            }

            


            loadBoardHandler();
        }

        lists[item.status].appendChild(li);
    });

    //console.log(res);
}

attachEvents();
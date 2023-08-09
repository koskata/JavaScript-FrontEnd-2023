// TODO

const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

const list = document.getElementById("todo-list");
const loadAll = document.getElementById("load-button");
const add = document.getElementById("add-button");

const title = document.getElementById("title");

function attachEvents() {
  loadAll.addEventListener('click', loadAllHandler); 
  add.addEventListener('click', addHandler);  
}

async function addHandler(e) {

    e.preventDefault();

    if (title.value === "") {
        return;
    }

    const task = {
        name: title.value
    };

    await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(task)
    });

    loadAllHandler();
    title.value = '';
}

async function loadAllHandler(e) {

    if (e) {
        e.preventDefault();
    }

    const res = await (await fetch(baseUrl)).json();

    console.log(res);

    list.textContent = "";

    Object.values(res).forEach(item => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = item.name;
        console.log(item.name);
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        let isEnd = false;
        removeBtn.addEventListener('click', removeBtnHandler);
        editBtn.addEventListener('click', editBtnHandler);


        function editBtnHandler() {
            let input = document.createElement("input");
            input.value = span.textContent;
            let submitBtn = document.createElement("button");
            submitBtn.textContent = "Submit";

            isEnd = true;

            submitBtn.addEventListener('click', submitBtnHandler);

            function submitBtnHandler() {

                span.textContent = input.value;

                li.appendChild(span);
                li.appendChild(editBtn);

                loadAllHandler();
            }

            li.appendChild(input);
            li.appendChild(submitBtn);

            
        }

        function removeBtnHandler() {
            fetch(baseUrl + item._id, {
                method: "DELETE"
            });

            loadAllHandler();
        }

        if (isEnd === false) {
            li.appendChild(span);
            li.appendChild(editBtn);
        }
        li.appendChild(removeBtn);

        list.appendChild(li);
    });;
}

attachEvents();

window.addEventListener('load', solve);

function solve() {
    const inputDOM = {
        genre: document.getElementById("genre"),
        name: document.getElementById("name"),
        author: document.getElementById("author"),
        date: document.getElementById("date")
    };

    const otherDOM = {
        addBtn: document.getElementById("add-btn"),
        collection: document.getElementsByClassName("all-hits-container")[0],
        saved: document.getElementsByClassName("saved-container")[0],
        likes: document.getElementsByTagName("p")[1]
    };

    otherDOM.addBtn.addEventListener('click', addButtonHandler);
    
    let counter = 0;

    function addButtonHandler(event) {

        const allFieldsHaveValue = Object.values(inputDOM)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }
        
        event.preventDefault();

        const {genre, name, author, date} = inputDOM;

        let div = document.createElement("div");
        let img = document.createElement("img");
        let h2_1 = document.createElement("h2");
        let h2_2 = document.createElement("h2");
        let h2_3 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let saveBtn = document.createElement("button");
        let likeBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        div.className = "hits-info";
        img.src = "./static/img/img.png";
        h2_1.textContent = `Genre: ${genre.value}`;
        h2_2.textContent = `Name: ${name.value}`;
        h2_3.textContent = `Author: ${author.value}`;
        h3.textContent = `Date: ${date.value}`;
        saveBtn.className = "save-btn";
        saveBtn.textContent = "Save song";
        likeBtn.className = "like-btn";
        likeBtn.textContent = "Like song";
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        div.appendChild(img);
        div.appendChild(h2_1);
        div.appendChild(h2_2);
        div.appendChild(h2_3);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);
        otherDOM.collection.appendChild(div);

        likeBtn.addEventListener('click', likeButtonHandler);
        saveBtn.addEventListener('click', saveButtonHandler);
        deleteBtn.addEventListener('click', deleteButtonHandler);

        Object.values(inputDOM).forEach((input) => {
            input.value = ''
          });
    }

    function likeButtonHandler() {
        counter++;
        this.setAttribute('disabled', true);
        otherDOM.likes.textContent = `Total Likes: ${counter}`;
    }

    function saveButtonHandler() {
        const songRef = this.parentNode;
        const save = songRef.querySelector('.save-btn');
        const like = songRef.querySelector('.like-btn');

        otherDOM.saved.appendChild(songRef);

        save.remove();
        like.remove();
    }

    function deleteButtonHandler() {
        this.parentNode.remove();
        counter--;
        otherDOM.likes.textContent = `Total Likes: ${counter}`;
    }
}
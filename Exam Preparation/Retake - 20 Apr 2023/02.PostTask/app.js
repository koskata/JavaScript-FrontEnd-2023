window.addEventListener("load", solve);

function solve() {

  const copyOfInput = {
    title: null,
    category: null,
    content: null
  };  

  const inputDOM = {
    title: document.getElementById("task-title"),
    category: document.getElementById("task-category"),
    content: document.getElementById("task-content")
  };

  const otherDOM = {
    publishBtn: document.getElementById("publish-btn"),
    reviewList: document.getElementById("review-list"),
    publishedList: document.getElementById("published-list")
  };

  otherDOM.publishBtn.addEventListener('click', publishButtonHandler);

  function publishButtonHandler() {

    const allFieldsHaveValue = Object.values(inputDOM)
            .every((input) => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }

    const {title, category, content} = inputDOM;

    let li = document.createElement("li");
    li.className = "rpost";
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = `${title.value}`;
    let p1 = document.createElement("p");
    p1.textContent = `Category: ${category.value}`;
    let p2 = document.createElement("p");
    p2.textContent = `Content: ${content.value}`;
    let editBtn = document.createElement("button");
    editBtn.className = "action-btn edit";
    editBtn.textContent = "Edit";
    let postBtn = document.createElement("button");
    postBtn.className = "action-btn post";
    postBtn.textContent = "Post";

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(postBtn);

    otherDOM.reviewList.appendChild(li);

    for (const key in inputDOM) {
        copyOfInput[key] = inputDOM[key].value;
    }

    editBtn.addEventListener('click', editButtonHandler);
    postBtn.addEventListener('click', postButtonHandler);

    Object.values(inputDOM).forEach(input => {
        input.value = '';
    });
  }

  function editButtonHandler() {
    for (const key in copyOfInput) {
        inputDOM[key].value = copyOfInput[key];
    }

    this.parentNode.remove();
  }

  function postButtonHandler() {
    let li = this.parentNode;
    li.removeChild(document.getElementsByClassName("edit")[0]);
    li.removeChild(document.getElementsByClassName("post")[0]);

    otherDOM.publishedList.appendChild(li);
  }
}
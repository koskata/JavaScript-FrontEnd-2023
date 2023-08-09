window.addEventListener("load", solve);

function solve() {
  const copyInputDOM = {
    firstName: null,
    lastName: null,
    age: null,
    title: null,
    genre: null,
    story: null
  };

  const inputDOM = {
    firstName: document.getElementById("first-name"),
    lastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    title: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    story: document.getElementById("story")
  };

  const otherDOM = {
    publishBtn: document.getElementById("form-btn"),
    previewSection: document.getElementById("preview-list"),
    main: document.getElementById("main")
  };

  otherDOM.publishBtn.addEventListener('click', publishButtonHandler);


  function publishButtonHandler() {

    const allFieldsHaveValue = Object.values(inputDOM)
      .every((input) => input.value !== '');
    if (!allFieldsHaveValue) {
      return;
    }


    const {firstName, lastName, age, title, genre, story} = inputDOM;

    let li = document.createElement("li");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p"); 
    let p3 = document.createElement("p"); 
    let p4 = document.createElement("p");
    let saveBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    li.className = "story-info";
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    p1.textContent = `Age: ${age.value}`;
    p2.textContent = `Title: ${title.value}`;
    p3.textContent = `Genre: ${genre.value}`;
    p4.textContent = story.value;
    saveBtn.className = "save-btn";
    saveBtn.textContent = "Save Story";
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit Story";
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete Story";


    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    otherDOM.previewSection.appendChild(li);


    for (const key in inputDOM) {
      copyInputDOM[key] = inputDOM[key].value;
    }

    editBtn.addEventListener('click', editButtonHandler);
    saveBtn.addEventListener('click', saveButtonHandler);
    deleteBtn.addEventListener('click', deleteButtonHandler);
    

    Object.values(inputDOM).forEach((input) => {
      input.value = ''
    });
    otherDOM.publishBtn.setAttribute('disabled', true);
  }


  function editButtonHandler() {
      for (const key in copyInputDOM) {
        inputDOM[key].value = copyInputDOM[key];
      }

      const item = this.parentNode.remove();

      otherDOM.publishBtn.removeAttribute('disabled');
  }

  function saveButtonHandler() {
    let h1 = document.createElement("h1");
    h1.textContent = "Your scary story is saved!";

    otherDOM.main.innerHTML = '';
    otherDOM.main.appendChild(h1);
  }

  function deleteButtonHandler() {
    
    const item = this.parentNode.remove();
    otherDOM.publishBtn.removeAttribute('disabled');
  }

}
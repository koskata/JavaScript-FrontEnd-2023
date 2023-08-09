window.addEventListener("load", solve);

function solve() {
  //o	Student Name, University, and Score should be non-empty strings. If any of them are empty, the program should not do anything.
  
  const list = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  const buttons = {
    next: document.getElementById("next-btn")
  };

  const copyOfInputs = {
    name: null,
    university: null,
    score: null
  };

  const inputs = {
    name: document.getElementById("student"),
    university: document.getElementById("university"),
    score: document.getElementById("score")
  };

  buttons.next.addEventListener('click', nextBtnHandler);

  function nextBtnHandler() {
    if (Object.values(inputs).some(input => input.value === "")) {
      return;
    }

    let li = document.createElement("li");
    li.className = "application";
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = inputs.name.value;
    let p1 = document.createElement("p");
    p1.textContent = `University: ${inputs.university.value}`;
    let p2 = document.createElement("p");
    p2.textContent = `Score: ${inputs.score.value}`;
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.className = "action-btn edit";
    let applyBtn = document.createElement("button");
    applyBtn.className = "action-btn apply";
    applyBtn.textContent = "apply";

    editBtn.addEventListener('click', editBtnHandler);
    applyBtn.addEventListener('click', applyBtnHandler);

    for (const key in inputs) {
      copyOfInputs[key] = inputs[key].value;
    }

    function editBtnHandler() {
      for (const key in copyOfInputs) {
        inputs[key].value = copyOfInputs[key];
      }

      this.parentNode.remove();
      buttons.next.disabled = false;
    }

    function applyBtnHandler() {
      this.parentNode.remove();
      li.removeChild(editBtn);
      li.removeChild(applyBtn);
      candidatesList.appendChild(li);

      buttons.next.disabled = false;
    }

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(applyBtn);

    list.appendChild(li);

    buttons.next.disabled = true;

    Object.values(inputs).forEach(input => {
      input.value = "";
    });;
  }
}
  
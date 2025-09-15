const emailInput = document.getElementById("emailInput");
const addBtn = document.getElementById("addBtn");
const emailList = document.getElementById("emailList");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emails = JSON.parse(localStorage.getItem("emails")) || [];

function renderEmails() {
  emailList.innerHTML = "";
  emails.forEach((email, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = email;

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("cancel-btn");

    deleteBtn.addEventListener("click", () => {
      emails.splice(index, 1);
      saveAndRender();
    });

    editBtn.addEventListener("click", () => {
      li.innerHTML = "";

      const input = document.createElement("input");
      input.type = "text";
      input.value = email;
      input.classList.add("edit-input");

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.classList.add("save-btn");

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "X";
      cancelBtn.classList.add("cancel-btn");

      saveBtn.addEventListener("click", () => {
        const newEmail = input.value.trim();
        if (!emailRegex.test(newEmail)) {
          alert("Invalid email format!");
          return;
        }
        emails[index] = newEmail;
        saveAndRender();
      });

      cancelBtn.addEventListener("click", () => {
        renderEmails();
      });

      li.appendChild(input);
      li.appendChild(saveBtn);
      li.appendChild(cancelBtn);
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    emailList.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem("emails", JSON.stringify(emails));
  renderEmails();
}

addBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email!");
    return;
  }
  if (emails.includes(email)) {
    alert("Email already exists!");
    return;
  }

  emails.push(email);
  emailInput.value = "";
  saveAndRender();
});

renderEmails();

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");
const addBtn = document.getElementById("addBtn");
const contactList = document.getElementById("contactList");
const contactTable = document.getElementById("contactTable");
const emptyState = document.getElementById("emptyState");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
const nameRegex = /^[a-zA-Z\s]{2,}$/;

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editingIndex = -1;

// Validation functions
function showError(input, errorElement, message) {
  input.classList.add("error");
  errorElement.textContent = message;
  errorElement.classList.add("show");
}

function clearError(input, errorElement) {
  input.classList.remove("error");
  errorElement.classList.remove("show");
  errorElement.textContent = "";
}

function validateForm() {
  let isValid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Clear previous errors
  clearError(nameInput, nameError);
  clearError(emailInput, emailError);
  clearError(phoneInput, phoneError);

  // Validate name
  if (!name) {
    showError(nameInput, nameError, "Name is required");
    isValid = false;
  } else if (!nameRegex.test(name)) {
    showError(
      nameInput,
      nameError,
      "Please enter a valid name (letters and spaces only, minimum 2 characters)"
    );
    isValid = false;
  }

  // Validate email
  if (!email) {
    showError(emailInput, emailError, "Email is required");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    showError(emailInput, emailError, "Please enter a valid email address");
    isValid = false;
  } else if (
    contacts.some(
      (contact, index) => contact.email === email && index !== editingIndex
    )
  ) {
    showError(emailInput, emailError, "This email already exists");
    isValid = false;
  }

  // Validate phone
  if (!phone) {
    showError(phoneInput, phoneError, "Phone number is required");
    isValid = false;
  } else if (!phoneRegex.test(phone)) {
    showError(
      phoneInput,
      phoneError,
      "Please enter a valid phone number (minimum 10 digits)"
    );
    isValid = false;
  }

  return isValid;
}

// UI functions
function renderContacts() {
  contactList.innerHTML = "";

  if (contacts.length === 0) {
    contactTable.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  contactTable.style.display = "table";
  emptyState.style.display = "none";

  contacts.forEach((contact, index) => {
    const tr = document.createElement("tr");
    tr.style.animationDelay = `${index * 0.15}s`;

    tr.innerHTML = `
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td>
        <div class="actions">
          <button class="btn edit-btn" onclick="editContact(${index})">Edit</button>
          <button class="btn delete-btn" onclick="deleteContact(${index})">Delete</button>
        </div>
      </td>
    `;

    contactList.appendChild(tr);
  });
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function addContact() {
  if (!validateForm()) return;

  const contact = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
  };

  contacts.push(contact);
  saveContacts();

  addContactWithAnimation(contact);
  clearForm();
}

function addContactWithAnimation(contact) {
  const index = contacts.length - 1;

  // Show table if it was hidden
  if (contacts.length === 1) {
    contactTable.style.display = "table";
    emptyState.style.display = "none";
  }

  // Create new row with special adding animation
  const tr = document.createElement("tr");
  tr.classList.add("adding");

  tr.innerHTML = `
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.phone}</td>
    <td>
      <div class="actions">
        <button class="btn edit-btn" onclick="editContact(${index})">Edit</button>
        <button class="btn delete-btn" onclick="deleteContact(${index})">Delete</button>
      </div>
    </td>
  `;

  contactList.appendChild(tr);

  // Remove the adding class after animation completes
  setTimeout(() => {
    tr.classList.remove("adding");
  }, 600);
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  clearError(nameInput, nameError);
  clearError(emailInput, emailError);
  clearError(phoneInput, phoneError);
}

function deleteContact(index) {
  const row = contactList.children[index];
  row.classList.add("deleting");

  setTimeout(() => {
    contacts.splice(index, 1);
    saveContacts();
    renderContacts();
  }, 400);
}

function editContact(index) {
  const contact = contacts[index];
  const row = contactList.children[index];
  editingIndex = index;

  row.innerHTML = `
    <td><input type="text" class="edit-input" value="${contact.name}" id="editName${index}"></td>
    <td><input type="email" class="edit-input" value="${contact.email}" id="editEmail${index}"></td>
    <td><input type="tel" class="edit-input" value="${contact.phone}" id="editPhone${index}"></td>
    <td>
      <div class="actions">
        <button class="btn save-btn" onclick="saveEdit(${index})">Save</button>
        <button class="btn cancel-btn" onclick="cancelEdit()">Cancel</button>
      </div>
    </td>
  `;
}

function saveEdit(index) {
  const nameInput = document.getElementById(`editName${index}`);
  const emailInput = document.getElementById(`editEmail${index}`);
  const phoneInput = document.getElementById(`editPhone${index}`);

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Basic validation for edit
  if (!name || !email || !phone) {
    alert("All fields are required!");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number!");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("Please enter a valid name!");
    return;
  }

  // Check for duplicate email
  if (contacts.some((contact, i) => contact.email === email && i !== index)) {
    alert("This email already exists!");
    return;
  }

  contacts[index] = { name, email, phone };
  editingIndex = -1;
  saveContacts();
  renderContacts();
}

function cancelEdit() {
  editingIndex = -1;
  renderContacts();
}

addBtn.addEventListener("click", addContact);

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() && nameError.classList.contains("show")) {
    clearError(nameInput, nameError);
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.trim() && emailError.classList.contains("show")) {
    clearError(emailInput, emailError);
  }
});

phoneInput.addEventListener("input", () => {
  if (phoneInput.value.trim() && phoneError.classList.contains("show")) {
    clearError(phoneInput, phoneError);
  }
});

[nameInput, emailInput, phoneInput].forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addContact();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderContacts();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderContacts);
} else {
  renderContacts();
}

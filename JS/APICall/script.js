fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const nameList = document.getElementById("nameList");

    data.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      nameList.appendChild(li);
    });
  })
  .catch((error) => console.error("Error fetching users:", error));

function getToken() {
  fetch("/token", { method: "POST" })
    .then(res => res.json())
    .then(data => {
      document.getElementById("token").innerText =
        "Your Token: " + data.tokenNumber;
    });
}

function callNext() {
  fetch("/next", { method: "POST" });
}

function loadUsers() {
  fetch("/allUsers")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("users");
      list.innerHTML = "";
      data.forEach(u => {
        list.innerHTML += "<li>" + u.username + " - " + u.role + "</li>";
      });
    });
}

function loadHistory() {
  fetch("/history")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("history");
      list.innerHTML = "";
      data.forEach(t => {
        list.innerHTML += "<li>Token " + t.token + " - " + t.date + "</li>";
      });
    });
}

if (document.getElementById("history")) {
  loadHistory();
}
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("userId").value;
  const parol = document.getElementById("password").value;

  if (id === "12345" && parol === "54321") {
    window.location.href = "home.html";
  } else if (id === "1232" && parol === "0102") {
    window.location.href = "home.html";
  } else if (id === "8737" && parol === "7271") {
    window.location.href = "home.html";
  } else {
    alert("ID yoki Parol noto‘g‘ri!");
  }
});

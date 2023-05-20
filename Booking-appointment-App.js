const submit = document.getElementById("my-form");
submit.addEventListener("submit", hsubmit);
function hsubmit(e) {
  e.preventDefault();
  const namee = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("name", namee);
  localStorage.setItem("email", email);
}

const submit = document.getElementById("my-form");
submit.addEventListener("submit", hsubmit);
function hsubmit(e) {
  e.preventDefault();
  const namee = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  let obj = {
    name: namee,
    email: email,
  };
  const jsonForm = JSON.stringify(obj);

  localStorage.setItem("data", jsonForm);
  console.log(localStorage.getItem("data"));
}

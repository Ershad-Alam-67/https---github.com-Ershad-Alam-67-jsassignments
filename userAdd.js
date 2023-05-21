const form = document.getElementById("frm");
form.addEventListener("submit", fun);

function fun(e) {
  e.preventDefault();
  const nam = document.getElementById("name").value;
  const mail = document.getElementById("email").value;
  const phn = document.getElementById("phone").value;
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(nam + "-" + mail + "-" + phn));
  const ul = document.getElementById("ul");
  li.setAttribute("class", "list-group-item");
  ul.appendChild(li);
  let obj = {
    name: nam,
    email: mail,
    phone: phn,
  };
  const jso = JSON.stringify(obj);
  localStorage.setItem(mail, jso);
}

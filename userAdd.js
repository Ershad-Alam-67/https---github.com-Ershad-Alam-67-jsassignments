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
  const del = document.createElement("input");
  del.setAttribute("class", "btn btn-danger delete");

  del.setAttribute("id", "delete");
  del.setAttribute("type", "button");
  del.setAttribute("value", "delete");
  del.setAttribute("onclick", "funDel(event)");
  const edit = document.createElement("input");
  edit.setAttribute("type", "button");
  edit.setAttribute("value", "edit");
  edit.setAttribute("class", "btn btn-primary edit");
  edit.setAttribute("id", "edit");
  edit.setAttribute("onclick", "editFun(event)");
  li.appendChild(del);
  li.appendChild(edit);
  ul.appendChild(li);

  let obj = {
    name: nam,
    email: mail,
    phone: phn,
  };
  const jso = JSON.stringify(obj);
  localStorage.setItem(mail, jso);
}

function funDel(event) {
  event.preventDefault();
  const ul = document.getElementById("ul");
  const key = event.target.parentNode.textContent;
  const ar = key.split("-");
  localStorage.removeItem(ar[1]);
  ul.removeChild(event.target.parentNode);
}
function editFun(event) {
  const tar = event.target.parentNode;
  const ar = tar.textContent.split("-");
  document.getElementById("name").value = ar[0];
  document.getElementById("email").value = ar[1];
  document.getElementById("phone").value = ar[2];
  const ul = document.getElementById("ul");
  localStorage.removeItem(ar[1]);
  ul.removeChild(event.target.parentNode);
  console.log(ar);
}

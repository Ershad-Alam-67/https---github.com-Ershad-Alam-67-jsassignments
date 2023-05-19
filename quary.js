const scnd = document.querySelectorAll(".list-group-item");
scnd[1].style.backgroundColor = "green";
scnd[2].style.display = "none";
scnd[1].style.color = "green";
for (let i = 0; i < scnd.length; i++) {
  if ((i + 1) % 2 != 0) {
    scnd[i].style.backgroundColor = "green";
  }
}

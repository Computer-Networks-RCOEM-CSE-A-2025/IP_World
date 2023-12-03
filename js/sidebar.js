const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle");
//   searchbtn = body.querySelector(".search-box");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// function toggle() {
//   var blur = document.getElementById("blur");
//   blur.classList.toggle("active");
// }

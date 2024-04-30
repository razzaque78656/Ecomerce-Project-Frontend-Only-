let offline = document.querySelector(".offline");
let refreshBtn = document.getElementById("refreshBtn");
window.addEventListener("offline", () => {
  offline.style.display = "inline-block";
  // offline.style.left = "inline-block";
  //   offline.style.visiblity = "visible";
});
window.addEventListener("online", () => {
  offline.style.display = "none";
});

function refresh() {
  window.location.reload();
}

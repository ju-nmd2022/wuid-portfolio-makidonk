window.onload = function () {
  document.querySelector("#finished").innerText =
    "Good job, " + localStorage.getItem("userName") + "!";
};

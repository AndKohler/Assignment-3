let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (btn.innerHTML === "Dark Mode") {
    btn.innerHTML = "Light Mode";
  } else {
    btn.innerHTML = "Dark Mode";
  }
});

btn.addEventListener("click", () => {
  let body = document.body;
  if (body.style.background === "black") {
    body.style.background = "white";
  } else {
    body.style.background = "black";
  }
});

let changeParaColor = () => {
  let allPara = document.querySelectorAll("h1, p");

  allPara.forEach((para) => {
    if (para.style.color !== "white") {
      para.style.color = "white";
    } else {
      para.style.color = "black";
    }
  });
};
btn.addEventListener("click", changeParaColor);


let btn = document.getElementById("btn1");
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
  let allPara = document.querySelectorAll("h1, h2, p, .question");

  allPara.forEach((para) => {
    if (para.style.color !== "white") {
      para.style.color = "white";
    } else {
      para.style.color = "black";
    }
  });
};
btn.addEventListener("click", changeParaColor);

function onSubmit() {
  let score = 0;
  let numOfQuestions = 7;
  let ansArr = ["b", "a", "b", "a", "b", "c", "right"];

  let q1 = document.forms["quiz"]["q1"].value;
  let q2 = document.forms["quiz"]["q2"].value;
  let q3 = document.forms["quiz"]["q3"].value;
  let q4 = document.forms["quiz"]["q4"].value;
  let q5 = document.forms["quiz"]["q5"].value;
  let q6 = document.forms["quiz"]["q6"].value;
  let q7 = document.forms["quiz"]["q7"].value;

  for (let i = 1; i <= numOfQuestions; i++) {
    if (eval("q" + i) == "") {
    }
  }
  for (let i = 1; i <= numOfQuestions; i++) {
    if (eval("q" + i) == ansArr[i - 1]) {
      score++;
    }
    if (score > 3) {
      document.getElementById("results").style.color = "orange";
    }
    if (score === 7) {
      document.getElementById("results").style.color = "green";
    } else if (score < 3) {
      document.getElementById("results").style.color = "red";
    }
  }
  let results = document.getElementById("results");
  results.innerHTML =
    "<h2>You Scored " + score + " points out of " + numOfQuestions + "</h2>";
  return false;
}
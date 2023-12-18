//chess quiz by dawit

// Button event listener
document.getElementById("answerbtn").addEventListener("click", btnClicked);

// Input
function btnClicked() {
  let Q1 = document.getElementById("question1-in").value.toLowerCase();

  let Q2 = document.getElementById("question2-in").value.toLowerCase();

  let Q3 = document.getElementById("question3-in").value.toLowerCase();

  let Q4 = document.getElementById("question4-in").value.toLowerCase();
  i = 0;
  // check answers
  if (Q1 === "64") {
    document.getElementById("q1-out").innerHTML = "Correct";
    i++;
  } else {
    document.getElementById("q1-out").innerHTML = "Incorrect";
  }

  if (Q2 === "adolf anderssen") {
    document.getElementById("q2-out").innerHTML = "Correct";
    i++;
  } else {
    document.getElementById("q2-out").innerHTML = "Incorrect";
  }

  if (Q3 === "269" || Q3 === "237") {
    document.getElementById("q3-out").innerHTML = "Correct";
    i++;
  } else {
    document.getElementById("q3-out").innerHTML = "Incorrect";
  }

  if (Q4 === "india") {
    document.getElementById("q4-out").innerHTML = "Correct";
    i++;
  } else {
    document.getElementById("q4-out").innerHTML = "Incorrect";
  }
  document.getElementById("answer").innerHTML = `${i}/4 and 
    ${(i / 4) * 100}%`;

  if (i <= 2) {
    document.getElementById("response").innerHTML =
      "Nice try comeback when you study more";
  } else {
    document.getElementById("response").innerHTML = "Good job";
  }
}

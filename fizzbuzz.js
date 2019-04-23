let fbDone = false;

window.onload = function() {
  // Registers both buttons to goButton function
  let buttonGo = document.querySelector("#btnGo");
  let buttonStyle = document.querySelector("#btnStyle");
  buttonGo.addEventListener("click", goButton);
  buttonStyle.addEventListener("click", styleButton);

  //or document.querySelector("#btnGo").addEventListener("click", goButton);
};

function goButton() {
  // Creating variables for go and style buttons
  let inputNum, style;
  let textbox = document.querySelector("#num");
  inputNum = Number(textbox.value);
  let fizzNum = FizzBuzz(inputNum);

  let resultDiv = document.querySelector("#answer");
  resultDiv.innerHTML = fizzNum;

  fbDone = true;
}

function styleButton() {
  // If the list hasn't been built yet, show an error and quit
  if (!fbDone) {
    alert("Press the Go button first!");
    return;
  }
  // Loop through <li> tags
  //      if content contains "fizz" then apply fizz style
  //      if content contains "buzz" then apply buzz style
  //      if content is "fizzbuzz" then apply both fizz and buzz styles

  let tags = document.querySelectorAll("li");

  for (let i = 0; i < tags.length; i++) {
    let tempTag = tags[i];
    if (tempTag.innerHTML.includes("Fizz")) {
      tempTag.classList.add("fizz"); // not ".fizz", querySelector would need ".fizz"
    }
    if (tempTag.innerHTML.includes("Buzz")) {
      tempTag.classList.add("buzz"); // not ".fizz", querySelector would need ".fizz"
    }
  }
}

function FizzBuzz(inputNumber) {
  let res = "";

  if (inputNumber <= 0) {
    res = "Enter a number above 0";
  } else {
    res = "";

    res += "<ul>";
    for (i = 1; i <= inputNumber; i++) {
      res += "<li>";

      if (i % 3 != 0 && i % 5 != 0) {
        res += i;
      }
      if (i % 3 === 0) {
        res += "Fizz";
      }
      if (i % 5 === 0) {
        res += "Buzz";
      }

      res += "</li>";
    }
  }

  return res;
}

//let fizzBuzz = "";
//fizzBuzz += "<ul>";
//for (i = 1; i <= 100; i++) {
//  fizzBuzz += "<li>";
//
//  if (i % 3 != 0 && i % 5 != 0) {
//    fizzBuzz += i;
//}
//   if (i % 3 === 0) {
//     fizzBuzz += "Fizz";
// }
//if (i % 5 === 0) {
//  fizzBuzz += "Buzz";
// }
//
//  fizzBuzz += "</li>";
//}
//fizzBuzz += "</ul>";
//let theDiv = document.querySelector("div"); // Or #answer
// Change the innerHTML of the div
//theDiv.innerHTML = fizzBuzz;

//let theString = "";
//theString += "<ul>";
//for (i = 1; i <= 10; i++) {
//    theString += "<li>" + i + "</li>";
// }
//theString += "</ul>";
//console.log(theString);
// Select the div
//let theDiv = document.querySelector("div"); // Or #answer
// Change the innerHTML of the div
//theDiv.innerHTML = theString;

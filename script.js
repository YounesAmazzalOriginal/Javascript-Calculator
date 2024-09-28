const operation = document.querySelector(".operation");
const resaultArea = document.querySelector(".resaultArea");
const buttons = document.querySelectorAll("button");

// Buttons Selection
buttons.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    operation.innerHTML += buttons.value;
  });
});

// Equal Function
function equal() {
  try {
    const resault = eval(operation.innerHTML);
    resaultArea.innerHTML = resault;
  } catch (error) {
    resaultArea.innerHTML = "Error";
  }

  // Change Font If Length Of Resault Over 8 Number
  if (resaultArea.innerHTML.length > 8) {
    resaultArea.style.fontSize = "1rem";
  } else {
    resaultArea.style.fontSize = "";
  }
  if (resaultArea.innerHTML.length > 2) {
    resaultArea.innerHTML = "Error";
  }
}

// ClearDisplay Function
function clearDisplay() {
  operation.innerHTML = "";
  resaultArea.innerHTML = "";
}

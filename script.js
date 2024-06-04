const inputWord = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

const resultDiv = document.getElementById("result");

// Listener for the button, saving the value for use.
checkButton.addEventListener("click", function() {
  const inputValue = inputWord.value;

  // Preform a regex expression to get all letters,digits.
  let savedValue = inputValue.replace(/[^a-z0-9]/gi, '');
  savedValue = savedValue.toLowerCase();

  // Now to create a variable to hold the flipped variable
  let flippedValue = savedValue.split("").reverse().join("");

  // Now you can use flippedValue for comparison
  if (inputValue === "") {
    alert("Please input a value");
  } else if (savedValue === flippedValue) {
    resultDiv.innerHTML = inputValue + " is a palindrome";
  } else {
    resultDiv.innerHTML = inputValue + " is not a palindrome";
  }
});

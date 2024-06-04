const inputWord = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

const resultDiv = document.getElementById("result");

// Listener for the button, saving the value for use.

checkButton.addEventListener("click", function() {
    // Use the correct variable name that references the input field
    const inputValue = inputWord.value;
  
    let savedValue = inputValue;

    // Preform a regex expression to get all letters,digits.
    savedValue = savedValue.replace(/[^a-z0-9]/gi, '');

    savedValue = savedValue.toLowerCase();

    // Now to create a variable to hold the flipped variable.

    flippedValue = savedValue.split("").reverse().join("");


   // alert("The cleaner value is" + savedValue + "Your reversed value is" + flippedValue);

    if (inputValue == "") {
        alert("Please input a value");
    }
    else if (savedValue == flippedValue)
    {
        resultDiv.innerHTML = "\"" + savedValue + "\"" + "is a palindrome";
    }
    else {
        resultDiv.innerHTML = "\"" + savedValue + "\"" + "isn't a palindrome";
    }
  
    //alert("Entered value is:" + savedValue);  // Add colon after "is"
  
    // Close the anonymous function parenthesis
  });
  
const inputWord = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

// Listener for the button, saving the value for use.

checkButton.addEventListener("click", function() {
    // Use the correct variable name that references the input field
    const inputValue = inputWord.value;
  
    let savedValue = inputValue;

    savedValue = savedValue.replace(/[^a-z0-9]/gi, '');

    alert("The cleaner value is" + savedValue);

    if (inputValue == "") {
        alert("Please input a value");
    }
  
    //alert("Entered value is:" + savedValue);  // Add colon after "is"
  
    // Close the anonymous function parenthesis
  });
  
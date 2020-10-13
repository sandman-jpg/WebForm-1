// P5 JAVASCRIPT FUNCTIONS
///////////////////////////////////////////////////////////////////

// Insert your setup and draw functions here


// REGULAR JAVASCRIPT FUNCTIONS
///////////////////////////////////////////////////////////////////

// Sets the form element as a variable for easy reference
var form = document.querySelector("form");
// Adds the event listener for when the form is submitted
form.addEventListener("submit", (event) => {
  // Stops the form from trying to load another page
  event.preventDefault();
  // Creates an array from all the elements inside the form element and loops through the array
  Array.from(form.elements).forEach((element) => {
    // Finds any input which is not the submit button
    if (element.type != "submit") {
      // Logs the 'name' attribute from the HTML element
      console.log(element.name + ':');
      // Logs the 'value' attribute from the HTML element
      console.log(element.value);
    }
  }); 
});



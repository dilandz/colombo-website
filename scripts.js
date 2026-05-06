document.addEventListener("DOMContentLoaded", () => {
  // Function animate the welcome text into typewriter format displaying
  // each letter at a time and when finished it displays the greeting message
  const displayElement = document.getElementById("animation-text");

  if (displayElement) {
    const displayText = "Welcome to Colombo, ";
    let charIndex = 0;
    function typeWriter() {
      if (charIndex < displayText.length) {
        displayElement.innerHTML += displayText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Speed of typing in milliseconds
      } else {
        displayGreeting(); // run the display greet function after displaying the welcome text
      }
    }

    // This function gets the current time using the date method and based on
    // the specific time it displays the greeting message
    function displayGreeting() {
      // Get the current date and time method
      const dateNow = new Date();
      const currentHour = dateNow.getHours();
      let greetingMessage = "";

      //Determine the greeting based on the hour
      if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning!";
      } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon!";
      } else if (currentHour >= 18 && currentHour < 22) {
        greetingMessage = "Good Evening!";
      } else {
        greetingMessage = "Good Night!";
      }

      const greetingElement = document.getElementById("greeting-message");
      if (greetingElement) {
        greetingElement.textContent = greetingMessage;
      }
    }
    typeWriter();
  }



  // Places Page JavaScript
  
});

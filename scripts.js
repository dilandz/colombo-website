//This lines makes the code wait until the full html is loaded to the screen so it won't result
//any errors
document.addEventListener("DOMContentLoaded", () => {
  const displayElement = document.getElementById("animation-text");

  if (displayElement) {
    const displayText = "Welcome to Colombo, ";
    let charIndex = 0;

    // Function animate the welcome text into typewriter format displaying
    // each letter at a time and when finished it displays the greeting message
    function typeWriter() {
      if (charIndex < displayText.length) {
        displayElement.innerHTML += displayText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
      } else {
        //Run the display greet function after displaying the welcome text
        displayGreeting();
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

  // Places Page JavaScript for Category Filter
  const grid = document.getElementById("places-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (grid && filterButtons.length > 0) {
    // Grab all the cards
    let cards = document.querySelectorAll(".place-card");

    // Listen for clicks on any filter button
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // 1. Visual update: Move the orange 'active' color to the clicked button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // 2. Logic: Find out which category was clicked
        const currentFilter = button.getAttribute("data-filter");

        // 3. Filter: Loop through every card to see if it matches
        cards.forEach((card) => {
          const category = card.getAttribute("data-category");

          // If filter is 'all' OR it matches the card's category, show it
          if (currentFilter === "all" || currentFilter === category) {
            card.classList.remove("hidden");
          } else {
            // Otherwise, hide it
            card.classList.add("hidden");
          }
        });
      });
    });
  }
});

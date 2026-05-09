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

    // This function gets the current time using the in build date method and based on
    // the specific time it displays the greeting message
    function displayGreeting() {
      
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


  // This code below perform the sorting filter based on the categories on the places page 
  // and hospitality page. It takes the users selected category as the input and sort 
  // the place card accordingly and display. 
  const grid = document.getElementById("places-grid");
  const categoryButtons = document.querySelectorAll(".category-btn");

  if (grid && categoryButtons.length > 0) {
    let cards = document.querySelectorAll(".place-card");

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        
        // This part remove the active state from the current selected category 
        // and put into new selected category.
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        const currentFilter = button.getAttribute("category-filter");

        // Loops through all the cards on the pages and hidden the ones 
        // that does not match the category type.
        cards.forEach((card) => {
          const category = card.getAttribute("category-type");
          if (currentFilter === "all" || currentFilter === category) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // This function performs the contact form validation by take the user inputs. 
  // If user enter invalid input is display in red showing the error message after 
  // a success full submission it will display user a success message.
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); 
      let valid = true;

      const userName = document.getElementById("name");
      const nameErrorMessage = document.getElementById("name-error-message");

      const userEmail = document.getElementById("email");
      const emailErrorMessage = document.getElementById("email-error-message");

      const userMessage = document.getElementById("message");
      const meesageErrorMessage = document.getElementById("error-message");

      // Validate the name and make sure its not empty
      if (userName.value.trim() === "") {
        nameErrorMessage.classList.remove("hidden");
        userName.style.borderColor = "red";
        valid = false;
      } else {
        nameErrorMessage.classList.add("hidden");
        userName.style.borderColor = "#d3d1d1";
      }

      // Validate the email using Regex check for only letters, numbers,
      // dots, dashes, and a 2-to-6 letter domain
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(userEmail.value.trim())) {
        emailErrorMessage.classList.remove("hidden");
        userEmail.style.borderColor = "red";
        valid = false;
      } else {
        emailErrorMessage.classList.add("hidden");
        userEmail.style.borderColor = "#d3d1d1";
      }

      // Validate the user message to make sure its not empty
      if (userMessage.value.trim() === "") {
        meesageErrorMessage.classList.remove("hidden");
        userMessage.style.borderColor = "red";
        valid = false;
      } else {
        meesageErrorMessage.classList.add("hidden");
        userMessage.style.borderColor = "#e0e0e0";
      }

      // If all the above validation passes, it displays user success message
      if (valid) {
        contactForm.style.display = "none"; 
        document.getElementById("success-message").classList.remove("hidden");
      }
    });
  }
});

function updateTime() {
    // Get the current time
    const currentTime = new Date();

    // Get the hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Format the time as "HH:MM:SS" (you can customize this format)
    const formattedTime = hours + ':' + minutes + ':' + seconds;

    // Display the time in the HTML element with id "timePlaceholder"
    document.getElementById('timePlaceholder').textContent = formattedTime;
  }

  // Call the updateTime function initially
  updateTime();

  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);

  const backgroundColorDiv = document.querySelector(".background-color");

  // Update opacity based on scroll
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const opacity = Math.min(scrollY / (window.innerHeight * 0.7), 1);
    backgroundColorDiv.style.opacity = opacity;
  });
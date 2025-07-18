let lastPressedButton = null; // Keeps track of the previously clicked button

function updateMessage(floor) {
  // 1. Update the floor message at the top
  document.getElementById(
    "message"
  ).textContent = `🚪 You are on Floor ${floor}`;

  // 2. Remove green class from the previous button (if any)
  if (lastPressedButton) {
    lastPressedButton.classList.remove("active-floor");
  }

  // 3. Find the button we just clicked (by matching text)
  const buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    if (btn.textContent === floor) {
      btn.classList.add("active-floor"); // Turn it green!
      lastPressedButton = btn; // Save it as the last pressed one
    }
  });
}

function goToFloor(floor) {
  updateMessage(floor); // Just call updateMessage with the selected floor
}

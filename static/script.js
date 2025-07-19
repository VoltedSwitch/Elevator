let lastPressedButton = null; // Keeps track of the previously clicked button
const EMERGENCY_MESSAGE = "🚨 Help is on the way 🚨";
const EMERGENCY_SYMBOL = "🚨";
const ALL_BUTTONS = "button";
const ALL_BUTTONS_STYLER = "active-floor";
const EMERGENCY_BUTTON_ID = "emergency-button";
const EMERGENCY_BUTTON_STYLER = "emergency";
const BUTTONS = document.querySelectorAll(ALL_BUTTONS);
const EMERGENCY_BUTTON = document.getElementById(EMERGENCY_BUTTON_ID);

function updateMessage(floor) {
  document.getElementById("message").textContent =
    floor === "🚨" ? EMERGENCY_MESSAGE : `🚪 You are on Floor ${floor}`;

  if (lastPressedButton) {
    lastPressedButton.classList.remove(
      ALL_BUTTONS_STYLER,
      EMERGENCY_BUTTON_STYLER
    );
  }

  BUTTONS.forEach((btn) => {
    if (btn.textContent === floor && floor !== EMERGENCY_SYMBOL) {
      btn.classList.add(ALL_BUTTONS_STYLER);
      lastPressedButton = btn;
    } else if (floor === "🚨") {
      EMERGENCY_BUTTON.classList.add(EMERGENCY_BUTTON_STYLER);
      lastPressedButton = EMERGENCY_BUTTON;
    }
  });
}

function goToFloor(floor) {
  updateMessage(floor);
}

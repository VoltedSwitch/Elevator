let floor = 0;

function updateMessage() {
  document.getElementById(
    "message"
  ).textContent = `🚪 You are on Floor ${floor}`;
}

function goUp() {
  floor++;
  updateMessage();
}

function goDown() {
  if (floor > 0);
  {
    floor--;
  }
  updateMessage();
}

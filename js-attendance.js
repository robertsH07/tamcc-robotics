
function submitAttendance() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  window.location.href =
    "attendance-confirmation.html?name=" +
    encodeURIComponent(name);
}

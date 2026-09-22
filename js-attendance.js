const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxy27i4A6cIgEjYosiePNd1lH8U_IRVVymmwq2YUKAkcaPYrwl_F6ExpNWP4GmlZmAv/exec";

const parameters = new URLSearchParams(window.location.search);

const meetingID = parameters.get("meeting") || "";
const meetingDate = parameters.get("date") || "";

function submitAttendance() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!meetingID) {
    alert("Meeting ID is missing. Please scan the meeting QR code again.");
    return;
  }

  const data = new URLSearchParams();

  data.append("name", name);
  data.append("meetingID", meetingID);
  data.append("meetingDate", meetingDate);

  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    body: data,
    mode: "no-cors"
  })
    .then(() => {
      window.location.href =
        "attendance-confirmation.html?name=" +
        encodeURIComponent(name) +
        "&meeting=" +
        encodeURIComponent(meetingID);
    })
    .catch((error) => {
      console.error("Attendance submission error:", error);
      alert("There was a problem submitting your attendance. Please try again.");
    });
}

const meetingDate = localStorage.getItem("meetingDate");

document.getElementById("meetingDateDisplay").textContent =
    "Meeting: " + meetingDate;

const parameters = new URLSearchParams(window.location.search);

const meetingID = parameters.get("meeting");

console.log(meetingID);
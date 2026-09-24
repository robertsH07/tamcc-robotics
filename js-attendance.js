const parameters = new URLSearchParams(window.location.search);

const meetingID = parameters.get("meeting");
const meetingDate = parameters.get("date");

if (meetingDate) {
    const date = new Date(meetingDate + "T00:00:00");

    const formattedDate = date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    document.getElementById("meetingID").textContent = "Meeting: " + formattedDate;
} else {
    document.getElementById("meetingID").textContent = "Meeting: No date";
}

function submitAttendance() {
    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    window.location.href =
        "attendance-confirmation.html?name=" +
        encodeURIComponent(name) +
        "&meeting=" +
        encodeURIComponent(meetingID || "");
}
// apps script i guess //

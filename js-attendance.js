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

    document.getElementById("meetingID").textContent =
        "Meeting: " + formattedDate;
} else {
    document.getElementById("meetingID").textContent =
        "Meeting: No date";
}

function submitAttendance() {
    const name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    const data = {
        name: name,
        date: meetingDate,
        meetingID: meetingID,
        time: new Date().toLocaleString()
    };

    fetch("https://script.google.com/macros/s/AKfycbxzSx5Ky2fuwyHHKxcfA7dJx-5yeGC0wP4VAJh_4RpOjE9vIWsCN3heHk7oPGQXAUd3qw/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data)
    });

    window.location.href = "attendance-confirmation.html";
}

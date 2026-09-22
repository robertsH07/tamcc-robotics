function createMeeting() {
    const date = document.getElementById("meetingDate").value;

    if (date === "") {
        alert("Please select a meeting date.");
        return;
    }

    const meetingID = Date.now();

    localStorage.setItem("meetingDate", date);
    localStorage.setItem("meetingID", meetingID);

    const attendanceURL =
        "https://robertsh07.github.io/TAMCC-Robotics/attendance-page.html?meeting=" +
        meetingID;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, attendanceURL);

    console.log("Meeting ID:", meetingID);
    console.log("Meeting Date:", date);
    console.log("Attendance URL:", attendanceURL);
}

function createAttendanceQR() {
    const meetingID = localStorage.getItem("meetingID");

    if (!meetingID) {
        alert("No meeting has been created.");
        return;
    }

    const attendanceURL =
        "https://robertsh07.github.io/TAMCC-Robotics/attendance-page.html?meeting=" +
        meetingID;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, attendanceURL);

    console.log("Meeting ID:", meetingID);
    console.log("Attendance URL:", attendanceURL);
}

const parameters = new URLSearchParams(window.location.search);
const urlMeetingID = parameters.get("meeting");

console.log("Meeting ID:", urlMeetingID);


function createMeeting() {

    const date = document.getElementById("meetingDate").value;

    if (date === "") {
        alert("Please select a meeting date.");
        return;
    }

    localStorage.setItem("meetingDate", date);

    const meetingID = Date.now();

    const attendanceURL =
        window.location.origin +
        "/attendance-page.html?meeting=" +
        meetingID;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, attendanceURL);

    console.log("Meeting ID:", meetingID);
    console.log("Meeting Date:", date);
    console.log("Attendance URL:", attendanceURL);

    const parameters = new URLSearchParams(window.location.search);

const urlMeetingID = parameters.get("meeting");

console.log("Meeting ID:", urlMeetingID);
}

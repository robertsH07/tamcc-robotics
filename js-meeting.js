function createMeeting() {
    const date = document.getElementById("meetingDate").value;

    if (date === "") {
        alert("Please select a meeting date.");
        return;
    }

    const meetingID = Date.now();

    localStorage.setItem("meetingDate", date);
    localStorage.setItem("meetingID", meetingID);

    const attendanceURL = "https://robertsH07.github.io/tamcc-robotics/attendance-page.html?meeting=" + meetingID;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, attendanceURL);

    console.log("Meeting ID:", meetingID);
    console.log("Meeting Date:", date);
    console.log("Attendance URL:", attendanceURL);
    
    const parameters = new URLSearchParams(window.location.search);
const meetingID = parameters.get("meeting");

document.getElementById("meetingID").textContent = meetingID;
}

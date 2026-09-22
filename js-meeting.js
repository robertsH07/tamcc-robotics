function createMeeting() {
    const date = document.getElementById("meetingDate").value;

    if (date === "") {
        alert("Please select a meeting date.");
        return;
    }

    const meetingID = Date.now();

    localStorage.setItem("meetingDate", date);
    localStorage.setItem("meetingID", meetingID);

    const attendanceURL = "https://robertsh07.github.io/tamcc-robotics/attendance-page.html?meeting=" + meetingID;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, attendanceURL);

    console.log("Meeting ID:", meetingID);
    console.log("Meeting Date:", date);
    console.log("Attendance URL:", attendanceURL);
}

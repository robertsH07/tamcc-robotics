function createMeeting() {
    const date = document.getElementById("meetingDate").value;

    if (date === "") {
        alert("Please select a meeting date.");
        return;
    }

   const meetingID = Date.now();

    const attendanceURL =
        "https://robertsh07.github.io/tamcc-robotics/attendance-page.html?meeting=" +
        meetingID +
        "&date=" +
        date;

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: attendanceURL,
        width: 200,
        height: 200
    });

    localStorage.setItem("meetingDate", date);
    localStorage.setItem("meetingID", meetingID);
document.getElementById("meetingID").textContent = meetingID;
}

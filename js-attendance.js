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

const form = document.getElementById("attendanceForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("meetingID", meetingID || "");
    formData.append("meetingDate", meetingDate || "");

    try {

        const response = await fetch(
            "https://formspree.io/f/xdekzrnl",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {

            window.location.href =
                "attendance-confirmation.html?name=" +
                encodeURIComponent(name) +
                "&meeting=" +
                encodeURIComponent(meetingID || "") +
                "&date=" +
                encodeURIComponent(meetingDate || "");

        } else {

            const data = await response.json();

            console.error(data);

            alert("There was a problem submitting attendance.");

        }

    } catch (error) {

        console.error(error);

        alert("There was a problem submitting attendance.");

    }

});

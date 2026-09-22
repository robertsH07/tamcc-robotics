function submitAttendance() {

    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please enter your name");
        return;
    }

    window.location.href = "attendance-confirmation.html?name=" + encodeURIComponent(name);

    
}
function toggleMenu() {
    var menu = document.getElementById("menu");

    menu.classList.toggle("open");
}


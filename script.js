window.onload = function() {
    let textBody = document.getElementById("text-body");
    let textBodyFixed = document.getElementById("text-body-fixed");
    let arrow1 = document.getElementById("arrow1");
    let header1 = document.getElementById("header1");
    let header2 = document.getElementById("header2");

    function pageUp() {
        textBody.classList.add("hidden");
        textBody.style.position = "absolute";
        textBody.style.transform = "translate(-50%, -100%)";
        header1.style.position = "absolute";
        header1.style.transform = "translate(-50%, -100%)";
        arrow1.classList.add("hidden");
        textBodyFixed.classList.remove("hidden");
        textBodyFixed.style.transform = "translate(-50%, -10%)";
        header2.classList.remove("hidden");
        header2.style.transform = "translate(-50%, -30%)";
    }

    arrow1.onclick = pageUp;
}
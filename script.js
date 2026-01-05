var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove the active class from all links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Remove the active class from all content sections
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add the active class to the clicked link and corresponding content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
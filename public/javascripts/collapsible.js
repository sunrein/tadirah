const sections = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

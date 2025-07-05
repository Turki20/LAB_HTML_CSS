const skillsSection = document.getElementById("skills");
const skillBars = document.querySelectorAll("#skills ul li .sub_progress");
let animated = false;

window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos && !animated) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
        });
        animated = true;
    }
});

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const profilePic = document.getElementById("profile-pic");
const lightbox = document.getElementById("lightbox");

if (profilePic && lightbox) {
    profilePic.addEventListener("dblclick", () => {
        lightbox.classList.add("active");
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }
    });
}

document.querySelectorAll(".project-card h3").forEach((title) => {
    title.addEventListener("click", () => {
        title.closest(".project-card").classList.toggle("expanded");
    });
});
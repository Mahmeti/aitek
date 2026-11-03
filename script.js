
// DESIGN5 - JAVASCRIPT

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
    });
});

// HIDE PHOTO PLACEHOLDERS WHEN AN IMAGE IS AVAILABLE

const projectImages = document.querySelectorAll(".project-image img");

projectImages.forEach(function (img) {
    const placeholder = img.previousElementSibling;

    function showImage() {
        img.style.display = "block";
        placeholder.style.display = "none";
    }

    function showPlaceholder() {
        img.style.display = "none";
        placeholder.style.display = "flex";
    }

    img.addEventListener("load", showImage);
    img.addEventListener("error", showPlaceholder);

    if (img.complete && img.naturalWidth > 0) {
        showImage();
    } else if (img.complete) {
        showPlaceholder();
    }
});

console.log("AITEK Cloud website loaded successfully!");

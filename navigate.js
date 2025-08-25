document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById("home").classList.add("active");

    // Menu navigation
    navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Deactivate all
        navLinks.forEach(l => l.classList.remove("active"));
        sections.forEach(sec => sec.classList.remove("active"));

        // Activate target link + section
        link.classList.add("active");
        const targetId = link.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) targetEl.classList.add("active");
    });
    });

    document.getElementById("contactForm").addEventListener("submit", function(e){
        e.preventDefault();
        // check if fields are empty
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if(!name && !email && !message){
            alert("Please enter some information before sending.");
            return;
        }

        // For now, just show a message (no backend)
        alert("Form submitted!");
        });

        // Get in Touch
        const getInTouchBtn = document.querySelector(".btn-primary");
        if (getInTouchBtn) {
        getInTouchBtn.addEventListener("click", (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));
            document.getElementById("contact").classList.add("active");
            const contactLink = document.querySelector('a[href="#contact"]');
            if (contactLink) contactLink.classList.add("active");
        });
        }
});
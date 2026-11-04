
/* =========================
   MENU NAVIGASI MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Tutup menu setelah link diklik */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* =========================
   TAHUN OTOMATIS
========================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

/* =========================
   ANIMASI SAAT SCROLL
========================= */

// Pilih elemen yang ingin dianimasikan
const animatedElements = document.querySelectorAll(
    ".hero-content, .hero-visual, .section-label, " +
    ".section-title, .about-content, .project-card, " +
    ".contact-box"
);

animatedElements.forEach(function (element) {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(function (element) {
        observer.observe(element);
    });
} else {
    // Fallback untuk browser lama
    animatedElements.forEach(function (element) {
        element.classList.add("visible");
    });
}

/* =========================
   EFEK AKTIF NAVIGASI
========================= */

const pageSections = document.querySelectorAll(
    "section[id]"
);

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    pageSections.forEach(function (section) {
        sectionObserver.observe(section);
    });
}

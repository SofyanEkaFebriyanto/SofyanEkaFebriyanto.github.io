// Mobile menu toggle, scroll reveal, footer year.
(function () {
    var button = document.querySelector(".menu-button");
    var nav = document.getElementById("site-nav");

    if (button && nav) {
        button.addEventListener("click", function () {
            var open = nav.classList.toggle("open");
            button.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (event) {
            if (event.target.tagName === "A") {
                nav.classList.remove("open");
                button.setAttribute("aria-expanded", "false");
            }
        });
    }

    var revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealItems.forEach(function (item) { observer.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add("visible"); });
    }

    var year = document.getElementById("year");
    if (year) {
        year.textContent = String(new Date().getFullYear());
    }
})();

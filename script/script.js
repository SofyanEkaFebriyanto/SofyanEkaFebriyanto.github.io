// Mobile menu toggle + scroll-spy (nav shows the section in view).
(function () {
    var button = document.querySelector(".menu-btn");
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

    var links = document.querySelectorAll(".nav-list a");
    var sections = ["work", "about", "stack", "contact"]
        .map(function (id) { return document.getElementById(id); })
        .filter(function (el) { return el !== null; });

    function setActive(id) {
        links.forEach(function (a) {
            if (a.getAttribute("href") === "#" + id) {
                a.setAttribute("aria-current", "true");
            } else {
                a.removeAttribute("aria-current");
            }
        });
    }

    if ("IntersectionObserver" in window && links.length && sections.length) {
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                setActive(entry.target.id);
            });
        }, { rootMargin: "-30% 0px -60% 0px" });
        sections.forEach(function (s) { spy.observe(s); });

        // The last section is short and the page ends, so it may never
        // cross the observer band: when the user reaches the bottom,
        // the last section is the one in view.
        var lastId = sections[sections.length - 1].id;
        window.addEventListener("scroll", function () {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                setActive(lastId);
            }
        }, { passive: true });
    }
})();

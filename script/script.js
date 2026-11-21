// Mobile menu toggle.
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
})();

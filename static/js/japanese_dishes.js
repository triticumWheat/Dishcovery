document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const header = document.getElementById("main-header");
    const backToTopBtn = document.getElementById("back-to-top");
    const footer = document.getElementById("main-footer");

    let currentPage = 0;
    let isScrolling = false;

    function updateHeader(index) {
        if (index === 0) {
            backToTopBtn.classList.remove("show");
            setTimeout(function () {
                backToTopBtn.style.display = "none";
                header.classList.remove("header-minimized");
            }, 600);
        } else {
            header.classList.add("header-minimized");
            setTimeout(function () {
                backToTopBtn.style.display = "block";
                requestAnimationFrame(function () {
                    backToTopBtn.classList.add("show");
                });
            }, 400);
        }
    }

    function updateFooter(index) {
        if (index === pages.length - 1) {
            footer.classList.add("footer-visible");
        } else {
            footer.classList.remove("footer-visible");
        }
    }

    function scrollToPage(index) {
        for (let i = 0; i < pages.length; i++) {
            let offset = (i - index) * 100;
            pages[i].style.transform = "translateY(" + offset + "vh)";
        }
        updateHeader(index);
        updateFooter(index);
    }

    scrollToPage(currentPage);

    function handleScroll(event) {
        if (isScrolling) return;
        isScrolling = true;
        if (event.deltaY > 0 && currentPage < pages.length - 1) {
            currentPage++;
        } else if (event.deltaY < 0 && currentPage > 0) {
            currentPage--;
        }
        scrollToPage(currentPage);
        setTimeout(function () {
            isScrolling = false;
        }, 1000);
    }

    window.addEventListener("wheel", handleScroll);

    backToTopBtn.addEventListener("click", function () {
        currentPage = 0;
        scrollToPage(currentPage);
    });
});

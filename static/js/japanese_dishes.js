// this part is done by Mingyuan Sun (mingyuan@bu.edu)

// wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () { 
    const pages = document.querySelectorAll(".page"); 
    const header = document.getElementById("main-header"); 
    const backToTopBtn = document.getElementById("back-to-top"); 
    const footer = document.getElementById("main-footer"); 

    let currentPage = 0; // record pages
    let isScrolling = false; // prevent spam scroll

    // change header style + toggle back to top button
    function updateHeader(index) {
        if (index === 0) {
            backToTopBtn.classList.remove("show"); // hide button
            // set timeout delay some code to run later (after a few ms)
            // if it helps you understand try to think about thread.sleep() in python
            setTimeout(function () {
                backToTopBtn.style.display = "none"; // really hide after fade out
                header.classList.remove("header-minimized"); // big header
            }, 600); // wait a bit
        } else {
            header.classList.add("header-minimized"); // small header
            setTimeout(function () {
                backToTopBtn.style.display = "block"; // show button
                // requestAnimationFrame helps sync with the browser's frame rate
                // runs the code right before the next repaint for smoother animation
                // if you don't care the animation you can replace it by settimeout anyway
                requestAnimationFrame(function () {
                    backToTopBtn.classList.add("show");
                });
            }, 400);
        }
    }

    // only show footer on last page
    function updateFooter(index) {
        if (index === pages.length - 1) {
            footer.classList.add("footer-visible");
        } else {
            footer.classList.remove("footer-visible");
        }
    }

    // move pages up/down
    function scrollToPage(index) {
        for (let i = 0; i < pages.length; i++) {
            // calculate how far each page should move based on current page
            let offset = (i - index) * 100;

            // move the page up or down using translateY (in viewport height units)
            pages[i].style.transform = "translateY(" + offset + "vh)";
        }
        updateHeader(index);
        updateFooter(index); 
    }

    scrollToPage(currentPage); // initial position

    // listen to mouse scroll
    function handleScroll(event) {
        if (isScrolling) return; // wait until done
        isScrolling = true;
        // event.deltaY tells how much the user scrolled vertically
        // positive = scroll down, negative = scroll up
        // if scrolling down and not already at the last page
        if (event.deltaY > 0 && currentPage < pages.length - 1) {
            currentPage++; // scroll down
        } else if (event.deltaY < 0 && currentPage > 0) {
            currentPage--; // scroll up
        }
        scrollToPage(currentPage); // move page
        // unlock scroll after 1 sec
        setTimeout(function () {
            isScrolling = false;
        }, 1000);
    }

    // mouse scroll triggers page change
    window.addEventListener("wheel", handleScroll);

    // button click = go back to top page
    backToTopBtn.addEventListener("click", function () {
        currentPage = 0;
        scrollToPage(currentPage);
    });
});
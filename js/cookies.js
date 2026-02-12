document.addEventListener('DOMContentLoaded', () => {
    const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    const closeButton = document.querySelector(".btn-secondary");

    const hideCookieBanner = () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBannerDisplayed", "true");
    };

    if (cookieButton) {
        cookieButton.addEventListener("click", hideCookieBanner);
    }

    if (closeButton) {
        closeButton.addEventListener("click", hideCookieBanner);
    }

    // Show banner after 2 seconds if not previously accepted
    setTimeout(() => {
        if (!localStorage.getItem("cookieBannerDisplayed")) {
            cookieContainer.classList.add("active");
        }
    }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const cookieContainer = document.querySelector('.cookie-container');
    const acceptButton = document.querySelector('.cookie-btn');
    const rejectButton = document.querySelector('.cookie-reject');
    const preferencesButton = document.querySelector('.cookie-preferences');
    const consentKey = 'analyticsConsent';

    if (!cookieContainer || !acceptButton || !rejectButton || !preferencesButton) {
        return;
    }

    const loadGoogleAnalytics = () => {
        if (window.gtag) {
            window.gtag('consent', 'update', { analytics_storage: 'granted' });
            return;
        }

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'G-XSYDD7JPNQ');

        const analyticsScript = document.createElement('script');
        analyticsScript.async = true;
        analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XSYDD7JPNQ';
        document.head.appendChild(analyticsScript);
    };

    const loadOptionalServices = () => {
        loadGoogleAnalytics();
    };

    const revokeOptionalServices = () => {
        if (window.gtag) {
            window.gtag('consent', 'update', { analytics_storage: 'denied' });
        }
    };

    const saveChoice = (choice) => {
        localStorage.setItem(consentKey, choice);
        cookieContainer.classList.remove('active');

        if (choice === 'accepted') {
            loadOptionalServices();
        } else {
            revokeOptionalServices();
        }
    };

    acceptButton.addEventListener('click', () => saveChoice('accepted'));
    rejectButton.addEventListener('click', () => saveChoice('rejected'));
    preferencesButton.addEventListener('click', () => {
        cookieContainer.classList.add('active');
        rejectButton.focus();
    });

    const savedChoice = localStorage.getItem(consentKey);
    if (savedChoice === 'accepted') {
        loadOptionalServices();
    } else if (savedChoice !== 'rejected') {
        cookieContainer.classList.add('active');
    }
});

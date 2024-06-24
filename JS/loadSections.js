async function loadSection(url, elementId) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        document.getElementById(elementId).innerHTML = text;
    } catch (error) {
        console.error('Error loading section:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSection('/html/head.html', 'head-section');
    loadSection('/html/navbar.html', 'navbar-section');
    loadSection('/html/carousel.html', 'carousel-section');
    loadSection('/html/about.html', 'about-section');
    loadSection('/html/causes.html', 'causes-section');
    loadSection('/html/service.html', 'service-section');
    loadSection('/html/donate.html', 'donate-section');
    loadSection('/html/team.html', 'team-section');
    loadSection('/html/testimonial.html', 'testimonial-section');
    loadSection('/html/footer.html', 'footer-section');
    loadSection('/html/backtotop.html', 'backtotop-section');
    loadSection('/html/scripts.html', 'scripts-section');
});

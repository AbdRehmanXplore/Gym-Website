document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in classes to elements we want to animate
    const sections = document.querySelectorAll('section > div');
    sections.forEach(sec => {
        sec.classList.add('fade-in-up');
        observer.observe(sec);
    });

    // Parallax effect on hero image
    const heroImg = document.querySelector('header img');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if(heroImg && scrollPosition < window.innerHeight) {
            heroImg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    });
});

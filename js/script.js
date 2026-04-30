document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('no-js');
    // Intersection Observer for fade-up animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            // Transform burger to X
            burger.classList.toggle('toggle');
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '8px 0';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
            header.style.padding = '0';
        }
    });

    // Simple form feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Wysyłanie...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = 'Wysłano pomyślnie!';
                btn.style.background = '#00ff00';
                btn.style.color = '#000';
                form.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '#fff';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});

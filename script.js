/* ============================================================
   Portfolio Template — Scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollSpy();
    initFadeInAnimations();
    initSmoothScroll();
});

// ── Navbar scroll effect ──────────────────────────────
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ── Mobile menu toggle ────────────────────────────────
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (!btn || !navLinks) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ── Scroll spy — highlight active nav link ────────────
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    if (!sections.length || !navLinks.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    });
}

// ── Fade-in on scroll (Intersection Observer) ─────────
function initFadeInAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach(el => observer.observe(el));
}

// ── Smooth scroll for anchor links ────────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ── Animate skill bars when they become visible ────────
function initSkillAnimation() {
    const skillsSection = document.querySelector('.about-skills');
    if (!skillsSection) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsSection.querySelectorAll('.skill-fill').forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        requestAnimationFrame(() => {
                            bar.style.width = width;
                        });
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(skillsSection);
}

// Initialize skill animations
if (document.querySelector('.about-skills')) {
    initSkillAnimation();
}

// Smooth scrolling for navigation links with large offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar.offsetHeight;
            
            // Calculate position with large offset for comfortable viewing
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            // Increased offset to 100px to ensure content is well below navbar
            const offsetPosition = targetPosition - navbarHeight - 100;
            
            // Smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(107, 91, 123, 0.15)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(107, 91, 123, 0.1)';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.education-card, .pub-card, .award-card, .timeline-item, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Active navigation link highlighting with proper offset
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    let current = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollTop >= sectionTop - navbarHeight - 200 && 
            scrollTop < sectionTop + sectionHeight - navbarHeight - 200) {
            current = sectionId;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    lastScrollTop = scrollTop;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Minimal parallax effect for hero section
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const hero = document.querySelector('.hero');
            const scrolled = window.scrollY;
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Add hover effect to publication cards
document.querySelectorAll('.pub-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '8px';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
    });
});

// Dynamic year update in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p');
if (footerText) {
    footerText.textContent = `© ${currentYear} Shreya Goyal. All rights reserved.`;
}

// Add stagger animation to tags
document.addEventListener('DOMContentLoaded', () => {
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`;
        tag.style.opacity = '0';
    });
});

// Prevent scroll jump on page load
window.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 100;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
});

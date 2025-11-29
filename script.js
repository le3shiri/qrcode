// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'hsla(220, 26%, 8%, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'hsla(220, 26%, 8%, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Download PDF Functionality
// ===========================
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', function() {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'IT_WAVE_Sponsoring_Dossier.pdf';
    link.download = 'IT_WAVE_Sponsoring_Dossier.pdf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Visual feedback
    const originalText = this.innerHTML;
    this.innerHTML = `
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Downloaded!
    `;
    
    setTimeout(() => {
        this.innerHTML = originalText;
    }, 2000);
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fade-in-up 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .download-card, .benefit-item, .social-link').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===========================
// Parallax Effect for Stats
// ===========================
window.addEventListener('scroll', () => {
    const stats = document.querySelector('.hero-stats');
    if (stats) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        stats.style.transform = `translateY(${rate}px)`;
    }
});

// ===========================
// Dynamic Gradient Animation
// ===========================
const gradientTexts = document.querySelectorAll('.gradient-text');

gradientTexts.forEach(text => {
    let hue = 210;
    setInterval(() => {
        hue = (hue + 1) % 360;
        text.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 56%) 0%, hsl(${(hue + 70) % 360}, 100%, 65%) 100%)`;
        text.style.webkitBackgroundClip = 'text';
        text.style.webkitTextFillColor = 'transparent';
        text.style.backgroundClip = 'text';
    }, 50);
});

// ===========================
// Button Ripple Effect Enhancement
// ===========================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===========================
// Cursor Trail Effect (Optional)
// ===========================
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.wave');

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

// ===========================
// Performance: Reduce animations on low-end devices
// ===========================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ===========================
// Console Easter Egg
// ===========================
console.log('%c🌊 IT WAVE 2025', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #3B82F6 0%, #A855F7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cInterested in sponsoring? Download our dossier!', 'font-size: 14px; color: #3B82F6;');

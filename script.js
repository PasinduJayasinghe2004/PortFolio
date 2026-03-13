// ============================================
// TYPEWRITER EFFECT
// ============================================
class Typewriter {
    constructor(element, texts, speed = 100, pause = 2000) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.pause = pause;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.start();
    }

    start() {
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.isDeleting ? this.speed / 2 : this.speed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = this.pause;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-in');
    animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking on a link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// ============================================
// DYNAMIC GREETING
// ============================================
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    
    let greetingText;
    if (hour >= 5 && hour < 12) {
        greetingText = "Good Morning, I'm";
    } else if (hour >= 12 && hour < 18) {
        greetingText = "Good Afternoon, I'm";
    } else {
        greetingText = "Good Evening, I'm";
    }
    
    greetingElement.textContent = greetingText;
}

// ============================================
// AI EFFECTS (Cursor Glow & Card Lighting)
// ============================================
function initAiEffects() {
    const cursor = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor movement
    function animateCursor() {
        let distX = mouseX - cursorX;
        let distY = mouseY - cursorY;
        
        cursorX = cursorX + (distX * 0.15);
        cursorY = cursorY + (distY * 0.15);
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effect for links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

function initCardGlow() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

function initDigitalRain() {
    const canvas = document.createElement('canvas');
    canvas.id = 'digitalRain';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.05';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 16;
    const columns = width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(5, 5, 16, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00d4ff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() * 0.975 > 0.95) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

function initTextScramble() {
    const elements = document.querySelectorAll('.section-title, .name');
    
    elements.forEach(el => {
        const originalText = el.innerText;
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        
        el.addEventListener('mouseenter', () => {
            let iteration = 0;
            const interval = setInterval(() => {
                el.innerText = originalText.split('')
                    .map((char, index) => {
                        if(index < iteration) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                
                if(iteration >= originalText.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        });
    });
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize WOW.js animations
    new WOW().init();

    // Set dynamic greeting
    setGreeting();

    // Initialize typewriter effect
    const typewriterElement = document.getElementById('typewriterText');
    new Typewriter(typewriterElement, [
        'Full Stack Developer',
        'Problem Solver',
        'Tech Enthusiast'
    ]);

    // Initialize scroll animations
    initScrollAnimations();

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize AI Effects
    initAiEffects();
    initCardGlow();
    initDigitalRain();
    initTextScramble();
});

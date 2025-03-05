// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect for the hero section
const text = "Data Science Professional | ML Engineer | Researcher";
const typingText = document.querySelector('.typing-text');
let i = 0;
let isDeleting = false;
let currentText = '';
let typeSpeed = 100;

function typeWriter() {
    const fullText = text;
    
    if (!isDeleting && i <= fullText.length) {
        currentText = fullText.substring(0, i);
        typingText.textContent = currentText;
        i++;
    }

    if (i > fullText.length) {
        // Wait before starting to delete
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, 2000);
        return;
    }

    if (isDeleting && i >= 0) {
        currentText = fullText.substring(0, i);
        typingText.textContent = currentText;
        i--;
    }

    if (i < 0) {
        isDeleting = false;
        i = 0;
        // Wait before starting to type again
        setTimeout(typeWriter, 1000);
        return;
    }

    setTimeout(typeWriter, isDeleting ? typeSpeed/2 : typeSpeed);
}

// Start typing effect when page loads
window.onload = () => {
    typeWriter();
    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
};

// Simple navigation highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Add hover effect to project and publication cards
document.querySelectorAll('.project-card, .publication-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add to existing scroll reveal code
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Add scroll-based animations
const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    observer.observe(element);
});

// Update navigation on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
}); 
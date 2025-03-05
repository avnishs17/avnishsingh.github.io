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

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
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
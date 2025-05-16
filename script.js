
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailBody = `Hi Vamshi Krishna Reddy,\n\nThe person with name ${firstName} ${lastName} and with the email id ${email} has visited your website and sent you a message:\n\n"${message}"`;

    // For demo purposes only: This will open the user's default mail client
    window.location.href = `mailto:vamshikrishna.reddy555@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
});

// Cursor Glow Effect
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
});


// Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('a.nav-link');

window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Fade-in Sections on Scroll
const fadeSections = document.querySelectorAll('.section-fade');

const observerOptions = {
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeSections.forEach(section => {
    fadeObserver.observe(section);
});

// hidden projects 
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-projects");
    const moreProjects = document.getElementById("more-projects");

    toggleBtn.addEventListener("click", () => {
        const isVisible = moreProjects.style.display === "block";
        moreProjects.style.display = isVisible ? "none" : "block";
        toggleBtn.textContent = isVisible ? "View More Projects ↘" : "View Less Projects ↖";
    });
});

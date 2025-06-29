document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header background change on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 31, 58, 0.98)';
        } else {
            header.style.background = 'rgba(26, 31, 58, 0.95)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.tour-card, .bike-card, .feature, .gallery-item');
    animatedElements.forEach(el => observer.observe(el));

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.setAttribute('aria-label', 'Toggle mobile menu');

    // Insert mobile menu toggle before navigation
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.insertBefore(mobileMenuToggle, document.querySelector('.nav'));
    }

    // Mobile menu functionality
    function toggleMobileMenu() {
        const nav = document.querySelector('.nav');
        const isActive = nav.classList.contains('active');
        
        if (isActive) {
            nav.classList.remove('active');
            mobileMenuToggle.innerHTML = '☰';
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        } else {
            nav.classList.add('active');
            mobileMenuToggle.innerHTML = '✕';
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
        }
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                const nav = document.querySelector('.nav');
                nav.classList.remove('active');
                mobileMenuToggle.innerHTML = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Responsive menu handling
    function handleResize() {
        const nav = document.querySelector('.nav');
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            mobileMenuToggle.innerHTML = '☰';
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on initial load

    // Contact form handling (basic validation)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.\nありがとうございます！すぐにご連絡いたします。\n谢谢您的留言！我们会尽快回复您。');
                this.reset();
            } else {
                alert('Please fill in all fields.\nすべての項目を入力してください。\n请填写所有字段。');
            }
        });
    }

    // Lazy loading for placeholder images (simulated)
    const placeholderImages = document.querySelectorAll('.placeholder-image');
    placeholderImages.forEach(img => {
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.style.backgroundRepeat = 'no-repeat';
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.cta-button, .hero-button, .tour-button, .book-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Scroll to top functionality (hidden by default)
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '↑';
    scrollToTop.className = 'scroll-to-top';
    scrollToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--secondary-gold);
        color: var(--primary-navy);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    `;
    
    document.body.appendChild(scrollToTop);
    
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTop.style.opacity = '1';
            scrollToTop.style.visibility = 'visible';
        } else {
            scrollToTop.style.opacity = '0';
            scrollToTop.style.visibility = 'hidden';
        }
    });

    console.log('THE ULTIMATE HOKKAIDO RIDE - Website loaded successfully!');
});
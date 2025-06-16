        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Language Toggle
        const langEnBtn = document.getElementById('lang-en');
        const langTrBtn = document.getElementById('lang-tr');
        const enElements = document.querySelectorAll('.en');
        const trElements = document.querySelectorAll('.tr');

        langEnBtn.addEventListener('click', () => {
            langEnBtn.classList.add('active');
            langTrBtn.classList.remove('active');
            enElements.forEach(el => el.style.display = 'block');
            trElements.forEach(el => el.style.display = 'none');
        });

        langTrBtn.addEventListener('click', () => {
            langTrBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            enElements.forEach(el => el.style.display = 'none');
            trElements.forEach(el => el.style.display = 'block');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Animation on scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.ticket-card, .audio-card, .city-card, .testimonial-card');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };

        // Set initial state for animation
        document.querySelectorAll('.ticket-card, .audio-card, .city-card, .testimonial-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
        });

        window.addEventListener('scroll', animateOnScroll);
        window.addEventListener('load', animateOnScroll);

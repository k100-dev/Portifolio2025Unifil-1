document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn?.addEventListener('click', () => {
        nav?.classList.toggle('active');
    });

    // Tab system
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // Math icons animation
    const mathIcons = document.querySelectorAll('.icon-container');
    
    mathIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(section);
    });

    // YouTube API integration
    let player;
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
        player = new YT.Player('youtube-player', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerReady(event) {
        // Player is ready
        console.log('YouTube player is ready');
    }

    function onPlayerStateChange(event) {
        // Handle player state changes
        console.log('Player state changed:', event.data);
    }
});
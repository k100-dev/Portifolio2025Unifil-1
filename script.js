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
});

document.querySelectorAll('.icon-container').forEach(container => {
  container.addEventListener('click', () => {
    const icon = container.querySelector('i');
    let symbol = '?';

    if (icon.classList.contains('fa-plus')) symbol = '+';
    else if (icon.classList.contains('fa-minus')) symbol = '−';
    else if (icon.classList.contains('fa-times')) symbol = '×';
    else if (icon.classList.contains('fa-divide')) symbol = '÷';

    const rect = container.getBoundingClientRect();

    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-symbol';
      confetti.textContent = symbol;

      const color = getRandomColor();
      confetti.style.color = color;

      // Tamanho aleatório entre 24px e 44px
      const size = 24 + Math.random() * 20;
      confetti.style.fontSize = `${size}px`;

      // Ajusta a posição inicial para o centro do ícone (subtraindo metade do tamanho)
      confetti.style.left = `${rect.left + rect.width / 2 - size / 2}px`;
      confetti.style.top = `${rect.top + rect.height / 2 - size / 2}px`;

      // Posição final aleatória para animação (relativa à posição inicial)
      const x = Math.random() * window.innerWidth - rect.left;
      const y = Math.random() * window.innerHeight - rect.top;

      confetti.style.setProperty('--x', `${x}px`);
      confetti.style.setProperty('--y', `${y}px`);

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 2000);
    }
  });
});

function getRandomColor() {
  const colors = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];
  return colors[Math.floor(Math.random() * colors.length)];
}
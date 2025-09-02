// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }

  // Smooth scrolling for navigation links
  const navLinksElements = document.querySelectorAll('a[href^="#"]');
  navLinksElements.forEach(link => {
    link.addEventListener('click', function(e) {
      // Allow external links (like /docs) and mailto/wa.me links to work normally
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(href);
        
        if (targetSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Header background on scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) { // Reduced from 100 for earlier effect
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: stop observing after animation
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll('.feature-card, .feature-card-2, .testimonial-card, .pricing-card');
  animatedElements.forEach(el => {
    el.classList.add('fade-in-up-initial');
    observer.observe(el);
  });

  // Add typing animation to chat messages
  const chatMessagesContainer = document.querySelector('.chat-messages');
  if (chatMessagesContainer) {
    const messages = chatMessagesContainer.querySelectorAll('.message');
    let delay = 0;
    
    const chatObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          messages.forEach((message) => {
            setTimeout(() => {
              message.classList.add('visible');
            }, delay);
            delay += 800;
          });
          chatObserver.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.5 });
    
    chatObserver.observe(chatMessagesContainer);
  }
});

// --- Lógica para el Popup "Próximamente" con SweetAlert2 ---
document.addEventListener('DOMContentLoaded', () => {
  const verDemoButton = document.getElementById('verDemoBtn');

  if (verDemoButton) {
    verDemoButton.addEventListener('click', (e) => {
      e.preventDefault(); // Evita que el enlace '#' salte a la parte superior de la página
      Swal.fire({
        title: '¡Próximamente!',
        text: 'Estamos trabajando en un video demo increíble. ¡Mientras tanto podés contactarnos por una demo en vivo!',
        icon: 'info',
        confirmButtonColor: '#0b808a' // Usamos el color primario de tu marca
      });
    });
  }
});
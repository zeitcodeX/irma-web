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

  // Header background on scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll('.feature-card, .integration-card, .testimonial-card, .pricing-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Button click handlers
  const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .pricing-button');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Add click animation
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);

      // Handle different button actions
      const buttonText = this.textContent.toLowerCase();
      
      if (buttonText.includes('gratis') || buttonText.includes('demo')) {
        // Simulate opening a demo or trial signup
        console.log('Opening demo/trial signup...');
        // In a real implementation, you would redirect to a signup page or open a modal
      } else if (buttonText.includes('contactar') || buttonText.includes('ventas')) {
        // Simulate opening contact form
        console.log('Opening contact form...');
        // In a real implementation, you would open a contact modal or redirect
      }
    });
  });

  // Add typing animation to chat messages
  const chatMessages = document.querySelector('.chat-messages');
  if (chatMessages) {
    const messages = chatMessages.querySelectorAll('.message');
    let delay = 0;
    
    messages.forEach((message, index) => {
      message.style.opacity = '0';
      message.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
      }, delay);
      
      delay += 1000; // 1 second delay between messages
    });
  }

  // Add floating animation to hero stats
  const stats = document.querySelectorAll('.stat');
  stats.forEach((stat, index) => {
    stat.style.animationDelay = `${index * 0.2}s`;
    stat.classList.add('fade-in-up');
  });
});

// Add CSS for fade-in-up animation
const style = document.createElement('style');
style.textContent = `
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    .nav-links.active {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      border-top: 1px solid #e2e8f0;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  }
`;
document.head.appendChild(style);
// Enhanced JavaScript with FASTER animations
document.addEventListener('DOMContentLoaded', function() {
  
  // Reveal elements on scroll with staggered animation (FASTER)
  const reveals = document.querySelectorAll('.reveal');
  const cards = document.querySelectorAll('.card');
  
  const observerOptions = {
    threshold: 0.05, // Lower threshold for earlier trigger
    rootMargin: '0px 0px -20px 0px' // Smaller margin for faster trigger
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Reduced delay from 100ms to 30ms
        setTimeout(() => {
          entry.target.classList.add('visible');
          
          // Add bounce effect for cards (faster)
          if (entry.target.classList.contains('card')) {
            entry.target.style.animation = 'bounceIn 0.3s ease-out forwards';
          }
        }, index * 30);
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  reveals.forEach(reveal => observer.observe(reveal));
  
  // Animate cards when they come into view (FASTER)
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // INSTANT appearance
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0) scale(1)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 }); // Lower threshold for instant trigger
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.95)';
    // Very fast transition with no delay
    card.style.transition = 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
    cardObserver.observe(card);
  });

  // Smooth scroll for internal links with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Add click animation to button (faster)
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 100); // Reduced from 150ms to 100ms
        
        // Smooth scroll with offset
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add typing animation to the main title (MUCH FASTER)
  const title = document.querySelector('.cover h1');
  if (title) {
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '2px solid white';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
        // Reduced from 100ms to 40ms for much faster typing
        setTimeout(typeWriter, 40);
      } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
          title.style.borderRight = 'none';
        }, 500); // Reduced from 1000ms to 500ms
      }
    };
    
    // Start typing animation with shorter delay
    setTimeout(typeWriter, 300); // Reduced from 1000ms to 300ms
  }

  // Add hover effects to images (faster transition)
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.transition = 'filter 0.15s ease'; // Added fast transition
    img.addEventListener('mouseenter', function() {
      this.style.filter = 'brightness(1.1) contrast(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.filter = '';
    });
  });

  // Add parallax effect to cover image
  const coverImg = document.querySelector('.cover-img');
  if (coverImg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      coverImg.style.transform = `translateY(${rate}px)`;
    });
  }

  // Add counter animation for GPA (FASTER)
  const gpaElement = document.querySelector('strong');
  if (gpaElement && gpaElement.textContent.includes('GPA:')) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateGPA();
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(gpaElement.parentElement);
  }

  function animateGPA() {
    const gpaText = document.querySelector('strong').parentElement;
    const targetGPA = 3.61;
    let currentGPA = 0;
    const increment = targetGPA / 50; // Reduced steps from 100 to 50
    
    const counter = setInterval(() => {
      currentGPA += increment;
      if (currentGPA >= targetGPA) {
        currentGPA = targetGPA;
        clearInterval(counter);
      }
      gpaText.innerHTML = `<strong>GPA:</strong> ${currentGPA.toFixed(2)} / 4.0 (expected graduation 2026)`;
    }, 15); // Reduced from 20ms to 15ms
  }

  // Add mousemove effect to service cards (faster response)
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.style.transition = 'transform 0.1s ease'; // Added fast transition
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // Add floating animation to profile image (faster)
  const profileImg = document.getElementById('profile-img');
  if (profileImg) {
    let floatDirection = 1;
    setInterval(() => {
      profileImg.style.transform += ` translateY(${floatDirection * 2}px)`;
      floatDirection *= -1;
    }, 1500); // Reduced from 2000ms to 1500ms
  }

  // Add text reveal animation (INSTANT)
  const textElements = document.querySelectorAll('p, h3, h4');
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // INSTANT appearance - no delay
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        textObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 }); // Lower threshold for earlier trigger

  textElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    // Very fast transition with no delay
    element.style.transition = `all 0.1s ease`;
    textObserver.observe(element);
  });

  // Add click ripple effect to buttons (faster)
  const buttons = document.querySelectorAll('.btn, .contact-card');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('div');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.3s linear;
        pointer-events: none;
      `;
      
      this.appendChild(ripple);
      
      // Reduced timeout from 600ms to 300ms
      setTimeout(() => {
        ripple.remove();
      }, 300);
    });
  });

  // CSS for ripple animation (FASTER)
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
    
    @keyframes bounceIn {
      0% {
        opacity: 0;
        transform: scale(0.3) translateY(30px);
      }
      50% {
        transform: scale(1.05) translateY(-5px);
      }
      100% {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }
    
    .btn, .contact-card {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);

});
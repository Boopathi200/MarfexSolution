/* ==========================================================================
   MARFEX SOLUTION - Core JavaScript Functionality
   ========================================================================== */

const initializeMain = () => {
  
  // 1. Page Loader Dismissal
  const loader = document.getElementById('page-loader');
  if (loader) {
    const dismissLoader = () => {
      if (loader.dataset.dismissScheduled) return;
      loader.dataset.dismissScheduled = 'true';
      setTimeout(() => {
        loader.classList.add('loaded');
        loader.style.setProperty('opacity', '0', 'important');
        loader.style.setProperty('visibility', 'hidden', 'important');
        loader.style.setProperty('pointer-events', 'none', 'important');
        loader.style.setProperty('display', 'none', 'important');
      }, 900);
    };

    window.addEventListener('load', dismissLoader, { once: true });
    dismissLoader();
  }

  // 2. Sticky Navbar & Mobile Collapse Close
  const navbar = document.querySelector('.header-navbar');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse?.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        bsCollapse?.hide();
      }
    });
  });

  // 3. Scroll to Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Animated Number Counters (Intersection Observer)
  const counterElements = document.querySelectorAll('.counter-number');
  if (counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-target') || '0', 10);
          const duration = 2000;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          let currentStep = 0;

          const counterInterval = setInterval(() => {
            currentStep++;
            const progress = currentStep / totalSteps;
            const currentCount = Math.ceil(countTo * progress);
            target.textContent = currentCount.toLocaleString();

            if (currentStep >= totalSteps) {
              target.textContent = countTo.toLocaleString() + (target.getAttribute('data-suffix') || '');
              clearInterval(counterInterval);
            }
          }, stepTime);

          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    counterElements.forEach(counter => counterObserver.observe(counter));
  }

  // 5. Service & Portfolio Filter System
  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterableItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const parentNav = this.closest('.service-filter-nav') || this.parentElement;
      parentNav?.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      filterableItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue || itemCategory?.includes(filterValue)) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 6. Testimonial Swiper Slider Initialization
  if (typeof Swiper !== 'undefined' && document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });
  }

  // 7. AOS (Animate On Scroll) Initialization
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }

  // 8. Contact Form Handling
  const contactForm = document.getElementById('agencyContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending Inquiry...`;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fas fa-check-circle"></i> Message Sent Successfully!`;
        submitBtn.classList.remove('btn-primary-gradient');
        submitBtn.classList.add('btn-whatsapp');
        
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          submitBtn.classList.remove('btn-whatsapp');
          submitBtn.classList.add('btn-primary-gradient');
        }, 4000);
      }, 1500);
    });
  }
};

initializeMain();

// 9. Global WhatsApp Trigger Function
function sendWhatsAppMessage(customText) {
  const phoneNumber = "918925848445"; // Default business phone
  const defaultText = customText || "Hello MARFEX SOLUTION! I am interested in growing my business with your digital solutions.";
  const encodedText = encodeURIComponent(defaultText);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank');
}

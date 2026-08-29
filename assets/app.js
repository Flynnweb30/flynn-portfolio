/**
 * Flynn James Portfolio Core Scripts
 * Modern Playful UX: Custom Glow Cursor, 3D Card Tilt Physics, Animated Counters,
 * 1-Click Clipboard Copy, Modals, Fullscreen Nav, Slider, Toast, EmailJS Integration,
 * Floating Hello Button & Modal, Scroll-Based Animations with Color Transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Custom Glow Cursor on Desktop
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const interactiveSelectors = 'a, button, .card, .metric-box, .tool-badge, .contact-channel-card, [data-modal-open]';
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  // 2. Active Navigation Tab Highlight
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks, .footer-tab-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 3. Mobile Fullscreen Navigation
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menuOverlay = document.querySelector('[data-menu]');
  const menuClose = document.querySelector('[data-menu-close]');

  function toggleMenu(state) {
    if (!menuOverlay) return;
    menuOverlay.classList.toggle('active', state);
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', state);
    }
    document.body.style.overflow = state ? 'hidden' : '';
  }

  if (menuToggle) menuToggle.addEventListener('click', () => toggleMenu(true));
  if (menuClose) menuClose.addEventListener('click', () => toggleMenu(false));

  // 4. Scroll Reveal Animations & Number Counter Trigger
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');

        const metricEl = entry.target.querySelector('.metric');
        if (metricEl && !metricEl.dataset.counted) {
          metricEl.dataset.counted = 'true';
          animateMetric(metricEl);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((el) => revealObserver.observe(el));

  function animateMetric(el) {
    const text = el.innerText.trim();
    if (text.includes('$1.8M+')) {
      runCount(el, 0, 1.8, 1200, (v) => `$${v.toFixed(1)}M+`);
    } else if (text.includes('120-150%')) {
      runCount(el, 0, 150, 1200, (v) => `${Math.round(v)}%`);
    } else if (text.includes('30+')) {
      runCount(el, 0, 30, 1000, (v) => `${Math.round(v)}+`);
    } else if (text.includes('150–500')) {
      runCount(el, 0, 500, 1200, (v) => `${Math.round(v)}+`);
    } else if (text.includes('11+')) {
      runCount(el, 0, 11, 800, (v) => `${Math.round(v)}+`);
    }
  }

  function runCount(el, start, end, duration, formatFn) {
    const startTime = performance.now();
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * ease;
      el.textContent = formatFn(current);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // 5. 3D Tilt Effect on Cards & Metric Tiles
  if (window.matchMedia('(hover: hover)').matches) {
    const tiltElements = document.querySelectorAll('.card, .metric-box, .contact-channel-card');
    tiltElements.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / (rect.height / 2)) * -6;
        const tiltY = (x / (rect.width / 2)) * 6;
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-6px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 6. Modals System (Experience Page)
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  const modalCloses = document.querySelectorAll('[data-modal-close]');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal-open');
      const targetModal = document.getElementById(modalId);
      if (targetModal) targetModal.classList.add('active');
    });
  });

  modalCloses.forEach((btn) => {
    btn.addEventListener('click', () => {
      modals.forEach((m) => m.classList.remove('active'));
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach((m) => {
      if (e.target === m) m.classList.remove('active');
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach((m) => m.classList.remove('active'));
      toggleMenu(false);
    }
  });

  // 7. Testimonial & Wins Slider
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('[data-slide-prev]');
  const nextBtn = document.querySelector('[data-slide-next]');
  const dots = document.querySelectorAll('.slider-dot');

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider(index) {
    if (!track || totalSlides === 0) return;
    currentSlide = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlider(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlider(currentSlide + 1));
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => updateSlider(idx));
  });

  let touchStartX = 0;
  let touchEndX = 0;
  if (track) {
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        updateSlider(currentSlide + 1);
      } else if (touchEndX - touchStartX > 50) {
        updateSlider(currentSlide - 1);
      }
    }, { passive: true });
  }

  // 8. 1-Click Clipboard Copy on Contact Cards
  const copyEmailCards = document.querySelectorAll('[data-copy-email]');
  copyEmailCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'va.flynnjames@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`⚡ Copied ${email} to clipboard!`);
      });
    });
  });

  // 9. Toast System
  const toast = document.querySelector('[data-toast]');

  function showToast(msg, isError = false) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) {
      toast.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    } else {
      toast.style.background = 'var(--accent-gradient)';
    }
    setTimeout(() => {
      toast.classList.remove('show');
      toast.style.background = 'var(--accent-gradient)';
    }, 5000);
  }

  // 10. EmailJS Integration
  const demoForm = document.querySelector('[data-demo-form]');

  const EMAILJS_PUBLIC_KEY = 'crekfvN6H352DXAfx';
  const EMAILJS_SERVICE_ID = 'service_av4pfmh';
  const EMAILJS_TEMPLATE_ID = 'template_dhede6o';

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.async = true;
  script.onload = function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  };
  document.head.appendChild(script);

  if (demoForm) {
    demoForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(demoForm);
      const formValues = Object.fromEntries(formData.entries());

      if (!formValues.name || !formValues.email || !formValues.message) {
        showToast('⚠️ Please fill in all required fields.', true);
        return;
      }

      const submitBtn = demoForm.querySelector('.button');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending... ⏳';
      submitBtn.disabled = true;
      demoForm.querySelectorAll('.text-field').forEach(field => field.disabled = true);

      try {
        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: formValues.name,
            email: formValues.email,
            company: formValues.company || 'Not specified',
            message: formValues.message
          }
        );

        console.log('Email sent successfully:', response);
        showToast('🚀 Connection initiated! Flynn will follow up within 24 hours.');
        demoForm.reset();

      } catch (error) {
        console.error('EmailJS Error:', error);
        showToast('❌ Something went wrong. Please try again or email directly.', true);
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        demoForm.querySelectorAll('.text-field').forEach(field => field.disabled = false);
      }
    });
  }

  // 11. Floating Hello Button & Modal (Chatbot-Style - Compact)
  const floatingBtn = document.getElementById('floatingBtn');
  const floatingModal = document.getElementById('floatingModal');
  const floatingModalClose = document.getElementById('floatingModalClose');
  const body = document.body;

  // Check if we're on the Contact page - hide the button
  const isContactPage = window.location.pathname.includes('contact.html');
  if (isContactPage && floatingBtn) {
    floatingBtn.classList.add('hidden');
  }

  if (floatingBtn && floatingModal) {
    // Open modal with expansion animation from button position
    floatingBtn.addEventListener('click', function(e) {
      e.preventDefault();
      floatingModal.classList.add('active');
      body.style.overflow = 'hidden';
    });

    // Close modal
    function closeFloatingModal() {
      floatingModal.classList.remove('active');
      body.style.overflow = '';
    }

    if (floatingModalClose) {
      floatingModalClose.addEventListener('click', closeFloatingModal);
    }

    // Click outside to close
    floatingModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeFloatingModal();
      }
    });

    // ESC key to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && floatingModal.classList.contains('active')) {
        closeFloatingModal();
      }
    });

    // Prevent body scroll when modal is open (additional safety)
    const observer = new MutationObserver(function() {
      if (floatingModal.classList.contains('active')) {
        body.style.overflow = 'hidden';
      }
    });
    observer.observe(floatingModal, { attributes: true, attributeFilter: ['class'] });
  }

  // 12. Scroll-Based Animations for Logo and Menu with Color Transitions
  const templateLogo = document.querySelector('.template-logo .logo-text');
  const menuToggleIcon = document.querySelector('.menu-toggle');

  let scrollTimeout;

  if (templateLogo) {
    window.addEventListener('scroll', function() {
      // Add scrolling class to logo
      templateLogo.classList.add('scrolling');
      
      // Add scrolling class to menu
      if (menuToggleIcon) {
        menuToggleIcon.classList.add('scrolling');
      }

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Set timeout to remove scrolling class after scrolling stops
      scrollTimeout = setTimeout(function() {
        templateLogo.classList.remove('scrolling');
        if (menuToggleIcon) {
          menuToggleIcon.classList.remove('scrolling');
        }
      }, 350);
    });
  }
});
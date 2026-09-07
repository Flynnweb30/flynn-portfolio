/**
 * Flynn James Portfolio Core Scripts v11
 * Professional Portfolio — Navigation, Modal, Form, Scroll Animations, Toast, Dropdown, Analytics
 */

// ================================================================
// Analytics Configuration
// ================================================================
const ANALYTICS_CONFIG = {
  GA4_ID: 'G-SQ1Q59Q6V6',
  ENABLED: true,
  DEBUG: false
};

// ================================================================
// EmailJS Configuration
// ================================================================
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'crekfvN6H352DXAfx',
  SERVICE_ID: 'service_av4pfmh',
  TEMPLATE_ID: 'template_dhede6o',
  TO_EMAIL: 'va.flynnjames@gmail.com'
};

// ================================================================
// A/B Testing Configuration (NEW)
// ================================================================
const AB_TEST_CONFIG = {
  ENABLED: true,
  STORAGE_KEY: 'flynn_cta_variant',
  VARIANTS: {
    A: 'Let\'s Talk',
    B: 'Book a Call'
  }
};

// ================================================================
// Initialize GA4
// ================================================================
function initAnalytics() {
  if (!ANALYTICS_CONFIG.ENABLED) return;
  
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`;
    document.head.appendChild(script);
  }
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GA4_ID);
}

// Track Event
function trackEvent(eventName, eventParams = {}) {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') {
    if (ANALYTICS_CONFIG.DEBUG) {
      console.log('[Analytics]', eventName, eventParams);
    }
    return;
  }
  
  window.gtag('event', eventName, eventParams);
}

// Track Page View
function trackPageView(pageTitle, pagePath) {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  
  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath || window.location.pathname
  });
}

// ================================================================
// A/B Testing Function (NEW)
// ================================================================
function initABTesting() {
  if (!AB_TEST_CONFIG.ENABLED) return;
  
  // Get or assign variant
  let variant = localStorage.getItem(AB_TEST_CONFIG.STORAGE_KEY);
  if (!variant) {
    variant = Math.random() < 0.5 ? 'A' : 'B';
    localStorage.setItem(AB_TEST_CONFIG.STORAGE_KEY, variant);
  }
  
  // Apply variant to CTA buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (btn.classList.contains('nav-cta') || btn.classList.contains('hero-cta')) {
      btn.textContent = AB_TEST_CONFIG.VARIANTS[variant];
      trackEvent('ab_test_view', { variant: variant, element: btn.className });
    }
  });
  
  // Track clicks on variant
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('ab_test_click', { 
        variant: variant, 
        element: btn.className 
      });
    });
  });
}

// ================================================================
// Exit Intent Popup (NEW)
// ================================================================
function initExitIntent() {
  const popup = document.getElementById('exitPopup');
  if (!popup) return;
  
  let hasShown = false;
  
  function showPopup() {
    if (!hasShown) {
      hasShown = true;
      popup.classList.add('active');
      trackEvent('exit_intent_triggered');
    }
  }
  
  function closePopup() {
    popup.classList.remove('active');
    trackEvent('exit_popup_closed');
  }
  
  // Show on mouse leave (desktop)
  document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && e.clientY < 50 && !hasShown) {
      showPopup();
    }
  });
  
  // Show on scroll up quickly (mobile)
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY - 200 && !hasShown) {
      showPopup();
    }
    lastScrollY = currentScrollY;
  });
  
  // Close popup
  const closeBtn = document.querySelector('.exit-popup-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePopup);
  }
  
  // Close on outside click
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      closePopup();
    }
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Analytics
  initAnalytics();
  
  // Track Page View
  trackPageView(document.title);
  
  // Initialize A/B Testing
  initABTesting();
  
  // Initialize Exit Intent
  initExitIntent();
  
  // ================================================================
  // 1. Load EmailJS
  // ================================================================
  const emailScript = document.createElement('script');
  emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  emailScript.async = true;
  emailScript.onload = function() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialized');
  };
  document.head.appendChild(emailScript);

  // ================================================================
  // 2. Mobile Navigation
  // ================================================================
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && navMenu.classList.contains('open')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ================================================================
  // 3. Mobile Dropdown Toggle
  // ================================================================
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  
  function handleDropdowns() {
    if (window.innerWidth <= 768) {
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('open');
          });
        }
      });
    } else {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  }
  
  handleDropdowns();
  window.addEventListener('resize', handleDropdowns);

  // ================================================================
  // 4. Navbar Scroll Effect
  // ================================================================
  const navbar = document.querySelector('.navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // ================================================================
  // 5. Scroll Reveal Animations
  // ================================================================
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // ================================================================
  // 6. Click Tracking
  // ================================================================
  document.querySelectorAll('[data-track-click]').forEach(element => {
    element.addEventListener('click', (e) => {
      const eventName = element.getAttribute('data-track-click');
      trackEvent(eventName, {
        element_type: element.tagName.toLowerCase(),
        element_text: element.textContent.trim().substring(0, 50),
        href: element.href || element.getAttribute('href') || ''
      });
    });
  });

  // ================================================================
  // 7. Smooth Scroll for Anchor Links
  // ================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, null, targetId);
      }
    });
  });

  // ================================================================
  // 8. Form Submission (EmailJS)
  // ================================================================
  const inquiryForms = document.querySelectorAll('[data-inquiry-form]');

  inquiryForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      // Basic validation
      if (!values.name || !values.email || !values.message) {
        showToast('⚠️ Please fill in all required fields.', true);
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending... ⏳';
      submitBtn.disabled = true;

      try {
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            company: values.company || 'Not specified',
            phone: values.phone || 'Not provided',
            need: values.need || 'Not specified',
            message: values.message,
            to_email: EMAILJS_CONFIG.TO_EMAIL,
            reply_to: values.email
          }
        );

        trackEvent('contact_form_submit', {
          need: values.need || 'Not specified',
          has_phone: !!values.phone
        });

        showToast('🚀 Message sent! Flynn will follow up within 24 hours.');
        form.reset();

      } catch (error) {
        console.error('EmailJS Error:', error);
        trackEvent('contact_form_error', {
          error_message: error.message
        });
        showToast('❌ Something went wrong. Please try again or email directly.', true);
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  });

  // ================================================================
  // 9. Toast System
  // ================================================================
  const toast = document.querySelector('[data-toast]');

  function showToast(msg, isError = false) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) {
      toast.classList.add('error');
    } else {
      toast.classList.remove('error');
    }
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  // ================================================================
  // 10. Dynamic Footer Year
  // ================================================================
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, year);
  });

  // ================================================================
  // 11. External Link Tracking
  // ================================================================
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('external_link_click', {
        url: link.href
      });
    });
  });

  // ================================================================
  // 12. Email & Phone Link Tracking
  // ================================================================
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('email_click', {
        email: link.href.replace('mailto:', '')
      });
    });
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('phone_click', {
        phone: link.href.replace('tel:', '')
      });
    });
  });

  // ================================================================
  // 13. Scroll Depth Tracking
  // ================================================================
  function trackScrollDepth() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent > 25 && !window._scrolled25) {
      window._scrolled25 = true;
      trackEvent('scroll_25_percent');
    }
    if (scrollPercent > 50 && !window._scrolled50) {
      window._scrolled50 = true;
      trackEvent('scroll_50_percent');
    }
    if (scrollPercent > 75 && !window._scrolled75) {
      window._scrolled75 = true;
      trackEvent('scroll_75_percent');
    }
    if (scrollPercent > 95 && !window._scrolled95) {
      window._scrolled95 = true;
      trackEvent('scroll_95_percent');
    }
  }
  
  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  // ================================================================
  // 14. Time on Page Tracking
  // ================================================================
  setTimeout(() => {
    trackEvent('time_on_page_30_seconds');
  }, 30000);
  
  setTimeout(() => {
    trackEvent('time_on_page_60_seconds');
  }, 60000);
  
  setTimeout(() => {
    trackEvent('time_on_page_120_seconds');
  }, 120000);

  // ================================================================
  // 15. Modal Handling
  // ================================================================
  const openInquiryButtons = document.querySelectorAll('[data-open-inquiry]');
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeModalButtons = document.querySelectorAll('[data-close-modal]');

  openInquiryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModal = document.querySelector(button.getAttribute('href'));
      if (targetModal) {
        targetModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        trackEvent('inquiry_modal_open');
      }
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on outside click
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        overlay.classList.remove('active');
      });
      document.body.style.overflow = '';
      
      // Close exit popup on Escape
      const exitPopup = document.getElementById('exitPopup');
      if (exitPopup) {
        exitPopup.classList.remove('active');
      }
    }
  });

  console.log('🚀 Flynn James Portfolio — Fully Loaded with Analytics, A/B Testing & Exit Intent');
});
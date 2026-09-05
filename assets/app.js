/**
 * Flynn James Portfolio Core Scripts v5
 * Professional Portfolio — Navigation, Modal, Form, Scroll Animations, Toast, Dropdown, Analytics
 */

// ================================================================
// Analytics Configuration
// ================================================================
const ANALYTICS_CONFIG = {
  GA4_ID: 'G-SQ1Q59Q6V6', // Actual GA4 Measurement ID
  ENABLED: true,
  DEBUG: false
};

// Initialize GA4
function initAnalytics() {
  if (!ANALYTICS_CONFIG.ENABLED) return;
  
  // Load GA4 script if not already loaded
  if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`;
    document.head.appendChild(script);
  }
  
  // Initialize dataLayer
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

// Track Scroll Depth
function trackScrollDepth() {
  const thresholds = [25, 50, 75, 100];
  const scrollDepthTracked = new Set();
  
  window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollHeight) * 100;
    
    thresholds.forEach(threshold => {
      if (scrollPercentage >= threshold && !scrollDepthTracked.has(threshold)) {
        scrollDepthTracked.add(threshold);
        trackEvent('scroll_depth', {
          percent: threshold
        });
      }
    });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Analytics
  initAnalytics();
  
  // Track Page View
  const pageTitle = document.title;
  trackPageView(pageTitle);
  
  // Track Scroll Depth
  trackScrollDepth();
  
  // ================================================================
  // 1. Mobile Navigation
  // ================================================================
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navMenu = document.querySelector('[data-nav-menu]');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close nav on outside click
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
  // 2. Mobile Dropdown Toggle
  // ================================================================
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  
  function handleDropdowns() {
    if (window.innerWidth <= 768) {
      dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) {
          toggle.addEventListener('click', (e) => {
            e.preventDefault();
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
  // 3. Navbar Scroll Effect
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
  // 4. Scroll Reveal Animations
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
  // 5. Click Tracking
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
  // 6. Inquiry Modal
  // ================================================================
  const modalOverlay = document.getElementById('inquiry-modal');
  const modalTriggers = document.querySelectorAll('[data-open-inquiry]');
  const modalClose = document.querySelector('[data-close-modal]');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      trackEvent('modal_open', {
        trigger: 'button_click'
      });
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
      trackEvent('modal_close', {});
    }
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ================================================================
  // 7. Inquiry Form Submission (EmailJS)
  // ================================================================
  const inquiryForms = document.querySelectorAll('[data-inquiry-form]');

  const EMAILJS_PUBLIC_KEY = 'crekfvN6H352DXAfx';
  const EMAILJS_SERVICE_ID = 'service_av4pfmh';
  const EMAILJS_TEMPLATE_ID = 'template_dhede6o';

  // Load EmailJS
  const emailScript = document.createElement('script');
  emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  emailScript.async = true;
  emailScript.onload = function() {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  };
  document.head.appendChild(emailScript);

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
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            company: values.company || 'Not specified',
            message: values.message,
            contact_method: values.contact_method || 'Not specified'
          }
        );

        trackEvent('contact_form_submit', {
          contact_method: values.contact_method || 'Not specified'
        });

        showToast('🚀 Inquiry sent! Flynn will follow up within 24 hours.');
        form.reset();
        closeModal();

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
  // 8. Toast System
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
  // 9. Smooth Scroll for Anchor Links
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
        
        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ================================================================
  // 10. Active Navigation Highlight on Scroll
  // ================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links > li > a');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
  }

  // ================================================================
  // 11. Dynamic Footer Year
  // ================================================================
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, year);
  });

  // ================================================================
  // 12. External Link Tracking
  // ================================================================
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('external_link_click', {
        url: link.href
      });
    });
  });

  // ================================================================
  // 13. Email & Phone Link Tracking
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

  console.log('🚀 Flynn James Portfolio — Fully Loaded with Analytics');
});
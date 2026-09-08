/**
 * Flynn James Portfolio Core Scripts v13 - Optimized
 * Professional Portfolio — Navigation, Modal, Form, Scroll Animations, Toast, Dropdown, Analytics
 */

// ================================================================
// Analytics Configuration
// ================================================================
const ANALYTICS_CONFIG = {
  GA4_ID: 'G-SQ1Q59Q6V6',
  ENABLED: true,
  DEBUG: false,
  DELAY_MS: 2000 // Delay GA4 load to prioritize rendering
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
// Initialize GA4 (Deferred)
// ================================================================
function initAnalytics() {
  if (!ANALYTICS_CONFIG.ENABLED) return;
  
  // Check if already loaded
  if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GA4_ID);
  
  // Track initial page view
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
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

// Track Page View (for SPA-like navigation)
function trackPageView(pageTitle, pagePath) {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath || window.location.pathname
  });
}

// ================================================================
// Debounce Utility
// ================================================================
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ================================================================
// DOM Content Loaded - Main Initialization
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
  
  // ================================================================
  // 1. Load EmailJS (Deferred - not critical for rendering)
  // ================================================================
  const emailScript = document.createElement('script');
  emailScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  emailScript.defer = true;
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

    // Close on outside click (single listener)
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
  
  // Only attach once
  if (!window._dropdownsAttached) {
    handleDropdowns();
    window._dropdownsAttached = true;
  }
  
  // Debounced resize handler
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  }, 100), { passive: true });

  // ================================================================
  // 4. Navbar Scroll Effect (Passive + Debounced)
  // ================================================================
  const navbar = document.querySelector('.navbar');
  
  const handleScroll = debounce(() => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, 50);
  
  if (navbar) {
    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ================================================================
  // 5. Scroll Reveal Animations (Optimized IntersectionObserver)
  // ================================================================
  const reveals = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback - show all immediately
    reveals.forEach(el => el.classList.add('active'));
  }

  // ================================================================
  // 6. Click Tracking (Delegated - single listener)
  // ================================================================
  document.addEventListener('click', (e) => {
    const clickTarget = e.target.closest('[data-track-click]');
    if (clickTarget) {
      const eventName = clickTarget.getAttribute('data-track-click');
      trackEvent(eventName, {
        element_type: clickTarget.tagName.toLowerCase(),
        element_text: clickTarget.textContent.trim().substring(0, 50),
        href: clickTarget.href || clickTarget.getAttribute('href') || ''
      });
    }
    
    // External link tracking
    const externalLink = e.target.closest('a[target="_blank"]');
    if (externalLink) {
      trackEvent('external_link_click', { url: externalLink.href });
    }
    
    // Email link tracking
    const emailLink = e.target.closest('a[href^="mailto:"]');
    if (emailLink) {
      trackEvent('email_click', { email: emailLink.href.replace('mailto:', '') });
    }
    
    // Phone link tracking
    const phoneLink = e.target.closest('a[href^="tel:"]');
    if (phoneLink) {
      trackEvent('phone_click', { phone: phoneLink.href.replace('tel:', '') });
    }
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

      // Client-side validation
      if (!values.name || !values.email || !values.message) {
        showToast('⚠️ Please fill in all required fields.', true);
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending... ⏳';
      submitBtn.disabled = true;

      try {
        // Wait for EmailJS to be ready
        if (typeof emailjs === 'undefined') {
          throw new Error('EmailJS not loaded yet');
        }
        
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

  // Expose showToast globally for any inline usage
  window.showToast = showToast;

  // ================================================================
  // 10. Dynamic Footer Year
  // ================================================================
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer-copy').forEach(el => {
    el.textContent = el.textContent.replace(/\d{4}/, year);
  });

  // ================================================================
  // 11. Scroll Depth Tracking (Debounced + Passive)
  // ================================================================
  const trackScrollDepth = debounce(() => {
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
  }, 200);
  
  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  // ================================================================
  // 12. Time on Page Tracking
  // ================================================================
  setTimeout(() => {
    trackEvent('time_on_page_30_seconds');
  }, 30000);
  
  setTimeout(() => {
    trackEvent('time_on_page_60_seconds');
  }, 60000);

  // ================================================================
  // 13. Modal Handling
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

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        overlay.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });

  console.log('🚀 Flynn James Portfolio — Optimized & Loaded');
});

// ================================================================
// Initialize Analytics with Delay (After Load Event)
// ================================================================
if (ANALYTICS_CONFIG.ENABLED) {
  // Delay analytics by DELAY_MS to allow first paint
  setTimeout(initAnalytics, ANALYTICS_CONFIG.DELAY_MS);
}
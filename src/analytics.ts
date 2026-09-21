/* ========================================================================== *
 * Flynn James Portfolio — Analytics, inquiry forms, UX instrumentation
 * ========================================================================== */

/** GA4 configuration. Keep the requested key names unchanged. */
export const ANALYTICS_CONFIG = {
  GA4_ID: 'G-WNF4GDZVK5',
  ENABLED: true,
  DEBUG: false,
  DELAY_MS: 2000,
};

/** EmailJS configuration. Keep the requested key names unchanged. */
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'crekfvN6H352DXAfx',
  SERVICE_ID: 'service_av4pfmh',
  TEMPLATE_ID: 'template_dhede6o',
  TO_EMAIL: 'va.flynnjames@gmail.com',
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    emailjs?: {
      init: (publicKey: string | { publicKey: string }) => void;
      send: (serviceId: string, templateId: string, templateParams: Record<string, string>) => Promise<unknown>;
    };
    _analyticsInitialized?: boolean;
    _emailjsInitialized?: boolean;
    _analyticsDomAttached?: boolean;
    _dropdownsAttached?: boolean;
    _scrollDepthFlags?: Record<number, boolean>;
    showToast?: (msg: string, isError?: boolean) => void;
  }
}

/**
 * Debounce a function while preserving the caller's `this` context.
 * @template {(...args: any[]) => any} T
 * @param {T} fn Function to debounce.
 * @param {number} delay Delay in milliseconds.
 * @returns {(...args: Parameters<T>) => void} Debounced wrapper.
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer: number | undefined;
  return function debounced(this: ThisParameterType<T>, ...args: Parameters<T>) {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Initialize GA4 only once and fire the initial page view.
 * @returns {void}
 */
export function initAnalytics(): void {
  if (!ANALYTICS_CONFIG.ENABLED || window._analyticsInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  if (!document.querySelector(`script[data-ga4="${ANALYTICS_CONFIG.GA4_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS_CONFIG.GA4_ID)}`;
    script.dataset.ga4 = ANALYTICS_CONFIG.GA4_ID;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_CONFIG.GA4_ID, { send_page_view: false });
  window._analyticsInitialized = true;
  trackPageView(document.title, window.location.pathname);
}

/**
 * Send a GA4 event when analytics is available.
 * @param {string} name GA4 event name.
 * @param {Record<string, unknown>} params Event parameters.
 * @returns {void}
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  if (ANALYTICS_CONFIG.DEBUG) console.log('[GA4]', name, params);
  window.gtag('event', name, params);
}

/**
 * Track an SPA page view without reloading the page.
 * @param {string} title Document title.
 * @param {string} path Optional path; defaults to the current pathname.
 * @returns {void}
 */
export function trackPageView(title: string, path = window.location.pathname): void {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_title: title,
    page_location: window.location.href,
    page_path: path,
  });
}

/**
 * Inject and initialize EmailJS from the official CDN.
 * @returns {void}
 */
function initEmailJS(): void {
  if (window._emailjsInitialized) return;

  const initialize = () => {
    if (!window.emailjs) return;
    window.emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
    window._emailjsInitialized = true;
    console.log('✅ EmailJS initialized');
  };

  if (window.emailjs) {
    initialize();
    return;
  }

  const existing = document.querySelector<HTMLScriptElement>('script[data-emailjs="true"]');
  if (existing) {
    existing.addEventListener('load', initialize, { once: true });
    return;
  }

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  script.defer = true;
  script.dataset.emailjs = 'true';
  script.addEventListener('load', initialize, { once: true });
  script.addEventListener('error', () => console.error('EmailJS failed to load.'));
  document.head.appendChild(script);
}

/**
 * Display a site-wide toast and expose it globally for DOM integrations.
 * @param {string} msg Toast message.
 * @param {boolean} isError Whether to use the error presentation.
 * @returns {void}
 */
export function showToast(msg: string, isError = false): void {
  const toast = document.querySelector<HTMLElement>('[data-toast]');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  window.clearTimeout(Number(toast.dataset.toastTimer || 0));
  const timer = window.setTimeout(() => toast.classList.remove('show'), 5000);
  toast.dataset.toastTimer = String(timer);
}

/**
 * Submit an inquiry form through EmailJS.
 * @param {HTMLFormElement} form Inquiry form.
 * @returns {Promise<void>} Resolves after the email request completes.
 */
async function sendInquiry(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const message = String(formData.get('message') || '').trim();

  if (!name || !email || !message) {
    showToast('Please complete your name, work email, and message.', true);
    return;
  }

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const originalButtonHTML = button?.innerHTML || '';
  if (button) {
    button.disabled = true;
    button.innerHTML = 'Sending... ⏳';
  }

  try {
    if (!window.emailjs) throw new Error('EmailJS is not loaded yet.');

    const company = String(formData.get('company') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const service = String(formData.get('need') || '').trim();
    const market = String(formData.get('targetMarket') || '').trim();
    const meetingTarget = String(formData.get('meetingTarget') || '').trim();
    const need = [service, market, meetingTarget].filter(Boolean).join(' · ');

    await window.emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
      name,
      email,
      company,
      phone,
      need,
      message,
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      reply_to: email,
    });

    trackEvent('contact_form_submit', { form_name: form.dataset.formName || 'inquiry' });
    showToast('Message sent successfully. I’ll get back to you within 24 hours.');
    form.reset();
    window.dispatchEvent(new CustomEvent('flynn:inquiry-success', { detail: { name, email } }));
  } catch (error) {
    console.error('EmailJS inquiry error:', error);
    trackEvent('contact_form_error', { form_name: form.dataset.formName || 'inquiry' });
    showToast('I couldn’t send that message. Please email me directly instead.', true);
  } finally {
    if (button) {
      button.disabled = false;
      button.innerHTML = originalButtonHTML;
    }
  }
}

/**
 * Attach all requested DOM behaviors once after the page is ready.
 * @returns {void}
 */
function attachDOMFeatures(): void {
  if (window._analyticsDomAttached) return;
  window._analyticsDomAttached = true;

  /** 1. EmailJS initialization. */
  initEmailJS();

  /** 2. Navbar scroll state with a passive, debounced listener. */
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    const updateNavbar = debounce(() => navbar.classList.toggle('scrolled', window.scrollY > 50), 50);
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  /** 3. Scroll reveal using IntersectionObserver with a safe fallback. */
  const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('active'));
  }

  /** 4. Delegated click tracking for repeated and dynamically rendered links. */
  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const tracked = target?.closest<HTMLElement>('[data-track-click]');
    const anchor = target?.closest<HTMLAnchorElement>('a');

    if (tracked) {
      const eventName = tracked.dataset.trackClick || 'element_click';
      trackEvent(eventName, {
        element_type: tracked.tagName.toLowerCase(),
        element_text: (tracked.textContent || '').trim().slice(0, 50),
        href: anchor?.href || tracked.getAttribute('href') || '',
      });
    }

    if (anchor) {
      const text = (anchor.textContent || '').trim().slice(0, 50);
      const href = anchor.href;
      if (anchor.target === '_blank') trackEvent('external_link_click', { element_text: text, href });
      if (anchor.protocol === 'mailto:') trackEvent('email_click', { element_text: text, href });
      if (anchor.protocol === 'tel:') trackEvent('phone_click', { element_text: text, href });
    }
  });

  /** 5. Smooth internal scrolling with history updates. */
  document.addEventListener('click', (event) => {
    const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href')?.slice(1);
    if (!id) return;
    const destination = document.getElementById(id);
    if (!destination) return;
    event.preventDefault();
    const top = destination.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    window.history.pushState({}, '', `#${id}`);
  });

  /** 6. Inquiry forms with validation, EmailJS delivery, and analytics. */
  document.addEventListener('submit', async (event) => {
    const form = event.target as HTMLFormElement | null;
    if (!form?.matches('[data-inquiry-form]')) return;
    event.preventDefault();
    await sendInquiry(form);
  });

  /** 7. Toast global API. */
  window.showToast = showToast;

  /** 8. Footer year. */
  document.querySelectorAll<HTMLElement>('.footer-copy').forEach((element) => {
    element.textContent = element.textContent?.replace(/\d{4}/, String(new Date().getFullYear())) || String(new Date().getFullYear());
  });

  /** 9. Scroll-depth milestones. */
  window._scrollDepthFlags = window._scrollDepthFlags || {};
  const trackScrollDepth = debounce(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = (window.scrollY / scrollable) * 100;
    [25, 50, 75, 95].forEach((milestone) => {
      if (percent >= milestone && !window._scrollDepthFlags?.[milestone]) {
        window._scrollDepthFlags![milestone] = true;
        trackEvent('scroll_depth', { percent: milestone });
      }
    });
  }, 200);
  window.addEventListener('scroll', trackScrollDepth, { passive: true });

  /** 10. Time-on-page milestones. */
  window.setTimeout(() => trackEvent('time_on_page', { seconds: 30 }), 30000);
  window.setTimeout(() => trackEvent('time_on_page', { seconds: 60 }), 60000);

  /** 11. Modal controls. */
  const openModal = (modal: HTMLElement) => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    trackEvent('inquiry_modal_open');
  };
  const closeModal = (modal: HTMLElement) => {
    modal.classList.remove('active');
    if (!document.querySelector('.modal.active, [data-modal].active')) document.body.style.overflow = '';
  };

  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    const opener = target?.closest<HTMLElement>('[data-open-inquiry]');
    if (opener) {
      const selector = opener.dataset.openInquiry;
      const modal = selector ? document.querySelector<HTMLElement>(selector) : document.querySelector<HTMLElement>('[data-inquiry-modal]');
      if (modal) openModal(modal);
      return;
    }

    const closer = target?.closest<HTMLElement>('[data-close-modal]');
    if (closer) {
      const modal = closer.closest<HTMLElement>('[data-modal], [data-inquiry-modal]');
      if (modal) closeModal(modal);
      return;
    }

    const modal = target?.closest<HTMLElement>('[data-modal], [data-inquiry-modal]');
    if (modal && target === modal) closeModal(modal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll<HTMLElement>('[data-modal].active, [data-inquiry-modal].active').forEach(closeModal);
  });

  /** 12. Keep the requested dropdown attachment guard available to future UI modules. */
  if (!window._dropdownsAttached) window._dropdownsAttached = true;

  /** 13. Allow React forms to switch into their success state after DOM delivery. */
  window.addEventListener('flynn:inquiry-success', () => {
    document.querySelectorAll<HTMLElement>('[data-inquiry-success-target]').forEach((target) => target.classList.add('active'));
  });

  console.log(' Flynn James Portfolio — Optimized & Loaded');
}

/**
 * Start DOM features and schedule delayed GA4 initialization.
 * @returns {void}
 */
export function initializePortfolioAnalytics(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachDOMFeatures, { once: true });
  } else {
    attachDOMFeatures();
  }

  if (ANALYTICS_CONFIG.ENABLED) {
    window.setTimeout(initAnalytics, ANALYTICS_CONFIG.DELAY_MS);
  }
}

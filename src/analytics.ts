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
  USER_CONFIRMATION_TEMPLATE_ID: 'template_user_confirmation',
  TO_EMAIL: 'va.flynnjames@gmail.com',
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    emailjs?: {
      init: (options: string | { publicKey: string }) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, string>,
      ) => Promise<unknown>;
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
 */
export function initAnalytics(): void {
  if (!ANALYTICS_CONFIG.ENABLED || window._analyticsInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (!document.querySelector(`script[data-ga4="${ANALYTICS_CONFIG.GA4_ID}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
      ANALYTICS_CONFIG.GA4_ID,
    )}`;
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
 */
export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (!ANALYTICS_CONFIG.ENABLED || typeof window.gtag !== 'function') return;
  if (ANALYTICS_CONFIG.DEBUG) console.log('[GA4]', name, params);
  window.gtag('event', name, params);
}

/**
 * Track an SPA page view without reloading the page.
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
 * Formats a submission timestamp safely across all browsers and engines.
 * Avoids mixing dateStyle/timeStyle with timeZoneName which causes Intl TypeError.
 */
function getSafeTimestamp(): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
    }).format(new Date());
  } catch {
    try {
      return new Date().toLocaleString('en-US');
    } catch {
      return new Date().toISOString();
    }
  }
}

/**
 * Inject and initialize EmailJS SDK once.
 */
let emailJSReady: Promise<void> | null = null;

function initEmailJS(): Promise<void> {
  if (window._emailjsInitialized && window.emailjs) return Promise.resolve();
  if (emailJSReady) return emailJSReady;

  emailJSReady = new Promise<void>((resolve, reject) => {
    const initialize = () => {
      if (!window.emailjs) {
        reject(new Error('EmailJS SDK loaded without the expected API.'));
        return;
      }
      try {
        window.emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
        window._emailjsInitialized = true;
        resolve();
      } catch (err) {
        reject(err);
      }
    };

    if (window.emailjs) {
      initialize();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>('script[data-emailjs="true"]');
    if (existing) {
      existing.addEventListener('load', initialize, { once: true });
      existing.addEventListener(
        'error',
        () => reject(new Error('EmailJS CDN failed to load.')),
        { once: true },
      );
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.defer = true;
    script.dataset.emailjs = 'true';
    script.addEventListener('load', initialize, { once: true });
    script.addEventListener(
      'error',
      () => reject(new Error('EmailJS CDN script load error.')),
      { once: true },
    );
    document.head.appendChild(script);
  });

  return emailJSReady;
}

/**
 * Dual-strategy dispatcher: tries SDK, falls back to direct REST API if CDN is blocked.
 */
async function dispatchEmail(templateParams: Record<string, string>): Promise<void> {
  let sentViaSDK = false;

  try {
    await initEmailJS();
    if (window.emailjs && typeof window.emailjs.send === 'function') {
      await window.emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
      );
      sentViaSDK = true;
    }
  } catch (sdkError) {
    console.warn('EmailJS browser SDK unavailable or blocked by extension; trying REST fallback...', sdkError);
  }

  if (sentViaSDK) return;

  // Fallback: Direct EmailJS REST API call
  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.SERVICE_ID,
      template_id: EMAILJS_CONFIG.TEMPLATE_ID,
      user_id: EMAILJS_CONFIG.PUBLIC_KEY,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Network response failed');
    throw new Error(`EmailJS delivery failed with status ${response.status}: ${errorText}`);
  }
}

/**
 * Display a site-wide toast notification.
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
 * Submit an inquiry form with validation, EmailJS delivery, and analytics tracking.
 * Returns true if sent successfully, false otherwise.
 */
export async function sendInquiry(form: HTMLFormElement): Promise<boolean> {
  const formData = new FormData(form);
  const get = (key: string) => String(formData.get(key) || '').trim();

  const honeypot = get('website');
  if (honeypot) {
    trackEvent('contact_form_spam_blocked', {
      form_name: form.dataset.formName || 'portfolio_contact',
    });
    return false;
  }

  const name = get('name');
  const email = get('email').toLowerCase();
  const company = get('company');
  const phone = get('phone');
  const serviceNeeded = get('serviceNeeded') || get('need');
  const targetMarket = get('targetMarket') || 'United States';
  const meetingTarget = get('meetingTarget') || get('callingVolume') || '25–35 Meetings/Mo';
  const message = get('message');
  const formType = get('form_type') || form.dataset.formName || 'portfolio_contact';

  if (!name || !email || !company || !serviceNeeded || !message) {
    showToast('Please complete all required fields before sending your inquiry.', true);
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showToast('Please enter a valid work email address.', true);
    return false;
  }

  if (name.length < 2 || company.length < 2 || message.length < 10) {
    showToast('Please provide a little more detail so I can respond usefully.', true);
    return false;
  }

  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const originalButtonHTML = button?.innerHTML || '';
  if (button) {
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
  }

  try {
    const submittedAt = getSafeTimestamp();
    const pageUrl = window.location.href;
    const pagePath = window.location.pathname || '/';
    const sourcePage = document.title || 'Flynn James Portfolio';
    const userAgent = (navigator.userAgent || '').slice(0, 500);

    const templateParams: Record<string, string> = {
      name,
      email,
      company,
      phone: phone || 'Not provided',
      serviceNeeded,
      need: serviceNeeded,
      targetMarket,
      meetingTarget,
      callingVolume: meetingTarget,
      message,
      reply_to: email,
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      submitted_at: submittedAt,
      source_page: sourcePage,
      page_url: pageUrl,
      page_path: pagePath,
      form_type: formType,
      user_agent: userAgent,
    };

    await dispatchEmail(templateParams);

    trackEvent('contact_form_submit', {
      form_name: form.dataset.formName || 'portfolio_contact',
      form_type: formType,
      service: serviceNeeded,
      target_market: targetMarket,
    });

    showToast('Inquiry sent successfully! A confirmation has been sent to your inbox.');
    form.reset();
    window.dispatchEvent(
      new CustomEvent('flynn:inquiry-success', {
        detail: { name, email, company, serviceNeeded },
      }),
    );
    return true;
  } catch (error) {
    console.error('EmailJS inquiry delivery error:', error);
    trackEvent('contact_form_error', {
      form_name: form.dataset.formName || 'portfolio_contact',
      form_type: formType,
    });
    showToast(
      'Could not send inquiry automatically. Please email va.flynnjames@gmail.com directly.',
      true,
    );
    return false;
  } finally {
    if (button) {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      if (originalButtonHTML) {
        button.innerHTML = originalButtonHTML;
      }
    }
  }
}

/**
 * Filter harmless browser-extension errors from polluting console execution.
 */
function attachExtensionErrorShields(): void {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason;
    if (
      reason &&
      typeof reason.message === 'string' &&
      (reason.message.includes('chrome-extension://') ||
        reason.message.includes('Extension context invalidated'))
    ) {
      event.preventDefault();
    }
  });

  window.addEventListener(
    'error',
    (event) => {
      const source = event.filename || '';
      if (source.startsWith('chrome-extension://')) {
        event.preventDefault();
      }
    },
    true,
  );
}

/**
 * Attach all requested DOM behaviors once after the page is ready.
 */
function attachDOMFeatures(): void {
  if (window._analyticsDomAttached) return;
  window._analyticsDomAttached = true;

  attachExtensionErrorShields();

  // Preload EmailJS SDK
  void initEmailJS().catch(() => {
    // REST API fallback remains available
  });

  // Navbar scroll state
  const navbar = document.querySelector<HTMLElement>('.navbar');
  if (navbar) {
    const updateNavbar = debounce(
      () => navbar.classList.toggle('scrolled', window.scrollY > 50),
      50,
    );
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }

  // Scroll reveal
  const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
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

  // Delegated click tracking
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
      if (anchor.target === '_blank')
        trackEvent('external_link_click', { element_text: text, href });
      if (anchor.protocol === 'mailto:')
        trackEvent('email_click', { element_text: text, href });
      if (anchor.protocol === 'tel:')
        trackEvent('phone_click', { element_text: text, href });
    }
  });

  // Smooth internal scrolling
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

  // Global inquiry form submit listener (fallback for lead magnet and non-React forms)
  document.addEventListener('submit', async (event) => {
    const form = event.target as HTMLFormElement | null;
    if (!form?.matches('[data-inquiry-form]')) return;
    // If the form has data-react-managed, let React handle it directly
    if (form.dataset.reactManaged === 'true') return;
    event.preventDefault();
    await sendInquiry(form);
  });

  // Toast global API
  window.showToast = showToast;

  // Footer year
  document.querySelectorAll<HTMLElement>('.footer-copy').forEach((element) => {
    element.textContent =
      element.textContent?.replace(/\d{4}/, String(new Date().getFullYear())) ||
      String(new Date().getFullYear());
  });

  // Scroll depth tracking
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

  // Time-on-page milestones
  window.setTimeout(() => trackEvent('time_on_page', { seconds: 30 }), 30000);
  window.setTimeout(() => trackEvent('time_on_page', { seconds: 60 }), 60000);

  if (!window._dropdownsAttached) window._dropdownsAttached = true;
}

/**
 * Start DOM features and delayed GA4 initialization.
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

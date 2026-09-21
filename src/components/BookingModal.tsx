import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Tag, Calendar, Clock, Globe, Check, ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import { Button } from './Button';

const API_URL = 'https://flynn-portfolio-1-api.onrender.com/api/create-booking';

const TIMEZONES = [
  { value: 'Pacific/Honolulu', label: '(UTC-10:00) Hawaii' },
  { value: 'America/Los_Angeles', label: '(UTC-08:00) Los Angeles' },
  { value: 'America/Chicago', label: '(UTC-06:00) Chicago' },
  { value: 'America/New_York', label: '(UTC-05:00) New York' },
  { value: 'Europe/London', label: '(UTC+00:00) London' },
  { value: 'Europe/Paris', label: '(UTC+01:00) Paris' },
  { value: 'Asia/Dubai', label: '(UTC+04:00) Dubai' },
  { value: 'Asia/Singapore', label: '(UTC+08:00) Singapore' },
  { value: 'Asia/Manila', label: '(UTC+08:00) Manila' },
  { value: 'Asia/Tokyo', label: '(UTC+09:00) Tokyo' },
  { value: 'Australia/Sydney', label: '(UTC+10:00) Sydney' },
  { value: 'Pacific/Auckland', label: '(UTC+12:00) Auckland' },
];

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ open, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [timezone, setTimezone] = useState('Asia/Manila');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);

  useEffect(() => {
    if (!open) return;
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TIMEZONES.some(t => t.value === detected)) setTimezone(detected);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Generate next 14 weekdays
  const dates = (() => {
    const out: { value: string; day: string; date: string }[] = [];
    const start = new Date();
    start.setDate(start.getDate() + 1);
    for (let i = 0; i < 20 && out.length < 10; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      if (d.getDay() === 0 || d.getDay() === 6) continue;
      out.push({
        value: d.toISOString().split('T')[0],
        day: d.toLocaleDateString('en-US', { weekday: 'short' }),
        date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      });
    }
    return out;
  })();

  const times = (() => {
    const out: { value: string; label: string }[] = [];
    for (let h = 9; h <= 17; h++) {
      for (let m = 0; m < 60; m += 30) {
        if (h === 17 && m > 0) break;
        const h12 = h > 12 ? h - 12 : h;
        const ampm = h >= 12 ? 'PM' : 'AM';
        out.push({
          value: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
          label: `${h12}:${String(m).padStart(2, '0')} ${ampm}`,
        });
      }
    }
    return out;
  })();

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) return;
    setIsProcessing(true);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message, date: selectedDate, time: selectedTime, timezone }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessData({ name, email, date: selectedDate, time: selectedTime, timezone });
        setStep(5);
      } else {
        alert(data.message || 'Booking failed. Please try again.');
      }
    } catch (e: any) {
      alert('Could not connect. Please email va.flynnjames@gmail.com directly.');
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setStep(1); setName(''); setEmail(''); setPhone('');
    setSubject(''); setMessage(''); setSelectedDate(null);
    setSelectedTime(null); setSuccessData(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-2xl shadow-[var(--shadow-xl)] max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[var(--ink-tertiary)] hover:text-[var(--ink-primary)] rounded-md transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-7 sm:p-9">
              {/* Progress dots */}
              {step <= 4 && (
                <div className="flex justify-center gap-2 mb-7">
                  {[1, 2, 3, 4].map(i => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === step ? 'w-8 bg-[var(--accent-primary)]' :
                        i < step ? 'w-1.5 bg-[var(--accent-primary)]/40' :
                        'w-1.5 bg-[var(--border-default)]'
                      }`}
                    />
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[var(--ink-primary)]">Let's get to know you</h3>
                    <p className="text-[13px] text-[var(--ink-tertiary)] mt-1.5">A few details so I can prepare for our call.</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <User className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] placeholder-[var(--ink-quaternary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] placeholder-[var(--ink-quaternary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <Phone className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+1 555 000 0000"
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] placeholder-[var(--ink-quaternary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (!name.trim() || !email.includes('@')) return;
                      setStep(2);
                    }}
                    disabled={!name.trim() || !email.includes('@')}
                    className="w-full py-3 text-[14px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[var(--ink-primary)]">What brings you here?</h3>
                    <p className="text-[13px] text-[var(--ink-tertiary)] mt-1.5">Tell me what you need so I can prepare.</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <Tag className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Subject *
                    </label>
                    <select
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    >
                      <option value="">Select an option...</option>
                      <option>Hiring Opportunity — I need an SDR</option>
                      <option>Sales Consulting — I need strategy help</option>
                      <option>Team Training / Mentorship</option>
                      <option>Partnership opportunity</option>
                      <option>General inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      What's your biggest challenge right now?
                    </label>
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={4}
                      placeholder="Tell me about your goals or current outbound bottleneck..."
                      className="w-full px-3.5 py-2.5 text-[14px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] placeholder-[var(--ink-quaternary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-3 text-[13px] font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={() => subject && setStep(3)}
                      disabled={!subject}
                      className="flex-1 py-3 text-[14px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[var(--ink-primary)]">Pick a time</h3>
                    <p className="text-[13px] text-[var(--ink-tertiary)] mt-1.5">20-minute strategy call.</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <Globe className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Your timezone
                    </label>
                    <select
                      value={timezone}
                      onChange={e => setTimezone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-[13.5px] bg-[var(--bg-base)] border border-[var(--border-default)] rounded-lg text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    >
                      {TIMEZONES.map(tz => (
                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Select a date
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5">
                      {dates.map(d => (
                        <button
                          key={d.value}
                          onClick={() => { setSelectedDate(d.value); setSelectedTime(null); }}
                          className={`px-2 py-2.5 rounded-lg text-center transition-colors border ${
                            selectedDate === d.value
                              ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                              : 'bg-[var(--bg-base)] text-[var(--ink-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                          }`}
                        >
                          <div className="text-[10px] font-mono uppercase tracking-wider opacity-70">{d.day}</div>
                          <div className="text-[12.5px] font-semibold mt-0.5">{d.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDate && (
                    <div>
                      <label className="flex items-center gap-2 text-[11px] font-mono text-[var(--ink-tertiary)] uppercase tracking-wider mb-2">
                        <Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" /> Select a time
                      </label>
                      <div className="grid grid-cols-3 gap-1.5 max-h-48 overflow-y-auto pr-1">
                        {times.map(t => (
                          <button
                            key={t.value}
                            onClick={() => setSelectedTime(t.value)}
                            className={`px-2 py-2 rounded-lg text-[12.5px] font-medium transition-colors border ${
                              selectedTime === t.value
                                ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)]'
                                : 'bg-[var(--bg-base)] text-[var(--ink-primary)] border-[var(--border-default)] hover:border-[var(--accent-primary)]'
                            }`}
                          >
                            {t.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="px-4 py-3 text-[13px] font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={() => selectedDate && selectedTime && setStep(4)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1 py-3 text-[14px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                    >
                      Review <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[20px] font-semibold text-[var(--ink-primary)]">Confirm your booking</h3>
                    <p className="text-[13px] text-[var(--ink-tertiary)] mt-1.5">Please review before confirming.</p>
                  </div>

                  <div className="bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-5 space-y-3">
                    {[
                      ['Name', name],
                      ['Email', email],
                      ['Phone', phone || '—'],
                      ['Subject', subject],
                      ['Date', selectedDate ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) : '—'],
                      ['Time', selectedTime || '—'],
                      ['Timezone', timezone.replace('_', ' ')],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4 text-[13px]">
                        <span className="text-[var(--ink-tertiary)]">{k}</span>
                        <span className="text-[var(--ink-primary)] font-medium text-right truncate">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-[11.5px] text-[var(--ink-tertiary)] justify-center">
                    <Shield className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                    Your information is secure
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(3)}
                      className="px-4 py-3 text-[13px] font-medium text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors inline-flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={isProcessing}
                      className="flex-1 py-3 text-[14px] font-medium text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] rounded-lg transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" /> {isProcessing ? 'Confirming...' : 'Confirm Booking'}
                    </button>
                  </div>
                </div>
              )}

              {step === 5 && successData && (
                <div className="text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[var(--success-subtle)] border border-[var(--success)]/30 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 text-[var(--success)]" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold text-[var(--ink-primary)]">You're booked!</h3>
                    <p className="text-[13.5px] text-[var(--ink-secondary)] mt-2">
                      A confirmation email has been sent to {successData.email}.
                    </p>
                  </div>

                  <div className="text-left bg-[var(--bg-base)] border border-[var(--border-subtle)] rounded-xl p-5 space-y-2.5">
                    <div className="flex justify-between text-[13px]"><span className="text-[var(--ink-tertiary)]">Date</span><span className="text-[var(--ink-primary)] font-medium">{new Date(successData.date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span></div>
                    <div className="flex justify-between text-[13px]"><span className="text-[var(--ink-tertiary)]">Time</span><span className="text-[var(--ink-primary)] font-medium">{successData.time}</span></div>
                    <div className="flex justify-between text-[13px]"><span className="text-[var(--ink-tertiary)]">Timezone</span><span className="text-[var(--ink-primary)] font-medium">{successData.timezone.replace('_', ' ')}</span></div>
                  </div>

                  <Button variant="primary" onClick={() => { reset(); onClose(); }} className="w-full">
                    Done
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
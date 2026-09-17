import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Twitter, 
  Copy, 
  Check, 
  Send, 
  Loader2,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';
import { ScrollReveal } from './ScrollReveal.tsx';
import { saveContactMessage } from '../lib/firebase.ts';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const handleContextSelection = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectType?: string; note?: string }>;
      if (customEvent.detail) {
        setSubmitted(false);
        setErrorMessage(null);
        setFieldErrors({});
        const { projectType, note } = customEvent.detail;
        setFormData((prev) => ({
          ...prev,
          projectType: projectType || prev.projectType,
          message: note || prev.message,
        }));
      }
    };

    window.addEventListener('clarity:select-service', handleContextSelection);
    return () => window.removeEventListener('clarity:select-service', handleContextSelection);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear specific field error on user edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.socials.whatsappNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // 8. Prevent page reload on submit
    e.preventDefault();
    setErrorMessage(null);

    // 7. Validate inputs and prevent empty or invalid submissions
    const errors: { [key: string]: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errors.name = 'Please provide your full name.';
    }
    if (!trimmedEmail) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!trimmedMessage) {
      errors.message = 'Please provide project details or requirements.';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // 4 & 5 & 9. Save to Firestore collection 'contactMessages'
      await saveContactMessage({
        name: trimmedName,
        email: trimmedEmail,
        projectType: formData.projectType,
        message: trimmedMessage
      });

      // 6. Success state
      setSubmitted(true);
      setFieldErrors({});
      setFormData({
        name: '',
        email: '',
        projectType: 'Business Website',
        message: ''
      });
    } catch (err: unknown) {
      console.error('Error submitting contact message to Firebase:', err);
      const message = err instanceof Error 
        ? err.message 
        : 'Failed to send your inquiry to Firebase. Please try again or message via WhatsApp.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <ScrollReveal direction="up" distance={20}>
          <div className="section-title">
            <p>GET IN TOUCH</p>
            <h2>
              LET&apos;S BUILD <span>SOMETHING GREAT</span>
            </h2>
            <p className="section-subtitle-text">
              Have a project in mind? Let&apos;s discuss how I can help bring it to life with modern code and clear solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left: Contact Info & Channels */}
          <ScrollReveal direction="left" delay={100} distance={25} className="h-full">
            <div className="contact-info-card h-full flex flex-col justify-between hover:border-[#16C7C2]/40 transition-colors">
              <div>
                <h3 className="text-xl font-extrabold text-[#F4FFFF] mb-3">
                  Direct Contact
                </h3>
                <p className="text-sm text-[#8FA5A5] mb-8 leading-relaxed">
                  Feel free to reach out directly via email, message on WhatsApp, or connect on Twitter/X. I respond promptly to all new project inquiries.
                </p>

                {/* Email Channel */}
                <div className="contact-item group">
                  <div className="contact-icon-box group-hover:scale-108 transition-transform">
                    <Mail className="w-5 h-5 text-[#16C7C2]" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-xs text-[#8FA5A5] font-semibold block">Email Address</span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-bold text-[#F4FFFF] hover:text-[#62E7E1] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#0A1719] border border-[#193438] text-[#8FA5A5] hover:text-[#F4FFFF] hover:border-[#16C7C2]/50 transition-all active:scale-95 cursor-pointer shrink-0"
                    title="Copy email"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-[#16C7C2]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp Channel */}
                <div className="contact-item group">
                  <div className="contact-icon-box group-hover:scale-108 transition-transform">
                    <MessageCircle className="w-5 h-5 text-[#22C55E]" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-xs text-[#8FA5A5] font-semibold block">WhatsApp Direct</span>
                    <a 
                      href={personalInfo.socials.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-[#F4FFFF] hover:text-[#22C55E] transition-colors block"
                    >
                      {personalInfo.socials.whatsappNumber}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-[#0A1719] border border-[#193438] text-[#8FA5A5] hover:text-[#F4FFFF] hover:border-[#22C55E]/50 transition-all active:scale-95 cursor-pointer shrink-0"
                    title="Copy phone"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-[#16C7C2]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Twitter / X Channel */}
                <div className="contact-item group">
                  <div className="contact-icon-box group-hover:scale-108 transition-transform">
                    <Twitter className="w-5 h-5 text-[#62E7E1]" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-xs text-[#8FA5A5] font-semibold block">Twitter / X</span>
                    <a 
                      href={personalInfo.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#F4FFFF] hover:text-[#62E7E1] transition-colors truncate block"
                    >
                      @Toriblackm8j9
                    </a>
                  </div>
                </div>

                {/* Location Channel */}
                <div className="contact-item group">
                  <div className="contact-icon-box group-hover:scale-108 transition-transform">
                    <MapPin className="w-5 h-5 text-[#16C7C2]" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <span className="text-xs text-[#8FA5A5] font-semibold block">Current Location &amp; Base</span>
                    <p className="text-xs sm:text-sm font-bold text-[#F4FFFF]">
                      Kwara State, Nigeria <span className="text-[#16C7C2] font-normal text-xs">(Available Worldwide / Remote)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick action buttons */}
              <div className="pt-6 border-t border-[#193438] flex flex-col sm:flex-row gap-3">
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp flex-1 active:scale-[0.98] transition-transform"
                  id="contact-whatsapp-btn"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-secondary flex-1 active:scale-[0.98] transition-transform"
                  id="contact-email-btn"
                >
                  <Mail className="w-4 h-4 text-[#16C7C2]" />
                  <span>SEND EMAIL</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Message Form */}
          <ScrollReveal direction="right" delay={140} distance={25} className="h-full">
            <div className="contact-form-card h-full flex flex-col justify-between hover:border-[#16C7C2]/40 transition-colors">
              <div>
                <h3 className="text-xl font-extrabold text-[#F4FFFF] mb-2">
                  Send a Project Message
                </h3>
                <p className="text-xs text-[#8FA5A5] mb-6">
                  Fill out the form below and I will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-7 rounded-2xl bg-[#0A1719] border border-[#16C7C2]/50 text-center space-y-3.5 animate-[modal-in_0.35s_cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_30px_rgba(22,199,194,0.2)]">
                    <div className="w-12 h-12 rounded-full bg-[#16C7C2]/20 text-[#62E7E1] flex items-center justify-center mx-auto ring-4 ring-[#16C7C2]/10 animate-bounce" style={{ animationDuration: '2s' }}>
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-extrabold text-[#F4FFFF]">Inquiry Received &amp; Saved!</h4>
                    <p className="text-xs text-[#8FA5A5] max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your project message has been saved to Firebase Firestore and delivered to Clarity Creative. I will review your requirements and respond within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary !text-xs !py-2 !px-4 mt-2 active:scale-95 transition-transform cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} id="contact-inquiry-form" noValidate>
                    {errorMessage && (
                      <div 
                        className="p-3.5 mb-4 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#FCA5A5] text-xs flex items-start gap-2.5 animate-fadeIn"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-bold text-[#EF4444]">Submission Notice</p>
                          <p className="mt-0.5 text-[#E2E8F0]">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">Your Name</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Johnson"
                        className={`form-input ${fieldErrors.name ? 'border-[#EF4444] focus:border-[#EF4444]' : ''}`}
                        disabled={isSubmitting}
                      />
                      {fieldErrors.name && (
                        <p className="text-[#EF4444] text-[11px] font-medium mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. alex@example.com"
                        className={`form-input ${fieldErrors.email ? 'border-[#EF4444] focus:border-[#EF4444]' : ''}`}
                        disabled={isSubmitting}
                      />
                      {fieldErrors.email && (
                        <p className="text-[#EF4444] text-[11px] font-medium mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-project-type" className="form-label">Project Type</label>
                      <select
                        id="contact-project-type"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="form-select"
                        disabled={isSubmitting}
                      >
                        <option value="Business Website">Business Website</option>
                        <option value="Portfolio Website">Portfolio Website</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="School / Organization Website">School / Organization Website</option>
                        <option value="E-commerce Website">E-commerce Website</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Deployment & Setup">Deployment & Setup</option>
                        <option value="Custom Project">Custom Project</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">Project Details &amp; Requirements</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your timeline, goals, pages needed, or features..."
                        className={`form-textarea resize-none ${fieldErrors.message ? 'border-[#EF4444] focus:border-[#EF4444]' : ''}`}
                        disabled={isSubmitting}
                      />
                      {fieldErrors.message && (
                        <p className="text-[#EF4444] text-[11px] font-medium mt-1">{fieldErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full active:scale-[0.98] transition-all disabled:opacity-75 disabled:cursor-not-allowed group cursor-pointer"
                      id="submit-contact-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#061012]" />
                          <span>SAVING INQUIRY TO FIRESTORE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

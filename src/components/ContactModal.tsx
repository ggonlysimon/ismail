import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, ArrowRight, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('3D Modeling');
  const [message, setMessage] = useState('');

  const emailAddress = 'ismail.design3d@studio.art';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#141416] border border-[#27272A] rounded-3xl p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-bold">Initiate Collaboration</span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Let&apos;s Build Something Striking
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 mt-1">
                Open for bespoke 3D modeling, commercial rendering, and motion design inquiries.
              </p>
            </div>

            {/* Quick Email Direct Copy */}
            <div className="mb-6 flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#7621B0]/20 flex items-center justify-center text-[#BBCCD7]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#D7E2EA]/60 uppercase tracking-wider">Direct Inbox</div>
                  <div className="text-sm font-medium text-white">{emailAddress}</div>
                </div>
              </div>
              <button
                onClick={copyEmail}
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy</span>
                )}
              </button>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold uppercase text-white">Message Transmitted!</h4>
                <p className="text-sm text-[#D7E2EA]/70 max-w-sm mx-auto">
                  Thank you! Ismail will review your project parameters and respond within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider text-white transition-colors mt-4 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@studio.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                    Service Scope
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C20] border border-white/10 text-white text-sm focus:outline-none focus:border-[#B600A8] transition-colors cursor-pointer"
                  >
                    <option value="3D Modeling">01 — 3D Modeling</option>
                    <option value="Rendering">02 — Photorealistic Rendering</option>
                    <option value="Motion Design">03 — Motion Design & Animation</option>
                    <option value="Branding">04 — Visual Identity & Systems</option>
                    <option value="Web Design">05 — High-Impact Web Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5">
                    Project Vision / Brief
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Ismail about the project timeline, target deliverable, or concept..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full text-white font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    }}
                  >
                    <span>Transmit Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowLeft, Copy, Check, Sparkles, Send, User, Phone, Globe, FileText, CheckCircle, FileSignature } from 'lucide-react';
import { sendCareersEmail } from '../utils/email';

interface CareersProps {
  onBackToHome: () => void;
}

export default function Careers({ onBackToHome }: CareersProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [copied, setCopied] = useState(false);
  const emailAddress = 'shubhamshrm02@gmail.com';

  // Talent Form States
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [desiredRole, setDesiredRole] = useState('Software Engineer');
  const [experienceLevel, setExperienceLevel] = useState('Mid-Level (3-5 years)');
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    const payload = {
      id: `app-${Math.floor(1000 + Math.random() * 9000)}`,
      applicantName,
      applicantEmail,
      applicantPhone,
      desiredRole,
      experienceLevel,
      resumeUrl: resumeUrl || 'Not provided',
      coverNote: coverNote || 'Not provided',
      submittedAt: new Date().toISOString()
    };

    try {
      await sendCareersEmail(payload);
      setSuccess(true);
      
      // Clear form
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setResumeUrl('');
      setCoverNote('');
    } catch (err) {
      console.error('Failed to submit career application:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-slate-800 font-sans font-light select-none py-12 px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button */}
      <div className="max-w-4xl mx-auto mb-10">
        <button
          onClick={onBackToHome}
          className="group inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-wider uppercase text-slate-500 hover:text-brand-teal transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Return to Clinical Command</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header Block Section */}
        <div className="text-left space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/8 border border-brand-teal/20 px-3 py-1.5 rounded-full select-none">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider text-brand-teal-dark uppercase">
              Now Scaling Post-Discharge Infrastructure
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#061324] tracking-tight leading-none font-bold">
            Join the team behind <br />
            <span className="text-brand-teal italic font-normal">the Patient Recovery OS.</span>
          </h1>
          <p className="max-w-2xl text-slate-705 text-slate-700 text-base sm:text-lg leading-relaxed font-sans font-normal">
            At HomeMed, we are building India’s first decentralized clinical infrastructure to transform post-discharge telemetry and remote medical governance. If you believe clinical supervision shouldn't terminate at the hospital exit gate, welcome home.
          </p>
        </div>

        {/* Outer Grid: Apply Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Application Form (Left Column) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 rounded-bl-full pointer-events-none"></div>

              <div className="flex items-center space-x-3.5 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/20">
                  <FileSignature className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-serif font-bold text-slate-900 leading-tight">
                    Direct Talent Registration
                  </h2>
                  <p className="text-[10px] text-brand-teal font-mono tracking-widest font-semibold flex items-center gap-1 mt-0.5 uppercase">
                    Secure Candidate Pipeline Gateway
                  </p>
                </div>
              </div>

              {success ? (
                /* Animated success message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.08)] animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">Application Successfully Logged</h3>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Your talent profile has been registered in our central routing matrix. The system administrator at <span className="font-mono text-brand-teal font-medium">{emailAddress}</span> has been updated.
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-xs tracking-wider uppercase transition-all duration-300"
                  >
                    Submit Another Profile
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="e.g., Shaswat Sen"
                        className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="e.g., candidate@domain.com"
                        className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        Phone / Contact *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="e.g., +91 98765 43210"
                        className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      />
                    </div>

                    {/* Desired Role Type */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        Desired Specialty *
                      </label>
                      <select
                        value={desiredRole}
                        onChange={(e) => setDesiredRole(e.target.value)}
                        className="w-full bg-slate-50/70 text-slate-850 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      >
                        <option value="Software Engineer">Full-Stack Software Engineer (React / Node)</option>
                        <option value="RPM Clinical Nurse">Remote Nurse Coordinator (Physiological Telemetry)</option>
                        <option value="Hospital Operations">Hospital Integration & Scaling Specialist</option>
                        <option value="Clinical Lead">Clinical Governance & Nursing Supervisor</option>
                        <option value="Other Technology">Biomedical Hardware Technician / Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Experience Level */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase block">
                        Experience Level *
                      </label>
                      <select
                        value={experienceLevel}
                        onChange={(e) => setExperienceLevel(e.target.value)}
                        className="w-full bg-slate-50/70 text-slate-850 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      >
                        <option value="Associate (1-3 years)">Associate (1-3 years)</option>
                        <option value="Mid-Level (3-5 years)">Mid-Level (3-5 years)</option>
                        <option value="Senior (5+ years)">Senior / Expert (5+ years)</option>
                        <option value="Leadership">Clinical/Technical Leadership</option>
                      </select>
                    </div>

                    {/* Resume / Portfolio URL */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        Resume Link, LinkedIn, or Portfolio
                      </label>
                      <input
                        type="url"
                        value={resumeUrl}
                        onChange={(e) => setResumeUrl(e.target.value)}
                        placeholder="e.g., https://linkedin.com/in/username"
                        className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Achievements and Notes */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase block">
                      Achievements & Context (Cover Note)
                    </label>
                    <textarea
                      rows={4}
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      placeholder="Share a short summary of what you've built or your clinical accomplishments..."
                      className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Submission triggers */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-[#0f7a77] text-white font-bold text-xs transition-all duration-300 uppercase flex items-center justify-center space-x-2 shadow-lg shadow-brand-teal/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          <span>Filing Candidate Record...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Application to Registry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Contact Info (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-slate-900 border border-slate-950 text-white rounded-3xl p-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center space-x-1 border border-brand-teal/30 bg-brand-teal/10 text-brand-teal rounded px-2 py-0.5 text-[8px] font-mono tracking-widest font-bold uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>Ad-Hoc Admissions</span>
                </div>
                
                <h3 className="font-serif text-lg font-bold text-white">Direct Executive Inbox</h3>
                <p className="text-xs text-slate-350 leading-relaxed font-light">
                  If you prefer sending standard clinical credentials, portfolios, or resume PDFs directly to our recruitment supervisor:
                </p>

                <div className="pt-2 space-y-2">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="w-full text-center py-3 rounded-xl bg-brand-teal hover:bg-[#0f7a77] text-[#061324] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Drop us a mail</span>
                  </a>

                  <button
                    onClick={copyEmail}
                    className="w-full py-3 rounded-xl border border-slate-700/60 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center font-mono text-[9px] text-slate-400">
                  {emailAddress}
                </div>
              </div>
            </div>

            {/* Ethos Box */}
            <div className="bg-[#f0ede6] border border-slate-200/80 rounded-3xl p-6 text-left space-y-3.5">
              <h4 className="font-serif text-sm font-bold text-slate-900">The Decentralized Care Manifesto</h4>
              <ul className="space-y-3 text-xs text-slate-600 leading-relaxed font-light">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal text-xs font-bold leading-none mt-0.5">•</span>
                  <span><strong>Scale-First Culture</strong>: We measure our success solely based on readmission mitigation SLAs and daily active physiological supervision minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal text-xs font-bold leading-none mt-0.5">•</span>
                  <span><strong>Remote Empowerment</strong>: Our Remote Nurses hold complete clinical agency to coordinate step-down safety paths back to head surgeons.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Closing Footnote */}
        <div className="mt-20 border-t border-slate-200 pt-8 text-center text-xs text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} HomeMed Operating System (HMOS). All rights reserved.</p>
          <p className="mt-1">ISO 27001 Security Standard Compliant Distributed Care.</p>
        </div>
      </div>
    </div>
  );
}

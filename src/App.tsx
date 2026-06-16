import { useState, FormEvent } from 'react';
import Header from './components/Header';
import Careers from './components/Careers';
import Hero from './components/Hero';
import GapSection from './components/GapSection';
import Architecture from './components/Architecture';
import ClinicalOutcomes from './components/ClinicalOutcomes';
import HomeMedOS from './components/HomeMedOS';
import RemotePatientMonitoring from './components/RemotePatientMonitoring';
import WhoWeServe from './components/WhoWeServe';
import HowReferralWorks from './components/HowReferralWorks';
import FooterCTA from './components/FooterCTA';

import { initialReferrals } from './data';
import { PatientReferral } from './types';
import { X, Send, ShieldAlert, Cpu, Activity, User, Phone, HeartPulse, CheckSquare } from 'lucide-react';
import { sendReferralEmail } from './utils/email';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [referrals, setReferrals] = useState<PatientReferral[]>(initialReferrals);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'careers'>('home');

  // New Referral State for SlideOvers
  const [slideName, setSlideName] = useState('');
  const [slideAge, setSlideAge] = useState('');
  const [slidePhone, setSlidePhone] = useState('');
  const [slideProgram, setSlideProgram] = useState<'LIVYA' | 'OPTIMA' | 'RESTORE'>('LIVYA');
  const [slideDiagnosis, setSlideDiagnosis] = useState('');
  const [slideAcuity, setSlideAcuity] = useState<'Low' | 'Medium' | 'High'>('Medium');
  
  const [slideSuccess, setSlideSuccess] = useState(false);

  const handleAddReferral = (newRef: PatientReferral) => {
    setReferrals(prev => [newRef, ...prev]);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSlideSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!slideName || !slidePhone || !slideDiagnosis || !slideAge) {
      alert('Please fill in all requested medical fields.');
      return;
    }

    const newRef: PatientReferral = {
      id: `ref-${Math.floor(100 + Math.random() * 900)}`,
      patientName: slideName,
      patientAge: parseInt(slideAge),
      contactNumber: slidePhone,
      selectedProgram: slideProgram,
      primaryDiagnosis: slideDiagnosis,
      acuityLevel: slideAcuity,
      status: 'Onboarding Scheduled',
      submittedAt: new Date().toISOString()
    };

    handleAddReferral(newRef);
    
    // Dispatch automated EmailJS notification to shubhamshrm02@gmail.com
    sendReferralEmail(newRef);

    setSlideSuccess(true);

    // Clear slide state
    setSlideName('');
    setSlideAge('');
    setSlidePhone('');
    setSlideDiagnosis('');

    setTimeout(() => {
      setSlideSuccess(false);
      setIsReferralOpen(false);
      // scroll to active pipeline tracker to see it
      handleScrollTo('contact');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans antialiased text-slate-800 selection:bg-brand-teal/20 selection:text-brand-teal font-light">
      
      {/* Brand Header */}
      <Header
        onOpenReferralModal={() => setIsReferralOpen(true)}
        onScrollTo={handleScrollTo}
        onChangePage={setCurrentPage}
        currentPage={currentPage}
      />

      {currentPage === 'careers' ? (
        <Careers onBackToHome={() => setCurrentPage('home')} />
      ) : (
        <>
          {/* Hero Visual Banner (Dark) */}
          <Hero
            onOpenReferralModal={() => setIsReferralOpen(true)}
            onScrollTo={handleScrollTo}
          />

          {/* Gap section (Light) */}
          <GapSection />

          {/* Architecture (Programs & Orbit) */}
          <Architecture 
            onOpenReferralModal={(program) => {
              if (program) {
                setSlideProgram(program);
              }
              setIsReferralOpen(true);
            }}
            onScrollTo={handleScrollTo}
          />

          {/* Outcomes Metrics (Light) */}
          <ClinicalOutcomes />

          {/* Core OS Platform Grid (Light Beige) */}
          <HomeMedOS />

          {/* Telemetry RPM Simulation (Dark) */}
          <RemotePatientMonitoring />

          {/* Serving Parties Section (Contrast Dual-View) */}
          <WhoWeServe 
            onOpenReferralModal={() => setIsReferralOpen(true)}
            onScrollTo={handleScrollTo}
          />

          {/* Process Milestones Sequence */}
          <HowReferralWorks />

          {/* Footer Support Hub and Contact form & registry pipeline tracker */}
          <FooterCTA
            referrals={referrals}
            onAddReferral={handleAddReferral}
            openReferralModal={isReferralOpen}
            onCloseReferralModal={() => setIsReferralOpen(false)}
          />
        </>
      )}

      {/* Redesigned Centered Patient Referral Modal (Floating Elegant Over-Screen Dialog - White Premium Theme) */}
      <AnimatePresence>
        {isReferralOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10" role="dialog" aria-modal="true" id="referral-modal">
            
            {/* Ambient Deep Backdrop Blur with Fade-in Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-md"
              onClick={() => setIsReferralOpen(false)}
            />

            {/* Premium Interactive Modal Window with Spring Entrance - Pristine White Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 24, stiffness: 280 }}
              className="relative w-full max-w-2xl bg-white text-slate-800 shadow-[0_30px_70px_rgba(0,0,0,0.25)] border border-slate-100 rounded-3xl overflow-hidden z-10 flex flex-col max-h-[92vh] sm:max-h-[85vh]"
            >
              
              {/* Subtle brand glow overlay */}
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {/* Modal Header */}
              <div className="px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between relative bg-slate-50/70 backdrop-blur-sm">
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-teal flex items-center justify-center font-mono font-bold text-white text-sm shadow-[0_0_12px_rgba(21,157,154,0.2)]">
                    HM
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-tight">
                      New Patient Care Request
                    </h2>
                    <p className="text-[10px] text-brand-teal font-mono tracking-widest font-semibold flex items-center gap-1.5 mt-0.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span>
                      SECURE CARE REQUEST GATEWAY
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-full text-slate-400 hover:text-slate-700 p-1.5 hover:bg-slate-200/50 transition-all duration-200 cursor-pointer"
                  onClick={() => setIsReferralOpen(false)}
                >
                  <span className="sr-only">Close panel</span>
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Modal Body (Scrollable form space) */}
              <div className="relative flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 bg-white">
                
                {slideSuccess ? (
                  /* Ultra-clean animated workflow pipeline simulation on success */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 sm:py-16 space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.08)] animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-slate-900 tracking-tight">Care Request Received</h3>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                        Your request has been filed in our caregiver queue. We will check details and contact you directly in under 24 hours.
                      </p>
                    </div>

                    {/* Rich System Logs Feedback */}
                    <div className="w-full max-w-md bg-slate-900 rounded-2xl border border-slate-950 p-4 space-y-3 font-mono text-[10px] text-left shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1.5">
                        <span>CARE_ONBOARDING_STATUS</span>
                        <span className="animate-pulse text-brand-teal">● CONNECTING</span>
                      </div>
                      <div className="space-y-2 text-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>ESTABLISHING ENROLLMENT FILE</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span>
                          <span>COORDINATING DOCTORS & NURSE SPECIALISTS</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-brand-teal animate-spin">⟳</span>
                          <span>DISPATCHING HOME VITAL MONITORING SENSORS</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSlideSubmit} className="space-y-6">
                    
                    {/* Modern Guidance Banner */}
                    <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex items-start gap-3.5 select-none relative overflow-hidden">
                      <div className="p-2.5 bg-brand-teal/10 rounded-xl text-brand-teal border border-brand-teal/20 mt-0.5">
                        <Cpu className="w-4 h-4 text-brand-teal animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
                          Easy Care Setup Pathway
                        </div>
                        <p className="text-xs text-slate-550 font-light leading-relaxed">
                          Please provide simple contact and recovery details below. Our clinicians and nurse coordinators will verify entries and set up your personalized care plan within 24 hours.
                        </p>
                      </div>
                    </div>

                    {/* Grid Fields Section */}
                    <div className="space-y-5">
                      
                      {/* Name & Age Row (Spacious & Clean Layout) */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="sm:col-span-2 space-y-1.5">
                          <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-slate-400" />
                            Patient Full Name *
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              value={slideName}
                              onChange={(e) => setSlideName(e.target.value)}
                              placeholder="e.g., Anand Murthy"
                              className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl pl-4 pr-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5 text-slate-400" />
                            Age (Years) *
                          </label>
                          <input
                            type="number"
                            required
                            min="1"
                            max="120"
                            value={slideAge}
                            onChange={(e) => setSlideAge(e.target.value)}
                            placeholder="e.g., 62"
                            className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Contact Number & Select Program Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-slate-400" />
                            Primary Contact Phone *
                          </label>
                          <input
                            type="text"
                            required
                            value={slidePhone}
                            onChange={(e) => setSlidePhone(e.target.value)}
                            placeholder="e.g., +91 91234 56789"
                            className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                            <HeartPulse className="w-3.5 h-3.5 text-slate-400" />
                            Desired Care Program *
                          </label>
                          <select
                            value={slideProgram}
                            onChange={(e) => setSlideProgram(e.target.value as any)}
                            className="w-full bg-slate-50/70 text-slate-850 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                          >
                            <option value="LIVYA">LIVYA (Post-Op General Care)</option>
                            <option value="OPTIMA">OPTIMA (ICU Step-down)</option>
                            <option value="RESTORE">RESTORE (Physio & Rehab)</option>
                          </select>
                        </div>
                      </div>

                      {/* Primary Diagnosis (Full Width) */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase flex items-center gap-1.5">
                          <CheckSquare className="w-3.5 h-3.5 text-slate-400" />
                          Reason for Care & Symptoms (e.g. cardiac recovery, post-op safety) *
                        </label>
                        <input
                          type="text"
                          required
                          value={slideDiagnosis}
                          onChange={(e) => setSlideDiagnosis(e.target.value)}
                          placeholder="e.g., knee surgery recovery, cardiac monitoring, standard elderly care"
                          className="w-full bg-slate-50/70 text-slate-800 placeholder-slate-400 text-xs rounded-xl px-4 py-3 border border-slate-200 focus:bg-white focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/20 focus:outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Tactile Severity Acuity Level Card Selectors */}
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest font-bold text-slate-500 uppercase block">
                          Urgency Level of Care Needed
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {(['Low', 'Medium', 'High'] as const).map((lvl) => {
                            const isSelected = slideAcuity === lvl;
                            return (
                              <button
                                key={lvl}
                                type="button"
                                onClick={() => setSlideAcuity(lvl)}
                                className={`py-3 px-2 text-xs font-bold rounded-xl border transition-all duration-300 flex flex-col items-center justify-center space-y-1.5 cursor-pointer relative overflow-hidden ${
                                  isSelected
                                    ? lvl === 'High'
                                      ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-[0_4px_12px_rgba(239,68,68,0.08)]'
                                      : lvl === 'Medium'
                                      ? 'bg-brand-gold/10 border-brand-gold text-[#9e6912] shadow-[0_4px_12px_rgba(209,142,36,0.08)]'
                                      : 'bg-brand-teal/10 border-brand-teal text-brand-teal-dark shadow-[0_4px_12px_rgba(21,157,154,0.08)]'
                                    : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-800 hover:border-slate-300 hover:bg-slate-100/30'
                                }`}
                              >
                                {isSelected && (
                                  <span className={`absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full ${
                                    lvl === 'High' ? 'bg-rose-500' : lvl === 'Medium' ? 'bg-brand-gold' : 'bg-brand-teal'
                                  }`} />
                                )}
                                <span className="font-sans text-xs">
                                  {lvl === 'High' ? 'Urgent / Alert' : lvl === 'Medium' ? 'Moderate Care' : 'Standard Routine'}
                                </span>
                                <span className="text-[8px] font-mono opacity-70 uppercase font-medium">
                                  {lvl === 'High' ? 'URGENT DISPATCH' : lvl === 'Medium' ? 'MODERATE PLAN' : 'STANDARD MONITORING'}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Submission Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-4 border-t border-slate-150">
                      <button
                        type="button"
                        onClick={() => setIsReferralOpen(false)}
                        className="sm:col-span-4 px-5 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-semibold text-xs tracking-wider uppercase transition-all duration-300 text-center cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="sm:col-span-8 px-5 py-3.5 rounded-xl bg-brand-teal hover:bg-[#0f7a77] active:scale-[0.99] text-[#061324] font-bold text-xs transition-all duration-300 uppercase flex items-center justify-center space-x-2 shadow-lg shadow-brand-teal/10 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Care Request & Enroll</span>
                      </button>
                    </div>

                  </form>
                )}
              </div>

              {/* Modal Footer Badge info */}
              <div className="px-6 sm:px-8 py-3.5 bg-slate-50 flex flex-col sm:flex-row items-center sm:justify-between text-[10px] text-slate-500 font-mono border-t border-slate-100 select-none gap-2 sm:gap-0">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>SLA ACTION PLAN: 24 HOUR ONBOARDING OUTPOST</span>
                </div>
                <span>ISO 27001 CLOUD SECURE • COMPLIANT HTS</span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple Helper Component
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

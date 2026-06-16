import { useState, FormEvent, useMemo } from 'react';
import { Mail, Phone, Building2, Send, CheckCircle, Table, Activity, PlusCircle, Search, Filter, Clipboard, Truck, Home, Radio } from 'lucide-react';
import { PatientReferral } from '../types';
import { sendReferralEmail } from '../utils/email';

interface FooterCTAProps {
  referrals: PatientReferral[];
  onAddReferral: (ref: PatientReferral) => void;
  openReferralModal: boolean;
  onCloseReferralModal: () => void;
}

export default function FooterCTA({ referrals, onAddReferral, openReferralModal, onCloseReferralModal }: FooterCTAProps) {
  // Form input states
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<'LIVYA' | 'OPTIMA' | 'RESTORE'>('LIVYA');
  const [primaryDiagnosis, setPrimaryDiagnosis] = useState('');
  const [acuityLevel, setAcuityLevel] = useState<'Low' | 'Medium' | 'High'>('Medium');
  
  const [formSuccess, setFormSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'dashboard'>('contact');

  // Search & Filter state for referral list database
  const [searchQuery, setSearchQuery] = useState('');
  const [programFilter, setProgramFilter] = useState<'ALL' | 'LIVYA' | 'OPTIMA' | 'RESTORE'>('ALL');

  // Interactive Selected Patient Details state for visual timeline lookup
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!patientName || !contactNumber || !primaryDiagnosis || !patientAge) {
      alert('Please fill out all required fields.');
      return;
    }

    const newRef: PatientReferral = {
      id: `ref-${Math.floor(100 + Math.random() * 900)}`,
      patientName,
      patientAge: parseInt(patientAge),
      contactNumber,
      selectedProgram,
      primaryDiagnosis,
      acuityLevel,
      status: 'Onboarding Scheduled',
      submittedAt: new Date().toISOString()
    };

    onAddReferral(newRef);
    
    // Send automated EmailJS notification to shubhamshrm02@gmail.com
    sendReferralEmail(newRef);

    setFormSuccess(true);
    
    // Clear form inputs
    setPatientName('');
    setPatientAge('');
    setContactNumber('');
    setPrimaryDiagnosis('');
    
    setTimeout(() => {
      setFormSuccess(false);
      setActiveTab('dashboard'); // auto-switch to dashboard view to see the new entry!
      setSelectedPatientId(newRef.id); // highlight the newborn patient card
    }, 1800);
  };

  // Filter & Search computation
  const filteredReferrals = useMemo(() => {
    return referrals.filter(ref => {
      const matchSearch = 
        ref.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ref.primaryDiagnosis.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ref.id.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchProgram = programFilter === 'ALL' || ref.selectedProgram === programFilter;
      
      return matchSearch && matchProgram;
    });
  }, [referrals, searchQuery, programFilter]);

  return (
    <footer id="contact" className="relative bg-[#061324] text-white py-16 sm:py-24 grid-bg-overlay border-t border-slate-800">
      
      {/* Light glow highlights */}
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper Heading Segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start pb-12 border-b border-slate-800/80">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase bg-brand-teal/10 px-3 py-1 rounded border border-brand-teal/20 inline-block">
              PARTNER WITH HOMEMED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 leading-[1.12] tracking-tight">
              Better surgery deserves <br />
              <span className="text-brand-teal">better recovery.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg font-sans font-light">
              Equip your clinical department with India’s most responsive post-discharge recovery pipeline. Reduce avoidable readmissions and secure continuous visibility back to surgeons.
            </p>
          </div>

          {/* Toggle Switches for directory and clinical pipeline */}
          <div className="lg:col-span-6 flex space-x-3 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800 self-center w-full max-w-md ml-auto">
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex-1 py-3 text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-300 uppercase ${
                activeTab === 'contact' 
                ? 'bg-brand-teal text-[#061324] shadow-md shadow-brand-teal/15 font-black' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact Directory
            </button>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 py-3 text-xs font-mono font-bold tracking-wider rounded-lg transition-all duration-300 uppercase flex items-center justify-center space-x-1.5 ${
                activeTab === 'dashboard' 
                ? 'bg-brand-teal text-[#061324] shadow-md shadow-brand-teal/15 font-black' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              <Table className="w-4.5 h-4.5 shrink-0" />
              <span>PATIENT REGISTRY ({referrals.length})</span>
            </button>
          </div>
        </div>

        {/* Action center split contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="bg-slate-900/65 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <h3 className="font-serif text-xl font-bold tracking-tight text-white mb-2">
                Direct Care Sync Lines
              </h3>

              <div className="space-y-6">
                
                {/* Clinical Referrals */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-brand-teal/5 border border-brand-teal/15 group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 rounded-xl text-brand-teal mt-0.5 shrink-0 transition-colors">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block font-bold tracking-wider">CLINICAL REFERRALS & CARE SYNC</span>
                    <a href="mailto:care@homemed.in" className="text-sm font-semibold text-slate-100 hover:text-brand-teal transition-colors">
                      care@homemed.in
                    </a>
                    <p className="text-[11px] text-slate-400 mt-1">Monitored 24/7 by intake coordination officers</p>
                  </div>
                </div>

                {/* Phone / Whatsapp */}
                <div className="flex items-start space-x-4 group animate-pulse-subtle">
                  <div className="p-3 bg-brand-teal/5 border border-brand-teal/15 group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 rounded-xl text-brand-teal mt-0.5 shrink-0 transition-colors">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block font-bold tracking-wider">PHONE / SECURE WHATSAPP</span>
                    <a href="tel:+919820051185" className="text-sm font-semibold text-slate-100 hover:text-brand-teal transition-colors font-mono">
                      +91 98200 51185
                    </a>
                    <p className="text-[11px] text-slate-400 mt-1">Instant messaging intake desks</p>
                  </div>
                </div>

                {/* Partnerships */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-brand-teal/5 border border-brand-teal/15 group-hover:border-brand-teal/40 group-hover:bg-brand-teal/10 rounded-xl text-brand-teal mt-0.5 shrink-0 transition-colors">
                    <Building2 className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block font-bold tracking-wider">HOSPITAL PARTNERSHIPS</span>
                    <a href="mailto:partnerships@homemed.in" className="text-sm font-semibold text-slate-100 hover:text-brand-teal transition-colors">
                      partnerships@homemed.in
                    </a>
                    <p className="text-[11px] text-slate-400 mt-1">Integration agreements & department onboarding</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Sub banner with verified standards */}
            <div className="p-5 bg-slate-900/40 border border-slate-805/60 border-slate-800 rounded-2xl text-[12px] text-slate-450 text-slate-400 font-sans leading-relaxed font-light">
              <span className="text-brand-gold font-bold uppercase font-mono block mb-1.5 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-1.5 animate-pulse"></span>
                CLINICALLY VERIFIED STANDARDS
              </span>
              Licensed nursing staff, accredited physiotherapists, and medical-grade connected sensors are deployed systematically. HomeMed secures clinical accountability at home.
            </div>

          </div>

          {/* Right Side: Interactive Doctor Refer form OR Active Referral Database list */}
          <div className="lg:col-span-7 w-full">
                       {activeTab === 'contact' ? (
              <div id="refer-form-target" className="bg-[#09182a] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                
                {formSuccess ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10 scale-110 transition-transform">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-white">Request Received!</h4>
                    <p className="text-slate-300 text-xs font-mono max-w-sm leading-relaxed">
                      Your home-care inquiry has been logged in our secure registration desk. Our coordinators will contact you directly to confirm setup.
                    </p>
                    <p className="text-brand-teal text-[10px] font-mono tracking-widest animate-pulse">Switching views...</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 select-none">
                      <div className="flex items-center space-x-2 text-brand-teal text-xs font-mono font-bold tracking-widest uppercase mb-1">
                        <PlusCircle className="w-4.5 h-4.5" />
                        <span>SECURE HOME-CARE REGISTRATION</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold tracking-tight text-white leading-snug">
                        Request Home Care Support
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-light mt-1">
                        Register for premium post-discharge nursing or rehabilitation. Completed entries instantly appear in the live care queue.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                          Patient's Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="Anand Murthy"
                          className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg px-3.5 py-3 border border-slate-800 focus:border-brand-teal focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Age */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                          Age (Years)
                        </label>
                        <input
                          type="number"
                          required
                          value={patientAge}
                          onChange={(e) => setPatientAge(e.target.value)}
                          placeholder="e.g., 62"
                          className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg px-3.5 py-3 border border-slate-800 focus:border-brand-teal focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Contact Phone */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                          Primary Contact Phone
                        </label>
                        <input
                          type="text"
                          required
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                          placeholder="+91 98200 XXXXX"
                          className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg px-3.5 py-3 border border-slate-800 focus:border-brand-teal focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Selected Program */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                          Desired Care Program
                        </label>
                        <select
                          value={selectedProgram}
                          onChange={(e) => setSelectedProgram(e.target.value as any)}
                          className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg px-3.5 py-3 border border-slate-800 focus:border-brand-teal focus:outline-none transition-colors"
                        >
                          <option value="LIVYA">LIVYA (Post-Op Care)</option>
                          <option value="OPTIMA">OPTIMA (ICU Step-down)</option>
                          <option value="RESTORE">RESTORE (Physio/Rehab)</option>
                        </select>
                      </div>
                    </div>

                    {/* Primary Diagnosis */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
                        Reason for Care & Symptoms (e.g. cardiac recovery, post-op safety)
                      </label>
                      <input
                        type="text"
                        required
                        value={primaryDiagnosis}
                        onChange={(e) => setPrimaryDiagnosis(e.target.value)}
                        placeholder="e.g., Cardiac care, total knee replacement recovery, age safety monitoring"
                        className="w-full bg-slate-950 text-slate-100 text-xs rounded-lg px-3.5 py-3 border border-slate-800 focus:border-brand-teal focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Acuity Assessment */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase block">
                        Urgency Level of Care Support
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(['Low', 'Medium', 'High'] as const).map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={() => setAcuityLevel(lvl)}
                            className={`py-2 text-[10px] sm:text-xs font-mono font-bold rounded-lg border transition-all duration-300 ${
                              acuityLevel === lvl
                                ? lvl === 'High'
                                  ? 'bg-rose-500 text-white border-transparent shadow shadow-rose-500/10'
                                  : lvl === 'Medium'
                                  ? 'bg-brand-gold text-[#061324] border-transparent shadow shadow-brand-gold/10'
                                  : 'bg-brand-teal text-[#061324] border-transparent shadow shadow-brand-teal/10'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {lvl === 'High' ? 'Urgent / Alert' : lvl === 'Medium' ? 'Moderate Care' : 'Standard Routine'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-brand-teal hover:bg-brand-teal-dark active:scale-[0.98] text-[#061324] font-bold text-xs transition-all duration-300 uppercase flex items-center justify-center space-x-2 mt-4 shadow-xl shadow-brand-teal/15 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Care Request & Enroll</span>
                    </button>
                  </form>
                )}

              </div>
            ) : (
              <div className="bg-[#09182a] border border-slate-800 rounded-3xl p-5 sm:p-7 shadow-2xl relative min-h-[480px] flex flex-col justify-between">
                
                <div className="space-y-4">
                  
                  {/* Registry database header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800/65">
                    <div className="flex items-center space-x-2 text-brand-teal text-xs font-mono font-bold tracking-widest uppercase">
                      <Activity className="w-4.5 h-4.5 text-brand-teal" />
                      <span>HOMEMED REGISTRY DATA FEED</span>
                    </div>
                  </div>

                  {/* Interactive live filters search and pills */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-slate-950 p-3 rounded-xl border border-slate-900">
                    {/* Search query box */}
                    <div className="md:col-span-6 relative flex items-center">
                      <input
                        type="text"
                        placeholder="Search patient or diagnosis..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-850/80 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal"
                      />
                      <Search className="w-3.5 h-3.5 absolute left-2.5 text-slate-500" />
                    </div>

                    {/* Program Filter Pills */}
                    <div className="md:col-span-6 flex items-center justify-between sm:justify-start gap-1.5 overflow-x-auto">
                      {(['ALL', 'LIVYA', 'OPTIMA', 'RESTORE'] as const).map(prog => (
                        <button
                          key={prog}
                          onClick={() => setProgramFilter(prog)}
                          className={`px-2 py-1.5 text-[8.5px] font-mono font-bold uppercase rounded border transition-colors ${
                            programFilter === prog 
                            ? 'bg-brand-teal/15 text-brand-teal border-brand-teal/30' 
                            : 'bg-slate-900 border-slate-850 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                          }`}
                        >
                          {prog}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Referral Lists Database cards */}
                  <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                    {filteredReferrals.length === 0 ? (
                      <div className="text-center py-12 text-slate-500 font-mono text-xs">
                        No active clinical references match the filter criteria.
                      </div>
                    ) : (
                      filteredReferrals.map((ref) => {
                        const isExpanded = selectedPatientId === ref.id;
                        
                        return (
                          <div
                            key={ref.id}
                            onClick={() => setSelectedPatientId(isExpanded ? '' : ref.id)}
                            className={`bg-slate-950/85 hover:bg-slate-950 border p-4.5 rounded-xl cursor-pointer transition-all duration-200 flex flex-col gap-3 group ${
                              isExpanded 
                              ? 'border-brand-teal/40 bg-slate-950 shadow-md shadow-brand-teal/5' 
                              : 'border-slate-850/80 hover:border-slate-800'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                  <span className="font-serif font-extrabold text-sm text-slate-100 group-hover:text-brand-teal transition-colors">
                                    {ref.patientName}
                                  </span>
                                  <span className="text-[9.5px] font-mono text-slate-500 font-medium">({ref.patientAge}y)</span>
                                  <span className="text-[8.5px] font-mono text-slate-650 bg-slate-900 px-1 py-0.5 rounded text-slate-400 select-none">ID: {ref.id}</span>
                                </div>
                                
                                <p className="text-[12px] text-slate-300 font-sans font-light leading-snug">{ref.primaryDiagnosis}</p>
                                
                                <div className="flex flex-wrap items-center gap-2 mt-2 select-none">
                                  <span className="text-[9px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-850">
                                    {ref.selectedProgram}
                                  </span>
                                  <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-black uppercase tracking-wider ${
                                    ref.acuityLevel === 'High'
                                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                      : ref.acuityLevel === 'Medium'
                                      ? 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                                      : 'bg-brand-teal/10 text-brand-teal border border-brand-teal/20'
                                  }`}>
                                    {ref.acuityLevel} ACUITY
                                  </span>
                                </div>
                              </div>

                              {/* Status tracker Pill */}
                              <div className="text-right shrink-0">
                                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded inline-flex items-center gap-1 font-bold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  {ref.status}
                                </span>
                                <p className="text-[9px] text-slate-500 font-mono mt-1 font-semibold">SLA SLA DISPATCHED</p>
                              </div>
                            </div>

                            {/* EXCITING NEW UX ELEMENT: Onboarding transition timeline step (visible when card is focused or click-expanded) */}
                            {isExpanded && (
                              <div className="mt-3 pt-3.5 border-t border-slate-900 space-y-3 bg-[#061324]/60 p-3 rounded-lg select-none">
                                <span className="text-[9.5px] font-mono text-brand-gold font-bold uppercase tracking-wider block">
                                  Clinical Intake Transition Milestone Track
                                </span>
                                
                                <div className="grid grid-cols-4 gap-1 relative text-center">
                                  {/* Progress bar line connecting them */}
                                  <div className="absolute top-[35%] left-[12%] right-[12%] h-[1.5px] bg-slate-800 z-0">
                                    <div className="w-[66%] h-full bg-emerald-500"></div>
                                  </div>

                                  {[
                                    { stepNum: 1, label: 'Form File', active: true, done: true, icon: <Clipboard className="w-3 h-3" /> },
                                    { stepNum: 2, label: 'Gear Dispatch', active: true, done: true, icon: <Truck className="w-3 h-3" /> },
                                    { stepNum: 3, label: 'Home Onboard', active: true, done: false, icon: <Home className="w-3 h-3" /> },
                                    { stepNum: 4, label: 'Telemetry Live', active: false, done: false, icon: <Radio className="w-3 h-3" /> }
                                  ].map((itm, iidx) => (
                                    <div key={iidx} className="flex flex-col items-center relative z-10 space-y-1">
                                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                                        itm.done 
                                        ? 'bg-emerald-500 text-[#061324] border-transparent shadow shadow-emerald-500/20' 
                                        : itm.active 
                                        ? 'bg-[#061324] text-brand-teal border-brand-teal animate-pulse-subtle' 
                                        : 'bg-slate-900 text-slate-550 border-slate-800 text-slate-500'
                                      }`}>
                                        {itm.icon}
                                      </div>
                                      <span className={`text-[8.5px] font-semibold font-mono ${itm.active ? 'text-slate-100' : 'text-slate-550 text-slate-500'}`}>{itm.label}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="text-[9.5px] font-sans text-slate-400 font-light text-left text-xs text-slate-300 leading-normal border-t border-slate-900 pt-2.5">
                                  <strong>Onboarding Supervisor notes:</strong> Verification of connected oximeter complete. Initial physical therapist set for in-person evaluation round tomorrow morning.
                                </div>
                              </div>
                            )}

                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-550 text-slate-500">
                  <span>SYSTEM FEED DELTA: nominal</span>
                  <span>RECORD_SECURE_SSL</span>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Corporate Legal Footer */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-slate-550 text-slate-500 gap-4">
          <div className="flex items-center space-x-3.5">
            <span className="font-mono font-bold text-slate-400">HomeMed Clinical Systems</span>
            <span>&bull;</span>
            <span>&copy; {new Date().getFullYear()} HomeMed Co. All rights reserved.</span>
          </div>

          <div className="flex space-x-6 text-slate-400 select-none">
            <button onClick={() => alert('HomeMed Care Standard Agreement version 3.2')} className="hover:text-brand-teal transition-all">Care Agreement</button>
            <button onClick={() => alert('HomeMed HIPAA and Data Isolation policy details')} className="hover:text-brand-teal transition-all">HIPAA Privacy</button>
            <button onClick={() => alert('HomeMed Hospital Governance Framework details')} className="hover:text-brand-teal transition-all">Hospital Terms</button>
          </div>
        </div>

      </div>
    </footer>
  );
}

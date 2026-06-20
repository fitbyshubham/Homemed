import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Activity, 
  Heart, 
  ShieldAlert, 
  Cpu, 
  CheckSquare, 
  Zap, 
  TrendingDown, 
  Users, 
  Check, 
  ShieldCheck, 
  BellRing, 
  ArrowUpRight 
} from 'lucide-react';

interface HeroProps {
  onOpenReferralModal: () => void;
  onScrollTo: (id: string) => void;
}

export default function Hero({ onOpenReferralModal, onScrollTo }: HeroProps) {
  // Command Deck Interactive Tab State
  const [activePanel, setActivePanel] = useState<'monitor' | 'programs' | 'outcomes'>('monitor');
  
  // Tab 1: Live Monitor Drift State
  const [hasDrift, setHasDrift] = useState<boolean>(false);
  const [currentSpo2, setCurrentSpo2] = useState<number>(98);
  const [currentHr, setCurrentHr] = useState<number>(72);
  const [logs, setLogs] = useState<string[]>([
    '08:15 AM - Standard sensor stream initiated safely.',
    '09:40 AM - Daily physiotherapy mobility target logged: 100% compliance.'
  ]);
  
  // Heart rate micro heartbeat indicator trigger
  const [pulseBeat, setPulseBeat] = useState<boolean>(false);

  // Soundless visual pulse tick interval to correspond to HR
  useEffect(() => {
    const ms = Math.max(500, Math.min(1000, (60 / currentHr) * 1000));
    const interval = setInterval(() => {
      setPulseBeat(prev => !prev);
      setTimeout(() => setPulseBeat(prev => !prev), 150);
    }, ms);
    return () => clearInterval(interval);
  }, [currentHr]);

  // Handle clinical vital signs drift sequence toggle
  const handleToggleDrift = () => {
    if (!hasDrift) {
      setHasDrift(true);
      setCurrentSpo2(91); // dangerous drop
      setCurrentHr(98); // cardiac compensation raise
      setLogs(prev => [
        ...prev,
        '10:14 AM - WARNING: Ingested SpO2 drops below protocol safety floor (91%).',
        '10:15 AM - SCENARIO ACTION: Escalate signal broadcast to on-call surgeon & local supervisor.',
        '10:16 AM - RESPONSE SLA: In-home nurse dispatched to check respiratory posture.'
      ]);
    } else {
      setHasDrift(false);
      setCurrentSpo2(98); // healthy
      setCurrentHr(72); // normal
      setLogs([
        '08:15 AM - Standard sensor stream initiated safely.',
        '09:40 AM - Daily physiotherapy mobility target logged: 100% compliance.',
        '10:18 AM - CLINICAL RESOLUTION: Normal limits restored. Physical ER readmission avoided.'
      ]);
    }
  };

  // Tab 2: Programs details state
  const [activeProgramSpec, setActiveProgramSpec] = useState<'LIVYA' | 'OPTIMA' | 'RESTORE'>('OPTIMA');

  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen text-white flex items-center overflow-hidden py-20 lg:py-24 border-b border-slate-950 select-none"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 15%, #0d1e35 0%, #030a16 55%, #01040a 100%)'
      }}
    >
      
      {/* Precision Masked Grid Layer: Blends out beautifully to the dark borders */}
      <div 
        className="absolute inset-0 grid-bg-overlay opacity-[0.25] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 25%, transparent 75%)'
        }}
      ></div>

      {/* Sophisticated medical concentric care rings block */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="w-[750px] h-[750px] rounded-full border border-brand-teal/5 opacity-[0.4] absolute"></div>
        <div className="w-[1050px] h-[1050px] rounded-full border border-brand-teal/3 opacity-[0.3] absolute"></div>
        <div className="w-[1450px] h-[1450px] rounded-full border border-white/2 absolute"></div>
      </div>

      {/* Deep Breathing smoky ambient back-lighting sources */}
      <div className="absolute top-[10%] left-[-15%] w-[650px] h-[650px] rounded-full bg-brand-teal/6 blur-[160px] animate-pulse pointer-events-none" style={{ animationDuration: '9s' }}></div>
      <div className="absolute bottom-[5%] right-[-15%] w-[750px] h-[750px] rounded-full bg-brand-gold/4 blur-[190px] animate-pulse pointer-events-none" style={{ animationDuration: '13s' }}></div>
      <div className="absolute top-[35%] right-[25%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none"></div>
      
      {/* Decorative vertical divider pin strip styling for clinical architecture aesthetic */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-4">
        <span className="w-[1px] h-20 bg-gradient-to-b from-transparent to-brand-teal/30"></span>
        <span className="text-[10px] font-mono text-brand-teal/80 tracking-[0.25em] uppercase rotate-90 my-10 bg-[#030a18]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-850/50">
          HOMEMED PROTOCOLS
        </span>
        <span className="w-[1px] h-20 bg-gradient-to-t from-transparent to-brand-teal/30"></span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HIGH-CONTRAST TYPOGRAPHIC MESSAGING */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-7 text-left">
            
            {/* Elegant Radial Pill Header */}
            <div className="inline-flex items-center space-x-2.5 bg-brand-teal/10 border border-brand-teal/20 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(21,157,154,0.08)]">
              <span className="flex h-2.5 w-2.5 relative items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-teal"></span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#edf8fa] uppercase">
India’s trusted post discharge &amp; recovery partner              </span>
            </div>

            {/* Headline with striking Serif Emphasis */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] text-slate-100 font-extrabold leading-[1.1] tracking-tight max-w-2xl">
              Quality of monitored  <span className="text-brand-teal font-serif font-bold relative tracking-wide">post discharge</span> care leads to <span className="text-brand-teal">actual recovery</span>.
            </h1>

            {/* Optimized High-Contrast, Generously-Spaced Body Copie */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-[19px] max-w-xl leading-relaxed font-sans font-normal">
              Comprehensive programs guided and delivered by professionals &amp; backed by technology
infrastructure. Your loved ones are in safe hands with HomeMed
            </p>

            {/* Custom CTA Action Segment */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenReferralModal}
                className="px-7 py-4 rounded-xl bg-brand-teal hover:bg-brand-teal-dark active:scale-[0.98] text-[#061324] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-xl shadow-brand-teal/20 cursor-pointer"
              >
                <span>Request Home Care</span>
                <ArrowRight className="w-4.5 h-4.5 stroke-[2.5]" />
              </button>
              
              <button
                onClick={() => onScrollTo('architecture')}
                className="px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-400 hover:bg-slate-800/40 text-slate-205 text-slate-205 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>See Our Programs</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Participating Hospital Jurisdictions Hub */}
            <div className="pt-8 border-t border-slate-800/40 w-full select-none">
              <span className="text-[10px] font-mono tracking-widest text-[#a17c24] font-black uppercase block mb-3">
                ● Where We Operate:
              </span>
              
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-6 gap-y-2.5 text-xs text-slate-400 font-light">
                {['Mumbai', 'Bengaluru', 'Hyderabad', 'Delhi NCR'].map((city, idx) => (
                  <div key={idx} className="flex items-center space-x-2 font-mono font-bold text-[11px] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-80"></span>
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              {/* Quick Live Demo Prompt Button */}
              <button
                onClick={() => {
                  const element = document.getElementById('clinical-deck');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="mt-6 w-full p-4 sm:p-5 bg-[#081b31]/80 hover:bg-[#0a233f] active:scale-[0.99] border-2 border-brand-teal/30 hover:border-brand-teal/80 rounded-2xl text-left transition-all duration-300 group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(21,157,154,0.15)]"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center shrink-0 border border-brand-teal/30 group-hover:bg-brand-teal/25 transition-all">
                    <Activity className="w-5.5 h-5.5 text-brand-teal animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-black tracking-widest text-brand-gold uppercase">
                        Quick Live Demo
                      </span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>
                    <p className="text-[12.5px] sm:text-xs text-slate-250 text-slate-300 font-sans mt-1 leading-snug group-hover:text-white transition-colors">
                      Check out our Live Monitor, Program Specs, and Real-Time Results.
                    </p>
                  </div>
                </div>
                
                {/* Embedded Pill CTA - Makes clickability extremely explicit */}
                <div className="self-end sm:self-center shrink-0 px-4 py-2 bg-brand-teal group-hover:bg-[#1cc2bf] text-[#061324] font-mono font-extrabold text-[10px] tracking-wider uppercase rounded-xl flex items-center space-x-1.5 transition-all duration-300 shadow-[0_4px_12px_rgba(21,157,154,0.3)] group-hover:translate-x-0.5">
                  <span>Interactive Deck</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: THE INTERACTIVE CLINICAL COMMAND DECK */}
          <div id="clinical-deck" className="lg:col-span-6 w-full z-10">
            <div className="bg-[#05101d]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-5 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.7)] relative overflow-hidden transition-all duration-300">
              
              {/* Glass subtle flare overlay */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-brand-teal/10 via-transparent to-transparent pointer-events-none"></div>

              {/* Command Deck Live Header */}
              <div className="flex justify-between items-center pb-5 border-b border-slate-800/80 mb-5 gap-4">
                <div className="flex items-center space-x-2.5">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  <div>
                    <h3 className="font-serif font-black text-sm tracking-tight text-white uppercase sm:normal-case">
                      HomeMed OS Clinical Deck
                    </h3>
                    <p className="text-[9.5px] font-mono text-slate-400 font-medium">REAL-TIME OUTCOMES DEMO</p>
                  </div>
                </div>
                
                {/* Live uptime pill */}
                <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Interactive Dashboard Tabs Selector */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-850 mb-6">
                <button
                  onClick={() => setActivePanel('monitor')}
                  className={`py-2 px-1 text-[10px] sm:text-[11px] font-mono font-bold rounded-lg transition-all text-center uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activePanel === 'monitor'
                      ? 'bg-brand-teal text-[#061324] font-black shadow-md'
                      : 'text-slate-450 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>Telemetry</span>
                </button>
                
                <button
                  onClick={() => setActivePanel('programs')}
                  className={`py-2 px-1 text-[10px] sm:text-[11px] font-mono font-bold rounded-lg transition-all text-center uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activePanel === 'programs'
                      ? 'bg-brand-teal text-[#061324] font-black shadow-md'
                      : 'text-slate-450 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Pathways</span>
                </button>
                
                <button
                  onClick={() => setActivePanel('outcomes')}
                  className={`py-2 px-1 text-[10px] sm:text-[11px] font-mono font-bold rounded-lg transition-all text-center uppercase tracking-wider flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    activePanel === 'outcomes'
                      ? 'bg-brand-teal text-[#061324] font-black shadow-md'
                      : 'text-slate-450 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Outcomes</span>
                </button>
              </div>

              {/* TAB 1 CONTENT: DYNAMIC MEDICAL SIGNAL MONITOR */}
              {activePanel === 'monitor' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Current Active Patient Case Details Card */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 flex flex-col sm:flex-row justify-between gap-3 relative overflow-hidden">
                    <div>
                      <span className="text-[8px] font-mono text-brand-gold font-bold uppercase tracking-widest block mb-0.5">
                        MONITORED HOUSHEHOLD CASE
                      </span>
                      <h4 className="font-serif font-bold text-slate-205 text-white text-base">Anand Murthy (72y)</h4>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5">Post-CABG Stepdown Pathway</p>
                    </div>
                    <div className="sm:text-right self-start sm:self-center">
                      <span className="text-[9px] font-mono bg-brand-teal/10 text-brand-teal border border-brand-teal/20 px-2 py-0.5 rounded font-black tracking-wide">
                        OPTIMA HIGH ACUITY Track
                      </span>
                      <p className="text-[10px] text-slate-500 mt-1 font-mono">Sensors Dispatched: SpO2, BP</p>
                    </div>
                  </div>

                  {/* Real-time Bio-Signals Grid Section */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* SpO2 sensor widget */}
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 relative">
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 font-bold">
                        <span>PULSE OXIMETER (SpO2)</span>
                        <span className="text-[8px] text-slate-600">LIMIT &gt;92%</span>
                      </div>
                      
                      <div className="flex items-baseline space-x-1.5 mt-2">
                        <span className={`text-3xl font-mono font-bold tracking-tighter ${
                          currentSpo2 < 93 ? 'text-rose-500 animate-pulse font-black' : 'text-emerald-400'
                        }`}>
                          {currentSpo2}%
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">Oxygen</span>
                      </div>

                      <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center">
                        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${currentSpo2 < 93 ? 'bg-rose-500' : 'bg-emerald-500'}`}></span>
                        <span>{currentSpo2 < 93 ? 'PROTOCOL VIOLATION' : 'Nominal Saturation'}</span>
                      </div>
                    </div>

                    {/* HR Sensor widget */}
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 relative">
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 font-bold">
                        <span>HEART RATE (HR)</span>
                        <span className="text-[8px] text-slate-600">REST 60-90</span>
                      </div>

                      <div className="flex items-baseline space-x-1.5 mt-2">
                        <span className={`text-3xl font-mono font-bold tracking-tighter ${
                          currentHr > 90 ? 'text-rose-400 animate-pulse font-black' : 'text-brand-teal'
                        }`}>
                          {currentHr}
                        </span>
                        <span className="text-[9px] text-slate-500 font-mono">bpm</span>
                      </div>

                      <div className="mt-2 text-[10px] font-mono text-slate-400 flex items-center">
                        <Heart className={`w-3.5 h-3.5 mr-1.5 text-rose-500 ${pulseBeat ? 'scale-125' : 'scale-100'} transition-all`} />
                        <span>Sensing live cardiac pulse</span>
                      </div>
                    </div>

                  </div>

                  {/* Pulse Waveform Visualizer simulation */}
                  <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-900 flex flex-col justify-end">
                    <span className="text-[8.5px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                      Continuous HMOS Ingestion Signal Stream
                    </span>
                    <div className="h-10 bg-slate-950 rounded border border-slate-900 border-dashed relative overflow-hidden flex items-center">
                      <div className="absolute inset-x-0 h-[1px] bg-slate-900"></div>
                      {/* Live flashing bar indicator */}
                      <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent to-brand-teal/20 blur-xs animate-sweep"></div>
                      <div className="absolute inset-y-0 left-0 right-0 p-1 font-mono text-[9.5px] text-brand-teal flex justify-between items-center">
                        <span>Telemetry Node Ingest Stream nominal</span>
                        <span className="animate-pulse">● FEED LOG_OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Active Simulator Logs screen */}
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 font-mono text-[10.5px] text-slate-350 select-none space-y-1.5 max-h-[140px] overflow-y-auto">
                    {logs.map((log, idx) => (
                      <div key={idx} className={`leading-snug pl-2 border-l ${
                        log.includes('WARNING') 
                          ? 'border-rose-500 text-rose-450 text-rose-400' 
                          : log.includes('ACTION') 
                          ? 'border-brand-gold text-brand-gold' 
                          : log.includes('CLINICAL')
                          ? 'border-emerald-500 text-emerald-400'
                          : 'border-slate-800 text-slate-400'
                      }`}>
                        {log}
                      </div>
                    ))}
                  </div>

                  {/* Active Interactive Simulation Toggle Action Button */}
                  <div className="pt-2">
                    <button
                      onClick={handleToggleDrift}
                      className={`w-full py-3 rounded-xl font-mono text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center space-x-2 border cursor-pointer ${
                        hasDrift
                          ? 'bg-rose-500 text-white border-transparent hover:bg-rose-600 shadow-lg shadow-rose-500/10'
                          : 'bg-brand-gold/10 text-brand-gold border-brand-gold/30 hover:bg-brand-gold/20'
                      }`}
                    >
                      <BellRing className={`w-4 h-4 ${hasDrift ? 'animate-bounce' : ''}`} />
                      <span>{hasDrift ? 'Resolve Critical Oxygen Drift' : 'Simulate 2:00 AM Oxygen Drift incident'}</span>
                    </button>
                    <p className="text-[9px] text-slate-500 text-center font-mono mt-1.5 leading-snug">
                      Click to toggle a household vital signs exception and watch HMOS respond instantaneously.
                    </p>
                  </div>

                </div>
              )}

              {/* TAB 2 CONTENT: MULTI-LEVEL POST-DISCHARGE ROADMAPS */}
              {activePanel === 'programs' && (
                <div className="space-y-4 animate-fade-in">
                  
                  {/* Small description */}
                  <p className="text-sm text-white leading-relaxed font-sans font-medium">
                    Every patient discharge undergoes strict digital protocol mapping, assigning dedicated clinicians and wireless, connected medical monitoring sensors at home.
                  </p>

                  {/* Clickable Sub-Programs Pills */}
                  <div className="grid grid-cols-3 gap-2">
                    {(['OPTIMA', 'LIVYA', 'RESTORE'] as const).map(prog => (
                      <button
                        key={prog}
                        onClick={() => setActiveProgramSpec(prog)}
                        className={`py-2 px-1.5 rounded-lg border text-xs font-serif font-black transition-all ${
                          activeProgramSpec === prog
                            ? 'bg-[#061324] text-white border-slate-700 shadow-inner scale-[1.02]'
                            : 'bg-slate-950 border-slate-900 text-slate-300 hover:text-white'
                        }`}
                      >
                        {prog}
                      </button>
                    ))}
                  </div>

                  {/* Focused Program Detailed Specifications Display Card */}
                  <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850 space-y-3.5">
                    
                    {activeProgramSpec === 'OPTIMA' && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] sm:text-xs font-mono text-brand-gold font-black uppercase">
                            OPTIMA PATHWAY (High Acuity Segment)
                          </span>
                          <span className="text-[9.5px] font-mono bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded font-bold animate-pulse">
                            Step-Down Focus
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-white text-base leading-none">Post-ICU & Cardiopulmonary Bed Sync</h4>
                        <p className="text-sm text-white leading-relaxed font-semibold">
                          For patients leaving high-dependency units with cardiovascular or thoracic surgical history. Require active, continuous wireless telemetry.
                        </p>

                        <div className="border-t border-slate-900 pt-3.5 space-y-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-black">Standard Delivery Blueprint:</span>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] font-mono text-white font-medium">
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>24/7 Live Oximeter Intake</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Daily Nurse Wound rounds</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Cardio Medication Checklist</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Weekly Surgeon Reports</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeProgramSpec === 'LIVYA' && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] sm:text-xs font-mono text-brand-teal font-black uppercase">
                            LIVYA PATHWAY (Surgical Recovery Segment)
                          </span>
                          <span className="text-[9.5px] font-mono bg-brand-teal/10 text-brand-teal px-2 py-0.5 rounded font-bold">
                            Standard Post-Op
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-white text-base leading-none">Abdominal, Orthopedic & Joint Arthroplasty</h4>
                        <p className="text-sm text-white leading-relaxed font-semibold">
                          For standard elective surgical patients looking to bypass expensive hospital ward bed occupancy charges while preserving clinical safety checks.
                        </p>

                        <div className="border-t border-slate-900 pt-3.5 space-y-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-black">Standard Delivery Blueprint:</span>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] font-mono text-white font-medium">
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>In-Home Joint Assessment</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Active pain score logging</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Sutu review within 14 days</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Mobility Threshold Track</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeProgramSpec === 'RESTORE' && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] sm:text-xs font-mono text-blue-400 font-black uppercase">
                            RESTORE PATHWAY (Neurological rehab)
                          </span>
                          <span className="text-[9.5px] font-mono bg-blue-500/15 text-blue-300 px-2 py-0.5 rounded font-bold">
                            Complex Rehab
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-white text-base leading-none">Orthopedic, Stroke & Traumatic Recovery</h4>
                        <p className="text-sm text-white leading-relaxed font-semibold">
                          Custom-programmed physiotherapeutic plans aimed at helping elderly or neurologically compromised patients recover fundamental functional independence.
                        </p>

                        <div className="border-t border-slate-900 pt-3.5 space-y-2">
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-black">Standard Delivery Blueprint:</span>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-[13px] font-mono text-white font-medium">
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Daily specialized physio round</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Occupational therapist audit</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Daily movement logs</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <Check className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Surgeon milestones dashboard</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                  </div>

                </div>
              )}

              {/* TAB 3 CONTENT: CLINICALLY PERSISTENT SYSTEM OUTCOMES */}
              {activePanel === 'outcomes' && (
                <div className="space-y-4.5 animate-fade-in">
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
                    HomeMed OS operates under strict outcome monitoring metrics. Referring surgical departments receive automated analytics detailing real cohort recovery parameters.
                  </p>

                  {/* Comparisons graphical bar */}
                  <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 space-y-3.5 font-mono">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">
                      COHORT 30-DAY EMERGENCY READMISSION RATES
                    </span>

                    {/* Standard Care Rate */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">UNMONITORED TRADITIONAL HOME DISCHARGE</span>
                        <span className="text-rose-400 font-extrabold font-mono">22.4% Bed Return</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: '22.4%' }}></div>
                      </div>
                    </div>

                    {/* HomeMed Managed Rate */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-white font-semibold">HOMEMED CLINICAL PATHWAY STANDARDS</span>
                        <span className="text-emerald-400 font-extrabold font-mono">3.8% Enforced</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="h-full bg-brand-teal rounded-full" style={{ width: '3.8%' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 text-center select-none font-normal">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-850/80">
                      <span className="text-xl font-mono font-black text-brand-teal block">98.2%</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mt-1 leading-none">Prescription Compliance</span>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-850/80">
                      <span className="text-xl font-mono font-black text-brand-gold block">4.8 / 5</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mt-1 leading-none">Family Satisfaction</span>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-850/80">
                      <span className="text-xl font-mono font-black text-blue-405 text-blue-400 block">100%</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mt-1 leading-none">Surgeon Transparency</span>
                    </div>
                  </div>

                </div>
              )}

              {/* Deck persistent footer status bar */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                  <span>Clinical transmission synced</span>
                </span>
                <span>Real-time platform</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Embedded sweep animations CSS rule for high-end feel */}
      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-sweep {
          animation: sweep 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </section>
  );
}

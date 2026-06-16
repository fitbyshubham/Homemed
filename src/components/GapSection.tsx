import { useState } from 'react';
import { Gauge, Check, ShieldAlert, HeartPulse, Activity, Sparkles, HelpCircle } from 'lucide-react';

export default function GapSection() {
  // Simulator State
  const [vitalsOversight, setVitalsOversight] = useState<boolean>(false);
  const [adherence, setAdherence] = useState<number>(60); // percentage 0-100
  const [coordination, setCoordination] = useState<'fragmented' | 'orchestrated'>('fragmented');

  // Compute readmission risk score based on inputs
  const computeRisk = () => {
    let baseRisk = 75; // high base risk post-surgery
    
    // Vitals oversight reduces risk by 25%
    if (vitalsOversight) baseRisk -= 25;
    
    // Adherence decreases risk proportionally
    baseRisk -= ((adherence - 10) / 90) * 35;
    
    // Structured coordination decreases risk by 15%
    if (coordination === 'orchestrated') baseRisk -= 15;
    
    // clamp between 5% and 95%
    return Math.max(5, Math.min(95, Math.round(baseRisk)));
  };

  const riskScore = computeRisk();
  
  const getRiskLabel = (score: number) => {
    if (score > 60) {
      return { 
        label: 'CRITICAL READMISSION RISK', 
        color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
        badge: 'bg-rose-500 text-white',
        desc: 'Significant clinical exposure: high likelihood of preventable relapse within 14 days.'
      };
    }
    if (score > 30) {
      return { 
        label: 'MODERATE EXPOSURE', 
        color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
        badge: 'bg-amber-500 text-slate-900',
        desc: 'Sub-optimal support: patient vulnerable to unmonitored baseline shifts post-discharge.'
      };
    }
    return { 
      label: 'SECURE / CLINICALLY PROTECTED', 
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      badge: 'bg-emerald-500 text-slate-900',
      desc: 'Optimal recovery loop: automated alerts standardise early intervention triggers.'
    };
  };

  const riskLabel = getRiskLabel(riskScore);

  return (
    <section id="gap" className="relative py-20 sm:py-28 bg-white text-slate-800 grid-bg-overlay-light border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#061324]/5 border border-[#061324]/10 rounded-full px-3.5 py-1.5 mb-4 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#061324] uppercase">
              THE GAP HOSPITALS FACE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            Your clinical reach ends at the hospital door.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans font-light">
            Once patients leave physical ward beds, hospitals lose direct physiological visibility. Home care falls on untrained family members, escalating risks and feeding avoidable readmissions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Data Indicators */}
          <div className="lg:col-span-4 flex flex-col space-y-12 pr-0 lg:pr-6">
            
            <div className="space-y-3 relative group">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-teal rounded-full scale-y-75 group-hover:scale-y-100 transition-transform duration-350"></div>
              <div className="text-5xl sm:text-6xl font-serif font-extrabold text-brand-teal tracking-tighter">
                1 in 5
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-base tracking-tight">Readmission Reality</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                <span className="font-semibold text-slate-900">Surgical patients</span> are readmitted within 30 days in India — the majority for preventable complications that develop silently at home.
              </p>
            </div>

            <div className="border-t border-slate-150 pt-8 space-y-3 relative group">
              <div className="absolute -left-4 top-8 bottom-0 w-1 bg-brand-gold rounded-full scale-y-75 group-hover:scale-y-100 transition-transform duration-350"></div>
              <div className="text-5xl sm:text-6xl font-serif font-extrabold text-brand-gold tracking-tighter">
                72h
              </div>
              <h4 className="font-serif font-bold text-slate-900 text-base tracking-tight">The Critical Window</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-light">
                Most post-discharge deterioration begins within three days of leaving hospital — when clinical oversight is at its absolute lowest.
              </p>
            </div>

          </div>

          {/* Center Column: The 4 Structural Failure Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#061324] uppercase mb-1">
              STRUCTURAL ROOT CAUSES
            </h3>
            
            {/* Fail-Card 1 */}
            <div className="p-5.5 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-start space-x-4 hover:bg-slate-100/60 hover:border-slate-200 hover:shadow-xs transition-all duration-300 group">
              <span className="text-2xl font-serif font-bold text-slate-300 leading-none group-hover:text-brand-teal transition-colors">01</span>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 leading-snug">
                  No post-discharge clinical visibility
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Discharged patients rely on static prescription sheets, with no continuous feed of vitals back to clinical teams.
                </p>
              </div>
            </div>

            {/* Fail-Card 2 */}
            <div className="p-5.5 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-start space-x-4 hover:bg-slate-100/60 hover:border-slate-200 hover:shadow-xs transition-all duration-300 group">
              <span className="text-2xl font-serif font-bold text-slate-300 leading-none group-hover:text-brand-teal transition-colors">02</span>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 leading-snug">
                  Fragmented coordination
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Surgeons remain isolated from home nurses, visiting physical therapists, and family caregivers. There is no unified recovery record.
                </p>
              </div>
            </div>

            {/* Fail-Card 3 */}
            <div className="p-5.5 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-start space-x-4 hover:bg-slate-100/60 hover:border-slate-200 hover:shadow-xs transition-all duration-300 group">
              <span className="text-2xl font-serif font-bold text-slate-300 leading-none group-hover:text-brand-teal transition-colors">03</span>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 leading-snug">
                  No escalation readiness
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  When early parameters deteriorate, families struggle to identify danger signs, resulting in delayed calls or unnecessary emergency visits.
                </p>
              </div>
            </div>

            {/* Fail-Card 4 */}
            <div className="p-5.5 bg-slate-50 border border-slate-100/80 rounded-2xl flex items-start space-x-4 hover:bg-slate-100/60 hover:border-slate-200 hover:shadow-xs transition-all duration-300 group">
              <span className="text-2xl font-serif font-bold text-slate-300 leading-none group-hover:text-brand-teal transition-colors">04</span>
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm mb-1 leading-snug">
                  No measurable recovery pathway
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  Milestones like mobility thresholds, pain indexing, and medication compliance are not systematically tracked or logged.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Risk Calculator */}
          <div className="lg:col-span-4 bg-[#061324] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800 relative overflow-hidden group">
            {/* Top decorative visual highlight */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-teal via-brand-gold to-brand-teal opacity-50"></div>
            
            <div className="flex items-center space-x-2 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Gauge className="w-4 h-4 text-brand-gold animate-spin-slow" />
              <span>POST-DISCHARGE RISK PROPELLER</span>
            </div>
            
            <h3 className="font-serif text-xl font-bold text-slate-100 mb-2 tracking-tight">
              Avoidable Exposure Simulator
            </h3>
            
            <p className="text-xs text-slate-400 mb-6 leading-relaxed font-light">
              Tweak recovery variables to see how standard unmonitored home care stacks up against structured HomeMed-supervised recovery.
            </p>

            <div className="space-y-6">
              
              {/* Variable 1 */}
              <div className="space-y-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-300 flex items-center space-x-1.5">
                    <span>Adherence (Meds & Tech)</span>
                  </span>
                  <span className="font-mono text-brand-teal font-bold bg-brand-teal/10 px-1.5 py-0.5 rounded">{adherence}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={adherence}
                  onChange={(e) => setAdherence(parseInt(e.target.value))}
                  className="w-full accent-brand-teal h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-[10px] text-slate-500 font-mono block">
                  {adherence < 40 ? '⚠️ High risk of non-compliance' : adherence < 80 ? '✓ Average household compliance' : '⚡ Hospital level adherence'}
                </span>
              </div>

              {/* Variable 2 */}
              <div className="space-y-2.5 pt-1">
                <span className="block text-xs font-medium text-slate-300">Continuous Vitals Feed (RPM):</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setVitalsOversight(false)}
                    className={`py-2 text-xs font-mono font-bold rounded-lg border transition-all duration-300 ${
                      !vitalsOversight
                        ? 'bg-slate-900 border-slate-700 text-white shadow-inner'
                        : 'bg-transparent border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Off (Standard)
                  </button>
                  <button
                    onClick={() => setVitalsOversight(true)}
                    className={`py-2 text-xs font-mono font-bold rounded-lg border transition-all duration-300 ${
                      vitalsOversight
                        ? 'bg-brand-teal text-[#061324] border-transparent font-bold shadow-lg shadow-brand-teal/15'
                        : 'bg-transparent border-slate-900 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    On (HomeMed)
                  </button>
                </div>
              </div>

              {/* Variable 3 */}
              <div className="space-y-2.5 pt-1">
                <span className="block text-xs font-medium text-slate-300">Care Team Alignment:</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCoordination('fragmented')}
                    className={`py-2 text-xs font-mono font-bold rounded-lg border transition-all duration-300 ${
                      coordination === 'fragmented'
                        ? 'bg-slate-900 border-slate-700 text-white shadow-inner'
                        : 'bg-transparent border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Fragmented
                  </button>
                  <button
                    onClick={() => setCoordination('orchestrated')}
                    className={`py-2 text-xs font-mono font-bold rounded-lg border transition-all duration-300 ${
                      coordination === 'orchestrated'
                        ? 'bg-brand-teal text-[#061324] border-transparent font-bold shadow-lg shadow-brand-teal/15'
                        : 'bg-transparent border-slate-900 text-slate-400 hover:text-slate-300'
                    }`}
                  >
                    Orchestrated
                  </button>
                </div>
              </div>

              {/* Risk Contributors list breakdown */}
              <div className="space-y-2 bg-slate-950 p-4 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider block mb-1">
                  Clinical Risk Vector Breakdown
                </span>
                
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-450 text-slate-400">Baseline Surgery Severity</span>
                    <span className="text-rose-400 font-bold">+75% Risk</span>
                  </div>
                  
                  <div className={`flex justify-between transition-colors ${adherence >= 70 ? 'text-emerald-400' : 'text-slate-500'}`}>
                    <span>Adherence Factor ({adherence}%)</span>
                    <span>-{Math.round(((adherence - 10) / 90) * 35)}% Risk</span>
                  </div>

                  <div className={`flex justify-between transition-colors ${vitalsOversight ? 'text-emerald-400' : 'text-slate-500'}`}>
                    <span>HomeMed Live RPM Streams</span>
                    <span>{vitalsOversight ? '-25%' : '+0%'} Risk</span>
                  </div>

                  <div className={`flex justify-between transition-colors ${coordination === 'orchestrated' ? 'text-emerald-400' : 'text-slate-500'}`}>
                    <span>Coordinated Care Circle</span>
                    <span>{coordination === 'orchestrated' ? '-15%' : '+0%'} Risk</span>
                  </div>
                </div>
              </div>

              {/* Output Result Ticker */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-3">
                <span className="text-[10px] text-slate-400 uppercase font-mono block tracking-wider">
                  Estimated 30-Day Readmission Risk:
                </span>
                
                <div className="flex items-center justify-between">
                  {/* Gauge bar graphic */}
                  <div className="w-1/2 bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full transition-all duration-500 rounded-full ${
                        riskScore > 60
                          ? 'bg-rose-500'
                          : riskScore > 30
                          ? 'bg-amber-500'
                          : 'bg-emerald-400'
                      }`}
                      style={{ width: `${riskScore}%` }}
                    ></div>
                  </div>
                  <span className={`text-4xl font-mono font-bold tracking-tight text-white ${riskScore > 60 ? 'text-rose-400' : 'text-emerald-350'}`}>
                    {riskScore}%
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border text-[10px] font-mono leading-relaxed uppercase tracking-wider text-center ${riskLabel.color}`}>
                  <span className={`px-1.5 py-0.5 rounded mr-2 font-black ${riskLabel.badge}`}>
                    {riskScore > 60 ? 'HIGH' : riskScore > 30 ? 'MID' : 'LOW'}
                  </span>
                  <strong>{riskLabel.label}</strong>
                  <p className="mt-1.5 normal-case font-sans text-slate-300 font-light tracking-normal leading-normal text-left">{riskLabel.desc}</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import { ClipboardList, SearchCode, Home, ArrowRight } from 'lucide-react';

export default function HowReferralWorks() {
  const steps = [
    {
      num: '01',
      title: 'Enroll or Request Care',
      desc: 'Fill out our short home-care request form detailing your recovery needs, or request support via a quick phone call.',
      badge: 'Within minutes',
      icon: <ClipboardList className="w-5 h-5 text-brand-teal" />
    },
    {
      num: '02',
      title: 'Clinical Matching',
      desc: 'Our supervisors pair you with a matching care program (LIVYA, OPTIMA, or RESTORE) and prepare medical-grade vitals sensors & caregivers.',
      badge: 'Same day',
      icon: <SearchCode className="w-5 h-5 text-brand-teal" />
    },
    {
      num: '03',
      title: 'Home Recovery Begins',
      desc: 'Our monitoring equipment goes live at your home. Your certified nurses and physical therapists begin scheduled rounds right away.',
      badge: 'Within 24 hours',
      icon: <Home className="w-5 h-5 text-brand-teal" />
    }
  ];

  return (
    <section id="referral" className="relative py-20 sm:py-28 bg-white text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-center mx-auto">
          <div className="inline-flex items-center space-x-2 bg-[#061324]/5 border border-[#061324]/10 rounded-full px-3.5 py-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-700 uppercase">
              RELIABLE SERVICE SLAs
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            From discharge to active recovery — in one day.
          </h2>
          <p className="mt-4 text-slate-700 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            We move with prompt care. Simple request processes, rapid home setup, and standardized support workflows.
          </p>
        </div>

        {/* Steps Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative font-normal">
          
          {/* Subtle line background linking steps */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-slate-200 z-0"></div>

          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#faf8f5] border border-slate-205 border-slate-200/80 rounded-2xl p-8 shadow-xs flex flex-col justify-between items-start hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 relative z-10 group"
            >
              <div className="w-full">
                {/* Step Header Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3.5">
                    <span className="text-sm font-mono font-black text-brand-teal">STAGE {s.num}</span>
                    <div className="p-2 bg-brand-teal/5 border border-brand-teal/15 rounded-xl group-hover:bg-brand-teal/15 group-hover:border-brand-teal/35 transition-all duration-300">
                      {s.icon}
                    </div>
                  </div>
                  
                  {/* Time label badge */}
                  <span className="text-[10px] font-mono bg-brand-teal/10 text-[#0c706d] border border-brand-teal/20 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-[#061324] text-lg mb-3 tracking-wide group-hover:text-brand-teal transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-sans font-normal">
                  {s.desc}
                </p>
              </div>

              {idx < 2 && (
                <div className="mt-8 self-end lg:hidden flex items-center text-xs font-mono font-bold text-slate-400">
                  <span>Scroll to next step</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

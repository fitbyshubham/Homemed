import { ArrowUpRight } from 'lucide-react';

interface WhoWeServeProps {
  onOpenReferralModal?: () => void;
  onScrollTo?: (id: string) => void;
}

export default function WhoWeServe({ onOpenReferralModal, onScrollTo }: WhoWeServeProps) {
  const cohorts = [
    {
      badge: 'PATIENTS COHORT',
      badgeColor: 'text-[#0c706d] bg-[#e6f4f1] border-emerald-500/15',
      bulletColor: 'bg-[#0c706d]',
      title: 'Patients',
      text: 'Secure programmatic home care after major cardiovascular or neurological surgeries.',
      starText: 'Receive daily supervisor validation support and personal bedside caregivers.',
      btnText: 'Explore Programs',
      image: '/assets/patients.jpg',
      action: () => onScrollTo?.('architecture')
    },
    {
      badge: 'FAMILIES COHORT',
      badgeColor: 'text-[#a17c24] bg-[#fef9ec] border-amber-500/15',
      bulletColor: 'bg-[#a17c24]',
      title: 'Families',
      text: 'Anxiety-free recovery sync. Receive continuous vitals access and secure clinical reports.',
      starText: 'Direct connection with care coordinators eliminates domestic administrative stress.',
      btnText: 'Speak To Our Team',
      image: '/assets/families.jpg',
      action: () => onScrollTo?.('contact')
    },
    {
      badge: 'DOCTORS COHORT',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-500/15',
      bulletColor: 'bg-indigo-600',
      title: 'Doctors',
      text: 'Maintain complete out-patient visibility. Receive weekly clinical summary PDF briefs.',
      starText: 'Parametric safety limits notify treating specialists of indicators before trauma triggers.',
      btnText: 'Refer A Patient',
      image: '/assets/doctors.jpg',
      action: () => onOpenReferralModal?.()
    },
    {
      badge: 'HOSPITALS COHORT',
      badgeColor: 'text-blue-600 bg-blue-50 border-blue-500/15',
      bulletColor: 'bg-blue-600',
      title: 'Hospitals',
      text: 'Reduce 30-day readmission penalties and accelerate active bed turnarounds.',
      starText: 'Establish a medical-grade step-down layer to protect hospital institutional resources.',
      btnText: 'Partner With HomeMed',
      image: '/assets/hospitals.jpg',
      action: () => onScrollTo?.('contact')
    }
  ];

  return (
    <section id="who-we-serve" className="relative py-20 sm:py-28 bg-[#faf8f5] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#061324]/5 border border-[#061324]/10 rounded-full px-3.5 py-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#061324] uppercase">
              WHO HOMEMED SERVES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            Designed for seamless support. <br />
            <span className="text-brand-teal">Built for patients who recover.</span>
          </h2>
          <p className="mt-4 text-slate-700 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            We provide families and physicians with continuous, remote clinical support, delivering absolute peace of mind through constant supervision at home.
          </p>
        </div>

        {/* 4 Columns Cohort Cards Grid matching the screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch font-normal">
          {cohorts.map((cohort, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-200/80 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image at top */}
              <div className="h-52 w-full overflow-hidden relative border-b border-slate-100">
                <img 
                  src={cohort.image} 
                  alt={`${cohort.title} Cohort`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Content Padding */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Badge Row */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-wider font-extrabold rounded-full uppercase border ${cohort.badgeColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cohort.bulletColor}`}></span>
                    {cohort.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif font-black text-2xl text-[#061324] tracking-tight mt-4 mb-2">
                    {cohort.title}
                  </h3>

                  {/* Description text */}
                  <p className="text-slate-700 text-[15px] sm:text-[16px] leading-relaxed font-sans font-normal">
                    {cohort.text}
                  </p>

                  {/* Highlight Star Box */}
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-start gap-2 my-6 text-[13px] sm:text-[14px] text-slate-750 text-slate-700 leading-relaxed font-sans font-medium">
                    <span className="text-amber-500 shrink-0 font-bold">★</span>
                    <span>{cohort.starText}</span>
                  </div>
                </div>

                {/* Call To Action Button */}
                <button
                  onClick={cohort.action}
                  className="w-full py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#edf8fa] bg-[#061324] hover:bg-brand-teal hover:text-[#061324] active:scale-[0.98] rounded-full flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <span>{cohort.btnText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

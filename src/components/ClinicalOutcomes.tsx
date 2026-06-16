import { Award, ShieldAlert, BadgeCheck } from 'lucide-react';

export default function ClinicalOutcomes() {
  const outcomes = [
    {
      num: '↓ 40%',
      title: 'Reduction in 30-day readmissions',
      color: 'border-brand-teal',
      numColor: 'text-brand-teal',
      desc: 'HomeMed-managed recovery plans standardise medication adherence, physical wound tracking, and clinical alerts to keep post-surgical and high-acuity patients safely progressing at home.',
      sub: 'LIVYA • OPTIMA PROGRAM DATA'
    },
    {
      num: '24h',
      title: 'From referral to patient enrolled',
      color: 'border-brand-gold',
      numColor: 'text-brand-gold',
      desc: 'Once a surgeon makes a patient referral, the HomeMed team handles everything: clinical onboarding, device dispatch, caregiver training, and plan deployment, in under 24 hours.',
      sub: 'INTAKE PROCESS • ALL PROGRAMS'
    },
    {
      num: '> 85%',
      title: 'Medication adherence rate',
      color: 'border-[#061324]',
      numColor: 'text-[#061324]',
      desc: 'With scheduled nurse oversight visits, real-time alerts integration, and direct supervisor checks, HomeMed patients adhere strictly to post-discharge medication protocols.',
      sub: 'HOMEMED OS ADHERENCE DATA'
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#faf8f5]/50 text-slate-800 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-center mx-auto">
          <p className="text-xs font-mono font-bold tracking-widest text-brand-gold uppercase mb-3">
            CLINICAL OUTCOMES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            Built to move the metrics hospitals measure.
          </h2>
          <p className="mt-4 text-slate-705 text-slate-700 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            No vague promises of comfort. HomeMed evaluates care performance against clinical hard data points to drive optimal resource recovery.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white border-t-4 ${item.color} rounded-2xl p-8 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Large Number Typography */}
                <div className={`text-5xl sm:text-6xl font-mono font-black ${item.numColor} tracking-tighter leading-none mb-6`}>
                  {item.num}
                </div>

                {/* Heading */}
                <h3 className="font-serif font-extrabold text-[#061324] text-xl mb-4 tracking-tight">
                  {item.title}
                </h3>

                {/* Body paragraph */}
                <p className="text-slate-605 text-slate-650 text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed font-sans font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Sub-label */}
              <div>
                <hr className="border-slate-100 my-6" />
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold tracking-widest uppercase">
                  <span>{item.sub}</span>
                  <BadgeCheck className="w-4 h-4 text-brand-teal" />
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

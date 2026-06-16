import { Cpu, FileText, Share2, AlertOctagon, Signal, BarChart3, Users, BarChart4, ChevronRight } from 'lucide-react';
import { platformPillars } from '../data';

export default function HomeMedOS() {
  
  const getIconForPillar = (num: string) => {
    switch (num) {
      case '01': return <Cpu className="w-5 h-5 text-[#159d9a]" />;
      case '02': return <FileText className="w-5 h-5 text-[#159d9a]" />;
      case '03': return <Share2 className="w-5 h-5 text-[#159d9a]" />;
      case '04': return <AlertOctagon className="w-5 h-5 text-[#159d9a]" />;
      case '05': return <Signal className="w-5 h-5 text-[#159d9a]" />;
      case '06': return <Users className="w-5 h-5 text-[#159d9a]" />;
      case '07': return <BarChart3 className="w-5 h-5 text-[#159d9a]" />;
      default: return <BarChart4 className="w-5 h-5 text-[#159d9a]" />;
    }
  };

  return (
    <section id="homemed-os" className="relative py-20 sm:py-28 bg-[#faf8f5] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-[#061324]/5 border border-[#061324]/10 rounded-full px-3.5 py-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-650 uppercase">
              HOMEMED OS CORE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            The platform running beneath every program.
          </h2>
          <p className="mt-4 text-slate-705 text-slate-700 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            Not a nursing agency app or a simple family update diary. HomeMed OS is a robust clinical environment that enforces protocol standardization across the entire recovery lifecycle.
          </p>
        </div>

        {/* 8 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="bg-white border border-slate-200/80 rounded-2xl p-6.5 shadow-xs hover:shadow-xl hover:border-brand-teal/20 hover:translate-y-[-3px] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-brand-teal/5 border border-brand-teal/15 rounded-xl group-hover:bg-brand-teal/15 group-hover:border-brand-teal/30 transition-all duration-300">
                    {getIconForPillar(pillar.num)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-350 group-hover:text-brand-teal transition-colors">
                    PILLAR {pillar.num}
                  </span>
                </div>

                {/* Content description */}
                <h3 className="font-serif font-extrabold text-[#061324] text-base mb-2 group-hover:text-[#0f7a77] transition-colors leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-605 text-slate-650 text-slate-600 text-[14px] sm:text-[15px] leading-relaxed font-sans font-normal">
                  {pillar.desc}
                </p>
              </div>

              {/* Mini interaction tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 group-hover:text-brand-teal tracking-widest uppercase">
                <span>Engine Standard</span>
                <ChevronRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

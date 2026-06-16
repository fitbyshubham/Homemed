import { useState } from 'react';
import { Check, ShieldAlert, Cpu, HeartPulse, User, Network, ClipboardList, Smartphone, Eye, Users, Activity, ChevronRight, ArrowUpRight } from 'lucide-react';
import { careRoles } from '../data';
import { ProgramLogo } from './ProgramLogos';

interface ArchitectureProps {
  onOpenReferralModal?: (program?: 'LIVYA' | 'OPTIMA' | 'RESTORE') => void;
  onScrollTo?: (id: string) => void;
}

export default function Architecture({ onOpenReferralModal, onScrollTo }: ArchitectureProps) {
  const [selectedNode, setSelectedNode] = useState<string>('n1');

  const selectedRole = careRoles.find(role => role.id === selectedNode) || careRoles[0];

  const getIconForNode = (id: string, active: boolean) => {
    const cls = active ? "w-5 h-5 text-[#061324] stroke-[2.5]" : "w-5 h-5 text-slate-500 group-hover:text-slate-800 transition-colors";
    switch(id) {
      case 'n1': return <User className={cls} />;
      case 'n2': return <Smartphone className={cls} />;
      case 'n3': return <Eye className={cls} />;
      case 'n4': return <Activity className={cls} />;
      case 'n5': return <HeartPulse className={cls} />;
      case 'n6': return <Network className={cls} />;
      case 'n7': return <ClipboardList className={cls} />;
      case 'n8': return <ShieldAlert className={cls} />;
      default: return <Users className={cls} />;
    }
  };

  const programs = [
    {
      name: 'OPTIMA',
      badge: 'ICU STEP-DOWN COHORT',
      badgeColor: 'text-[#a17c24] bg-[#fef9ec] border-amber-500/15',
      bulletColor: 'bg-[#a17c24]',
      logo: '',
      text: 'HomeMed OS sits beneath every program — coordinating care teams, RPM data, recovery goals, family visibility and clinical escalation across every patient journey.',
      starText: 'Continuous oxygen ingestion automatically alerts team of respiratory shifts, deploying emergency in-home nurse dispatch SLA.',
      image: '/assets/optima.jpeg',
      action: () => onOpenReferralModal?.('OPTIMA')
    },
    {
      name: 'LIVYA',
      badge: 'POST-SURGICAL COHORT',
      badgeColor: 'text-[#0c706d] bg-[#e6f4f1] border-emerald-500/15',
      bulletColor: 'bg-[#0c706d]',
      logo: '',
      text: 'HomeMed OS sits beneath every program — coordinating care teams, RPM data, recovery goals, family visibility and clinical escalation across every patient journey.',
      starText: 'Wound healing checks, pain log trends, and daily physiotherapy mobility checklists integrated back to surgeons.',
      image: '/assets/livya.jpeg',
      action: () => onOpenReferralModal?.('LIVYA')
    },
    {
      name: 'RESTORE',
      badge: 'REHABILITATION COHORT',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-500/15',
      bulletColor: 'bg-indigo-600',
      logo: '/assets/restore.jpeg',
      text: 'HomeMed OS sits beneath every program — coordinating care teams, RPM data, recovery goals, family visibility and clinical escalation across every patient journey.',
      starText: 'Structured movement metrics like knee extension degrees and walking counts synced back to hospitals under medical oversight.',
      image: '/assets/restore.jpeg',
      action: () => onOpenReferralModal?.('RESTORE')
    }
  ];

  return (
    <section id="architecture" className="relative py-20 sm:py-28 bg-[#faf8f5] text-slate-800 border-b border-slate-205/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-slate-200/80 border border-slate-300 rounded-full px-3.5 py-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-slate-650 uppercase">
              THE HOMEMED ARCHITECTURE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#061324] leading-tight tracking-tight">
            One operating system. <span className="text-brand-teal italic font-extrabold">Three clinical programs.</span>
          </h2>
          <p className="mt-4 text-slate-705 text-slate-700 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            HomeMed OS sits beneath every program — coordinating care teams, RPM data, recovery goals, family visibility and clinical escalation across every patient journey.
          </p>
        </div>

        {/* Unified Premium Dark Card representing "One Operating System, Three Clinical Programs" */}
        <div className="bg-[#061324] text-white rounded-[40px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-slate-800 relative overflow-hidden mb-20">
          
          {/* Subtle cosmic accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Engine Header Bar matching the screenshot */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-800 pb-10 mb-8 gap-6">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
              {/* Highlight OS Block */}
              <div className="bg-[#159d9a] text-[#061324] font-black rounded-2xl px-6 py-3.5 flex items-center gap-2.5 shadow-lg shadow-brand-teal/20 shrink-0">
                <span className="text-[10px] font-mono font-extrabold tracking-widest bg-black/10 px-1.5 py-0.5 rounded">os</span>
                <span className="font-serif font-black text-xl tracking-tight">HomeMed OS</span>
              </div>
              <p className="text-white text-sm sm:text-base leading-relaxed font-sans font-medium max-w-xl">
                The coordination layer connecting care teams, RPM data, escalation protocols and clinical governance across every patient.
              </p>
            </div>
          </div>

          {/* Outline Pills Row under the OS Header */}
          <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
            {[
              { label: 'Recovery Goals Engine', active: true },
              { label: 'RPM Platform', active: true },
              { label: 'Escalation Protocols', active: true },
              { label: 'Doctor Dashboard', active: true },
              { label: 'Family Visibility', active: true }
            ].map((pillar, idx) => (
              <span
                key={idx}
                className="text-[11px] sm:text-xs font-mono font-black border border-slate-700/80 bg-slate-900/40 text-slate-200 px-4 py-2 rounded-full tracking-wide hover:border-slate-500 hover:text-white transition-all cursor-pointer"
              >
                ● {pillar.label}
              </span>
            ))}
          </div>

          {/* Three Clinical Programs Columns side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 pt-10 border-t border-slate-800/80">
            {programs.map((prog, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-between text-left relative group lg:border-r lg:border-slate-800/80 lg:last:border-r-0 lg:pr-8 lg:last:pr-0"
              >
                <div>
                  {/* Accent Top Marker Line */}
                  <div className={`h-1.5 w-12 ${
                    prog.name === 'LIVYA' ? 'bg-[#159d9a]' : prog.name === 'OPTIMA' ? 'bg-[#a17c24]' : 'bg-[#4f46e5]'
                  } rounded-full mb-6`}></div>

                  {/* Header Row: Badge & Logo */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className={`text-[10px] sm:text-[11px] font-mono tracking-widest font-black uppercase ${
                      prog.name === 'LIVYA' ? 'text-[#159d9a]' : prog.name === 'OPTIMA' ? 'text-[#a17c24]' : 'text-[#818cf8]'
                    }`}>
                      {prog.name === 'LIVYA' ? 'POST-SURGICAL' : prog.name === 'OPTIMA' ? 'ICU STEP-DOWN' : 'REHABILITATION'}
                    </span>
                    
                    {/* Program logo container */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                      <ProgramLogo name={prog.name} className="w-10 h-10" />
                    </div>
                  </div>

                  {/* Program title */}
                  <h3 className="font-serif font-black text-3xl text-white tracking-tight leading-none mt-1 mb-3">
                    {prog.name}
                  </h3>

                  {/* Program description - White & readable text as requested */}
                  <p className="text-white text-base sm:text-[16px] leading-relaxed font-sans font-medium mb-6">
                    {prog.text}
                  </p>

                  {/* Bullet lists - clean and readable white texts, matching bullets */}
                  <div className="space-y-3 mb-8">
                    {(prog.name === 'LIVYA' ? [
                      'Post-operative recovery planning',
                      'Wound support and medication adherence',
                      'Physiotherapy and mobility goals',
                      'Clinical milestone tracking'
                    ] : prog.name === 'OPTIMA' ? [
                      'Advanced nursing and medical supervision',
                      'Oxygen support and high-dependency care',
                      'Remote monitoring and vital trend alerts',
                      'Structured escalation pathways'
                    ] : [
                      'Physiotherapy and mobility restoration',
                      'Stroke, neuro and ortho pathways',
                      'Strength and balance rebuilding',
                      'Long-term functional independence'
                    ]).map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        {/* Custom square indicator aligned with design */}
                        <div className={`mt-2 w-1.5 h-1.5 rounded-sm shrink-0 ${
                          prog.name === 'LIVYA' ? 'bg-[#159d9a]' : prog.name === 'OPTIMA' ? 'bg-[#a17c24]' : 'bg-[#818cf8]'
                        }`}></div>
                        <span className="text-white text-xs sm:text-[13.5px] leading-relaxed font-sans font-medium">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Call To Action Button at bottom of column */}
                <button
                  onClick={prog.action}
                  className="w-full py-3.5 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#061324] bg-brand-teal hover:bg-brand-teal-dark active:scale-[0.98] rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-300 shadow-md mt-4"
                >
                  <span>Refer to {prog.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom connecting bullet flow of key attributes from the screenshot */}
          <div className="border-t border-slate-800/80 pt-8 mt-12 grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-between gap-4 text-xs font-mono text-slate-350 px-2 lg:px-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159d9a]"></span>
              <span className="text-white font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Recovery Goals Engine</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159d9a]"></span>
              <span className="text-white font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">RPM Monitoring Platform</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159d9a]"></span>
              <span className="text-white font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Escalation Protocols</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#159d9a]"></span>
              <span className="text-white font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Family & Doctor Visibility</span>
            </span>
          </div>

        </div>

        {/* The Care Coordinator Orbit (Interactive Visualizer) */}
        <div id="programs" className="mt-16 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-150 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visualizing Orbit Box */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 min-h-[360px] overflow-hidden relative">
            <div className="text-center mb-6 lg:mb-8">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-teal uppercase px-2.5 py-1 bg-brand-teal/5 border border-brand-teal/15 rounded-md">IN-HOME TEAMS</span>
              <h3 className="font-serif text-lg font-bold text-[#061324] mt-2">Click Nodes below to Inspect Care Role</h3>
            </div>
            
            {/* The actual orbit construct */}
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 rounded-full border border-slate-100 flex items-center justify-center bg-slate-50/40">
              
              {/* Decorative dotted orbits */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-205/70 animate-spin-slow opacity-60"></div>
              <div className="absolute inset-16 rounded-full border border-slate-100"></div>
              
              {/* Patient Core */}
              <div className={`w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#061324] flex flex-col items-center justify-center text-center z-10 shadow-lg transition-all duration-300 border-4 ${
                selectedNode ? 'border-brand-teal shadow-brand-teal/15 scale-105' : 'border-slate-850'
              }`}>
                <span className="text-[10px] font-mono tracking-widest text-brand-teal uppercase font-extrabold leading-none">PATIENT</span>
                <span className="text-[9px] text-slate-300 font-sans font-light mt-0.5">AT CENTER</span>
              </div>

              {/* Orbiting Nodes */}
              {careRoles.map((node, index) => {
                const angle = (index * (360 / careRoles.length)) * (Math.PI / 180);
                const radius = 130; // radius of orbit in pixels
                const x = Math.round(radius * Math.cos(angle));
                const y = Math.round(radius * Math.sin(angle));
                const isSelected = selectedNode === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-115 z-20 cursor-pointer shadow-md group ${
                      isSelected
                        ? 'bg-brand-teal text-[#061324] ring-4 ring-brand-teal/20 border-transparent shadow-brand-teal/30 scale-110'
                        : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`
                    }}
                    title={node.title}
                  >
                    {getIconForNode(node.id, isSelected)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Role Explanation Side Card */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div>
              <span className="text-[10px] font-mono font-semibold tracking-widest text-brand-teal uppercase block mb-1">
                COORDINATED CIRCLE OF CARE
              </span>
              <h3 className="font-serif text-2xl lg:text-3xl font-extrabold text-[#061324] tracking-tight">
                No clinical player is isolated.
              </h3>
              <p className="text-slate-600 text-base mt-2 leading-relaxed font-sans font-normal">
                HomeMed centers the entire clinical, coordination, and familial support loop around the patient’s physical recovering state.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-150 relative overflow-hidden transition-all duration-300 min-h-[160px] shadow-inner">
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-brand-teal/10 border border-brand-teal/20 text-[#0c706d]">
                  {getIconForNode(selectedRole.id, false)}
                </div>
                <h4 className="font-serif font-extrabold text-slate-900 text-lg">
                  {selectedRole.title}
                </h4>
              </div>
              
              <p className="text-[11px] text-brand-teal font-mono font-semibold mb-2 uppercase tracking-wide">
                Role: {selectedRole.description}
              </p>
              
              <p className="text-sm text-slate-700 leading-relaxed font-sans font-normal">
                {selectedRole.details}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-mono text-slate-400">
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-1.5"></span> Interactive Care Circle</span>
              <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-1.5"></span> Protocol Synchronization</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

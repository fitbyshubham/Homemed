import React from 'react';

/**
 * Optima Icon (Image asset in JPEG format)
 */
export function OptimaIcon({ className = "w-10 h-10" }: { className?: string; darkBg?: boolean }) {
  return (
    <img 
      src="/assets/optima.jpeg"
      alt="Optima logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-lg`}
    />
  );
}

/**
 * Optima Full Logo with Text "optima beyond hospitals"
 */
export function OptimaFullLogo({ className = "h-12", darkBg = true }: { className?: string; darkBg?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col text-left">
        <div className="flex items-center font-sans tracking-tight select-none">
          {/* Circular lowercase 'o' in lime green */}
          <span className="text-3xl font-black text-[#8ae225] leading-none">o</span>
          {/* Lowercase 'ptima' in contrasting color */}
          <span className={`text-2xl font-bold font-serif leading-none ml-[1px] tracking-tight ${darkBg ? "text-white" : "text-[#061324]"}`}>ptima</span>
        </div>
        <div className="text-[9px] font-mono tracking-wider leading-none mt-1 uppercase select-none">
          <span className={darkBg ? "text-slate-300" : "text-slate-600"}>beyond </span>
          <span className="text-[#8ae225] font-black">hospitals</span>
        </div>
      </div>
      <OptimaIcon className="w-9 h-9 shrink-0" />
    </div>
  );
}

/**
 * LIVYA Icon (Image asset in JPEG format)
 */
export function LivyaIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src="/assets/livya.jpeg"
      alt="Livya logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-lg`}
    />
  );
}

/**
 * LIVYA Full Logo: styled text with "L I V Y Ʌ" and subtitle "RECOVERY REIMAGINED"
 */
export function LivyaFullLogo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center text-left ${className}`}>
      <div className="flex items-center gap-[4px] sm:gap-[6px] text-[#159d9a] select-none">
        {/* Customized vector letters for L, I, V, Y, Ʌ with proper padding */}
        <span className="text-2xl font-light font-sans tracking-[0.2em]">LIVY</span>
        {/* Custom caret A symbol */}
        <span className="text-2.5xl font-extrabold tracking-normal">Ʌ</span>
      </div>
      <div className="flex items-center gap-2 mt-1 w-full select-none">
        <div className="h-[1px] bg-[#159d9a]/50 flex-grow"></div>
        <span className="text-[7.5px] font-mono font-bold tracking-[0.25em] text-slate-350 uppercase white-space-nowrap shrink-0">
          RECOVERY REIMAGINED
        </span>
        <div className="h-[1px] bg-[#159d9a]/50 flex-grow"></div>
      </div>
    </div>
  );
}

/**
 * RESTORE Icon (Image asset in JPEG format)
 */
export function RestoreIcon({ className = "w-10 h-10" }: { className?: string; darkBg?: boolean }) {
  return (
    <img 
      src="/assets/restore.jpeg"
      alt="Restore logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain rounded-lg`}
    />
  );
}

/**
 * RESTORE Full Logo: R + "RESTORE - GET THERE"
 */
export function RestoreFullLogo({ className = "h-12", darkBg = true }: { className?: string; darkBg?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <RestoreIcon className="w-9 h-9 shrink-0" />
      <div className="flex flex-col text-left select-none">
        <span className={`text-2xl font-black tracking-[0.08em] font-sans ${darkBg ? "text-white" : "text-[#061324]"}`}>
          RESTORE
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="h-[1px] bg-[#159d9a] w-3"></div>
          <span className="text-[8px] font-mono font-extrabold tracking-[0.2em] text-[#159d9a]">
            GET THERE
          </span>
          <div className="h-[1px] bg-[#159d9a] w-3"></div>
        </div>
      </div>
    </div>
  );
}

/**
 * Master ProgramLogo component that chooses based on program name
 */
export function ProgramLogo({ 
  name, 
  className = "w-10 h-10", 
  darkBg = true,
  full = false
}: { 
  name: string; 
  className?: string; 
  darkBg?: boolean;
  full?: boolean;
}) {
  const normName = name.toUpperCase();
  
  if (full) {
    if (normName === 'OPTIMA') return <OptimaFullLogo className={className} darkBg={darkBg} />;
    if (normName === 'LIVYA') return <LivyaFullLogo className={className} />;
    return <RestoreFullLogo className={className} darkBg={darkBg} />;
  }
  
  if (normName === 'OPTIMA') return <OptimaIcon className={className} />;
  if (normName === 'LIVYA') return <LivyaIcon className={className} />;
  return <RestoreIcon className={className} />;
}

import { useState, useEffect } from 'react';
import { Activity, Radio, AlertTriangle, Play, RotateCcw, MessageSquareCode, ShieldCheck, Heart, ShieldAlert } from 'lucide-react';

export default function RemotePatientMonitoring() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  // Real-time signals state
  const [spo2, setSpo2] = useState<number>(97);
  const [heartRate, setHeartRate] = useState<number>(76);

  // Sound/Vibration indicator state for aesthetic realism
  const [pulseTick, setPulseTick] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        if (step === 0) {
          setSpo2(96);
          setHeartRate(78);
          setStep(1);
          setLogs(['[2:14 AM] Connected standard wearable streams nominal telemetry: SpO2 96%, HR 78bpm']);
        } else if (step === 1) {
          setSpo2(91); // dropping
          setHeartRate(88); // heart rate compensating
          setStep(2);
          setLogs(prev => [
            ...prev,
            '[2:17 AM] EXCEPTION: SpO2 dips below critical 92% boundary (Value: 91%)',
            '[2:17 AM] HMOS Ingestion: Real-time telemetry flagged anomaly, executing clinical rule engine...'
          ]);
        } else if (step === 2) {
          setSpo2(89); // dangerous drop
          setHeartRate(105); // heart rate pacing high
          setStep(3);
          setLogs(prev => [
            ...prev,
            '[2:18 AM] ALERT ENFORCED: Escalation engine activated. Triage level: HIGH PRIORITY.',
            '[2:18 AM] Dispatching encrypted paging signal to Nursing Supervisor and On-Call Medical Officer.'
          ]);
        } else if (step === 3) {
          setSpo2(94); // stabilising due to intervention (e.g. oxygen)
          setHeartRate(82);
          setStep(4);
          setLogs(prev => [
            ...prev,
            '[2:25 AM] CLINICAL ACTION: Ward Supervisor coordinated with family, initiated nasal cannula oxygen.',
            '[2:32 AM] Vitals stabilised. Surgeon dashboard updated. Avoided physical ER readmission.'
          ]);
          setIsPlaying(false);
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, step]);

  // Looping aesthetic ticker to simulate a heartbeat sound beat
  useEffect(() => {
    const rateMs = Math.max(400, Math.min(1000, (60 / heartRate) * 1000));
    const tickInterval = setInterval(() => {
      setPulseTick(prev => !prev);
      setTimeout(() => setPulseTick(prev => !prev), 120);
    }, rateMs);
    return () => clearInterval(tickInterval);
  }, [heartRate]);

  const startSimulation = () => {
    setStep(0);
    setIsPlaying(true);
    setLogs(['[2:14 AM] Launching telemetry sensor ingest engine...']);
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    setStep(0);
    setSpo2(97);
    setHeartRate(76);
    setLogs([]);
  };

  // Determine colors based on saturation
  const getSimColorClass = () => {
    if (spo2 < 90) return 'text-rose-500 border-rose-500';
    if (spo2 < 93) return 'text-amber-500 border-amber-500';
    return 'text-emerald-400 border-emerald-400';
  };

  const getWaveStroke = () => {
    if (spo2 < 90) return '#ef4444'; // Red
    if (spo2 < 93) return '#f59e0b'; // Amber
    return '#10b981'; // Green
  };

  // Build a custom SVG ECG drawing coordinates depending on heart rate
  // P-Q-R-S-T sequence coordinates
  const waveDuration = heartRate > 90 ? '0.8s' : heartRate > 80 ? '1.2s' : '1.5S';

  return (
    <section id="rpm-protocol" className="relative py-20 sm:py-28 bg-[#061324] text-white grid-bg-overlay border-b border-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-[10%] w-72 h-72 rounded-full bg-brand-teal/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/20 rounded-full px-3.5 py-1.5 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping"></span>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-brand-teal uppercase">
              REMOTE PATIENT MONITORING
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 leading-tight tracking-tight">
           We watch your vitals even while you sleep.
          </h2>
          <p className="mt-4 text-slate-150 text-slate-200 text-lg sm:text-xl leading-relaxed font-sans font-normal">
            The most critical moments are between nurse visits. HomeMed bridges that gap with 24/7
monitoring.
          </p>
        </div>

        {/* Multi-grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Traditional Nursing Comparison (2 AM Scenario) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            <div className="bg-[#09182a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center space-x-3 text-brand-gold text-xs font-mono font-bold tracking-widest uppercase">
                <AlertTriangle className="w-5 h-5 text-brand-gold" />
                <span>Why it matters</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-white tracking-tight leading-snug">
                 The 2:00 AM Example:
              </h3>

              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15.5px] text-slate-200 leading-relaxed font-sans font-normal">
                   <span className="font-bold text-white underline underline-offset-4 decoration-rose-500">Imagine a patient’s oxygen drops during sleep.</span>
                </p>

                <div className="border border-brand-gold/25 bg-brand-gold/10 rounded-xl p-4 space-y-1.5 hover:border-brand-gold/45 transition-all duration-300">
                  <span className="text-[11px] sm:text-xs font-mono text-brand-gold font-black uppercase tracking-wider block">
                    Without HomeMed
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-sans font-normal leading-relaxed">
                    <span className="text-white font-semibold">The family finds out at 8:00 AM. Six hours of low oxygen leads to a rushed
ICU readmission.</span> 
                  </p>
                </div>

                <div className="border border-brand-teal/25 bg-brand-teal/10 rounded-xl p-4 space-y-1.5 hover:border-brand-teal/45 transition-all duration-300">
                  <span className="text-[11px] sm:text-xs font-mono text-brand-teal font-black uppercase tracking-wider block">
                    With HomeMed 
                  </span>
                  <p className="text-xs sm:text-sm text-slate-100 font-sans font-normal leading-relaxed">
                    <span className="text-white font-semibold">The sensor alerts our team at 2:17 AM. A doctor starts oxygen support within 15
minutes. The patient recovers safely at home.</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Static Sequence Flow Diagram */}
            <div className="bg-[#09182a] p-5.5 rounded-2xl border border-slate-800/80 flex flex-col justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                {[
                  { id: '1', title: 'Vitals Ingest', desc: 'Sensors read data.' },
                  { id: '2', title: 'HMOS Triage', desc: 'Rules engine checks for risks.' },
                  { id: '3', title: 'Alert Escalated', desc: 'Nurse is paged.' },
                  { id: '4', title: 'Clinical Care', desc: 'Action is taken.' }
                ].map((s, idx) => (
                  <div key={idx} className="space-y-1 bg-slate-950/80 p-2.5 rounded-lg border border-slate-850 hover:border-slate-700 transition-colors">
                    <span className="text-[9px] font-mono text-brand-teal font-extrabold block">STAGE {s.id}</span>
                    <p className="text-[10px] font-serif font-black text-slate-200">{s.title}</p>
                    <p className="text-[9px] text-slate-500 font-mono tracking-tight leading-none mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Block: Live Simulation Machine */}
          <div className="lg:col-span-8 bg-[#09182a] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Simulation Controls Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 mb-6 gap-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${isPlaying ? 'bg-rose-500/10 text-rose-400 animate-pulse' : 'bg-brand-teal/10 text-brand-teal'}`}>
                    <Radio className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-white flex items-center space-x-2">
                      <span> Live Simulator</span>
                      {isPlaying && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-mono font-black bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-widest animate-pulse">
                          STREAMING LIVE
                        </span>
                      )}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-mono">Watch how our system works in real-time:</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {!isPlaying && step === 0 ? (
                    <button
                      onClick={startSimulation}
                      className="px-4.5 py-2.5 bg-brand-teal hover:bg-brand-teal-dark active:scale-95 text-[#061324] font-bold text-xs rounded-full flex items-center space-x-1.5 transition-all shadow-lg shadow-brand-teal/15 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Trigger 2 AM Incident</span>
                    </button>
                  ) : (
                    <button
                      onClick={resetSimulation}
                      className="px-4.5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-xs rounded-full flex items-center space-x-1.5 transition-all cursor-pointer hover:bg-slate-800"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Simulation</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Advanced Interactive ECG Waveform Monitor screen */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850/80 mb-6 relative overflow-hidden group">
                <div className="absolute top-3 right-3 flex items-center space-x-2 text-[8px] font-mono font-bold tracking-widest uppercase">
                  <span className={`w-2 h-2 rounded-full ${pulseTick ? 'bg-red-500 scale-125' : 'bg-red-950'} transition-all duration-100`}></span>
                  <span className="text-slate-500">ECG CRITICAL MONITOR</span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-4 text-[10px] font-mono text-slate-500">
                    <span className="flex items-center"><Activity className="w-3 h-3 text-brand-teal mr-1" /> MODE: CONTINUOUS</span>
                    <span>SWEEP: 25 mm/s</span>
                  </div>
                </div>

                {/* Pulsing ECG line SVG */}
                <div className="h-28 w-full border border-slate-900 bg-slate-950/90 rounded-lg relative overflow-hidden flex items-center">
                  {/* Grid Lines in background */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(#159d9a 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                  }}></div>

                  {/* SVG Wave */}
                  <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 30">
                    {/* Glowing pulse line */}
                    <path
                      d="M 0 15 L 10 15 L 18 15 Q 21 15 22 13 T 23 15 L 26 15 L 28 5 L 30 28 L 32 15 L 35 15 Q 38 15 40 17 T 42 15 L 50 15 L 58 15 Q 61 15 62 13 T 63 15 L 66 15 L 68 5 L 70 28 L 72 15 L 75 15 Q 78 15 80 17 T 82 15 L 90 15 L 100 15"
                      fill="none"
                      stroke={getWaveStroke()}
                      strokeWidth="0.85"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      className="origin-center"
                      style={{
                        animation: `dash 1.4s linear infinite`,
                        animationDuration: waveDuration
                      }}
                    />
                  </svg>
                  
                  {/* CSS keyframe animation injected directly */}
                  <style>{`
                    @keyframes dash {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}</style>
                </div>
              </div>

              {/* Signals Dashboard Panel */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                
                {/* SpO2 Widget */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-850 relative overflow-hidden">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>PATIENT SATURATION (SpO2)</span>
                    <span className="font-semibold text-slate-500">Normal: &gt;94%</span>
                  </div>
                  <div className="flex items-baseline space-x-2 mt-1.5">
                    <span className={`text-4xl font-mono font-bold tracking-tight ${
                      spo2 < 92 ? 'text-rose-500 animate-pulse font-black' : 'text-emerald-400 font-bold'
                    }`}>
                      {spo2}%
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Real-time</span>
                  </div>
                  <div className="mt-3.5 w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        spo2 < 92 ? 'bg-rose-500' : 'bg-emerald-400'
                      }`}
                      style={{ width: `${spo2}%` }}
                    ></div>
                  </div>
                </div>

                {/* Heart Rate Widget */}
                <div className="bg-slate-950 rounded-2xl p-4 border border-slate-850 relative overflow-hidden">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                    <span>HEART RATE (HR)</span>
                    <span className="font-semibold text-slate-500">Normal: 60-90</span>
                  </div>
                  <div className="flex items-baseline space-x-2 mt-1.5">
                    <span className={`text-4xl font-mono font-bold tracking-tight ${
                      heartRate > 85 ? 'text-rose-450 text-rose-400 animate-pulse font-black' : 'text-brand-teal'
                    }`}>
                      {heartRate} <span className="text-xs">bpm</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono inline-flex items-center">
                      <Heart className={`w-3 h-3 text-rose-500 mr-1 ${isPlaying ? 'animate-ping' : ''}`} /> Sense
                    </span>
                  </div>
                  <div className="mt-3.5 w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        heartRate > 85 ? 'bg-rose-400' : 'bg-brand-teal'
                      }`}
                      style={{ width: `${(heartRate / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Active Simulation Terminal Logs */}
            <div className="flex-grow flex flex-col justify-end">
              <div className="bg-slate-950 rounded-2xl p-4 sm:p-5 border border-slate-850 font-mono text-xs text-slate-300 min-h-[170px] flex flex-col justify-between">
                
                {/* Simulated Output Lines */}
                <div className="space-y-2.5">
                  {logs.length === 0 ? (
                    <div className="text-slate-500 text-center py-6">
                      <MessageSquareCode className="w-8 h-8 text-slate-700 mx-auto mb-2" />
                      <p className="text-[13px] leading-relaxed max-w-md mx-auto text-slate-350 text-slate-300 font-medium">
                        System ready. Click "Trigger 2 AM Incident" above to initiate a cardiac/oxygen deterioration scenario at home and observe HMOS automatic escalations.
                      </p>
                    </div>
                  ) : (
                    logs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`leading-relaxed border-l-2 pl-3 py-0.5 text-[11.5px] ${
                          log.includes('EXCEPTION')
                            ? 'border-rose-500 text-rose-400 font-bold'
                            : log.includes('ALERT')
                            ? 'border-brand-gold text-brand-gold font-semibold'
                            : log.includes('ACTION')
                            ? 'border-emerald-500 text-emerald-400 font-bold'
                            : 'border-slate-800 text-slate-400'
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>

                {/* Terminal Status bar */}
                <div className="mt-4 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
                  <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-rose-500 animate-ping' : 'bg-brand-teal'}`}></span>
                    <span>{isPlaying ? 'EMERGENCY SCENARIO MODE' : 'HMOS ENGINE CONNECTED'}</span>
                  </div>
                  <span>INGEST_INDEX: 40228_NODE_V4</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

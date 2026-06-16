import { CareRole, PatientReferral } from './types';

export const careRoles: CareRole[] = [
  {
    id: 'n1',
    title: 'Primary Doctor',
    description: 'Direct clinical governance.',
    details: 'Receives key alerts and progress summaries, maintaining final authority over recovery milestones without day-to-day administrative burdens.'
  },
  {
    id: 'n2',
    title: 'RPM Devices',
    description: 'Continuous vitals feed.',
    details: 'Connected devices stream SpO2, heart rate, blood pressure, and temperature directly into HomeMed OS to build a secure clinical signal.'
  },
  {
    id: 'n3',
    title: 'Family Visibility',
    description: 'Reassurance and updates.',
    details: 'Eliminates anxiety through daily visit summaries, milestone track records, and automated touchpoints detailing real progress.'
  },
  {
    id: 'n4',
    title: 'Physiotherapist',
    description: 'Mobility and strength recovery.',
    details: 'Coordinates and tracks daily physical recovery, inputting actual session completion metrics directly into the goals engine.'
  },
  {
    id: 'n5',
    title: 'Nurse',
    description: 'Direct clinical support.',
    details: 'Executes hands-on wound care, medication management, and daily clinical checks, guided by predefined clinical protocols.'
  },
  {
    id: 'n6',
    title: 'Care Coordinator',
    description: 'Central journey alignment.',
    details: 'Manages scheduling, device calibration, equipment delivery, and synchronizes care teams into a unified rhythm.'
  },
  {
    id: 'n7',
    title: 'Medical Supervisor',
    description: 'Continuous plan oversight.',
    details: 'Monitors the patient’s clinical trajectory daily, advising nurses and ensuring adherence to surgical team directives.'
  },
  {
    id: 'n8',
    title: 'Emergency Escalation',
    description: '24/7 reactive safety net.',
    details: 'Instantly triages anomaly detections from connected RPM devices to prevent avoidable hospital readmissions.'
  }
];

export const platformPillars = [
  {
    num: '01',
    title: 'Recovery Goals Engine',
    desc: 'Personalised, measurable milestones set at program enrolment and tracked daily against live recovery protocols.'
  },
  {
    num: '02',
    title: 'Clinical Protocols',
    desc: 'Structured, evidence-based care plans that replace ad-hoc home visits with a standardized, outcomes-driven pathway.'
  },
  {
    num: '03',
    title: 'Care Coordination',
    desc: 'Bridges distance between surgeons, nurses, physiotherapists, and families by aligning everyone to a unified recovery plan.'
  },
  {
    num: '04',
    title: 'Escalation Engine',
    desc: 'Observation-to-action alerts with severity triage guidelines, ensuring rapid medical intervention before conditions worsen.'
  },
  {
    num: '05',
    title: 'RPM Integration',
    desc: 'Vitals captured by connected in-home sensors stream directly into HMOS to trigger alerts and detect subtle clinical trends.'
  },
  {
    num: '06',
    title: 'Doctor Dashboard',
    desc: 'Remote governance hub for referring doctors to review patient compliance, milestones, and vital signs with zero friction.'
  },
  {
    num: '07',
    title: 'Family Visibility',
    desc: 'Direct access to milestone updates and coordinator notes, giving families constant peace of mind throughout the journey.'
  },
  {
    num: '08',
    title: 'Recovery Analytics',
    desc: 'Aggregates outcomes, medication adherence, pain indexes, and mobility ratings to measure real recovery performance.'
  }
];

export const initialReferrals: PatientReferral[] = [
  {
    id: 'ref-101',
    patientName: 'Aravind Swamy',
    patientAge: 64,
    contactNumber: '+91 94432 10850',
    selectedProgram: 'OPTIMA',
    primaryDiagnosis: 'CABG / Post-ICU Step-down',
    acuityLevel: 'High',
    status: 'Active Support',
    submittedAt: '2026-05-30T10:30:00Z'
  },
  {
    id: 'ref-102',
    patientName: 'Minati Sen',
    patientAge: 58,
    contactNumber: '+91 98300 45211',
    selectedProgram: 'LIVYA',
    primaryDiagnosis: 'Total Knee Arthroplasty (TKA)',
    acuityLevel: 'Medium',
    status: 'Onboarding Scheduled',
    submittedAt: '2026-05-31T14:15:00Z'
  }
];

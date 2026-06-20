import { CareRole, PatientReferral } from './types';

export const careRoles: CareRole[] = [
  {
    id: 'n1',
    title: 'Primary Doctor',
    description: 'Direct clinical governance.',
    details: 'Gets critical alerts and summary reports to make final decisions.'
  },
  {
    id: 'n2',
    title: 'RPM Devices',
    description: 'Continuous vitals feed.',
    details: 'Smart gadgets send vitals (heart rate, SpO2) directly to the system.'
  },
  {
    id: 'n3',
    title: 'Family',
    description: 'Reassurance and updates.',
    details: 'Gets daily updates to ease anxiety and stay informed.'
  },
  {
    id: 'n4',
    title: 'Physiotherapist',
    description: 'Mobility and strength recovery.',
    details: 'appointments and tracking/monitoring daily physical recovery progress.'
  },
  {
    id: 'n5',
    title: 'Nurse',
    description: 'Direct clinical support.',
    details: 'Provides hands-on wound care and checks vitals, attending to patient needs when needed - all this and more on a single dashboard visible to all stakeholders involved in the recovery journey'
  },
  {
    id: 'n6',
    title: 'Care Coordinator',
    description: 'Central journey alignment.',
    details: 'Handles scheduling, device setup, and team sync.'
  },
  {
    id: 'n7',
    title: 'Medical Supervisor',
    description: 'Continuous plan oversight.',
    details: 'Reviews the patient&#39;s daily progress and guides nurses.'
  },
  {
    id: 'n8',
    title: 'Emergency Escalation',
    description: '24/7 reactive safety net.',
    details: 'Immediately triggers help if RPM devices detect a problem.'
  }
];

export const platformPillars = [
  {
    num: '01',
    title: 'Recovery Goals',
    desc: 'Daily, personal milestones (e.g., &quot;walk 5 minutes today&quot;).'
  },
  {
    num: '02',
    title: 'Clinical Protocols',
    desc: 'Doctor-approved care plans that replace random home visits.'
  },
  {
    num: '03',
    title: 'Care Coordination',
    desc: 'Connects your doctor nurse, physiotherapist, Nutritionist, councellor and family on a single platform'
  },
  {
    num: '04',
    title: 'Escalation Engine',
    desc: 'Alerts medical teams immediately in case of any emergency.'
  },
  {
    num: '05',
    title: 'RPM Integration',
    desc: 'Smart sensors (SpO2, heart rate) stream data directly to your doctors.'
  },
  {
    num: '06',
    title: 'Doctor Dashboard',
    desc: 'A simple remote view for doctors to check your progress.'
  },
  {
    num: '07',
    title: 'Family Visibility',
    desc: 'Daily updates so your loved ones stay worry-free.'
  },
  {
    num: '08',
    title: 'Recovery Analytics',
    desc: 'Tracks real progress like medication adherence and mobility among other needs of a recovering patient.'
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

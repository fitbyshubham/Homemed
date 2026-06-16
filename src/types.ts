export interface PatientReferral {
  id: string;
  patientName: string;
  patientAge: number;
  contactNumber: string;
  selectedProgram: 'LIVYA' | 'OPTIMA' | 'RESTORE';
  primaryDiagnosis: string;
  acuityLevel: 'Low' | 'Medium' | 'High';
  status: 'In Review' | 'Onboarding Scheduled' | 'Active Support' | 'Completed';
  submittedAt: string;
}

export interface MetricComponent {
  label: string;
  value: number;
  color: string;
}

export interface CareRole {
  id: string;
  title: string;
  description: string;
  details: string;
}

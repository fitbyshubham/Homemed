import emailjs from '@emailjs/browser';

interface ReferralEmailData {
  id: string;
  patientName: string;
  patientAge: number;
  contactNumber: string;
  selectedProgram: string;
  primaryDiagnosis: string;
  acuityLevel: string;
  submittedAt: string;
}

interface CareerApplicationData {
  id: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  desiredRole: string;
  experienceLevel: string;
  resumeUrl: string;
  coverNote: string;
  submittedAt: string;
}

export async function sendReferralEmail(data: ReferralEmailData) {
  // Read runtime environment variables
  const env = (import.meta as any).env || {};
  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    patient_id: data.id,
    patient_name: data.patientName,
    patient_age: data.patientAge,
    contact_number: data.contactNumber,
    selected_program: data.selectedProgram,
    primary_diagnosis: data.primaryDiagnosis,
    acuity_level: data.acuityLevel,
    submitted_at: new Date(data.submittedAt).toLocaleString(),
    to_email: 'shubhamshrm02@gmail.com', // Target recipient email requested by the user
    reply_to: data.contactNumber,
  };

  // If environment configurations are missing, we fall back gracefully.
  // We log clearly in the console so that developers can configure it easily,
  // while ensuring the UI workflow proceeds uninterrupted.
  if (!serviceId || !templateId || !publicKey) {
    console.info(
      `%c [EmailJS Service] Active Integration Warning `,
      `background: #eab308; color: #000; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.info(
      `EmailJS credentials have not yet been fully configured in .env or the workspace's Cloud Run variables.\n` +
      `We intercepted the submission and printed the automated tracking payload below:\n` +
      `Recipient: shubhamshrm02@gmail.com`
    );
    console.table(templateParams);
    return { success: false, error: 'EmailJS keys are unconfigured' };
  }

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.info(
      `%c [EmailJS Success] Referral dispatched securing pathway `,
      `background: #10b981; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.log('Status Code:', result.status, 'Message:', result.text);
    return { success: true, result };
  } catch (err) {
    console.error(
      `%c [EmailJS Error] Failed to dispatch email automatically `,
      `background: #ef4444; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.error(err);
    return { success: false, error: err };
  }
}

export async function sendCareersEmail(data: CareerApplicationData) {
  // Read runtime environment variables
  const env = (import.meta as any).env || {};
  const serviceId = env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    application_id: data.id,
    applicant_name: data.applicantName,
    applicant_email: data.applicantEmail,
    applicant_phone: data.applicantPhone,
    desired_role: data.desiredRole,
    experience_level: data.experienceLevel,
    resume_url: data.resumeUrl,
    cover_note: data.coverNote,
    submitted_at: new Date(data.submittedAt).toLocaleString(),
    to_email: 'shubhamshrm02@gmail.com', // Target recipient email requested by the user
    reply_to: data.applicantEmail,
  };

  // If environment configurations are missing, we fall back gracefully.
  if (!serviceId || !templateId || !publicKey) {
    console.info(
      `%c [EmailJS Service] Careers Integration Warning `,
      `background: #eab308; color: #000; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.info(
      `EmailJS credentials have not yet been fully configured in .env.\n` +
      `We intercepted the Careers application and printed the automated tracking payload below:\n` +
      `Recipient: shubhamshrm02@gmail.com`
    );
    console.table(templateParams);
    return { success: false, error: 'EmailJS keys are unconfigured' };
  }

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.info(
      `%c [EmailJS Success] Career Application dispatched successfully `,
      `background: #10b981; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.log('Status Code:', result.status, 'Message:', result.text);
    return { success: true, result };
  } catch (err) {
    console.error(
      `%c [EmailJS Error] Failed to dispatch career application automatically `,
      `background: #ef4444; color: #fff; font-weight: bold; padding: 4px; border-radius: 4px;`
    );
    console.error(err);
    return { success: false, error: err };
  }
}

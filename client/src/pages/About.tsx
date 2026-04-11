import DoctorProfile from '@/components/sections/DoctorProfile';
import CTASection from '@/components/sections/CTASection';

export default function About() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Doctor</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Learn more about the expertise and dedication behind VitalCare Clinic.
          </p>
        </div>
      </div>
      <DoctorProfile />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Our Philosophy</h2>
          <p className="text-slate-600 leading-relaxed">
            At VitalCare, we believe that healthcare is more than just treating symptoms. It's about understanding the person behind the patient. Our approach combines the latest medical advancements with a compassionate, patient-centered philosophy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-slate-50 rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Patient-First Care</h3>
              <p className="text-sm text-slate-600">Every treatment plan is tailored to your unique needs and lifestyle.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border">
              <h3 className="font-bold text-xl mb-2">Modern Technology</h3>
              <p className="text-sm text-slate-600">We use state-of-the-art diagnostic and treatment equipment.</p>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}


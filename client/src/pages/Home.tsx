import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import DoctorProfile from '@/components/sections/DoctorProfile';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <Hero />
      <Services />
      <DoctorProfile />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </div>
  );
}


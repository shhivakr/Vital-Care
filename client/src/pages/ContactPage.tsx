import ContactSection from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            We're here to help. Reach out to us for any inquiries or to book your visit.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}


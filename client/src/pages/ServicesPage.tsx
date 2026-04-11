import Services from '@/components/sections/Services';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Comprehensive healthcare solutions tailored for you and your family.
          </p>
        </div>
      </div>
      <Services />
      <div className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Our Services?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Doctors', desc: 'Our team consists of highly qualified and experienced medical professionals.' },
              { title: 'Affordable Pricing', desc: 'Quality healthcare shouldn\'t break the bank. We offer competitive rates.' },
              { title: 'Emergency Support', desc: 'We are here when you need us most with dedicated emergency assistance.' }
            ].map((item) => (
              <div key={item.title} className="text-center space-y-2">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTASection />
    </div>
  );
}


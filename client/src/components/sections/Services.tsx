import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, UserRound, Sparkles, Baby, Brain, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'General Consultation',
    description: 'Comprehensive health checkups and personalized medical advice for all ages.',
    icon: UserRound,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Dental Care',
    description: 'Advanced dental treatments including cleaning, whitening, and restorative care.',
    icon: Sparkles,
    color: 'bg-teal-100 text-teal-600',
  },
  {
    title: 'Pediatrics',
    description: 'Specialized medical care for infants, children, and adolescents.',
    icon: Baby,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Dermatology',
    description: 'Expert treatment for skin, hair, and nail conditions with modern technology.',
    icon: HeartPulse,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Mental Health',
    description: 'Compassionate counseling and psychiatric support for emotional well-being.',
    icon: Brain,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Diagnostic Lab',
    description: 'Fast and accurate laboratory testing and diagnostic imaging services.',
    icon: Activity,
    color: 'bg-orange-100 text-orange-600',
  },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
        <p className="text-slate-600">
          We offer a wide range of medical services to ensure you and your family receive the best possible care under one roof.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow border-slate-100 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-primary font-semibold text-sm hover:underline">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

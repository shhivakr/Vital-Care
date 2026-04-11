import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Patient',
    content: 'The care I received at VitalCare was exceptional. Dr. Johnson took the time to listen to my concerns and provided a clear treatment plan.',
    rating: 5,
    image: 'https://picsum.photos/seed/p1/100/100',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient',
    content: 'Best dental experience ever! The staff is friendly, and the clinic is spotless. I highly recommend their services to everyone.',
    rating: 5,
    image: 'https://picsum.photos/seed/p2/100/100',
  },
  {
    name: 'David Wilson',
    role: 'Patient',
    content: 'I brought my son here for a pediatric checkup. The doctors are so gentle and patient with kids. It made the visit stress-free.',
    rating: 5,
    image: 'https://picsum.photos/seed/p3/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-slate-600">
            Don't just take our word for it. Here are some stories from patients who trusted us with their health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden border-slate-100">
                <CardContent className="pt-12 pb-8 px-8">
                  <Quote className="absolute top-6 right-8 h-12 w-12 text-slate-100" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

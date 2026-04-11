import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Award, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function DoctorProfile() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/doctor-profile/600/800"
                alt="Dr. Sarah Johnson"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-yellow-500" />
                <p className="font-bold text-lg">Top Rated</p>
              </div>
              <p className="text-sm text-slate-500">Voted Best Physician 2023</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="mb-4">Lead Physician</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Dr. Sarah Johnson</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 15 years of experience in internal medicine, Dr. Johnson is dedicated to providing compassionate and evidence-based care to her patients. She believes in a holistic approach to health.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Education</h4>
                  <p className="text-sm text-slate-500">Harvard Medical School</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Experience</h4>
                  <p className="text-sm text-slate-500">15+ Years Practice</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl">Specializations</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Internal Medicine',
                  'Preventive Healthcare',
                  'Chronic Disease Management',
                  'Wellness Counseling',
                  'Geriatric Care',
                  'Nutrition & Lifestyle'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

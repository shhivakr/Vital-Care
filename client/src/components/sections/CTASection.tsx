import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden"
      >
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Start Your Journey to Better Health?
          </h2>
          <p className="text-lg md:text-xl text-blue-100">
            Don't wait for tomorrow. Book your appointment today and experience
            the difference of personalized healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-lg gap-2"
              asChild
            >
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                WhatsApp Appointment
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg gap-2 bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

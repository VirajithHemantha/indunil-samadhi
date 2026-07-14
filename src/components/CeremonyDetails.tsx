import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const CeremonyDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Premium ambient backdrop */}
      <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-brand-sakura/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="flex flex-col items-center justify-center gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="relative z-10 w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="text-brand-sakura-deep uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                The Sacred Union
              </span>
              <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-brand-sakura-deep/60 to-transparent" />
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display text-stone-800 mb-8 leading-[1.1] drop-shadow-sm">
              A Celebration of <br />
              <span className="italic font-light text-brand-sakura-deep">Tradition & Love</span>
            </h2>

            <p className="text-stone-500/90 font-serif text-lg sm:text-xl leading-relaxed mb-16 max-w-lg">
              We are honored to invite you to witness our union as we exchange vows in a traditional Poruwa ceremony, surrounded by the beauty of nature and the warmth of our loved ones.
            </p>

            {/* Premium Timeline */}
            <div className="relative space-y-12 ml-10 sm:ml-12 border-l-[1.5px] border-brand-sakura/30 pl-10 sm:pl-12 py-4">

              {/* Calendar */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Calendar className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Thursday, August 27</span>
                    <span className="text-xl sm:text-2xl font-sinhala">අගෝස්තු 27 බ්‍රහස්පතින්දා</span>
                  </h4>
                  <p className="text-stone-500/80 text-[14px] sm:text-[16px] uppercase tracking-[0.4em] font-bold">2026</p>
                </div>
              </div>

              {/* Clock */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <Clock className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>09:00 AM - 04:00 PM</span>
                    <span className="text-xl sm:text-2xl font-sinhala">පෙ.ව. 09:00 - ප.ව. 04:00</span>
                  </h4>
                  <p className="text-stone-500/80 text-[12px] sm:text-[14px] uppercase tracking-normal font-bold mt-1">Poruwa 9:44 AM</p>
                  <p className="text-stone-500/80 text-[14px] sm:text-[16px] uppercase tracking-normal font-bold font-sinhala mt-1">පෝරුවේ චාරිත්‍රය - 9:44 AM</p>
                </div>
              </div>

              {/* Location */}
              <div className="relative group">
                <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-brand-sakura/40 shadow-lg flex items-center justify-center group-hover:border-brand-sakura-deep group-hover:shadow-[0_4px_15px_rgba(251,113,133,0.3)] transition-all duration-500">
                  <MapPin className="w-5 h-5 text-brand-sakura-deep group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-sans text-2xl sm:text-3xl text-stone-800 mb-2 group-hover:text-brand-sakura-deep transition-colors duration-500 flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span>Lavenro garden</span>
                    <span className="text-xl sm:text-2xl font-sinhala">ලැවෙන්රෝ ගාඩ්න්</span>
                  </h4>
                  <p className="text-stone-500/80 text-[10px] sm:text-[11px] uppercase tracking-normal font-bold">Sri Lanka | ශ්‍රී ලංකාව</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </div>
  );
};


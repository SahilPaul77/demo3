// export default function AboutParallax() {
//   return (
//     <div className="w-full">

//       {/* SECTION 1 (Intro) */}
//       <section className="h-screen flex items-center justify-center bg-white">
//         <div className="text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold">
//             About Our Dental Clinic
//           </h1>
//           <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//             We combine science, aesthetics, and care to create beautiful smiles.
//           </p>
//         </div>
//       </section>

//       {/* PARALLAX SECTION 1 */}
//       <section
//         className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('/images/about-us.jpg')",
//         }}
//       >
//         <h2 className="text-white text-4xl md:text-5xl font-bold bg-black/50 px-6 py-4 rounded-xl">
//           Where Science Meets Art
//         </h2>
//       </section>

//       {/* SECTION 2 */}
//       <section className="h-screen flex items-center justify-center bg-gray-100">
//         <div className="max-w-2xl text-center px-6">
//           <p className="text-xl text-gray-700 leading-relaxed">
//             Our clinic is designed with luxury, comfort, and precision.
//             Every treatment is performed using advanced technology and expert care.
//           </p>
//         </div>
//       </section>

//       {/* PARALLAX SECTION 2 */}
//       <section
//         className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5')",
//         }}
//       >
//         <h2 className="text-white text-4xl md:text-5xl font-bold bg-black/50 px-6 py-4 rounded-xl">
//           Modern Dental Experience
//         </h2>
//       </section>

//       {/* SECTION 3 (CTA) */}
//       <section className="h-screen flex items-center justify-center bg-white">
//         <div className="text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             Book Your Appointment Today
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Your perfect smile is just one visit away.
//           </p>
//         </div>
//       </section>

//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function ParallaxPage() {
  return (
    <div className="w-full">

      {/* SECTION 1 */}
      <section className="h-screen flex flex-col items-center justify-center bg-stone-50">

        {/* Sub-label */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.6em] text-stone-400 mb-6 font-medium"
        >
          Excellence in Dentistry
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-serif text-slate-900 leading-tight text-center"
        >
          Welcome to <br />
          <span className="italic font-light text-stone-500">
            The Aura Clinic.
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-stone-300 mt-12"
        />
      </section>

      {/* PARALLAX SECTION 1 */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5')",
        }}
      >
        {/* Overlay Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-10 py-16 backdrop-blur-sm bg-slate-950/30 border border-white/10 max-w-4xl mx-6"
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl md:text-7xl font-serif leading-tight"
          >
            A Beautiful Smile <br />
            <span className="italic font-light text-stone-200">
              Begins with Vision.
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-stone-300 font-light text-sm md:text-lg tracking-wide max-w-lg mx-auto uppercase tracking-[0.2em]"
          >
            Bespoke care for the modern individual
          </motion.p>
        </motion.div>

        {/* Floating text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-10 right-10 hidden md:block"
        >
          <p className="text-white/40 text-[9px] uppercase tracking-[0.8em] rotate-90 origin-right whitespace-nowrap">
            Est. 2026 — Aesthetic Institute
          </p>
        </motion.div>
      </section>

    </div>
  );
}
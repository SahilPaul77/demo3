// import React from 'react';

// const WhyChooseUs = () => {
//   const features = [
//     {
//       number: "01",
//       title: "Digital Precision",
//       description: "Utilizing 3D intraoral scanning and AI-driven diagnostics for results that are mathematically perfect."
//     },
//     {
//       number: "02",
//       title: "Private Sanctuary",
//       description: "Our clinic is designed as a sound-proof retreat, ensuring your treatment is as peaceful as a spa visit."
//     },
//     {
//       number: "03",
//       title: "Master Artistry",
//       description: "Every veneer and restoration is hand-finished by master ceramists to match your natural facial symmetry."
//     }
//   ];

//   return (
//     <section className="relative">
//       {/* Parallax Background Layer */}
//       <div 
//         className="relative h-[600px] md:h-[800px] bg-fixed bg-center bg-cover flex items-center"
//         style={{ 
//           backgroundImage: `url('/luxury-dental-interior.jpg')`, // Use a dark, architectural clinic photo
//         }}
//       >
//         {/* Dark Sophisticated Overlay */}
//         <div className="absolute inset-0 bg-slate-950/70 backdrop-brightness-75" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-3xl">
//             <h2 className="text-stone-400 text-xs uppercase tracking-[0.5em] mb-6 font-medium">
//               The Aura Distinction
//             </h2>
//             <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-12">
//               Beyond Dentistry. <br />
//               <span className="italic text-stone-300">An Elevated Experience.</span>
//             </h3>
//           </div>
//         </div>
//       </div>

//       {/* Floating Feature Cards (Overlapping the Parallax) */}
//       <div className="container mx-auto px-6 -mt-32 relative z-20 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className={`p-10 md:p-16 border-stone-200 group hover:bg-slate-950 transition-colors duration-700 ${
//                 index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
//               }`}
//             >
//               <span className="block font-serif text-4xl text-stone-300 group-hover:text-stone-500 mb-8 transition-colors">
//                 {feature.number}
//               </span>
//               <h4 className="text-xl font-serif text-slate-900 group-hover:text-white mb-6 tracking-wide transition-colors">
//                 {feature.title}
//               </h4>
//               <div className="w-8 h-[1px] bg-stone-300 group-hover:bg-stone-600 mb-6 transition-all group-hover:w-16"></div>
//               <p className="text-sm leading-relaxed text-stone-500 group-hover:text-stone-400 transition-colors font-light">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



"use client";

export default function ParallaxPage() {
  return (
    <div className="w-full">

      {/* SECTION 1 */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">Welcome to Our Clinic</h1>
      </section>

      {/* PARALLAX SECTION 1 */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5')",
        }}
      >
        <h2 className="text-white text-5xl font-bold bg-black/50 px-6 py-3 rounded-xl">
          Beautiful Smile Starts Here
        </h2>
      </section>

      {/* SECTION 2 */}
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl max-w-xl text-center">
          We provide world-class dental care with modern technology and
          experienced doctors.
        </p>
      </section>

      {/* PARALLAX SECTION 2 */}
      <section
        className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606813907291-d86efa9b94db')",
        }}
      >
        <h2 className="text-white text-5xl font-bold bg-black/50 px-6 py-3 rounded-xl">
          Advanced Technology
        </h2>
      </section>

      {/* SECTION 3 */}
      <section className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl font-semibold">Book Your Appointment Today</h2>
      </section>

    </div>
  );
}
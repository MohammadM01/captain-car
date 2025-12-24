import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../Components/ScrollReveal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white pt-40 pb-0 relative">
            {/* Background Texture & Effects */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url(/assets/figma-img/bg-pattern.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />

            {/* Dynamic Light Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
            <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-red/15 to-transparent pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Indicator */}
                <div className="flex items-center gap-4 mb-8 opacity-50">
                    <div className="w-12 h-px bg-brand-red" />
                    <span className="text-xs font-bold uppercase tracking-[0.5em] text-brand-red">01 / Captain's Catalogue</span>
                </div>

                {/* Hero Section */}
                <ScrollReveal>
                    <div className="text-center mb-20 relative">
                        <div className="inline-block px-4 py-1 rounded-full border border-brand-red/30 bg-brand-red/5 text-brand-red text-sm font-bold uppercase tracking-[0.2em] mb-1 backdrop-blur-sm">
                            Expertise You Can Trust
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase mb-6 leading-none drop-shadow-2xl">
                            Our <span className="text-[#E31E24]">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed border-l-4 border-brand-red/50 pl-6 text-left md:text-center md:border-none md:pl-0">
                            We don't just upgrade cars; we transform them. Explore our comprehensive range of premium services designed for the ultimate driving experience.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-32">
                    {services.map((service, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                            <div
                                onClick={() => setSelectedService(service)}
                                className="h-[300px] bg-gradient-to-b from-[#1a0505] to-black border border-white/5 rounded-[2.5rem] p-8 hover:border-[#E31E24] hover:-translate-y-2 hover:shadow-[0_0_60px_-15px_rgba(227,30,36,0.4)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between cursor-pointer"
                            >
                                {/* Digital Corner Accents */}
                                <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#E31E24]/20 group-hover:border-[#E31E24] transition-colors" />
                                <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#E31E24]/20 group-hover:border-[#E31E24] transition-colors" />

                                {/* Hover Image Background */}
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[10s]" />
                                    {/* Heavy Dark Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                <div className="relative z-10 block">
                                    <div className="w-16 h-16 bg-black border border-[#E31E24]/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-colors duration-500">
                                        {/* Render SVG Icon */}
                                        <div className="text-[#E31E24] w-8 h-8 group-hover:text-white transition-colors duration-500">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-black text-white uppercase italic mb-2 tracking-tight group-hover:text-[#E31E24] transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-medium text-sm max-w-[80%] group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                                </div>

                                <div className="relative z-10 mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-[#E31E24]">Explore</span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] transition-all duration-300">
                                        <span className="text-white text-sm transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">→</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Service Detail Modal */}
                <div className={`fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-10 transition-all duration-500 ${selectedService ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setSelectedService(null)} />

                    {selectedService && (
                        <div className="bg-neutral-900 border border-white/10 w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col md:flex-row relative z-10 animate-in zoom-in-95 duration-500 shadow-[0_0_100px_-20px_rgba(227,30,36,0.2)]">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all z-20 group"
                            >
                                <span className="text-2xl group-hover:rotate-90 transition-transform">✕</span>
                            </button>

                            {/* Image Left */}
                            <div className="w-full md:w-[45%] h-[300px] md:h-auto bg-black relative flex items-center justify-center p-12">
                                <div className="absolute inset-0 bg-brand-red/5 animate-pulse" />
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(227,30,36,0.3)]"
                                />
                            </div>

                            {/* Content Right */}
                            <div className="flex-1 p-8 md:p-16 overflow-y-auto">
                                <h4 className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs mb-4">Service Details</h4>
                                <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-8 tracking-tighter decoration-brand-red underline underline-offset-8">
                                    {selectedService.title}
                                </h3>

                                <p className="text-xl text-white font-medium mb-10 leading-relaxed border-l-4 border-brand-red pl-8 italic">
                                    "{selectedService.description}"
                                </p>

                                <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
                                    <p>{selectedService.longDesc}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {selectedService.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_#E31E24]" />
                                            <span className="text-white font-bold uppercase text-xs tracking-widest">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ================= THE TRANSFORMATION PROCESS ================= */}
                <div className="mt-40 mb-40 relative">
                    <ScrollReveal>
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                                The <span className="text-[#E31E24]">Roadmap</span> to Perfection
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">From the first handshake to the final polish, here is how we redefine your vehicle.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent z-0" />

                        {[
                            { step: '01', title: 'Consultation', desc: 'Deep dive into your vision and technical requirements.' },
                            { step: '02', title: 'Design', desc: 'Material selection and digital layout planning.' },
                            { step: '03', title: 'Precision', desc: 'Expert installation and handcrafted fabrication.' },
                            { step: '04', title: 'Handover', desc: 'Final quality audit and client walkthrough.' }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 200}>
                                <div className="relative z-10 text-center flex flex-col items-center group">
                                    <div className="w-20 h-20 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand-red group-hover:shadow-[0_0_30px_rgba(227,30,36,0.3)] transition-all duration-500">
                                        <span className="text-2xl font-black text-brand-red">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white uppercase italic mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed px-4">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                {/* ================= FINAL CTA SECTION ================= */}
                <div className="relative py-32 rounded-[4rem] overflow-hidden mb-32 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent z-0" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/5 z-0" />

                    <div className="relative z-10 text-center px-6">
                        <ScrollReveal>
                            <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">
                                Ready to <br />
                                <span className="text-brand-red">Level Up?</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                                Join the elite circle of car owners who settle for nothing but the absolute best. Your dream machine is waiting.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <Link to="/contact" className="px-10 py-5 bg-brand-red rounded-full text-white font-black uppercase italic tracking-widest hover:bg-white hover:text-brand-red transition-all duration-500 shadow-[0_0_30px_rgba(227,30,36,0.4)]">
                                    Start Project
                                </Link>
                                <a href="tel:9822119832" className="px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-bold uppercase italic tracking-widest hover:bg-white/10 transition-all duration-500">
                                    Call Expert
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </div>
    );
};

const services = [
    {
        title: "Concert Audio",
        description: "Experience audiophile-grade sound engineering. From high-fidelity speakers and powerful subwoofers to precision DSP tuning for a studio-quality live performance on every drive.",
        longDesc: "Sound is an emotion, not just a frequency. At Captain Car, our 'Concert Audio' setups are tuned specifically for the acoustics of your vehicle. We integrate high-resolution Digital Signal Processors (DSP), components from global leaders like Pioneer and Sony, and custom-built subwoofer enclosures. Our signature 'Deep Stage' tuning ensures you feel every beat and hear every whisper as if you're in the front row of a live performance.",
        features: ['3D Sound Staging', 'DSP Time Alignment', 'Damping & Isolation', 'Bespoke Audio Racks'],
        image: "/new photos/Screenshot 2025-12-24 173110.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
        )
    },
    {
        title: "Interior Accessories",
        description: "Transform your cabin into a luxury sanctuary. We offer hand-stitched leather upholstery, custom headliners, and premium floor laminations tailored to your exact style and comfort.",
        longDesc: "Our bespoke interior service is where comfort meets character. We don't just redo seats; we re-engineer the entire tactile experience of your vehicle. Using premium Nappa leather, Alcantara, and high-density foam, our craftsmen hand-stitch every panel to perfection. From starry-night headliners to moisture-resistant floor lamination, every detail is a testament to our founder Tanveer's vision of 'Automotive Grandeur'.",
        features: ['Custom Layouts', 'Double Diamond Stitching', 'Starry Headliners', 'Premium Nappa Leather'],
        image: "/seat cover/seatcover-hero.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M4 18v3h3v-3h10v3h3v-6H4v3zm15-8h1V6c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5v4h1v5h14v-5z" />
            </svg>
        )
    },
    {
        title: "Ambient Lighting",
        description: "Set the mood with advanced digital lighting. Equipping your vehicle with app-controlled LED strips and starlight headings that react dynamically to your music and presence.",
        longDesc: "Modernize your drive with cutting-edge intelligence. Our app-controlled ambient lighting allows you to set the mood of your cabin with over 16 million colors. It's not just technology; it's a digital cockpit experience that reacts to your music and presence.",
        features: ['4K Android Hubs', '360° Vision System', 'App-Controlled Glow', 'Smart Dashcams'],
        image: "/car-display/cardisplay2-hero.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
            </svg>
        )
    },
    {
        title: "Privacy Films",
        description: "Stay cool and protected with premium window films. Our nano-ceramic technology blocks up to 99% of UV rays for significant heat reduction without compromising night visibility.",
        longDesc: "Protection meets sophistication. Our heat-shielding films utilize nano-ceramic technology to block 99% of harmful UV rays while maintaining crystal clear night-time visibility. This isn't just about privacy; it's about preserving your interior's life.",
        features: ['99% UV Rejection', 'Nano-Ceramic Tech', 'Anti-Glare Shield', 'Scratch Resistant'],
        image: "/suntekwindowfilm.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
            </svg>
        )
    },
    {
        title: "Security Systems",
        description: "Sleep soundly with absolute vehicle protection. We integrate high-tech GPS trackers, central locking, and impact alerts that provide real-time security directly to your smartphone 24/7.",
        longDesc: "Your car is a valuable asset, and we treat it that way. Our security systems provide real-time GPS tracking, impact alerts, and remote engine immobilization, all controlled from your smartphone.",
        features: ['Real-time GPS', 'Remote Immobilizer', 'Impact Alerts', 'Smartphone Control'],
        image: "/key-less-entry/key-less-entry-system-1-hero.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
        )
    },
    {
        title: "Exterior Styling",
        description: "Command the road with ultimate presence. We install custom modular body kits, premium alloy wheels, and professional chrome deletions that give your car a distinct, aggressive edge.",
        longDesc: "Make a statement before you even start the engine. Our exterior styling wing focuses on 'Presence Engineering'. Whether it's a complete chrome deletion, aggressive body kit installations, or selecting the perfect offset for your new alloy wheels, we ensure every mod enhances the vehicle's natural lines.",
        features: ['Chrome Deletions', 'Modular Body Kits', 'Aero Enhancements', 'Custom Wheel Sets'],
        image: "/tyremiddle.png",
        icon: (
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
            </svg>
        )
    }
];

export default Services;

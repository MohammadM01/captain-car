import React from 'react';
import ScrollReveal from '../Components/ScrollReveal';

const WhyUs = () => {
    return (
        <div className="bg-premium-black text-white min-h-screen pt-24 pb-12 font-sans selection:bg-brand-red selection:text-white">

            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <ScrollReveal direction="down">
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        Why Choose <br /><span className="text-brand-red">Captain Car?</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto border-t border-white/10 pt-6">
                        Your vehicle is an investment. Don't compromise its safety and style with subpar local modifications.
                        See the difference professional craftsmanship makes.
                    </p>
                </ScrollReveal>
            </div>

            {/* Comparison Section */}
            <div className="container mx-auto px-6 mb-24">
                <ScrollReveal direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                        {/* The Local Way (Bad) */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-red-900/10 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />
                            <div className="bg-[#111] p-8 md:p-12 rounded-3xl border border-red-900/30 relative overflow-hidden">
                                <h3 className="text-3xl font-black text-gray-500 uppercase italic mb-8 flex items-center gap-4">
                                    <span className="text-4xl">❌</span> Local Mechanics
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-gray-400">
                                        <span className="text-red-500 font-bold text-xl">x</span>
                                        <p>Use generic, ill-fitting universal parts.</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-400">
                                        <span className="text-red-500 font-bold text-xl">x</span>
                                        <p>Temporary fixes with no warranty support.</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-400">
                                        <span className="text-red-500 font-bold text-xl">x</span>
                                        <p>Risk of electrical damage due to cutting wires.</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-gray-400">
                                        <span className="text-red-500 font-bold text-xl">x</span>
                                        <p>Zero after-sales service or guidance.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* The Captain Car Way (Good) */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-brand-red/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                            <div className="bg-[#0f0f0f] p-8 md:p-12 rounded-3xl border-2 border-brand-red relative overflow-hidden shadow-[0_0_50px_rgba(220,20,60,0.15)] transform md:-translate-y-4">
                                <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-bl-xl">
                                    The Premium Choice
                                </div>
                                <h3 className="text-3xl font-black text-white uppercase italic mb-8 flex items-center gap-4">
                                    <span className="text-4xl">✅</span> Captain Car
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 text-white">
                                        <span className="text-brand-red font-bold text-xl">✓</span>
                                        <p><strong>OEM-Fit Accessories</strong> designed specifically for your model.</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-white">
                                        <span className="text-brand-red font-bold text-xl">✓</span>
                                        <p><strong>Coupler-to-Coupler</strong> wiring (No wire cutting, warranty safe).</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-white">
                                        <span className="text-brand-red font-bold text-xl">✓</span>
                                        <p><strong>Verified Warranty</strong> on products and installation.</p>
                                    </li>
                                    <li className="flex items-start gap-4 text-white">
                                        <span className="text-brand-red font-bold text-xl">✓</span>
                                        <p><strong>Expert Consultation</strong> to match your personal style.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
            </div>

            {/* Quality Promise */}
            <div className="container mx-auto px-6 py-16 text-center bg-zinc-900/30 rounded-3xl border border-white/5 mx-6">
                <ScrollReveal direction="up" delay={200}>
                    <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-8 text-white">
                        Our <span className="text-brand-red">Guarantee</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <div className="text-5xl mb-4">🛡️</div>
                            <h4 className="text-xl font-bold uppercase mb-2">100% Genuine</h4>
                            <p className="text-gray-400 text-sm">We only stock branded, verified accessories.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl mb-4">⚡</div>
                            <h4 className="text-xl font-bold uppercase mb-2">Pro Installation</h4>
                            <p className="text-gray-400 text-sm">Technicians with 15+ years of experience.</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold uppercase mb-2">Lifetime Support</h4>
                            <p className="text-gray-400 text-sm">We are always just a phone call away.</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

        </div>
    );
};

export default WhyUs;

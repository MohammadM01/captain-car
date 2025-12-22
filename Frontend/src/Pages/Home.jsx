import React from 'react';
import Button from '../Components/Button';
import ScrollReveal from '../Components/ScrollReveal';

const Home = () => {
    return (
        <div className="bg-black text-white font-sans overflow-x-hidden selection:bg-brand-red selection:text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden">
                {/* Background Components */}
                {/* Pattern 1 */}
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: 'url(/assets/figma-img/bg-pattern.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Pattern 2 */}
                <div
                    className="absolute inset-0 z-1 opacity-15"
                    style={{
                        backgroundImage: 'url(/assets/figma-img/bg-pattern2.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Cloud Effects */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 z-2 opacity-80"
                    style={{
                        backgroundImage: 'url(/uploaded_cloud_0.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* 2024 Watermark */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full select-none pointer-events-none flex justify-center items-center mix-blend-overlay">
                    <span className="text-[28vw] font-black text-[#ffffff] leading-none tracking-tighter opacity-[0.03]">
                        2024
                    </span>
                </div>

                {/* Hero Content */}
                <ScrollReveal>
                    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
                        <div className="text-center max-w-5xl mx-auto mb-8">
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
                                <span className="block text-white">Enhance Your Vehicle's</span>
                                <span className="block text-white">Performance</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
                                Trusted Modification Workshop for Cars and Trucks
                            </p>
                        </div>

                        {/* Car Image with Glow */}
                        <div className="relative w-full max-w-7xl mx-auto my-12 group">
                            {/* Platform Shadow/Glow */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-gradient-to-t from-black via-brand-red/10 to-transparent blur-3xl z-0 transition-all duration-1000 group-hover:via-brand-red/20" />

                            <img
                                src="/assets/figma-img/car.png"
                                alt="Modified Porsche GT3 RS"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-8 mb-40">
                            <Button variant="secondary" className="px-12 py-4 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,255,255,0.1)] text-lg uppercase tracking-wider">
                                Discover More
                            </Button>
                            <button className="text-gray-300 text-lg font-bold hover:text-brand-red transition-colors duration-300 uppercase tracking-[0.2em] border-b-2 border-transparent hover:border-brand-red pb-1">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= ABOUT US SECTION ================= */}
            <div className="relative py-32 px-6 md:px-16" style={{
                backgroundColor: '#0a0a0a',
                backgroundImage: 'url(/assets/figma-img/bg-pattern.png)',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay'
            }}>
                {/* Visual Transitions */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

                <ScrollReveal>
                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        {/* Left: Logo Graphic */}
                        <div className="flex justify-center md:justify-start relative">
                            <div className="absolute inset-0 bg-brand-red/5 blur-3xl rounded-full opacity-50"></div>
                            <img
                                src="/assets/figma-img/logo.png"
                                alt="OCD Fab & Performance Logo"
                                className="w-full max-w-xl object-contain drop-shadow-2xl relative z-10"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="text-left">
                            <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter uppercase text-white">About Us</h2>
                            <h3 className="text-2xl md:text-3xl text-brand-red font-bold mb-10 uppercase tracking-widest leading-snug">
                                Welcome to OCD Fab & Performance
                            </h3>

                            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-medium tracking-wide">
                                Where passion meets precision. Since 1995, we've been redefining vehicle modification.
                                Our friendly team of professionals shares a love for automotive mastery. We set trends with
                                innovative excellence, ensuring your vehicle stands out.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed font-normal">
                                Elevate your ride with our commitment to precision. Join us on a journey where your automotive dreams become reality.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="relative py-24 px-6 bg-black">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Services</h2>
                        <h3 className="text-xl md:text-2xl text-brand-red font-bold mb-16 uppercase tracking-widest">
                            Upgrade performance, style, and comfort with OCD.
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                            {['Performance Package', 'Exterior Modification', 'Interior Modification', 'Audio System', 'Suspension Upgrades', 'Other Services'].map((service, index) => (
                                <div key={index} className="group bg-[#111] border border-white/5 py-6 px-8 rounded-xl shadow-lg hover:bg-brand-red hover:border-brand-red transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                                    <span className="text-gray-300 group-hover:text-white font-bold text-xl uppercase tracking-wider transition-colors">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= PRODUCTS SECTION ================= */}
            <div className="relative py-24 px-6 bg-[#0a0a0a]">
                <ScrollReveal>
                    <div className="max-w-8xl mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Products</h2>
                        <h3 className="text-xl md:text-2xl text-brand-red font-bold mb-16 uppercase tracking-widest">
                            Welcome to OCD Fab & Performance
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
                            {/* Card 1: Performance */}
                            <div className="bg-[#151515] p-10 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h4 className="text-white text-2xl font-bold mb-1 uppercase">Performance</h4>
                                <h4 className="text-gray-400 text-xl font-medium mb-8 uppercase tracking-widest group-hover:text-white transition-colors">Enhancement</h4>

                                <div className="h-64 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img src="/tyremiddle.png" alt="Performance Parts" className="max-h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
                                </div>

                                <p className="text-gray-500 text-sm mb-8 leading-relaxed px-4 group-hover:text-gray-300 transition-colors">
                                    Optimize your vehicle's power and speed with our signature performance enhancement packages pushing the boundaries of automotive excellence.
                                </p>

                                <a href="#" className="text-brand-red font-black text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                                    Get The Offer <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                                </a>
                            </div>

                            {/* Card 2: Custom Exterior */}
                            <div className="bg-[#151515] p-10 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h4 className="text-white text-2xl font-bold mb-1 uppercase">Custom</h4>
                                <h4 className="text-gray-400 text-xl font-medium mb-8 uppercase tracking-widest group-hover:text-white transition-colors">Exterior</h4>

                                <div className="h-64 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img src="/cardisplay1.png" alt="Custom Exterior" className="max-h-full object-contain group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative z-10" />
                                </div>

                                <p className="text-gray-500 text-sm mb-8 leading-relaxed px-4 group-hover:text-gray-300 transition-colors">
                                    Elevate your ride's aesthetics with our exclusive exterior styling kits featuring creative designs and high-quality materials for a truly unique look on the road.
                                </p>

                                <a href="#" className="text-brand-red font-black text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                                    Get The Offer <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                                </a>
                            </div>

                            {/* Card 3: Audio System */}
                            <div className="bg-[#151515] p-10 rounded-2xl border border-white/5 hover:border-brand-red/50 transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <h4 className="text-white text-2xl font-bold mb-1 uppercase">Audio</h4>
                                <h4 className="text-gray-400 text-xl font-medium mb-8 uppercase tracking-widest group-hover:text-white transition-colors">System</h4>

                                <div className="h-64 flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 bg-brand-red/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img src="/audiobull.png" alt="Audio System" className="max-h-full object-contain group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10" />
                                </div>

                                <p className="text-gray-500 text-sm mb-8 leading-relaxed px-4 group-hover:text-gray-300 transition-colors">
                                    Immerse yourself in a world of superior sound with our premium audio system upgrades, enhancing every journey with crystal-clear audio quality.
                                </p>

                                <a href="#" className="text-brand-red font-black text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2">
                                    Get The Offer <span className="transform group-hover:translate-x-1 transition-transform">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= GALLERY SECTION ================= */}
            <div className="relative py-24 px-4 bg-black">
                <ScrollReveal>
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">Gallery</h2>
                        <div className="h-1 w-24 bg-brand-red mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
                        {/* Gallery Images Layout matching the screenshot roughly */}
                        <div className="col-span-1 md:col-span-1 row-span-2 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/assets/gallery1.png" alt="Gallery 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 md:col-span-1 row-span-1 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/assets/gallery2.png" alt="Gallery 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 md:col-span-1 row-span-1 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/assets/gallery3.png" alt="Gallery 3" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 md:col-span-1 row-span-2 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/assets/gallery4.png" alt="Gallery 4" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        {/* More filler images reusing assets for the grid effect */}
                        <div className="col-span-1 md:col-span-2 row-span-1 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/seatcover1.png" alt="Gallery 5" className="w-full h-64 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                        <div className="col-span-1 md:col-span-2 row-span-1 overflow-hidden rounded-xl border border-white/10 group">
                            <img src="/uploaded_cloud_0.png" alt="Gallery 6" className="w-full h-64 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" />
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= TESTIMONIAL SECTION ================= */}
            <div className="relative py-24 px-6 bg-[#0a0a0a]">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter">Testimonial</h2>
                        <h3 className="text-xl text-brand-red font-bold uppercase tracking-widest">
                            Discover Client Experiences
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Testimonial 1 */}
                        <div className="bg-[#121212] p-8 rounded-xl border border-white/5 relative hover:border-brand-red/30 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                                    <span className="text-2xl font-bold text-gray-400">AT</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white text-xl font-bold">Amanda Turner</h4>
                                    <div className="flex text-brand-red text-sm">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-gray-400 italic leading-relaxed">
                                "The seamless integration of style and performance provided by Captain Car is unmatched. My vehicle looks stunning and performs better than ever!"
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-[#121212] p-8 rounded-xl border border-white/5 relative hover:border-brand-red/30 transition-all">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center overflow-hidden">
                                    <span className="text-2xl font-bold text-white">JD</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white text-xl font-bold">Jonathan Dean</h4>
                                    <div className="flex text-brand-red text-sm">★★★★★</div>
                                </div>
                            </div>
                            <p className="text-gray-400 italic leading-relaxed">
                                "Absolutely professional service. The audio system upgrade changed my entire driving experience. Highly recommended for any enthusiast."
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= BLOG SECTION ================= */}
            <div className="relative py-24 px-6 bg-black">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter">Blog</h2>
                        <h3 className="text-xl text-brand-red font-bold uppercase tracking-widest">
                            Explore our automotive expertise
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                        {/* Blog 1 */}
                        <div className="bg-[#111] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-brand-red/10 transition-all">
                            <div className="h-48 overflow-hidden">
                                <img src="/uploaded_cloud_0.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Blog 1" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">Revolutionizing Performance</h4>
                                <a href="#" className="text-gray-500 text-sm font-bold uppercase tracking-wider hover:text-white mt-4 inline-block">Read More ↗</a>
                            </div>
                        </div>
                        {/* Blog 2 */}
                        <div className="bg-[#111] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-brand-red/10 transition-all">
                            <div className="h-48 overflow-hidden">
                                <img src="/uploaded_cloud_1.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Blog 2" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">Custom Interior Trends</h4>
                                <a href="#" className="text-gray-500 text-sm font-bold uppercase tracking-wider hover:text-white mt-4 inline-block">Read More ↗</a>
                            </div>
                        </div>
                        {/* Blog 3 */}
                        <div className="bg-[#111] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-brand-red/10 transition-all">
                            <div className="h-48 overflow-hidden">
                                <img src="/uploaded_cloud_0.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Blog 3" />
                            </div>
                            <div className="p-6 text-center">
                                <h4 className="text-white font-bold text-lg mb-2 group-hover:text-brand-red transition-colors">Impeccable Audio</h4>
                                <a href="#" className="text-gray-500 text-sm font-bold uppercase tracking-wider hover:text-white mt-4 inline-block">Read More ↗</a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= CTA BANNER ================= */}
            <div className="relative py-32 bg-brand-red overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/assets/figma-img/bg-pattern.png')] opacity-20 mix-blend-multiply"></div>
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-tight mb-6">
                            Embark on a Journey of <br /> Automotive Excellence
                        </h2>
                        <Button variant="primary" className="bg-black text-brand-red hover:bg-white hover:text-black font-black uppercase text-lg px-8 py-3 rounded-full shadow-2xl">
                            Discover Now
                        </Button>
                    </div>
                    <div className="hidden md:block">
                        <img src="/cardisplay1.png" alt="Red Car Rear" className="w-full object-contain transform translate-x-10 drop-shadow-xl" />
                    </div>
                </div>
            </div>

            {/* ================= LOCATION SECTION ================= */}
            <div className="relative py-24 px-6 bg-black">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter">Location</h2>
                        <h3 className="text-xl text-brand-red font-bold uppercase tracking-widest">
                            Explore Our Physical Automotive Hub
                        </h3>
                    </div>

                    <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl h-96 relative">
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-[#222] flex items-center justify-center">
                            <p className="text-gray-500 font-mono text-lg">Interactive Map Integration</p>
                        </div>
                        {/* Overlay Button */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                            <a href="#" className="bg-brand-red text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-red-700 transition">Get Directions</a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= OUR VALUE SECTION ================= */}
            <div className="relative py-24 px-6 bg-[#0a0a0a]">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase text-white tracking-tighter">Our Value</h2>
                        <h3 className="text-xl text-brand-red font-bold uppercase tracking-widest">
                            Exemplary Craftsmanship, Seamless
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: 'Exceptional Craftsmanship', desc: 'Our skilled technicians bring years of experience to every modification.' },
                            { title: 'Seamless Customer Experience', desc: 'From consultation to delivery, we ensure a smooth journey.' },
                            { title: 'Exclusive Solutions for Everyone', desc: 'Tailored modifications that suit your specific needs and style.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#121212] p-8 rounded-xl border border-white/5 text-center group hover:bg-[#181818] transition-colors">
                                <h4 className="text-white font-bold text-xl mb-6 h-12 flex items-center justify-center">{item.title}</h4>
                                <div className="w-20 h-20 mx-auto rounded-full border-4 border-brand-red flex items-center justify-center mb-6 text-brand-red text-4xl">
                                    ✓
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>

            {/* ================= FOOTER ================= */}
            <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    {/* Brand */}
                    <div>
                        <h2 className="text-4xl font-black text-brand-red italic mb-6">CAPTAIN</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for premium automotive modifications. Transforming vehicles into masterpieces since 1995.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="hover:text-brand-red cursor-pointer transition">Home</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Services</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Products</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Contact Us</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Services</h4>
                        <ul className="space-y-4 text-gray-500 text-sm">
                            <li className="hover:text-brand-red cursor-pointer transition">Performance</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Exterior</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Interior</li>
                            <li className="hover:text-brand-red cursor-pointer transition">Audio</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
                        <p className="text-gray-500 text-sm mb-2">123 Auto Hub, Bhiwandi</p>
                        <p className="text-gray-500 text-sm mb-2">+91 98765 43210</p>
                        <p className="text-gray-500 text-sm">info@captaincar.com</p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-widest">© 2025 Captain Car. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../Components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-[#E31E24] selection:text-white">
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist. Return to Captain Car Studio homepage."
                url="/404"
            />

            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E31E24]/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="text-center relative z-10 px-6">
                <h1 className="text-[150px] md:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#E31E24] to-black leading-none select-none opacity-50">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-6 -mt-10 md:-mt-20">
                    Lost in <span className="text-[#E31E24]">Transmission?</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                    The page you are looking for seems to have taken a different route.
                    Let's get you back on track.
                </p>

                <Link to="/">
                    <button className="px-10 py-4 bg-[#E31E24] hover:bg-white hover:text-[#E31E24] text-white text-lg font-black rounded-none skew-x-[-10deg] transition-all duration-300 uppercase tracking-widest shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                        <span className="skew-x-[10deg] inline-block">Return Home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

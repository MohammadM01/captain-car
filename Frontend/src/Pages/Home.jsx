import React from 'react';
import Button from '../Components/Button';

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Background Pattern Layer 1 - Bottom Layer */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'url(/assets/figma-img/bg-pattern.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Background Pattern Layer 2 - Above Pattern 1 */}
            <div
                className="absolute inset-0 z-1 opacity-15"
                style={{
                    backgroundImage: 'url(/assets/figma-img/bg-pattern2.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Cloud Effects - Above Patterns */}
            <div
                className="absolute bottom-0 left-0 right-0 h-1/2 z-2 opacity-30"
                style={{
                    backgroundImage: 'url(/assets/figma-img/bg-cloud.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Main Content - Top Layer */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16">
                {/* Hero Text */}
                <div className="text-center max-w-5xl mx-auto mb-8">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="block text-white">Enhance Your Vehicle's</span>
                        <span className="block text-white">Performance</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-medium">
                        Trusted Modification Workshop for Cars and Trucks
                    </p>
                </div>

                {/* Car Image */}
                <div className="relative w-full max-w-6xl mx-auto my-12">
                    {/* Platform Shadow/Glow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-gradient-radial from-brand-red/20 to-transparent rounded-full blur-3xl" />

                    {/* Car Image */}
                    <img
                        src="/assets/figma-img/car.png"
                        alt="Modified Porsche GT3 RS"
                        className="relative w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8">
                    <Button variant="secondary">
                        Discover More
                    </Button>
                    <button className="text-white text-lg font-semibold hover:text-brand-red transition-colors duration-300">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Components/Seo";

const guidesData = [
  {
    id: "ppf-vs-ceramic-coating",
    title: "PPF vs Ceramic Coating: The Ultimate 2025 Guide for Car Owners",
    excerpt:
      "Confused between Paint Protection Film and Ceramic Coating? Learn which is best to protect your car from Indian roads.",
    date: "February 21, 2026",
    category: "Exterior Protection",
  },
  {
    id: "how-to-fix-android-player-lag",
    title: "How to Fix Android Car Player Lag & Hanging Issues",
    excerpt:
      "Is your aftermarket Android stereo freezing? We explain why 1GB/2GB RAM players lag and how to upgrade to a smooth 4GB/6GB system.",
    date: "February 20, 2026",
    category: "Infotainment upgrades",
  },
  {
    id: "legal-sun-films",
    title: "RTO Legal Sun Control Films in India: Myths vs Reality",
    excerpt:
      "Tired of AC not cooling your car? Learn about 100% legal RTO-compliant heat rejection thermal films that keep you cool without risking a fine.",
    date: "February 18, 2026",
    category: "Privacy & Comfort",
  },
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6 md:px-12">
      <Seo
        title="Car Modification Guides & Tips | Captain Car Studio"
        description="Read expert guides on car modification, PPF vs Ceramic Coating, Android players, and legal sun films from Captain Car Studio Bhiwandi."
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-wider mb-6">
            Expert <span className="text-[#E31E24]">Guides</span> & Articles
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Deep dive into the world of premium car modifications. Learn how to
            protect your paint, upgrade your car's audio, and drive in ultimate
            comfort.
          </p>
        </div>

        {/* Guides List */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-20">
          {guidesData.map((guide) => (
            <div
              key={guide.id}
              className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-[#E31E24]/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-[#E31E24] uppercase tracking-wider bg-[#E31E24]/10 py-1 px-3 rounded-full">
                  {guide.category}
                </span>
                <span className="text-xs text-gray-500 ml-4 font-mono">
                  {guide.date}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-[#E31E24] transition-colors leading-snug">
                {guide.title}
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                {guide.excerpt}
              </p>

              <Link
                to={`/guides/${guide.id}`}
                className="mt-auto self-start text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Read Article <span className="text-[#E31E24]">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;

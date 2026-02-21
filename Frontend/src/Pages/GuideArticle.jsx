import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../Components/Seo";

// Embedded full-length SEO articles
const articlesDB = {
  "ppf-vs-ceramic-coating": {
    title: "PPF vs Ceramic Coating: The Ultimate 2025 Guide for Car Owners",
    description:
      "Confused between Paint Protection Film and Ceramic Coating? Learn which is best to protect your car from Indian roads.",
    date: "February 21, 2026",
    category: "Exterior Protection",
    content: `
      <h2>The Great Debate: PPF or Ceramic Coating?</h2>
      <p>Every new car owner in India eventually faces this dilemma: How do I protect my brand-new factory paint from scratches, dust, and careless bikers? The industry generally presents two solid options: Paint Protection Film (PPF) and Ceramic Coating.</p>
      
      <h3>What is Ceramic Coating?</h3>
      <p>Ceramic coating is a liquid polymer applied over the car's clear coat. It chemically bonds with the factory paint, creating a semi-permanent layer of protection. Think of it as a hard glass shell. It makes the car extremely hydrophobic (water-repellent) and incredibly shiny.</p>
      <ul>
        <li><strong>Pros:</strong> Insane gloss, easy to wash, protects from chemical stains (bird droppings, tree sap), lasts 2-5 years.</li>
        <li><strong>Cons:</strong> It does NOT prevent rock chips, deep scratches, or swirl marks from improper washing.</li>
      </ul>

      <h3>What is Paint Protection Film (PPF)?</h3>
      <p>PPF is a transparent, highly durable polyurethane film applied directly onto the vehicle's panels. It acts like a literal shield.</p>
      <ul>
        <li><strong>Pros:</strong> Self-healing properties (minor scratches disappear with heat), protects against flying rocks, key scratches, and minor fender benders.</li>
        <li><strong>Cons:</strong> More expensive than Ceramic Coating, requires expert installation, may yellow over 5-7 years if low-quality film is used.</li>
      </ul>

      <h3>The Captain's Verdict</h3>
      <p>If your budget allows, <strong>PPF is the undisputed king of protection</strong>. At Captain Car Studio, we use highly advanced TPU films from Llumar and Garware that carry a 5-year warranty against yellowing and peeling. If you drive heavily on highways or park on the street, PPF will save your paint.</p>
      <p>However, if you are looking primarily for that wet-look shine and don't park in risky areas, a high-end 9H Ceramic/Graphene coating is a fantastic investment.</p>
    `,
  },
  "how-to-fix-android-player-lag": {
    title: "How to Fix Android Car Player Lag & Hanging Issues",
    description:
      "Is your aftermarket Android stereo freezing? We explain why 1GB/2GB RAM players lag and how to upgrade to a smooth 4GB/6GB system.",
    date: "February 20, 2026",
    category: "Infotainment Upgrades",
    content: `
      <h2>Why is My Android Car Player So Slow?</h2>
      <p>One of the most common complaints we get at Captain Car Studio is: "Bhaiya, mera touch screen hang ho raha hai." (Brother, my touch screen is freezing). The truth is, 90% of budget Android car stereos sold online or by cheap vendors come with just 1GB or 2GB of RAM.</p>
      
      <h3>The RAM & Processor Bottleneck</h3>
      <p>Modern apps like Google Maps, Spotify, and YouTube consume massive amounts of memory. When a 2GB RAM system tries to run Google Maps navigation alongside Spotify via wireless Apple CarPlay, it crashes. The processor simply throttles.</p>

      <h3>How to Fix It (Short Term)</h3>
      <ul>
        <li><strong>Clear the Cache:</strong> Go to Settings > Apps > Google Maps and clear the cache data.</li>
        <li><strong>Use Offline Maps:</strong> Download your city map on Google Maps to stop the system from downloading heavy data via hotspot.</li>
        <li><strong>Close Background Apps:</strong> Always hit the square button and clear background apps before starting a journey.</li>
      </ul>

      <h3>The Ultimate Fix (Upgrade)</h3>
      <p>Stop suffering with outdated tech. To completely eliminate lag, you need an Octa-Core processor with at least 4GB of RAM (ideally 6GB or 8GB). Brands like Gemstone, Oncord, and Sansui offer QLED 2K resolution screens equipped with T5 or TS10 Octa-core chipsets that perform faster than most smartphones.</p>
      <p>Visit Captain Car Studio to test-drive our blazing-fast Android infotainment systems equipped with built-in DSPs (Digital Sound Processors) to simultaneously upgrade your audio quality.</p>
    `,
  },
  "legal-sun-films": {
    title: "RTO Legal Sun Control Films in India: Myths vs Reality",
    description:
      "Tired of AC not cooling your car? Learn about 100% legal RTO-compliant heat rejection thermal films that keep you cool without risking a fine.",
    date: "February 18, 2026",
    category: "Privacy & Comfort",
    content: `
      <h2>The Heat is On: Can I Tint My Car?</h2>
      <p>With Indian summers regularly crossing 40°C, a car's cabin can quickly feel like an oven. Unfortunately, many car owners are terrified of putting sun films on their windows due to RTO regulations and the infamous Supreme Court ban on "black films".</p>
      
      <h3>The Supreme Court Ruling Explained</h3>
      <p>The law states that a vehicle's front and rear windshields must have a Minimum Visual Light Transmission (VLT) of 70%, and side windows must have a VLT of 50%. Most factory "tinted glass" provides roughly 70% VLT. Therefore, pasting a dark 20% VLT black film violates the law and invites hefty challans.</p>

      <h3>The Solution: RTO-Approved Clear Thermal Films</h3>
      <p>Science has evolved. You no longer need "dark" windows to block heat. At Captain Car Studio, we apply advanced nano-ceramic thermal films (like Garware IceCool Shield and 3M CR-70). These films are almost 100% transparent.</p>
      <ul>
        <li><strong>Heat Rejection:</strong> They block up to 99% of harmful UV rays and 50-60% of Infrared Heat.</li>
        <li><strong>AC Efficiency:</strong> By rejecting IR heat, your car's AC cools the cabin twice as fast, effectively saving fuel.</li>
        <li><strong>Legality:</strong> Because they are optically clear, they do not violate the VLT visibility laws and keep you safe from traffic police harassment.</li>
      </ul>

      <h3>Protect Your Dashboard & Skin</h3>
      <p>Beyond cooling, UV rays cause your car's dashboard plastic to crack and fade over time. Protect your interior investment, your skin, and your AC compressor by upgrading to legal clear thermal films today.</p>
    `,
  },
};

const GuideArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Simulate slight loading
    window.scrollTo(0, 0);
    setArticle(articlesDB[id]);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white pt-32 pb-20 text-center">
        <h1 className="text-4xl text-[#E31E24] font-bold">Article Not Found</h1>
        <p className="mt-4 text-gray-400">
          The guide you are looking for does not exist.
        </p>
        <Link
          className="mt-8 inline-block px-6 py-3 bg-[#E31E24] rounded-lg"
          to="/guides"
        >
          Return to Guides
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 pt-24 pb-20 px-6 md:px-12">
      <Seo
        title={`${article.title} | Captain Car Studio Guides`}
        description={article.description}
      />

      <article className="max-w-4xl mx-auto bg-[#111] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
        <div className="mb-8 border-b border-white/10 pb-8">
          <Link
            to="/guides"
            className="text-[#E31E24] font-bold text-sm tracking-widest uppercase hover:underline mb-8 inline-block"
          >
            ← Back to All Guides
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#E31E24]/20 text-[#E31E24] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-sm font-mono text-gray-500">
              {article.date}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:text-white prose-a:text-[#E31E24] prose-strong:text-white prose-ul:list-disc">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <h3 className="text-white text-2xl font-bold mb-4">
            Want Expert Advice?
          </h3>
          <p className="mb-8 text-gray-400">
            Visit Captain Car Studio in Bhiwandi to consult with our master
            technicians.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E31E24] text-white font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </article>
    </div>
  );
};

export default GuideArticle;

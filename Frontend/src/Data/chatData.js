export const chatData = [
    // --- CORE IDENTITY & OWNER ---
    {
        id: "greeting",
        keywords: ["hi", "hello", "hey", "hii", "heya", "hola", "namaste", "salam", "greetings", "yo"],
        responses: [
            {
                en: "Hello! Welcome to Captain Car Studio. How can I help you today? 🚗",
                hi: "Namaste! Captain Car Studio mein aapka swagat hai. Main aapki kya madat kar sakta hu? 🚗"
            },
            {
                en: "Hi there! Looking for some cool accessories for your car?",
                hi: "Hello! Kya aap apni gaadi ke liye kuch badhiya accessories dhund rahe hai?"
            },
            {
                en: "Greetings! I'm Datamatex AI Bot. Ask me anything!",
                hi: "Salam! Main Datamatex AI Bot hu. Kuch bhi puchiye!"
            }
        ]
    },
    {
        id: "owner",
        keywords: ["owner", "boss", "malik", "founder", "ceo", "captain", "kaun hai", "who is owner", "who is boss", "tanveer", "farooqui"],
        responses: [
            {
                en: "The Captain behind Captain Car Studio is **Mr. Tanveer Farooqui**. He is the Founder & Master Craftsman! 🫡",
                hi: "Captain Car ke asli Boss **Mr. Tanveer Farooqui** hai. Woh Founder aur Master Craftsman hai! 🫡"
            },
            {
                en: "Tanveer Sir personally inspects every car before delivery to ensure perfection. He has 15+ years of experience.",
                hi: "Tanveer Sir har gaadi khud check karte hai delivery se pehle. Unko 15 saal se zyada ka experience hai."
            },
            {
                en: "You can meet him at the workshop! He loves discussing car modifications. 🚗",
                hi: "Aap unse workshop pe mil sakte ho! Unko gaadi modification ke baare mein baat karna pasand hai. 🚗"
            }
        ]
    },
    {
        id: "about",
        keywords: ["about", "company", "who are you", "introduction", "info", "profile", "history", "experience", "years"],
        responses: [
            {
                en: "We are **Captain Car Decor**, Bhiwandi's premium car modification studio. We transform cars! ✨",
                hi: "Hum **Captain Car Decor** hai, Bhiwandi ka sabse best car studio. Hum gaadilo ko badal dete hai! ✨"
            },
            {
                en: "✅ 15+ Years Experience \n✅ 5000+ Premium Cars Modified \n✅ 12 Expert Technicians.",
                hi: "✅ 15+ Saal ka Experience \n✅ 5000+ Gaadiya Modify ki hai \n✅ 12 Expert Log hai apne paas."
            },
            {
                en: "Visit us to see our work in action. We are open Mon-Sat!",
                hi: "Ek baar aake dekho humara kaam. Hum Mon-Sat open rehte hai!"
            }
        ]
    },

    // ==========================================
    // SPECIFIC PRODUCT INTENTS (Extracted)
    // ==========================================

    // --- SEAT COVERS ---
    {
        id: "prod_seat_brown_black",
        keywords: ["premium brown", "black leather seat", "seat cover 5", "brown black cover"],
        responses: [
            {
                en: "Excellent choice! The **Premium Brown & Black Leather Seat Cover** adds a rich, executive look to your car interior. 💺",
                hi: "Badhiya choice hai! **Premium Brown & Black Leather Seat Cover** gaadi ko ekdum rich aur executive look deta hai. 💺"
            },
            {
                en: "Made with high-grade leatherette that is sweat-resistant and highly durable. Perfect for daily use.",
                hi: "Yeh high-grade leatherette se bana hai jo pasina nahi sokhta aur lamba chalta hai. Roz ke use ke liye best hai."
            },
            {
                en: "We offer Bucket Fitting for this model – ensuring zero wrinkles! Book an appointment today.",
                hi: "Isme hum Bucket Fitting karte hai – matlab ek bhi wrinkle nahi aayega! Aaj hi appointment book karo."
            }
        ]
    },
    {
        id: "prod_seat_cream_quilted",
        keywords: ["luxury cream", "quilted seat", "cream cover", "diamond stitch cream", "seat cover 4"],
        responses: [
            {
                en: "Ah, the **Luxury Cream Quilted Seat Cover**! This is for those who love elegance and a spacious feel. ✨",
                hi: "Wah, **Luxury Cream Quilted Seat Cover**! Yeh unke liye hai jinhe elegance aur open feel pasand hai. ✨"
            },
            {
                en: "The quilted diamond pattern provides extra cushioning and comfort for long drives.",
                hi: "Iska quilted diamond pattern long drive pe bohot aaram deta hai."
            },
            {
                en: "Cream interiors make your car look bigger. We can install this in 3-4 hours!",
                hi: "Cream colour se gaadi andar se badi lagti hai. Hum 3-4 ghante mein laga denge!"
            }
        ]
    },
    {
        id: "prod_seat_blue_black",
        keywords: ["sporty blue", "blue black seat", "sport cover", "blue design", "seat cover 1"],
        responses: [
            {
                en: "Going for a sporty vibe? The **Sporty Blue & Black Seat Cover** screams racing DNA! 🏎️",
                hi: "Sporty look chahiye? **Sporty Blue & Black Seat Cover** ekdum racing style hai! 🏎️"
            },
            {
                en: "It features bold blue accents on a black base, perfect for matching with ambient lights.",
                hi: "Black base pe blue strips bohot sahi lagti hai, khaaskar agar ambient light ho toh."
            },
            {
                en: "Transform your car into a sports edition today. Check it out at our store!",
                hi: "Apni gaadi ko sports edition bana do aaj hi. Dukan pe aake check karo!"
            }
        ]
    },
    {
        id: "prod_seat_classic_beige",
        keywords: ["classic beige", "beige black", "leatherette cover", "seat cover 2", "beige seat"],
        responses: [
            {
                en: "A timeless classic! The **Classic Beige & Black Leatherette Cover** matches almost any car interior. 👍",
                hi: "Yeh kabhi purana nahi hota! **Classic Beige & Black Leatherette Cover** har gaadi ke interior ke saath match hota hai. 👍"
            },
            {
                en: "Easy to clean and maintain. The beige keeps it cool, and black hides the dirt.",
                hi: "Saaf karna bohot aasaan hai. Beige thanda rakhta hai aur black maila nahi dikhta."
            },
            {
                en: "Available in stock for most models like Swift, Creta, and Nexon.",
                hi: "Swift, Creta, Nexon... zyada tar gaadiyon ke liye stock mein hai."
            }
        ]
    },
    {
        id: "prod_seat_rich_brown",
        keywords: ["rich brown", "custom upholstery", "brown leather", "seat cover 6", "tan seat"],
        responses: [
            {
                en: "Pure Luxury. The **Rich Brown Leather Custom Upholstery** gives a premium European car feel. 🍷",
                hi: "Ekdum Shahi! **Rich Brown Leather Custom Upholstery** se gaadi premium European car jaisi lagti hai. 🍷"
            },
            {
                en: "We use high-density foam for better thigh support and back comfort.",
                hi: "Hum isme high-density foam use karte hai taaki aapki kamar aur pairon ko aaram mile."
            },
            {
                en: "This is a custom job. We tailor it exactly to your seat's shape.",
                hi: "Yeh custom kaam hai. Hum bilkul aapki seat ki shape ke hisaab se silenge."
            }
        ]
    },
    {
        id: "prod_seat_beige_diamond",
        keywords: ["premium beige", "diamond stitch", "beige diamond", "seat cover 8"],
        responses: [
            {
                en: "The **Premium Beige Diamond Stitch Seat Cover** is our bestseller for a reason. Classy and Clean. 💎",
                hi: "**Premium Beige Diamond Stitch Seat Cover** humara sabse zyada bikne wala item hai. Ekdum Classy. 💎"
            },
            {
                en: "Diamond stitching adds durability and prevents the leather form sagging over time.",
                hi: "Diamond silai se mazbooti aati hai aur leather jaldi dheela nahi padta."
            },
            {
                en: "Upgrade your car's interior instantly. Ask for a quote now!",
                hi: "Gaadi ka interior foran upgrade karo. Abhi rate pucho!"
            }
        ]
    },

    // --- AUDIO & VIDEO ---
    {
        id: "prod_android_precision",
        keywords: ["android precision", "precision touch", "android player 10", "display 1"],
        responses: [
            {
                en: "Control at your fingertips! The **Android Precision Touch** player is fast and responsive. 📱",
                hi: "**Android Precision Touch** player bohot fast aur smooth hai. 📱"
            },
            {
                en: "Runs on the latest Android OS with support for all your favorite apps like YouTube and Maps.",
                hi: "Latest Android pe chalta hai. YouTube, Maps... sab apps chalenge isme."
            },
            {
                en: "Say goodbye to lag. Upgrade to Precision Touch today!",
                hi: "Lag ki tension khatam. Aaj hi Precision Touch lagwa lo!"
            }
        ]
    },
    {
        id: "prod_wide_dashboard",
        keywords: ["wide dynamic", "dynamic dashboard", "wide screen", "display 2"],
        responses: [
            {
                en: "Go Big! The **Wide Dynamic Dashboard** screen offers a cinematic experience in your car. 🎬",
                hi: "Bada screen chahiye? **Wide Dynamic Dashboard** screen se car mein cinema jaisa maza aayega. 🎬"
            },
            {
                en: "Features split-screen capability so you can use Maps and Music simultaneously.",
                hi: "Isme split-screen hai – Maps aur Music ek saath chalao."
            },
            {
                en: "Perfect for larger SUVs like XUV700 or Scorpio N.",
                hi: "Badi gaadiyon jaise XUV700 ya Scorpio N ke liye best hai."
            }
        ]
    },
    {
        id: "prod_oem_interface",
        keywords: ["oem intelligent", "oem interface", "stock look", "display 3"],
        responses: [
            {
                en: "Keep it original! The **OEM Intelligent Interface** upgrades your system without changing the factory look. 🏭",
                hi: "Original look pasand hai? **OEM Intelligent Interface** system upgrade karega bina factory look bigade. 🏭"
            },
            {
                en: "Integrates perfectly with steering controls and factory reverse cameras.",
                hi: "Steering controls aur reverse camera ke saath perfect chalta hai."
            },
            {
                en: "Get smart features with a factory finish. Ask us compatibility for your car.",
                hi: "Factory finish ke saath smart features. Pucho humse aapki gaadi ke liye hai ya nahi."
            }
        ]
    },
    {
        id: "prod_single_din_bt",
        keywords: ["single din bluetooth", "premium single din", "bt receiver", "audio 41"],
        responses: [
            {
                en: "Simple & Powerful. The **Premium Single DIN Bluetooth Receiver** is great for classic setups. 📻",
                hi: "Simple aur Dumdaar. **Premium Single DIN Bluetooth Receiver** classic setups ke liye badhiya hai. 📻"
            },
            {
                en: "High-quality Bluetooth 5.0 streaming for crystal clear music from your phone.",
                hi: "Bluetooth 5.0 hai isme, phone se music ekdum clear bajega."
            },
            {
                en: "Very affordable upgrade for older cars. We install it in 30 mins!",
                hi: "Purani gaadiyon ke liye sasta aur accha upgrade. 30 minute mein laga denge!"
            }
        ]
    },
    {
        id: "prod_sony_single_din",
        keywords: ["sony style", "sony single din", "sony player", "audio 42"],
        responses: [
            {
                en: "Trust the brand! The **Sony Style Single DIN Media Player** delivers signature Sony sound quality. 🎵",
                hi: "Brand ka bharosa! **Sony Style Single DIN Media Player** mein Sony ki zabardast awaaz milti hai. 🎵"
            },
            {
                en: "Features Extra Bass button for that instant low-end punch.",
                hi: "Isme 'Extra Bass' button hai – dabate hi bass badh jayega!"
            },
            {
                en: "Sony durability with amazing sound. Just grab it!",
                hi: "Sony ki quality aur awaaz. Socho mat, lelo!"
            }
        ]
    },
    {
        id: "prod_std_mp3",
        keywords: ["standard mp3", "single din mp3", "basic player", "audio 43"],
        responses: [
            {
                en: "Budget-friendly music! The **Standard Single DIN MP3 Player** does the job perfectly. 🎼",
                hi: "Budget mein music! **Standard Single DIN MP3 Player** apna kaam perfectly karta hai. 🎼"
            },
            {
                en: "Plays FM, USB, and AUX. Reliable and robust.",
                hi: "FM, USB aur AUX sab chalta hai. Tikau player hai."
            },
            {
                en: "Need music on a budget? This is the one.",
                hi: "Kam paise mein music chahiye? Yeh best hai."
            }
        ]
    },
    {
        id: "prod_gemstone_android",
        keywords: ["gemstone android", "gemstone 10.1", "2k qled", "gemstone player"],
        responses: [
            {
                en: "Top of the line! The **Gemstone 10.1'' 2K QLED Android** is a visual beast. 💎",
                hi: "Sabse Top! **Gemstone 10.1'' 2K QLED Android** ki screen quality ekdum next level hai. 💎"
            },
            {
                en: "2K Resolution means super sharp video. 4GB/6GB RAM ensures zero lagging.",
                hi: "2K Screen matlab video ekdum sharp. 4GB/6GB RAM hai toh hang hone ka sawaal hi nahi."
            },
            {
                en: "Experience the best display available in the market. Demo piece available!",
                hi: "Market ka sabse best display dekho. Demo available hai shop pe!"
            }
        ]
    },
    {
        id: "prod_oncord_android",
        keywords: ["oncord android", "oncord 9 inch", "oncord multimedia", "oncord plus"],
        responses: [
            {
                en: "Reliable Performance. The **Oncord+ 9-inch Android Multimedia System** is a customer favorite. 🌟",
                hi: "Bharosemand Performance. **Oncord+ 9-inch Android System** customers ko bohot pasand aata hai. 🌟"
            },
            {
                en: "Comes with Gorilla Glass protection and IPS display for wide viewing angles.",
                hi: "Gorilla Glass protection hai aur IPS display hai, side se bhi saaf dikhta hai."
            },
            {
                en: "Great value for money upgrade. Fits perfectly in Maruti & Hyundai cars.",
                hi: "Paisa vasool item hai. Maruti aur Hyundai gaadiyon mein perfect fit hota hai."
            }
        ]
    },
    {
        id: "prod_power_acoustik",
        keywords: ["power acoustik", "cp-71w", "acoustik single din", "wireless carplay single din"],
        responses: [
            {
                en: "Rare Find! The **Power Acoustik CP-71W** is a Single DIN player with a Touchscreen! 🤯",
                hi: "Yeh kam milta hai! **Power Acoustik CP-71W** Single DIN hai par Touchscreen ke saath! 🤯"
            },
            {
                en: "Features Wireless Apple CarPlay and Android Auto in a compact size.",
                hi: "Compact size mein Wireless Apple CarPlay aur Android Auto milta hai isme."
            },
            {
                en: "Perfect for older cars where you can't fit a double din screen but want modern features.",
                hi: "Un gaadiyon ke liye best jaha badi screen nahi lag sakti par features naye chahiye."
            }
        ]
    },
    {
        id: "prod_sansui_infotainment",
        keywords: ["sansui pro", "sansui sam-5350", "sansui infotainment", "sansui smart"],
        responses: [
            {
                en: "Japanese Engineering. The **Sansui SAM-5350 Pro Smart Infotainment** is built to last. 🇯🇵",
                hi: "Japanese Technology. **Sansui SAM-5350 Pro** bohot lamba chalta hai. 🇯🇵"
            },
            {
                en: "High-fidelity audio output tailored for audiophiles.",
                hi: "Agar music sound quality matter karti hai, toh yeh aapke liye hai."
            },
            {
                en: "Upgrade to Sansui reliability today.",
                hi: "Sansui ki reliability pe bharosa karo."
            }
        ]
    },

    // --- SPEAKERS ---
    {
        id: "prod_sony_mega_bass",
        keywords: ["sony mega bass", "sony coaxial", "sony speakers 16"],
        responses: [
            {
                en: "Feel the thumping! **Sony Mega Bass Coaxial Speakers** are famous for their deep low-end sound. 🔊",
                hi: "Dhak-Dhak suno! **Sony Mega Bass Speakers** apne gehre bass ke liye mashhoor hai. 🔊"
            },
            {
                en: "HOP Aramid Carbon Fiber Matrix Woofer for rich and clear bass.",
                hi: "Isme Carbon Fiber Woofer hai jo bass ko clear aur bhari banata hai."
            },
            {
                en: "Best starter upgrade from factory speakers. In stock now!",
                hi: "Company speakers se upgrade karne ke liye best hai. Stock mein hai!"
            }
        ]
    },
    {
        id: "prod_pioneer_oval",
        keywords: ["pioneer ts", "pioneer oval", "pioneer speaker 38"],
        responses: [
            {
                en: "LOUD and Clear! **Pioneer TS Series Oval Speakers** are meant for the rear tray. 📣",
                hi: "Zor se bajega! **Pioneer TS Series Oval Speakers** piche ki tray ke liye bane hai. 📣"
            },
            {
                en: "Oval shape moves more air, giving you a subwoofer-like feel without a box.",
                hi: "Oval shape zyada hawa phekta hai, toh bina woofer ke bhi woofer jaisa feel aata hai."
            },
            {
                en: "Perfect for party lovers. Let's install them on your rear tray!",
                hi: "Party lovers ke liye perfect. Piche tray pe laga dete hai!"
            }
        ]
    },
    {
        id: "prod_jbl_coaxial",
        keywords: ["jbl coaxial", "jbl speakers 39", "jbl car speaker"],
        responses: [
            {
                en: "Signature Sound. **JBL Coaxial Car Speakers** bring the concert energy to your car. 🎸",
                hi: "JBL ka Jaadu. **JBL Coaxial Speakers** se gaadi mein concert jaisi energy aati hai. 🎸"
            },
            {
                en: "Plus One woofer cone architecture provides more surface area for bass.",
                hi: "Iska special cone design bass ke liye zyada jagah banata hai."
            },
            {
                en: "You can't go wrong with JBL. Highly recommended!",
                hi: "JBL kabhi galat nahi ho sakta. Humari taraf se recommended hai!"
            }
        ]
    },
    {
        id: "prod_dash_speakers",
        keywords: ["4-inch dashboard", "dash speakers", "small speakers", "speaker 40"],
        responses: [
            {
                en: "Small but sharp! **4-inch Dashboard Speakers** clarify vocals and high notes. 🎼",
                hi: "Chota par teza! **4-inch Dashboard Speakers** awaaz aur high notes ko saaf karte hai. 🎼"
            },
            {
                en: "Fits perfectly in dashboard slots of older cars or as center channels.",
                hi: "Dashboard mein fit ho jate hai aaram se."
            },
            {
                en: "Complete your soundstage with these front speakers.",
                hi: "Apne sound system ko pura karo in aage wale speakers ke saath."
            }
        ]
    },
    {
        id: "prod_ampere_mono",
        keywords: ["ampere audio", "aa-8k", "8000w", "mono block", "amplifier"],
        responses: [
            {
                en: "PURE POWER! The **Ampere Audio AA-8K 8000W Mono Block** is distinctively for bass heads. ⚡",
                hi: "Bohot Power hai! **Ampere Audio AA-8K 8000W** sirf unke liye hai jinhe bhayankar bass chahiye. ⚡"
            },
            {
                en: "Class D Monoblock technology delivers massive efficient power to your subwoofers.",
                hi: "Yeh Class D Monoblock hai, subwoofers ko puri taakat deta hai."
            },
            {
                en: "Warning: Might shake your mirrors! 😉 Available on order.",
                hi: "Warning: Sheeshe hil jayenge! 😉 Order pe mangwa denge."
            }
        ]
    },
    {
        id: "prod_blaupunkt_icx",
        keywords: ["blaupunkt icx", "icx 402", "blaupunkt coaxial"],
        responses: [
            {
                en: "German Engineering. **Blaupunkt ICx 402 4-Way Coaxial Speakers** offer precise sound reproduction. 🇩🇪",
                hi: "German Tech. **Blaupunkt ICx 402** se awaaz ekdum accurate aati hai. 🇩🇪"
            },
            {
                en: "4-Way design means you get distinct lows, mids, highs, and super highs.",
                hi: "4-Way design hai, matlab har tarah ki awaaz alag aur saaf suna degi."
            },
            {
                en: "Great clarity at high volumes. Upgrade now!",
                hi: "High volume pe bhi awaaz fatati nahi. Abhi lagwao!"
            }
        ]
    },
    {
        id: "prod_infinity_ref",
        keywords: ["infinity ref", "infinity reference", "ref-6532ex", "infinity coaxial"],
        responses: [
            {
                en: "Audiophile Grade. **Infinity REF-6532EX Reference 6.5** speakers are smooth and detailed. 🎹",
                hi: "Premium Sound. **Infinity REF-6532EX** speakers bohot smooth aur detailed bajte hai. 🎹"
            },
            {
                en: "Edge-driven textile tweeters deliver smooth highs without harshness.",
                hi: "Iske tweeters se awaaz chubhti nahi hai, kaano ko acchi lagti hai."
            },
            {
                en: "If you love vocals and melodies, choose Infinity.",
                hi: "Agar gaane ke bol aur dhun pasand hai, toh Infinity lo."
            }
        ]
    },
    {
        id: "prod_pioneer_3way",
        keywords: ["pioneer 3-way", "ts-a1671f", "pioneer coaxial 6.5"],
        responses: [
            {
                en: "balanced Perfomance. **Pioneer TS-A1671F 6.5 3-Way Coaxial** covers full range sound. ⚖️",
                hi: "Sab kuch balance mein. **Pioneer TS-A1671F 3-Way** mein har tarah ki awaaz milti hai. ⚖️"
            },
            {
                en: "Carbon & Mica Reinforced IMPP Cone for fast response and solid bass.",
                hi: "Iska cone material bohot solid hai, bass accha deta hai."
            },
            {
                en: "A standard upgrade that sounds 'premium'.",
                hi: "Ek simple upgrade jo 'premium' sunayi deta hai."
            }
        ]
    },
    {
        id: "prod_sony_3way",
        keywords: ["sony 3-way", "sony mica", "sony reinforced"],
        responses: [
            {
                en: "Versatile Sound. **Sony 3-Way Mica Reinforced Speakers** handle unmatched power. 🦾",
                hi: "Mazboot Sound. **Sony 3-Way Mica Speakers** bohot power jhel sakte hai. 🦾"
            },
            {
                en: "Ideal if you play distinct genres like Rock, Pop, and Bollywood.",
                hi: "Rock, Pop aur Bollywood gaano ke liye perfect hai."
            },
            {
                en: "Sony's reliability is unmatched. Get them installed today.",
                hi: "Sony ki reliability ka koi match nahi. Aaj hi lagwao."
            }
        ]
    },
    {
        id: "prod_underseat_sub",
        keywords: ["under-seat sub", "active subwoofer", "850w sub", "underseat woofer"],
        responses: [
            {
                en: "Hidden Bass! The **Under-Seat Active Subwoofer 850W** saves trunk space but gives big bass. 🕵️‍♂️",
                hi: "Chupa Rustom! **Under-Seat Subwoofer** seat ke neeche chup jata hai par bass tagda deta hai. 🕵️‍♂️"
            },
            {
                en: "Active sub means built-in amplifier. Easy installation, no extra wiring mess.",
                hi: "Isme amplifier inbuilt hai. Wiring ka jhanjhat kam aur installation easy."
            },
            {
                en: "Perfect for hatchbacks or family cars needing extra punch.",
                hi: "Choti gaadiyon ya family cars mein bass badhane ke liye best hai."
            }
        ]
    },
    {
        id: "prod_pioneer_dsp",
        keywords: ["pioneer dsp", "deq-s1000a", "sound processor", "pioneer processor"],
        responses: [
            {
                en: "The Brain of Audio. **Pioneer DEQ-S1000A DSP** completely changes how your system sounds. 🧠",
                hi: "System ka Dimaag. **Pioneer DEQ-S1000A DSP** poore sound system ki awaaz badal deta hai. 🧠"
            },
            {
                en: "Use your smartphone to tune 31-band EQ and Time Alignment.",
                hi: "Apne phone se EQ aur Time Alignment set kar sakte ho."
            },
            {
                en: "Keeps factory radio but delivers competition-level sound quality.",
                hi: "Factory radio rakho par awaaz competition level ki paao."
            }
        ]
    },

    // --- CARRIERS & GUARDS ---
    {
        id: "prod_roof_carrier",
        keywords: ["aluminum carrier", "roof luggage", "carrier 5"],
        responses: [
            {
                en: "Light & Strong. The **Aluminum Roof Luggage Carrier** is rust-proof and sturdy. 🏗️",
                hi: "Halka aur Mazboot. **Aluminum Roof Carrier** mein jung nahi lagta aur tagda hai. 🏗️"
            },
            {
                en: "Aerodynamic shape reduces wind noise on highways.",
                hi: "Highway pe hawa ki awaaz kam karta hai iska shape."
            },
            {
                en: "Load up your bags! Ready for your next Ladakh trip?",
                hi: "Bag bhar ke rakho! Ladakh trip ke liye ready?"
            }
        ]
    },
    {
        id: "prod_front_guard_heavy",
        keywords: ["heavy duty guard", "front bumper guard", "bumper 26"],
        responses: [
            {
                en: "Maximum Protection. **Heavy Duty Front Bumper Guard** shields your car from minor bumps. 🛡️",
                hi: "Full Protection. **Heavy Duty Front Bumper Guard** chote-mote takkar se bachata hai. 🛡️"
            },
            {
                en: "Made of high-grade steel/ABS composite for impact absorption.",
                hi: "Mazboot steel aur ABS se bana hai."
            },
            {
                en: "Adds a muscular look to your SUV.",
                hi: "Aapki SUV ko ekdum muscular look deta hai."
            }
        ]
    },
    {
        id: "prod_rear_steel_guard",
        keywords: ["rear steel guard", "rear bumper protector", "bumper 27"],
        responses: [
            {
                en: "Back is Safe! **Rear Steel Bumper Protector** prevents damage from bikes and carts. 🔙",
                hi: "Piche se safe! **Rear Steel Bumper Protector** bikes aur thelo ki takkar se bachata hai. 🔙"
            },
            {
                en: "Chrome finish adds style while offering protection.",
                hi: "Chrome finish look bhi deta hai aur protection bhi."
            },
            {
                en: "Essential for city driving traffic.",
                hi: "City traffic mein chalane ke liye zaroori hai."
            }
        ]
    },
    {
        id: "prod_custom_bumper",
        keywords: ["custom bumper", "painted bumper", "bumper 28"],
        responses: [
            {
                en: "Style Statement. **Custom Painted Front Bumpers** match your car's body color perfectly. 🎨",
                hi: "Style Statement hai. **Custom Painted Bumpers** aapki gaadi ke colour se perfect match hote hai. 🎨"
            },
            {
                en: "Designed for specific models to enhance aerodynamics and looks.",
                hi: "Gaadi ke look aur speed ko dhyan mein rakh ke design kiya gaya hai."
            },
            {
                en: "Give your car a facelift today!",
                hi: "Apni gaadi ko naya chehra do!"
            }
        ]
    },
    {
        id: "prod_abs_guard",
        keywords: ["abs guard", "abs front bumper", "carrier 24"],
        responses: [
            {
                en: "Sleek Protection. **ABS Front Bumper Guard** looks factory-fitted and stylish. ✨",
                hi: "Stylish Safety. **ABS Front Bumper Guard** ekdum company fitted lagta hai. ✨"
            },
            {
                en: "Lightweight yet tough ABS material absorbs shocks.",
                hi: "Halka hai par mazboot ABS material shock sokh leta hai."
            },
            {
                en: "Doesn't rust and keeps looking new for years.",
                hi: "Jung nahi lagta aur saalon tak naya dikhta hai."
            }
        ]
    },
    {
        id: "prod_rear_diffuser",
        keywords: ["rear diffuser", "bumper diffuser", "carrier 25"],
        responses: [
            {
                en: "Sporty Rear. The **Rear Bumper Diffuser** gives a racing car aesthetic. 🏁",
                hi: "Piche se Sporty. **Rear Bumper Diffuser** racing car wala look deta hai. 🏁"
            },
            {
                en: "Available with dummy exhaust tips for that aggressive look.",
                hi: "Aggressive look ke liye isme dummy silencer tips bhi aate hai."
            },
            {
                en: "Fits perfectly on Swift, i20, and Creta.",
                hi: "Swift, i20 aur Creta pe perfect fit hota hai."
            }
        ]
    },

    // --- WHEEL CAPS & ALLOYS ---
    {
        id: "prod_velcoty_cap",
        keywords: ["velocity cap", "universal wheel cover", "red black cap", "cap 601"],
        responses: [
            {
                en: "Speedy Look! **Velocity Universal Wheel Covers** in Red & Black look aggressive. 🔴⚫",
                hi: "Tez Look! **Velocity Wheel Covers** Red & Black colour mein khatarnak dikhte hai. 🔴⚫"
            },
            {
                en: "Made of flexible ABS plastic that doesn't crack easily.",
                hi: "Flexible plastic hai jo jaldi toot-ta nahi."
            },
            {
                en: "Cheapest way to make your steel rims look like alloys.",
                hi: "Steel rim ko alloy jaisa dikhane ka sabse sasta tareeka."
            }
        ]
    },
    {
        id: "prod_prigan_black",
        keywords: ["prigan black", "matte black wheel cover", "16 inch cap", "cap 602"],
        responses: [
            {
                en: "Stealth Mode. **PRIGAN Matte Black Wheel Covers** give a full black-out look. 🖤",
                hi: "Stealth Mode. **PRIGAN Matte Black Wheel Covers** se full black look milta hai. 🖤"
            },
            {
                en: "Available in 13, 14, 15, and 16 inches.",
                hi: "13 se 16 inch tak sab size mein available hai."
            },
            {
                en: "Hide those rusty rims instantly!",
                hi: "Jung lage rim ko foran chupa do!"
            }
        ]
    },
    {
        id: "prod_favmoto_blue",
        keywords: ["favmoto blue", "blue wheel cap", "cap 603"],
        responses: [
            {
                en: "Pop of Color! **Favmoto Blue Color** caps stand out from the crowd. 🔵",
                hi: "Thoda Colourful! **Favmoto Blue Color** caps sabse alag dikhte hai. 🔵"
            },
            {
                en: "Dual-tone paint finish that lasts long.",
                hi: "Dual-tone paint hai jo lamba chalta hai."
            },
            {
                en: "Match it with your blue car body!",
                hi: "Apni blue gaadi ke saath match karo!"
            }
        ]
    },
    {
        id: "prod_silver_star",
        keywords: ["silver star", "radiant cap", "cap 35"],
        responses: [
            {
                en: "Clean & Classy. **Silver Star Radiant** caps look like original factory fittings. ⚪",
                hi: "Saaf aur Classy. **Silver Star Radiant** caps original company fitting jaise lagte hai. ⚪"
            },
            {
                en: "High gloss silver finish reflects light beautifully.",
                hi: "Chamakdar silver finish hai."
            },
            {
                en: "Restore your car's showroom look.",
                hi: "Gaadi ka showroom look wapas lao."
            }
        ]
    },

    // --- FLOOR MATS ---
    {
        id: "prod_7d_beige",
        keywords: ["beige 7d", "precision mat", "7d mat", "mat 23"],
        responses: [
            {
                en: "Total Coverage. **Beige 7D Precision Mats** cover every inch of your floor. 🧹",
                hi: "Pura Cover. **Beige 7D Precision Mats** floor ka har kona cover karte hai. 🧹"
            },
            {
                en: "Diamond quilted design collects dust and adds luxury.",
                hi: "Diamond design dhool pakad leta hai aur luxury look deta hai."
            },
            {
                en: "Easy to remove and wash. Keeps original carpet brand new.",
                hi: "Nikaal ke dhona aasaan hai. Original carpet naya rehta hai."
            }
        ]
    },
    {
        id: "prod_circuit_mat",
        keywords: ["circuit mat", "red black mat", "mat 32"],
        responses: [
            {
                en: "Racer's Choice. **Red-Black Circuit Mat** adds a sporty touch to your floor. 🏁",
                hi: "Racer ki Pasand. **Red-Black Circuit Mat** floor ko sporty banata hai. 🏁"
            },
            {
                en: "Non-slip bottom ensures safety while driving.",
                hi: "Neeche se fisalta nahi hai, driving mein safe hai."
            },
            {
                en: "Durable PVC material handles rough usage.",
                hi: "Mazboot PVC material hai, rough use ke liye sahi hai."
            }
        ]
    },
    {
        id: "prod_stealth_mat",
        keywords: ["stealth mat", "all weather mat", "mat 33"],
        responses: [
            {
                en: "Ready for anything. **Stealth All-Weather Mats** handle mud, water, and sand. 🌧️",
                hi: "Sab jhel lega. **Stealth All-Weather Mats** kichad, paani, ret sab sambhal leta hai. 🌧️"
            },
            {
                en: "Deep grooves trap water/slush effectively.",
                hi: "Gehre grooves paani aur kichad ko pakad ke rakhte hai."
            },
            {
                en: "Just hose it down to clean. Simple!",
                hi: "Bas paani maaro aur saaf. Simple!"
            }
        ]
    },

    // --- PERFUMES ---
    {
        id: "prod_shaldan_lime",
        keywords: ["my shaldan", "lemon perfume", "lime scent", "gel perfume"],
        responses: [
            {
                en: "Classic Freshness. **My Shaldan Gel Perfume (Lime)** is a timeless favorite. 🍋",
                hi: "Taazgi bhara. **My Shaldan Gel Perfume (Lime)** sabka favourite hai. 🍋"
            },
            {
                en: "Made from real citrus peel extracts for natural scent.",
                hi: "Asli nimbu ke chilke se bana hai natural khushbu ke liye."
            },
            {
                en: "Lasts up to 60 days!",
                hi: "60 din tak chalta hai!"
            }
        ]
    },
    {
        id: "prod_godrej_twist",
        keywords: ["godrej aer", "aer twist", "godrej perfume"],
        responses: [
            {
                en: "Twist and Shine. **Godrej Aer Twist** fits perfectly in your cup holder. 🌪️",
                hi: "Ghumao aur Mehekao. **Godrej Aer Twist** cup holder mein fit hota hai. 🌪️"
            },
            {
                en: "Gel technology means no spills!",
                hi: "Gel hai toh girne ka dar nahi!"
            },
            {
                en: "Available in Petal Crush, Cool Surf, and Fresh Lush.",
                hi: "Petal Crush, Cool Surf aur Fresh Lush mein milta hai."
            }
        ]
    },
    {
        id: "prod_aromahpure_musk",
        keywords: ["aromahpure musk", "hanging perfume", "musk scent"],
        responses: [
            {
                en: "Elegant Aroma. **Aromahpure Hanging Car Perfume - Musk** smells sophisticated. 👔",
                hi: "Shahi Mehak. **Aromahpure Hanging Car Perfume - Musk** ki khushbu bohot sophisticated hai. 👔"
            },
            {
                en: "Wooden cap absorbs and diffuses scent slowly.",
                hi: "Lakdi ka dhakkan dheere-dheere khushbu failata hai."
            },
            {
                en: "Hangs beautifully on your rearview mirror.",
                hi: "Rearview mirror pe latka hua accha dikhta hai."
            }
        ]
    },

    // --- SUN CONTROL ---
    {
        id: "prod_glacier_shield",
        keywords: ["glacier shield", "thermal shield", "sun film 44"],
        responses: [
            {
                en: "Maximum Cooling. **Glacier Thermal Shield** blocks unmatched heat. ❄️",
                hi: "Sabse Thanda. **Glacier Thermal Shield** garmi ko andar aane hi nahi deta. ❄️"
            },
            {
                en: "Ceramic nanoparticle technology rejects IR rays.",
                hi: "Ceramic technology dhoop ki garmi ko rokti hai."
            },
            {
                en: "Transparent yet effective. Legal for road use.",
                hi: "Transparent hai par asardaar hai. Police se koi tension nahi."
            }
        ]
    },
    {
        id: "prod_rapid_hydro",
        keywords: ["rapid hydro", "hydro shield", "rain repellent", "sun film 47"],
        responses: [
            {
                en: "Clear Vision. **Rapid Hydro Shield** keeps your glass clear in rain. 🌧️",
                hi: "Saaf Vision. **Rapid Hydro Shield** baarish mein glass ko saaf rakhta hai. 🌧️"
            },
            {
                en: "Water beads up and rolls off instantly.",
                hi: "Paani ki boonde phisal ke gir jati hai."
            },
            {
                en: "A must-have for monsoon driving safety.",
                hi: "Baarish mein chalane ke liye zaroori hai."
            }
        ]
    },

    // --- LIGHTS ---
    {
        id: "prod_rgb_strips",
        keywords: ["rgb strips", "ambient strips", "interior lights 108"],
        responses: [
            {
                en: "Party Mode! **RGB Ambient Strips** change colors with your mood. 🌈",
                hi: "Party Mode On! **RGB Ambient Strips** mood ke hisaab se colour badalte hai. 🌈"
            },
            {
                en: "Control via Mobile App or Remote. Millions of colors!",
                hi: "Mobile App ya Remote se control karo. Laakhon colours hai!"
            },
            {
                en: "Hidden installation in dashboard gaps. Looks sleek.",
                hi: "Dashboard ke gap mein chupke lagta hai. Bohot sleek dikhta hai."
            }
        ]
    },
    {
        id: "prod_led_300w",
        keywords: ["300w led", "h7 led", "headlight bulb 401"],
        responses: [
            {
                en: "Blindingly Bright. **300W LED Headlight Bulb H7** turns night into day. ☀️",
                hi: "Andha-dhund Roshni. **300W LED Headlight Bulb** raat ko din bana deta hai. ☀️"
            },
            {
                en: "6000K Pure White light for modern look and visibility.",
                hi: "6000K Pure White light hai, modern look aur safai ke liye."
            },
            {
                en: "30000 Lumens brightness! Please use responsibly.",
                hi: "30000 Lumens ki chamak! Dhyan se use karna."
            }
        ]
    },
    {
        id: "prod_fog_xenon",
        keywords: ["bi-xenon fog", "iphcar m617", "fog lamp", "projector fog"],
        responses: [
            {
                en: "Cut through fog. **IPHCAR M617 Bi-Xenon Fog Lamp** is a lifesaver. 🌫️",
                hi: "Kohra kaat dega. **IPHCAR M617 Bi-Xenon Fog Lamp** bohot kaam ka hai. 🌫️"
            },
            {
                en: "High and Low beam function in fog lamp itself.",
                hi: "Fog lamp mein hi High aur Low beam hai."
            },
            {
                en: "Waterproof and extremely durable.",
                hi: "Paani se kharab nahi hota aur mazboot hai."
            }
        ]
    },

    // --- ELECTRONICS ---
    {
        id: "prod_wiring_harness",
        keywords: ["canbus box", "wiring harness", "adapter 16pin"],
        responses: [
            {
                en: "No Cutting! **Car 16pin Wiring Harness Adapter** creates a safe connection. 🔌",
                hi: "Taar mat kato! **Wiring Harness Adapter** se safe connection banata hai. 🔌"
            },
            {
                en: "Essential for installing Android players without voiding warranty.",
                hi: "Android player lagane ke liye zaroori hai taaki warranty na jaye."
            },
            {
                en: "Fits specifically to your car model coupler.",
                hi: "Aapki gaadi ke coupler mein fit baithta hai."
            }
        ]
    },
    {
        id: "prod_usb_hub",
        keywords: ["usb hub", "charging hub", "fast charger"],
        responses: [
            {
                en: "Power Up. **Car USB Charging Hubs** keep everyone's phone charged. 🔋",
                hi: "Charge Raho. **Car USB Charging Hubs** sabka phone charge rakhta hai. 🔋"
            },
            {
                en: "Supports Fast Charging for Android and iPhone.",
                hi: "Android aur iPhone dono ki Fast Charging support karta hai."
            },
            {
                en: "Multiple ports for front and rear passengers.",
                hi: "Aage aur piche walo ke liye alag ports hai."
            }
        ]
    },


    // ==========================================
    // FALLBACK & GENERIC CATEGORIES
    // ==========================================
    {
        id: "thanks",
        keywords: ["thank", "dhanyavad", "shukriya", "nice", "good", "mast", "best", "great", "ok", "okay", "thik", "super"],
        responses: [
            {
                en: "Welcome! Datamatex AI Bot is always at your service. 😎",
                hi: "Koi baat nahi Boss! Aap khush toh hum khush. 😎"
            },
            {
                en: "Glad you liked it! Let me know if you need anything else.",
                hi: "Accha laga na? Aur kuch chahiye toh bolo."
            },
            {
                en: "Have a safe drive! 🚗",
                hi: "Sambhal ke chalana gaadi! 🚗"
            }
        ]
    },
    {
        id: "bot",
        keywords: ["who", "real", "human", "bot", "robot", "insan", "naam"],
        responses: [
            {
                en: "I am Datamatex AI Bot 🤖. Trained by Tanveer Sir to help you!",
                hi: "Main Datamatex AI Bot hu 🤖. Tanveer Sir ne train kiya hai mujhe aapki madat karne ke liye!"
            },
            {
                en: "I'm a smart virtual assistant, here to answer your car queries.",
                hi: "Main ek smart assistant hu, car ke sawalon ka jawab dene ke liye."
            },
            {
                en: "I don't sleep, so ask me anything anytime! ⚡",
                hi: "Main sota nahi hu, kabhi bhi kuch bhi pucho! ⚡"
            }
        ]
    },
    {
        id: "language",
        keywords: ["hindi", "marathi", "bol", "aata", "baat", "samaj", "language", "bhasha", "teko", "malum"],
        responses: [
            {
                en: "I understand English, Hindi, and Marathi! 🤖",
                hi: "Arre Boss, Hindi, Marathi, English sab aata hai apne ko! 🤖"
            },
            {
                en: "Just type how you speak, I'll get it.",
                hi: "Jaise baat karte ho waise type karo, main samajh jaunga."
            },
            {
                en: "Communication is key! 🗣️",
                hi: "Baat karna zaroori hai! 🗣️"
            }
        ]
    },

    // ==========================================
    // GENERAL KNOWLEDGE & INTENTS
    // ==========================================

    {
        id: "general_products",
        keywords: ["product", "products", "item", "items", "catalogue", "list", "inventory", "stock", "kya hai", "kya milta hai", "samaaan"],
        responses: [
            {
                en: "We have everything! 🏎️ Seat Covers, Android Players, 7D Mats, LEDs, Sun Film, Alloys, and more.",
                hi: "Sab kuch hai Boss! 🏎️ Seat Covers, Android Players, 7D Mats, LEDs, Sun Film, Alloys... sab milega."
            },
            {
                en: "You can check our full catalogue on the 'Products' page. Anything specific you are looking for?",
                hi: "Pura catalogue 'Products' page pe dekh lo. Kuch specific chahiye kya?"
            },
            {
                en: "From perfumes to body kits, we have 100+ premium accessories ready in stock.",
                hi: "Perfume se leke Body Kit tak, 100+ items stock mein ready hai."
            }
        ]
    },
    {
        id: "services_overview",
        keywords: ["what services", "services list", "service detail", "detailing", "ppf", "coating", "wrapping", "kaam kya karte ho", "kaam", "work"],
        responses: [
            {
                en: "We are experts in: \n🔊 Concert Audio \n💺 Custom Interiors \n❄️ Sun Control Films \n🛡️ Paint Protection (PPF) \n🚨 Security Systems.",
                hi: "Hum experts hai: \n🔊 Concert Audio \n💺 Custom Interiors \n❄️ Sun Control Films \n🛡️ Paint Protection (PPF) \n🚨 Security Systems."
            },
            {
                en: "We also do professional Detailing, Ceramic Coating, and full car restoration.",
                hi: "Hum professional Detailing, Ceramic Coating aur puri car restoration bhi karte hai."
            },
            {
                en: "Visit us for a consultation. We will suggest the best upgrades for your car model.",
                hi: "Ek baar aake milo. Hum aapki gaadi ke hisaab se best upgrade batayenge."
            }
        ]
    },
    {
        id: "identity_religion",
        keywords: ["muslim", "islam", "allah", "god", "bhagwan", "religion", "dharm", "mashallah", "alhamdulillah", "inshallah", "jai shree ram"],
        responses: [
            {
                en: "Mashallah! We respect all communities. Captain Car connects everyone through the love of cars. 🤝",
                hi: "Mashallah! Hum sab dharm ki izzat karte hai. Captain Car sabko car ke shauk se jodta hai. 🤝"
            },
            {
                en: "We are all one big family of car lovers! ❤️",
                hi: "Hum sab car lovers ki ek badi family hai! ❤️"
            },
            {
                en: "Our only religion is 'Perfection in Modification'. 🛠️✨",
                hi: "Humara bas ek hi dharm hai - 'Modification mein Perfection'. 🛠️✨"
            }
        ]
    },

    {
        id: "services", // Fallback for general service queries
        keywords: ["service", "modify", "modification", "custom", "accessories"],
        responses: [
            {
                en: "We offer complete car modification! Audio, Lights, Seats, PPF, Alloys... you name it. 🚗✨",
                hi: "Full Modification karte hai Boss! Audio, Lights, Seats, PPF, Alloys... bas bol do kya chahiye! 🚗✨"
            },
            {
                en: "Our specialty is custom interiors and premium audio setups.",
                hi: "Humari khasiyat custom interiors aur heavy sound system hai."
            },
            {
                en: "Check out our 'Services' page for full details.",
                hi: "'Services' page dekh lo puri jaankari ke liye."
            }
        ]
    },
    // GENERIC CATEGORIES AS FALLBACKS IF SPECIFIC PRODUCT NOT FOUND
    {
        id: "audio",
        keywords: ["audio", "sound", "speaker", "bass", "woofer", "music"],
        responses: [
            {
                en: "Concert on Wheels! 🔊 We offer Audio Experts (Sony, JBL, Pioneer).",
                hi: "Gaadi mein Hall jaisa sound! 🔊 Sony, JBL, Pioneer sab hai."
            },
            {
                en: "DSP Tuning, Damping, Subwoofers available.",
                hi: "DSP Tuning, Damping aur Subwoofers available hai."
            },
            {
                en: "Come for a live sound demo at our shop! 🎶",
                hi: "Dukan pe aao, awaaz suno fir decide karo! 🎶"
            }
        ]
    },
    {
        id: "lights",
        keywords: ["light", "led", "bulb", "headlight", "fog"],
        responses: [
            {
                en: "Light up the Night! 💡 We have 300W LEDs & HIDs.",
                hi: "Raat ko din bana denge! 💡 300W LEDs aur HIDs lagao."
            },
            {
                en: "Brands: Osram, Hyundai, Liu HJG.",
                hi: "Osram, Hyundai, Liu HJG sab brands hai."
            },
            {
                en: "Get a brightness check at our store. ✨",
                hi: "Ek baar brightness check karne aao. ✨"
            }
        ]
    },
    {
        id: "seats",
        keywords: ["seat", "cover", "leather", "interior"],
        responses: [
            {
                en: "Luxury Comfort! 💺 Custom-fit Seat Covers in Nappa Leather.",
                hi: "Sofa jaisa comfort! 💺 Nappa Leather Seat Covers lagayenge."
            },
            {
                en: "Bucket Fitting means ZERO wrinkles.",
                hi: "Hum Bucket Fitting karte hai matlab no wrinkles!"
            },
            {
                en: "Long-lasting quality and expert stitching.",
                hi: "Silai aur quality ekdum solid hai."
            }
        ]
    },
    {
        id: "location",
        keywords: ["where", "location", "address", "map", "shop"],
        responses: [
            {
                en: "📍 **Address**: Next to Greenland Hotel, Chavindra, Bhiwandi.",
                hi: "📍 **Address**: Greenland Hotel ke baaju mein, Chavindra, Bhiwandi."
            },
            {
                en: "We are right on the main road.",
                hi: "Main road pe hi hai apni dukan."
            },
            {
                en: "Call us for directions.",
                hi: "Call karo rasta puchne ke liye."
            }
        ]
    },
    {
        id: "contact",
        keywords: ["phone", "call", "mobile", "number", "contact"],
        responses: [
            {
                en: "📞 **Contact**: +91 9822119832 (Call/WhatsApp).",
                hi: "📞 **Phone**: +91 9822119832. Ispe Call ya WhatsApp karo."
            },
            {
                en: "Tanveer Sir is available on this number.",
                hi: "Tanveer Sir isi number pe milenge."
            },
            {
                en: "Message us for quotes.",
                hi: "Rate puchne ke liye message karo."
            }
        ]
    }
];

export const fallbackResponse = {
    en: "I didn't catch that! 🤔 Try asking about 'Owner', 'Sony Speakers', '7D Mats', or 'Location'.",
    hi: "Samjha nahi Boss! 🤔 Thoda easy bolo. 'Sony Speakers', '7D Mats', 'Price' pucho."
};

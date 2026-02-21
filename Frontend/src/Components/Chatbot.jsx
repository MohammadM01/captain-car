import React, { useState, useRef, useEffect } from "react";
import { chatData, fallbackResponse } from "../Data/chatData";
import Fuse from "fuse.js";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! I'm Datamatex AI Bot 🤖. Ask me anything about our car services!",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  // State to track how many times a user has asked about a specific intent
  const [interactionState, setInteractionState] = useState({});

  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPopup(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    });
    return () => clearTimeout(timer);
  }, []);

  // Dynamic memory state
  const [botMemory, setBotMemory] = useState([]);

  // Fetch bot memory on load
  useEffect(() => {
    fetch("/bot-memory.json")
      .then((res) => res.json())
      .then((data) => {
        setBotMemory(data);
        console.log("Bot memory loaded:", data.length, "items");
      })
      .catch((err) => console.error("Failed to load bot memory:", err));
  }, []);

  // Helper to detect Hinglish/Hindi
  const isHinglish = (text) => {
    const hindiKeywords = [
      "hai",
      "kya",
      "bol",
      "bhai",
      "kidhar",
      "kaisa",
      "main",
      "karna",
      "chahiye",
      "matlab",
      "kaun",
      "kaha",
      "kaise",
      "thi",
      "tha",
      "raha",
      "sahi",
      "galat",
      "karo",
      "do",
      "dedo",
      "wala",
      "wali",
      "kab",
      "kitna",
      "paise",
      "bhav",
      "dukan",
      "idhar",
      "udhar",
      "kothe",
      "malum",
      "samaj",
      "teko",
      "mereko",
      "apun",
      "boss",
      "sir",
      "bhaiya",
      "dada",
    ];
    const lowerText = text.toLowerCase();
    return hindiKeywords.some((word) => lowerText.includes(word));
  };

  // Helper: Levenshtein Distance for fuzzy matching
  const calculateLevenshteinDistance = (a, b) => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1),
          );
        }
      }
    }

    return matrix[b.length][a.length];
  };

  const findBestMatch = (input) => {
    // Synonym Mapping
    const synonymMap = {
      cost: "price",
      rate: "price",
      charges: "price",
      buy: "shop",
      purchase: "shop",
      store: "shop",
      location: "address",
      where: "address",
      contact: "phone",
      number: "phone",
      call: "phone",
      mobile: "phone",
      screen: "display",
      lcd: "display",
      led: "display",
      monitor: "display",
      player: "android",
      system: "android",
      music: "audio",
      sound: "audio",
      bass: "woofer",
      sub: "woofer",
      tube: "woofer",
      light: "lights",
      lamp: "lights",
      bulb: "lights",
      mat: "mats",
      floor: "mats",
      seat: "seats",
      cover: "covers",
      film: "ppf",
      protection: "ppf",
      lamination: "ppf",
    };

    const normalizeInput = (text) => {
      return text
        .toLowerCase()
        .split(/\s+/)
        .map((word) => synonymMap[word] || word)
        .join(" ");
    };

    const lowerInput = normalizeInput(input);
    const userLanguage = isHinglish(lowerInput) ? "hi" : "en";

    let bestMatch = null;
    let highestScore = 0;

    // Split input into words for token-based fuzzy matching
    const inputWords = lowerInput.split(/\s+/);

    for (const intent of chatData) {
      let score = 0;

      for (const keyword of intent.keywords) {
        const lowerKeyword = keyword.toLowerCase();

        // 1. Exact Phrase Match (Highest Priority)
        if (lowerInput.includes(lowerKeyword)) {
          score += 10;
          continue; // Skip other checks if exact match found
        }

        // 2. Exact Word Match & Fuzzy Match
        // Check if any word in the input matches the keyword (or is close to it)
        // This works best if keywords are single words. For phrases, we rely on the exact phrase match above mostly.
        // But we can also check if *parts* of the keyword exist.

        for (const word of inputWords) {
          // Exact word match
          if (word === lowerKeyword) {
            score += 5;
          }
          // Fuzzy match (only for words > 3 chars to avoid noise)
          else if (word.length > 3 && lowerKeyword.length > 3) {
            const distance = calculateLevenshteinDistance(word, lowerKeyword);
            // Allow 2 error for words length 4-7, 3 errors for longer to be more forgiving
            const allowedErrors = lowerKeyword.length > 7 ? 3 : 2;

            if (distance <= allowedErrors) {
              score += 3; // Lower score for fuzzy match
            }
          }
        }
      }

      // Update best match if score is better. Threshold reduced to 3 to allow fuzzy matches to pass.
      if (score > highestScore && score >= 3) {
        highestScore = score;
        bestMatch = intent;
      }
    }

    if (bestMatch) {
      // Get current count for this intent (default to 0)
      const currentCount = interactionState[bestMatch.id] || 0;

      // Get the specific response based on count (cycle through available responses)
      let responseText = "";

      if (Array.isArray(bestMatch.responses)) {
        const responseIndex = currentCount % bestMatch.responses.length;
        const responseObj = bestMatch.responses[responseIndex];
        responseText = responseObj[userLanguage] || responseObj["en"];
      } else {
        // Fallback for any old structure (safety)
        const resp = bestMatch.response || bestMatch.responses;
        responseText = resp[userLanguage] || resp["en"] || resp;
      }

      // Update interaction count for this intent
      setInteractionState((prev) => ({
        ...prev,
        [bestMatch.id]: currentCount + 1,
      }));

      return responseText;
    } else {
      // Fallback to Dynamic Search (Fuse.js)
      if (botMemory.length > 0) {
        const fuse = new Fuse(botMemory, {
          keys: ["text"],
          threshold: 0.5, // 0.0 is exact match, 1.0 is match anything
          includeScore: true,
        });

        const results = fuse.search(input);

        if (results.length > 0 && results[0].score < 0.4) {
          // Found a good match in website content
          return "💡 " + results[0].item.text; // Add icon to show it's from memory
        }
      }

      return fallbackResponse[userLanguage] || fallbackResponse["en"];
    }
  };

  // Helper to render message with links
  const renderMessage = (text) => {
    // Regex for [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      const lineParts = [];
      let match;

      // Reset regex state
      linkRegex.lastIndex = 0;

      let currentText = line;

      // Simple parser: split by markdown link regex
      const splitByLink = currentText.split(linkRegex);

      // splitByLink will look like: ["text before", "link text", "link url", "text after"]
      for (let i = 0; i < splitByLink.length; i += 3) {
        // Text before link
        if (splitByLink[i]) {
          // Check if there are raw URLs in this part
          const words = splitByLink[i].split(" ");
          const wordsWithLinks = words.map((word, wIdx) => {
            const isUrl = word.match(/^https?:\/\//);
            if (isUrl) {
              return (
                <a
                  key={`url-${lineIdx}-${i}-${wIdx}`}
                  href={word}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline hover:text-blue-300 break-all"
                >
                  {word}{" "}
                </a>
              );
            }
            return word + " ";
          });
          lineParts.push(
            <span key={`text-${lineIdx}-${i}`}>{wordsWithLinks}</span>,
          );
        }

        // The Link itself (if exists)
        if (i + 1 < splitByLink.length) {
          const linkText = splitByLink[i + 1];
          const linkUrl = splitByLink[i + 2];
          lineParts.push(
            <a
              key={`md-link-${lineIdx}-${i}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300 font-bold"
            >
              {linkText}
            </a>,
          );
        }
      }

      return (
        <span key={lineIdx} className="block min-h-[1.2em]">
          {lineParts}
        </span>
      );
    });
  };

  const handleSendMessage = (e, textOverride = null) => {
    if (e) e.preventDefault();

    const messageText = textOverride || inputValue;
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const botResponseText = findBestMatch(messageText);

    setTimeout(() => {
      const botMessage = { text: botResponseText, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 600);

    setInputValue("");
  };

  // Quick Reply Chips Data
  const quickChips = [
    { label: "Pricing 💰", query: "Price" },
    { label: "Location 📍", query: "Location" },
    { label: "Services 🛠️", query: "Services" },
    { label: "Contact 📞", query: "Contact Number" },
    { label: "PPF / Coating 🛡️", query: "PPF Details" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-100 font-sans flex flex-col items-end gap-2">
      {/* Greeting Popup */}
      <div
        className={`transition-all duration-500 transform ${showPopup && !isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"} bg-white text-black text-sm px-4 py-3 rounded-xl shadow-lg border-2 border-[#E31E24] relative mb-2 max-w-[200px]`}
      >
        Hey! Need help with your car? 🚗💨
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b-2 border-r-2 border-[#E31E24] transform rotate-45"></div>
      </div>

      {/* Chat Window */}
      <div
        className={`transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-0 opacity-0 translate-y-10 pointer-events-none absolute bottom-0 right-0"
        } w-[340px] md:w-[380px] bg-[#0a0a0a] border border-[#E31E24]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[550px] mb-4`}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-[#E31E24] to-[#990a0f] p-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm overflow-hidden">
              <img
                src="/assets/captain/datamatex-ai-bot.png"
                alt="Bot"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-black text-white uppercase italic tracking-wider text-sm">
                Datamatex AI Bot
              </h3>
              <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>{" "}
                Online
              </p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-white/80 hover:text-white transition-colors rotate-0 hover:rotate-90 duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-[#111] space-y-4 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              {msg.sender === "bot" && idx > 0 && (
                <div className="w-8 h-8 rounded-full bg-[#E31E24]/20 flex items-center justify-center mr-2 border border-[#E31E24]/30 self-end mb-1 shrink-0 overflow-hidden">
                  <img
                    src="/assets/captain/datamatex-ai-bot.png"
                    alt="Bot"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === "user"
                    ? "bg-[#E31E24] text-white rounded-tr-none"
                    : "bg-[#222] text-gray-200 rounded-tl-none border border-white/5"
                }`}
              >
                {renderMessage(msg.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Chips & Input Area */}
        <div className="bg-[#0a0a0a] border-t border-white/10">
          {/* Chips Scroll View */}
          <div className="flex gap-2 p-2 overflow-x-auto scrollbar-none mask-linear-fade">
            {quickChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(null, chip.query)}
                className="whitespace-nowrap bg-[#1a1a1a] hover:bg-[#333] border border-white/10 text-xs px-3 py-1.5 rounded-full text-gray-300 transition-colors shrink-0"
              >
                {chip.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-3 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-[#1a1a1a] text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#E31E24] border border-white/5 placeholder:text-gray-500 transition-all"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-[#E31E24] text-white p-3 rounded-xl hover:bg-[#c21920] transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              <svg
                className="w-5 h-5 fill-current transform rotate-90"
                viewBox="0 0 24 24"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* FAB Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="w-12 h-12 bg-[#E31E24] rounded-full shadow-[0_0_20px_rgba(227,30,36,0.6)] flex items-center justify-center hover:scale-110 transition-transform duration-300 group z-100 relative animate-bounce-slow"
        >
          <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:animate-ping duration-1000"></div>
          <img
            src="/assets/captain/datamatex-ai-bot.png"
            alt="Bot"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0a0a0a] rounded-full animate-pulse"></span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;

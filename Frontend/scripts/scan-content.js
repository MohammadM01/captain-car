import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const PAGES_DIR = path.join(__dirname, "../src/Pages");
const OUTPUT_FILE = path.join(__dirname, "../public/bot-memory.json");
const IGNORE_FILES = ["Login.jsx", "Signup.jsx", "Dashboard.jsx", "Admin.jsx"]; // Pages to skip

// Helper to extract text from file content
function extractTextPrompts(content, filename) {
  const memory = [];

  // Remove imports and exports to reduce noise
  let cleanContent = content
    .replace(/import .*? from .*?;/g, "")
    .replace(/export default .*?;/g, "")
    .replace(/const .*? = require\(.*?\);/g, "");

  // Extract text from commonly used React patterns
  // 1. Text inside quotes (strings) that look like content (longer than 15 chars)
  const stringMatches = cleanContent.match(/["']([^"']{15,})["']/g);
  if (stringMatches) {
    stringMatches.forEach((match) => {
      const text = match.slice(1, -1).trim(); // Remove quotes
      // Filter out code-like strings (URLs, paths, selectors)
      if (
        !text.includes("/") &&
        !text.includes("{") &&
        !text.includes("=") &&
        !text.match(/^M\d/) && // SVG paths usually start with M followed by numbers
        text.includes(" ") // Must have at least one space to be a sentence/phrase
      ) {
        memory.push({
          source: filename,
          text: text,
          type: "content",
        });
      }
    });
  }

  // 2. Extract structured data objects (like steps, services, products)
  // This is a naive extraction but works for static data arrays
  // We look for objects with 'title', 'desc', 'description', 'answer'
  const objectRegex =
    /{[\s\S]*?(?:title|desc|description|answer|q|a)\s*:\s*["']([^"']+)["'][\s\S]*?}/g;
  let match;
  while ((match = objectRegex.exec(cleanContent)) !== null) {
    if (match[1] && match[1].length > 5) {
      memory.push({
        source: filename,
        text: match[1].trim(),
        type: "structured",
      });
    }
  }

  return memory;
}

// Main scanning function
function scanDirectory(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(scanDirectory(fullPath));
    } else if (file.endsWith(".jsx") || file.endsWith(".js")) {
      if (IGNORE_FILES.includes(file)) continue;

      console.log(`Scanning ${file}...`);
      const content = fs.readFileSync(fullPath, "utf-8");
      const extracted = extractTextPrompts(content, file);
      results = results.concat(extracted);
    }
  }
  return results;
}

// Run scanner
console.log("🤖 Bot Scanner Started...");
try {
  const memory = scanDirectory(PAGES_DIR);

  // Deduplicate
  const uniqueMemory = Array.from(new Set(memory.map((a) => a.text))) // Deduplicate by text
    .map((text) => {
      return memory.find((a) => a.text === text);
    });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(uniqueMemory, null, 2));
  console.log(
    `✅ Scanned ${uniqueMemory.length} memories. Saved to public/bot-memory.json`,
  );
} catch (error) {
  console.error("❌ Scanning failed:", error);
  process.exit(1);
}

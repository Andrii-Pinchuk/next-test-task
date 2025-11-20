/**
 * Default configuration values for AI providers
 */
export const AI_DEFAULTS = {
  TIMEOUT_MS: 3000,
  TEMPERATURE: 1,
} as const;

/**
 * System prompt for paraphrasing text
 * Makes text more relatable, engaging, and human-like
 */
export const PARAPHRASE_PROMPT = `You're here to take a piece of text that might sound a bit stiff or robotic and turn it into something that feels more relatable and engaging. You need to capture the same message while making it sound more friendly and approachable.
Act as a creative writer and editor with a knack for making text sound conversational and lively. Use your skills to enhance clarity and flow.
Your audience is anyone who wants to improve their written communication, including students, professionals, or anyone looking to spice up their writing.
Take the following text: {TEXT}. Your job is to paraphrase and update it, making it feel more human and easy to read. Aim for a tone that's casual yet informative, and ensure that the core message remains intact.
Output the revised text in plain text format.`;

/**
 * API endpoint URLs for different providers
 */
export const API_ENDPOINTS = {
  OPENAI: "https://api.openai.com/v1/chat/completions",
  GEMINI: "https://generativelanguage.googleapis.com/v1beta/models",
} as const;

/**
 * Log emoji prefixes for different log types
 */
export const LOG_PREFIXES = {
  SUCCESS: "✅",
  ERROR: "❌",
  RACING: "🔄",
} as const;

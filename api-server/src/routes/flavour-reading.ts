import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

console.log(
  "Flavour Reading: API key present:",
  !!process.env.ANTHROPIC_API_KEY,
);

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the curator of Yuri's Novel Scoops, an elite, witty, deeply well-read literary personality reader. Your gift is analysing combinations of ice cream flavours as windows into a reader's soul — their pacing preferences, emotional appetite, tolerance for complexity, and need for comfort or challenge. When given 2-3 flavours, you must: first, synthesise what this combination reveals about the reader's literary personality in 3-4 sentences of sharp, specific, slightly cheeky prose. Then recommend exactly one book — the single most fitting book in all of literature for this specific combination. This can be any great book, not limited to a predefined list. Finally, deliver one mic-drop sentence explaining the single most specific reason this book is the perfect match. Use British English spelling throughout. Never be generic. Every reading should feel like it was written specifically for this exact combination of flavours and no other.

Respond with valid JSON only — no markdown, no explanation outside the JSON. Use exactly this structure:
{"reading": "3-4 sentence personality analysis", "bookTitle": "exact book title", "bookAuthor": "author full name", "bookGenre": "genre", "micDrop": "single mic-drop sentence"}`;

router.post("/flavour-reading", async (req, res) => {
  console.log(
    "Flavour Reading: API key present:",
    !!process.env.ANTHROPIC_API_KEY,
  );

  const { flavours } = req.body as { flavours: string[] };

  if (
    !flavours ||
    !Array.isArray(flavours) ||
    flavours.length < 2 ||
    flavours.length > 3
  ) {
    res.status(400).json({ error: "Please provide 2-3 flavour names." });
    return;
  }

  const flavourList = flavours.join(", ");
  const userMessage = `My selected flavours are: ${flavours.join(", ")}. Give me my Flavour Reading.`;

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    const block = message.content[0];
    if (block.type !== "text") {
      throw new Error("Unexpected response content type from Anthropic");
    }

    // Claude sometimes wraps JSON in a markdown code fence — strip it before parsing.
    const cleaned = block.text
      .trim()
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```$/, "");

    const data = JSON.parse(cleaned) as {
      reading?: string;
      bookTitle?: string;
      bookAuthor?: string;
      bookGenre?: string;
      micDrop?: string;
    };

    if (
      !data.reading ||
      !data.bookTitle ||
      !data.bookAuthor ||
      !data.bookGenre ||
      !data.micDrop
    ) {
      throw new Error("Incomplete response from AI — missing required fields");
    }

    console.log("Flavour Reading: success for flavours:", flavourList);
    res.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Flavour Reading: API call failed —", message);
    res.status(500).json({
      error: "The reading is temporarily unavailable. Please try again.",
    });
  }
});

export default router;

import { Router } from "express";

const router = Router();

const apiKey = process.env.VITE_GOOGLE_BOOKS_API_KEY;

console.log("Book Cover: API key present:", !!apiKey);

router.get("/book-cover", async (req, res) => {
  const title = typeof req.query.title === "string" ? req.query.title : "";
  const author = typeof req.query.author === "string" ? req.query.author : "";

  if (!title) {
    res.status(400).json({ error: "A book title is required." });
    return;
  }

  const q = `intitle:${encodeURIComponent(title)}${
    author ? `+inauthor:${encodeURIComponent(author)}` : ""
  }`;
  const keyParam = apiKey ? `&key=${apiKey}` : "";

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${q}&maxResults=1${keyParam}`,
    );

    if (!response.ok) {
      console.error(
        `Book Cover: Google Books API responded with status ${response.status} for "${title}"`,
      );
      res.json({ coverUrl: null });
      return;
    }

    const json = (await response.json()) as {
      items?: Array<{
        volumeInfo?: {
          imageLinks?: { thumbnail?: string; smallThumbnail?: string };
        };
      }>;
    };

    const imageLinks = json.items?.[0]?.volumeInfo?.imageLinks;
    const thumb = imageLinks?.thumbnail ?? imageLinks?.smallThumbnail ?? null;
    const coverUrl = thumb ? thumb.replace(/^http:\/\//, "https://") : null;

    res.json({ coverUrl });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Book Cover: fetch failed —", message);
    res.json({ coverUrl: null });
  }
});

export default router;

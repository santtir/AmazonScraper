import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";

const app = express();
const PORT = 3000;

// habilito CORS para permitir llamadas desde el frontend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// endpoint principal
app.get("/api/scrape", async (req, res) => {
  const keyword = req.query.keyword as string;

  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword parameter." });
  }

  try {
    const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    
    const response = await axios.get(searchUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
      },
    });

    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const productElements = document.querySelectorAll('[data-component-type="s-search-result"]');

    const products = [];

    for (const product of productElements) {
      const titleElement = product.querySelector("h2 span");
      const ratingElement = product.querySelector(".a-icon-alt");
      const reviewsElement = product.querySelector('[aria-label$=" ratings"]');
      const imageElement = product.querySelector("img");

      products.push({
        title: titleElement?.textContent?.trim() || "No title",
        rating: ratingElement?.textContent?.split(" ")[0] || "No rating",
        reviews: reviewsElement?.getAttribute("aria-label") || "No reviews",
        image: imageElement?.getAttribute("src") || "No image",
      });
    }

    res.json({ products });
  } catch (error) {
    console.error("Scraping error:", error);
    res.status(500).json({ error: "Failed to scrape Amazon." });
  }
});

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

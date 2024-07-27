import { GoogleGenerativeAI } from "@google/generative-ai";

export default async ({ req, res, log, error }) => {
  let apiKey = process.env.GEMINI_API_KEY;
  let gemini = new GoogleGenerativeAI(apiKey);
  let model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });

  if (req.method === 'POST') {
    let prompt = req.body.prompt;
    log(prompt);

    let result = await model.generateContent(prompt);

    let generation = result.response.text();
    log(generation);

    res.json({
      result: generation
    });
  }
};

import { GoogleGenerativeAI } from '@google/generative-ai';

export default async ({ req, res, log, error }) => {
  if (req.method === 'POST') {
    if(!req.body || !req.body.prompt) {
      error('Missing prompt');
      return res.json({
        ok: false,
        error: 'Missing prompt'
      }, 400);
    }

    if(!process.env.GEMINI_API_KEY) {
      error('Missing Gemini API Key');
      return res.json({
        ok: false,
        error: 'Missing Gemini API Key'
      }, 500);
    }

    let prompt = req.body.prompt;
    log('Requesting model');

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const gemini = new GoogleGenerativeAI(apiKey);
      const model = gemini.getGenerativeModel({ model: 'gemini-1.5-flash' });

      let result = await model.generateContent(prompt);

      let generation = result.response.text();
      log('Answer generated successfully');

      return res.json({
        ok: true,
        generation
      });
    } catch(err) {
      error(err.message);
      return res.json({
        ok: false,
        error: err.message
      }, 500);
    }
  }
  else {
    error('Only POST requests are valid');
    return res.json({
      ok: false,
      error: 'Only POST requests are considered valid'
    });
  }
};

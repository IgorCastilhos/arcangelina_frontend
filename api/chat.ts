import type {
  VercelRequest,
  VercelResponse
} from '@vercel/node';

export default async function handler(req: VercelRequest,
  res: VercelResponse) {
  // 1. Security: Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  try {
    const {
      message,
      history,
      sessionId
    } = req.body;
    
    // 2. Call your N8N Webhook (The Bridge)
    // Replace with your actual N8N Production URL
    const n8nUrl = process.env.N8N_PRODUCTION_URL;
    
  
    
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Make sure this matches the Header Auth you set in N8N
        'Authorization': 'Bearer arcangelina-secret-key'
      },
      body: JSON.stringify({
        message,
        history,
        sessionId  // Forward sessionId to n8n
      })
    });
    
    if (!response.ok) {
      throw new Error(`N8N responded with ${response.status}`);
    }
    
    const data = await response.json();
    
    // N8N returns an array like [{ output: "text" }]
    let aiResponse = 'Resposta do cosmos não encontrada...';
    
    if (Array.isArray(data) && data.length > 0 && data[0].output) {
      aiResponse = data[0].output;
    } else if (data.output) {
      // In case N8N returns { output: "text" } directly
      aiResponse = data.output;
    }
    
    
    // 3. Return the AI's response to your frontend
    return res.status(200).json({
      response: aiResponse
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Failed to communicate with the stars.',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
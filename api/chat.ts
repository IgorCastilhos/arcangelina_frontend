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
    
    console.log('N8N Raw Response:', JSON.stringify(data, null, 2));
    
    // Handle multiple possible N8N response formats
    let aiResponse = 'Resposta do cosmos não encontrada...';
    
    // Case 1: [{ output: "text" }] - Original N8N array format
    if (Array.isArray(data) && data.length > 0) {
      if (data[0].output) {
        aiResponse = data[0].output;
      } else if (data[0].response) {
        // Case 2: [{ response: "text" }] - Wrapped response
        aiResponse = data[0].response;
      }
    }
    // Case 3: { output: "text" } - Direct object
    else if (data.output) {
      aiResponse = data.output;
    }
    // Case 4: { response: "text" } - Wrapped object
    else if (data.response) {
      aiResponse = data.response;
    }
    // Case 5: Plain string
    else if (typeof data === 'string') {
      aiResponse = data;
    }
    
    console.log('Extracted AI Response:', aiResponse);
    
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
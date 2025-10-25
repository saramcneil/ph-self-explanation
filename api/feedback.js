export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  if (req.method === 'POST') {
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify(req.body)
      });
      
      const data = await response.json();
      
      // Log the response for debugging
      console.log('Anthropic API Response:', JSON.stringify(data, null, 2));
      
      // Check if the response is error
      if (!response.ok || data.error) {
        console.error('Anthropic API Error:', data);
        return res.status(response.status || 500).json({ 
          error: data.error?.message || 'Failed to get feedback from AI',
          details: data
        });
      }
      
      res.status(200).json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Failed to get feedback', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

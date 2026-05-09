import React, { useState } from 'react';
import WorldSimulator from './WorldSimulator';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [worldData, setWorldData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // REPLACE with your live Vercel backend URL
  const BACKEND_URL = "https://YOUR_VERCEL_BACKEND_URL.vercel.app";

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/api/generate-world`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (data.success) {
        setWorldData(data.worldData);
      }
    } catch (error) {
      console.error("Error generating world", error);
    }
    setLoading(false);
  };

  if (worldData) {
    return <WorldSimulator worldData={worldData} onBack={() => setWorldData(null)} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Create Your World</h2>
      <textarea 
        placeholder="E.g., A toxic wasteland with a purple sky and cube creatures..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '400px', height: '100px', marginBottom: '20px', padding: '10px' }}
      />
      <button 
        onClick={handleGenerate} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}
      >
        {loading ? 'Generating with Groq...' : 'Build World'}
      </button>
    </div>
  );
}

import React from 'react';

export default function Login() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to AI World</h1>
      <p>Create and explore infinite AI-generated universes.</p>
      
      {/* REPLACE <YOUR_KEY> with your actual Isaahi Key */}
      <a 
        href="https://59eec555-1dfe-42f5-8549-58dfb413b299.lovableproject.com/auth?key=isk_live_<YOUR_KEY>&redirect=YOUR_FRONTEND_URL/callback" 
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          padding: '.6rem 1rem', background: 'linear-gradient(135deg,#6366f1,#a855f7)',
          color: '#fff', borderRadius: '.5rem', fontWeight: 600, textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        Sign in with Isaahi
      </a>
    </div>
  );
}

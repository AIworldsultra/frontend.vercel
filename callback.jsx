import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Callback() {
  const navigate = useNavigate();
  // REPLACE with your live Vercel backend URL once deployed
  const BACKEND_URL = "https://YOUR_VERCEL_BACKEND_URL.vercel.app"; 

  useEffect(() => {
    const authenticate = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("isaahi_token");

      if (token) {
        try {
          const response = await fetch(`${BACKEND_URL}/api/my-login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });
          
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/dashboard');
          } else {
            navigate('/');
          }
        } catch (error) {
          console.error("Auth error:", error);
          navigate('/');
        }
      }
    };
    authenticate();
  }, [navigate]);

  return <div style={{ textAlign: 'center', marginTop: '50px' }}>Authenticating your portal jump...</div>;
}

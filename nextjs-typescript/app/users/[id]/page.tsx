// /app/users/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type ApiData = {
  message: string;
};

export default function UserProfilePage() {
  
  const params = useParams();
  const id = params.id; // This will be dynamic based on the URL

  const [data, setData] = useState<ApiData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: ApiData) => {
        setData(data);
        setIsLoading(false);
      });
  }, []); 
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>User Profile Page</h1>
      <p>
        The profile for User ID: 
        <strong style={{ color: 'blue', marginLeft: '0.5rem' }}>
          {id}
        </strong>
      </p>

      <hr style={{ margin: '1rem 0' }} />

      <h2>Data Fetched:</h2>
      {isLoading && <p>Loading data...</p>}
      {data && (
        <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '8px' }}>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )}
    </div>
  );
}
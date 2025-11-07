// /app/posts/[slug]/page.tsx
'use client'; 

import { useParams } from 'next/navigation';

export default function PostPage() {
  
  const params = useParams();
  const slug = params.slug; // This will be dynamic based on the URL

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Blog Post Page</h1>
      <p>
        post with the slug: 
        <strong style={{ color: 'green', marginLeft: '0.5rem' }}>
          {slug}
        </strong>
      </p>
    </div>
  );
}
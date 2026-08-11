import React from 'react';
import { postsDb } from '../lib/db';
import { createPostAction, deletePostAction } from '../actions/postActions';

export default function PostsDemoPage(){
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: '0 auto', fontFamily: 'Inter, system-ui, Arial' }}>
      <h2>Experiment 4: Route Handlers & Server Actions</h2>

      <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8, marginBottom: 20 }}>
        <h3>Add Post via Server Action</h3>
        <form action={createPostAction} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input name="title" placeholder="Post Title" required style={{ padding: 8 }} />
          <textarea name="content" placeholder="Post Content" rows={6} style={{ padding: 8 }} />
          <button type="submit" style={{ padding: '10px 12px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6 }}>Submit via Server Action</button>
        </form>
      </div>

      <h3>Posts List (Direct DB)</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {postsDb.map((post) => (
          <div key={post.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{post.title}</div>
              <div style={{ color: '#666', marginTop: 6 }}>{post.content}</div>
            </div>
            <div>
              <form action={deletePostAction} method="post">
                <input type="hidden" name="id" value={post.id} />
                <button type="submit" style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: 6 }}>Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

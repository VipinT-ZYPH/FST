"use client";
import React, { useEffect, useState } from 'react';

type Item = { id: string; title: string; content?: string; createdAt?: string; updatedAt?: string };

export default function ItemsPage(){
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(()=>{ load(); }, []);

  async function load(){
    const res = await fetch('/api/items');
    const data = await res.json();
    setItems(data || []);
  }

  async function save(e?: React.FormEvent){
    if (e) e.preventDefault();
    if (!title.trim()) return alert('Title required');
    const payload = { title: title.trim(), content };
    if (editingId){
      await fetch(`/api/items/${editingId}`, { method: 'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    } else {
      await fetch('/api/items', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    }
    setTitle(''); setContent(''); setEditingId(null);
    await load();
    setMessage('Saved');
    setTimeout(()=>setMessage(null), 2500);
  }

  async function edit(id: string){
    const res = await fetch(`/api/items/${id}`);
    const it = await res.json();
    setTitle(it.title||''); setContent(it.content||''); setEditingId(id);
  }

  async function remove(id: string){
    if (!confirm('Delete item?')) return;
    await fetch(`/api/items/${id}`, { method: 'DELETE' });
    await load();
    setMessage('Deleted');
    setTimeout(()=>setMessage(null), 2500);
  }

  return (
    <div style={{padding:24,display:'flex',justifyContent:'center'}}>
      <div style={{width:'100%',maxWidth:920}}>
        <h1 style={{marginBottom:12}}>Items</h1>

        <div style={{display:'flex',gap:20,alignItems:'flex-start'}}>
          <form onSubmit={save} style={{flex:1,background:'#eef2ff',padding:18,borderRadius:10,boxShadow:'0 6px 18px rgba(0,0,0,0.06)',color:'#000'}}>
            <h2 style={{marginTop:0,fontSize:18}}>Create / Edit Item</h2>
            {message && <div style={{background:'#f0fdf4',color:'#166534',padding:8,borderRadius:6,marginBottom:10}}>{message}</div>}

            <label style={{display:'block',fontSize:13,marginBottom:6}}>Title</label>
            <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Enter a short title" style={{width:'100%',padding:10,marginBottom:12,border:'1px solid #d1d5db',borderRadius:8,fontSize:15,background:'#eef2ff',color:'#000'}} />

            <label style={{display:'block',fontSize:13,marginBottom:6}}>Content</label>
            <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Write some details..." rows={6} style={{width:'100%',padding:10,marginBottom:12,border:'1px solid #d1d5db',borderRadius:8,fontSize:15,background:'#eef2ff',color:'#000'}} />

            <div style={{display:'flex',gap:10}}>
              <button type="submit" disabled={!title.trim()} style={{background: (!title.trim()) ? '#9bb7ff' : '#2563eb',color:'#fff',border:'none',padding:'10px 14px',borderRadius:8,cursor: (!title.trim()) ? 'not-allowed' : 'pointer'}}> {editingId? 'Update' : 'Create'}</button>
              <button type="button" onClick={()=>{ setTitle(''); setContent(''); setEditingId(null); setMessage(null); }} style={{background:'#fff',border:'1px solid #d1d5db',padding:'10px 14px',borderRadius:8}}>Cancel</button>
            </div>
          </form>

          <div style={{flex:1,background:'#fafafa',padding:18,borderRadius:10,border:'1px solid #f1f5f9'}}>
            <h2 style={{marginTop:0,fontSize:18}}>Saved Items</h2>
            {items.length===0 && <div style={{color:'#000'}}>No items yet. Create one using the form.</div>}
            <div style={{display:'flex',flexDirection:'column',gap:12,marginTop:8}}>
              {items.map(it=> (
                <div key={it.id} style={{background:'#dbeafe',padding:12,borderRadius:8,boxShadow:'0 4px 10px rgba(12,12,12,0.04)',display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div style={{maxWidth:'72%'}}>
                    <div style={{fontWeight:700,fontSize:15,color:'#000'}}>{it.title}</div>
                    <div style={{marginTop:6,color:'#000',whiteSpace:'pre-wrap'}}>{it.content}</div>
                    <div style={{marginTop:8,fontSize:12,color:'#000'}}>{it.updatedAt || it.createdAt ? new Date(it.updatedAt || it.createdAt!).toLocaleString() : ''}</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',gap:8}}>
                    <button onClick={()=>edit(it.id)} style={{background:'#fff',border:'1px solid #e5e7eb',padding:'6px 10px',borderRadius:6}}>Edit</button>
                    <button onClick={()=>remove(it.id)} style={{background:'#ef4444',color:'#fff',border:'none',padding:'6px 10px',borderRadius:6}}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

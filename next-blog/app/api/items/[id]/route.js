import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data_items.json');

async function readData(){
  try{
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  }catch(err){
    if (err.code === 'ENOENT') return [];
    throw err;
  }
}

async function writeData(items){
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), 'utf8');
}

export async function GET(req, { params }){
  const { id } = params;
  const items = await readData();
  const it = items.find(i=>i.id===id);
  if (!it) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return new Response(JSON.stringify(it), { status: 200, headers: { 'Content-Type': 'application/json' }});
}

export async function PUT(req, { params }){
  const { id } = params;
  const body = await req.json();
  const items = await readData();
  const idx = items.findIndex(i=>i.id===id);
  if (idx===-1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  items[idx].title = body.title || items[idx].title;
  items[idx].content = body.content !== undefined ? body.content : items[idx].content;
  items[idx].updatedAt = new Date().toISOString();
  await writeData(items);
  return new Response(JSON.stringify(items[idx]), { status: 200, headers: { 'Content-Type': 'application/json' }});
}

export async function DELETE(req, { params }){
  const { id } = params;
  const items = await readData();
  const idx = items.findIndex(i=>i.id===id);
  if (idx===-1) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  const removed = items.splice(idx,1)[0];
  await writeData(items);
  return new Response(JSON.stringify(removed), { status: 200, headers: { 'Content-Type': 'application/json' }});
}

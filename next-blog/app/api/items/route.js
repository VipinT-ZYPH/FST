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

export async function GET(){
  const items = await readData();
  return new Response(JSON.stringify(items), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function POST(req){
  const body = await req.json();
  if (!body.title) return new Response(JSON.stringify({ error: 'Missing title' }), { status: 400 });
  const items = await readData();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2,8);
  const item = { id, title: body.title, content: body.content || '', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  items.push(item);
  await writeData(items);
  return new Response(JSON.stringify(item), { status: 201, headers: { 'Content-Type': 'application/json' }});
}

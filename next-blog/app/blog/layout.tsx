'use client'; 
import { useState, useEffect } from 'react'; 
import Link from 'next/link'; 
export default function BlogLayout({ 
    children,
    }: { 
        children: React.ReactNode; 
    }) { 
        const [counter, setCounter] = useState<number>(0); 
        const [seconds, setSeconds] = useState<number>(0); 
        // Active interval timer to prove layout persistence during navigation 
        useEffect(() => { 
            const timer = setInterval(() => { 
                setSeconds((prev) => prev + 1); 
                }, 1000); 
                return () => clearInterval(timer); }, []); 
                return ( 
                <div style={{ border: '2px solid #2563eb', padding: '20px', borderRadius: '8px', background: '#121212', color: '#fff' }}> 
                <div style={{ paddingBottom: '15px', marginBottom: '15px', borderBottom: '1px solid #333' }}> 
                    <h2 style={{ color: '#60a5fa', margin: '0 0 10px 0' }}>Localized Blog Sub-Layout</h2> 
                <div style={{ display: 'flex', gap: '20px', margin: '10px 0' }}> 
                    <p>Uptime Timer: <strong style={{ color: '#22c55e' }}>{seconds}s</strong></p> 
                    <p>State Counter: <strong style={{ color: '#f59e0b' }}>{counter}</strong></p> 
                </div> 
                <button onClick={() => setCounter((prev) => prev + 1)} style={{ padding: '8px 16px', background: '#2563eb', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} > Increment State Counter </button>\
                <nav style={{ marginTop: '15px', display: 'flex', gap: '15px' }}> 
                    <Link href="/blog" style={{ color: '#93c5fd' }}>Blog Index</Link> 
                    <Link href="/blog/post-1" style={{ color: '#93c5fd' }}>Post 1</Link> 
                    <Link href="/blog/post-2" style={{ color: '#93c5fd' }}>Post 2</Link> 
                    </nav> 
                </div> 
                <main>{children}</main> 
                </div> 
                ); 
            }
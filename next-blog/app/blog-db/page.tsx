import { prisma } from '@/app/lib/prisma'; 
import { createAuthorWithPostAction, deletePostAction } from '@/app/blog-db/actions'; 
export default async function BlogDbPage() { 
    const posts = await prisma.post.findMany({ 
        include: { 
            author: true, 
        }, 
        orderBy: { 
            createdAt: 'desc', 
        }, 
    }); 
    
return ( 
<div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}> 
    <h1>Experiment 5: Prisma 7 & Docker PostgreSQL</h1> 
    <p style={{ color: '#666' }}>Demonstrating Prisma 7 Programmatic Config, Relational Joins, and ACID Transactions.</p> 
    {/* Transactional Form */} 
    <div style={{ background: '#f4f4f5', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}> 
        <h3 style={{ margin: '0 0 10px 0' }}>Create Author & Post (Atomic Transaction)</h3> 
        <form action={createAuthorWithPostAction} style={{ display: 'grid', gap: '10px' }}> 
            <div style={{ display: 'flex', gap: '10px' }}> 
                <input type="text" name="name" placeholder="Author Name" required style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} /> 
                <input type="email" name="email" placeholder="Author Email" required style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} /> 
            </div>
            <input type="text" name="title" placeholder="Post Title" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} /> 
            <textarea name="content" placeholder="Post Content" required rows={3} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} /> 
            <button type="submit" style={{ padding: '10px', background: '#09090b', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}> Submit Transaction </button> 
            </form> 
               </div> 
            {/* Relational Data Rendering */} 
            <h3 style={{ margin: '0 0 15px 0' }}>Database Posts (Relational Joined View)</h3> 
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}> 
                {posts.length === 0 ? ( 
                    <p style={{ color: '#777' }}>No records found. Submit the form above to trigger a transaction.</p>
                     ) : ( posts.map((post) => ( 
                     <div key={post.id} style={{ border: '1px solid #e4e4e7', padding: '15px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                         <div> 
                            <h4 style={{ margin: '0 0 5px 0' }}>{post.title}</h4> 
                            <p style={{ margin: '0 0 8px 0', color: '#4b5563' }}>{post.content}</p>
                            <span style={{ fontSize: '12px', background: '#e0e7ff', color: '#3730a3', padding: '3px 8px', borderRadius: '12px' }}> Author: {post.author.name} ({post.author.email}) </span> 
                        </div>
                        <form action={deletePostAction.bind(null, post.id)}> 
                            <button type="submit" style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}> Delete </button> 
                        </form> 
                    </div> 
                    )) )
                } 
            </div> 
        </div> 
        ); 
    }
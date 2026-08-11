Experiment 4 — Route Handlers & React Server Actions
===============================================

Overview
--------
This experiment demonstrates Next.js App Router Route Handlers (`route.ts`) alongside React Server Actions (`use server`) to perform full CRUD without manual client-side `fetch()` boilerplate.

Files added
-----------
- `app/lib/db.ts` — in-memory demo database (`postsDb`).
- `app/api/posts/route.ts` — RESTful route handlers (GET, POST, PUT, DELETE).
- `app/actions/postActions.ts` — Server Actions (`createPostAction`, `deletePostAction`) with `revalidatePath('/posts-demo')`.
- `app/posts-demo/page.tsx` — Demo page: server-action form and posts list.

Running locally
----------------
1. From the `next-blog` folder run the dev server:

```bash
npm run dev
```

2. Visit: `http://localhost:3000/posts-demo` to use the demo UI.

Notes & Caveats
---------------
- The `postsDb` is an in-memory array; data resets on server restart. For production use, replace with a persistent store (SQLite, PostgreSQL, or file DB).
- If deploying to serverless platforms with ephemeral filesystems, do not rely on file-backed storage. Use managed DB or object storage.
- Server Actions accept `FormData` when used as a form `action` and can also accept primitive parameters when called programmatically; the `deletePostAction` here accepts both patterns.

Testing the REST API
--------------------
- GET all: `GET /api/posts`
- Create: `POST /api/posts` with JSON `{ "title": "...", "content": "..." }`
- Update: `PUT /api/posts` with JSON `{ "id": "...", "title":"...", "content":"..." }`
- Delete: `DELETE /api/posts?id=<id>`

Migration guidance
------------------
To persist this demo data:

1. Replace `app/lib/db.ts` with a module that reads/writes to a persistent database.
2. Update `app/api` route handlers to use the persistent store.
3. Keep using `revalidatePath()` in Server Actions after mutations to ensure the page shows fresh data.

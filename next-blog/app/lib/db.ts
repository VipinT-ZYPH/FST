export interface BlogItem {
  id: string;
  title: string;
  content: string;
}

// In-memory data store for demo purposes only. Not persisted across server restarts.
export const postsDb: BlogItem[] = [
  { id: '1', title: 'Getting Started with Next.js', content: 'Exploring App Router features.' },
  { id: '2', title: 'Mastering Server Actions', content: 'Simplifying data mutations without fetch.' },
];

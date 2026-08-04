export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h3 className="text-2xl font-bold">Post Page: <span className="text-amber-500">{slug}</span></h3>
      <p className="mt-4 text-gray-300">The page content rendered dynamically, while the outer timer and counter in the sub-layout remain unchanged.</p>
    </div>
  );
}

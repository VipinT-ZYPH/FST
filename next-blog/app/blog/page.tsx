import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Understanding React Components",
    category: "React"
  },
  {
    id: 3,
    title: "Building AI Applications with Python",
    category: "Artificial Intelligence"
  },
  {
    id: 4,
    title: "Tailwind CSS Crash Course",
    category: "CSS"
  },
  {
    id: 5,
    title: "FastAPI for Beginners",
    category: "Backend"
  }
];

export default function Blog() {
  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">My Website</h1>

            <ul className="hidden md:flex space-x-6">
                <li>
                  <Link href="/" className="hover:text-yellow-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-yellow-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-yellow-300">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="hover:text-yellow-300">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-300">
                    Contact
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-5xl font-bold">Latest Articles</h1>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <span className="text-blue-600 font-semibold">
                {blog.category}
              </span>

              <h2 className="text-2xl font-bold mt-3">
                {blog.title}
              </h2>

              <p className="text-gray-600 mt-4">
                Click to read the complete article and learn step-by-step.
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

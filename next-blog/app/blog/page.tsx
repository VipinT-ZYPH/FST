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
    <main className="max-w-6xl mx-auto py-20 px-8">

      <h1 className="text-5xl font-bold">
        Latest Articles
      </h1>

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
  );
}
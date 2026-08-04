import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="max-w-4xl text-center px-6">
        <h1 className="text-6xl font-extrabold text-gray-900">
          Next<span className="text-blue-600">Blog</span>
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Welcome to my personal space where I share articles on
          <span className="font-semibold text-blue-600">
            {" "}Web Development
          </span>,
          <span className="font-semibold text-blue-600">
            {" "}Artificial Intelligence
          </span>,
          and modern technologies.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Read Blogs
          </Link>

          <Link href="/about" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            About Me
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold">💻 Web Development</h2>
            <p className="mt-3 text-gray-600">
              Learn React, Next.js, Tailwind CSS and modern frontend development.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold">🤖 Artificial Intelligence</h2>
            <p className="mt-3 text-gray-600">
              Explore machine learning, generative AI and practical AI projects.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold">🚀 Projects</h2>
            <p className="mt-3 text-gray-600">
              Follow along as I build real-world applications and share tutorials.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

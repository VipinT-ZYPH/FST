import Link from 'next/link';

export default function About() {
  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">My Website</h1>

            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/" className="hover:text-yellow-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-300">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-300">Services</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-yellow-300">Blogs</Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-yellow-300">Marketplace</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto py-20 px-8">
        <h1 className="text-5xl font-bold">About DevSphere</h1>

        <p className="mt-8 text-lg text-gray-600">
          DevSphere is a platform dedicated to developers,
          students, and technology enthusiasts.

          Here you'll find tutorials, coding guides,
          AI projects, web development resources,
          and productivity tips.

          Our goal is to make learning practical,
          engaging, and accessible.
        </p>
      </main>
    </>
  );
}
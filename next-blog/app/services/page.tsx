export default function Services() {
  return (
    <>
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">My Website</h1>

            <ul className="hidden md:flex space-x-6">
              <li>
                <a href="index.html" className="hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" className="hover:text-yellow-300">
                  About
                </a>
              </li>
              <li>
                <a href="services.html" className="hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="blogs.html" className="hover:text-yellow-300">
                  Blogs
                </a>
              </li>
              <li>
                <a href="marketplace.html" className="hover:text-yellow-300">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="contact.html" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-20 px-8">
        <h1 className="text-5xl font-bold">Services</h1>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="shadow-lg rounded-xl p-8 bg-white">
            <h2 className="text-2xl font-bold">Website Development</h2>
            <p className="mt-4 text-gray-600">
              Responsive websites using Next.js and React.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8 bg-white">
            <h2 className="text-2xl font-bold">AI Solutions</h2>
            <p className="mt-4 text-gray-600">
              Machine Learning and Generative AI applications.
            </p>
          </div>

          <div className="shadow-lg rounded-xl p-8 bg-white">
            <h2 className="text-2xl font-bold">Technical Mentoring</h2>
            <p className="mt-4 text-gray-600">
              Personalized guidance for students and developers.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
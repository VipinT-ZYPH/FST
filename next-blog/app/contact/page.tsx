export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-8">

      <h1 className="text-5xl font-bold">
        Contact
      </h1>

      <p className="mt-8 text-gray-600">
        Have a question or collaboration idea?
        We&apos;d love to hear from you.
      </p>

      <div className="mt-10 space-y-4">

        <p>📧 Email: hello@devsphere.com</p>

        <p>🌍 Website: www.devsphere.com</p>

        <p>💼 LinkedIn: linkedin.com/company/devsphere</p>

        <p>🐙 GitHub: github.com/devsphere</p>
        
        <nav className="bg-blue-600 text-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      <h1 className="text-2xl font-bold">My Website</h1>

      <ul className="hidden md:flex space-x-6">
        <li><a href="index.html" className="hover:text-yellow-300">Home</a></li>
        <li><a href="about.html" className="hover:text-yellow-300">About</a></li>
        <li><a href="services.html" className="hover:text-yellow-300">Services</a></li>
        <li><a href="blogs.html" className="hover:text-yellow-300">Blogs</a></li>
        <li><a href="marketplace.html" className="hover:text-yellow-300">Marketplace</a></li>
        <li><a href="contact.html" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

      </div>

    </main>
  );
}
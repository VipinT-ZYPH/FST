import Image from 'next/image';
import Link from 'next/link';

export default function Marketplace() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">My Website</h1>
            <div className="space-x-6 hidden md:flex">
              <Link href="/" className="hover:text-yellow-300">Home</Link>
              <a href="/about" className="hover:text-yellow-300">About</a>
              <a href="/services" className="hover:text-yellow-300">Services</a>
              <Link href="/blog" className="hover:text-yellow-300">Blogs</Link>
              <a href="/marketplace" className="text-yellow-300 font-semibold">Marketplace</a>
              <a href="/contact" className="hover:text-yellow-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Welcome to Our Marketplace</h2>
          <p className="text-lg mb-8">Discover amazing products at unbeatable prices.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Shop Now
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select className="p-3 rounded-lg border">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Books</option>
            <option>Sports</option>
          </select>
          <button className="bg-blue-600 text-white px-8 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
              alt="Smartphone"
              width={500}
              height={224}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Smartphone</h3>
              <p className="text-gray-600">Latest flagship smartphone with amazing camera.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-xl">$699</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
              alt="Running Shoes"
              width={500}
              height={224}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Running Shoes</h3>
              <p className="text-gray-600">Comfortable shoes for everyday running.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-xl">$120</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
              alt="Laptop"
              width={500}
              height={224}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Laptop</h3>
              <p className="text-gray-600">Powerful laptop for work and gaming.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-xl">$999</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
              alt="Smart Watch"
              width={500}
              height={224}
              className="rounded-t-xl h-56 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Smart Watch</h3>
              <p className="text-gray-600">Fitness tracking and smart notifications.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-xl">$199</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why Shop With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">🚚 Free Delivery</h3>
              <p>Fast shipping across the country.</p>
            </div>
            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">🔒 Secure Payment</h3>
              <p>100% safe online transactions.</p>
            </div>
            <div className="p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">⭐ Top Quality</h3>
              <p>Only trusted and verified products.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2026 My Marketplace | All Rights Reserved</p>
          <div className="mt-3 space-x-5">
            <Link href="/">Home</Link>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <Link href="/blog">Blogs</Link>
            <a href="/marketplace">Marketplace</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

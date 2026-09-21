import { connectToDatabase } from '@/app/lib/mongodb';
import Product from '@/app/models/Product';
import { createProductAction, deleteProductAction } from '@/app/actions/catalogActions';

export default async function CatalogPage() {
  await connectToDatabase();

  // Fetch all products sorted by creation time
  const productsRaw = await Product.find({}).sort({ createdAt: -1 }).lean();

  // Serialize to plain objects to avoid Next.js serialization errors
  const products = productsRaw.map((doc: any) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
  }));

  return (
    <div className="min-h-screen bg-slate-100 text-black p-6 sm:p-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Page Header */}
        <header className="border-b border-slate-200 pb-5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
            E-Commerce Catalog & Inventory Tracking
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Managing document-oriented catalog models with embedded schemas and lifecycle middleware.
          </p>
        </header>

        {/* Catalog Entry Form */}
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">
            Register Catalog Item
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Inserts a strictly validated BSON document with an embedded inventory schema.
          </p>

          <form action={createProductAction} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Product Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Wireless Noise-Cancelling Headphones"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Category
                </label>
                <select
                  name="category"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Electronics">Electronics</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Accessories">Accessories</option>
                  <option value="Home">Home</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  placeholder="199.99"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  SKU Identifier
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="ELEC-WNC-01"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Initial Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  placeholder="25"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Warehouse Location
                </label>
                <input
                  type="text"
                  name="warehouseLocation"
                  placeholder="e.g. WH-East-A3"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Tags (Comma Separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  placeholder="audio, bluetooth, wireless"
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm !text-black font-semibold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow transition duration-150 cursor-pointer"
            >
              Add Catalog Item
            </button>
          </form>
        </section>

        {/* Product Catalog Records Feed */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900">
              Tracked Products ({products.length})
            </h2>
            <span className="text-xs text-slate-500">Mongoose Collection: <code>products</code></span>
          </div>

          {products.length === 0 ? (
            <div className="bg-white border border-dashed border-slate-300 rounded-xl p-8 text-center text-slate-500 text-sm">
              No products found in MongoDB. Register an item using the form above.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p: any) => (
                <div
                  key={p._id.toString()}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col justify-between gap-4 hover:border-slate-300 transition"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-semibold text-slate-900 leading-tight">
                        {p.title}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-100 text-slate-800">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>

                    <p className="text-xs font-mono text-slate-500">
                      Slug: {p.slug}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                        {p.category}
                      </span>
                      {p.inStock ? (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                          In Stock ({p.inventory.stock})
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                          Out of Stock
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 text-slate-600">
                        SKU: {p.inventory.sku}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-600">
                        Loc: {p.inventory.warehouseLocation}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                    <div className="flex gap-1">
                      {p.tags.map((t: string, idx: number) => (
                        <span key={idx} className="text-[11px] text-slate-400">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <form action={deleteProductAction.bind(null, p._id.toString())}>
                      <button
                        type="submit"
                        className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded border border-red-200 transition cursor-pointer"
                      >
                        Remove
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

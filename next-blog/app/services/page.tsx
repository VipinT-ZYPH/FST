export default function Services() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-8">

      <h1 className="text-5xl font-bold">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="shadow-lg rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-bold">
            Website Development
          </h2>

          <p className="mt-4 text-gray-600">
            Responsive websites using Next.js and React.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-bold">
            AI Solutions
          </h2>

          <p className="mt-4 text-gray-600">
            Machine Learning and Generative AI applications.
          </p>
        </div>

        <div className="shadow-lg rounded-xl p-8 bg-white">
          <h2 className="text-2xl font-bold">
            Technical Mentoring
          </h2>

          <p className="mt-4 text-gray-600">
            Personalized guidance for students and developers.
          </p>
        </div>

      </div>

    </main>
  );
}
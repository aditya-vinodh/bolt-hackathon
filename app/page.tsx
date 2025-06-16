export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Bolt Hackathon
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your Next.js application is now running successfully!
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-600">
            Start editing <code className="bg-gray-100 px-2 py-1 rounded text-sm">app/page.tsx</code> to customize this page.
          </p>
        </div>
      </div>
    </main>
  )
}
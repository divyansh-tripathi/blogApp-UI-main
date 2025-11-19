export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-slate-400 mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700">
          Go Home
        </a>
      </div>
    </div>
  );
};

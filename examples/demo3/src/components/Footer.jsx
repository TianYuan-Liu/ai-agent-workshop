export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {currentYear} Tianyuan Liu. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Built with React + Vite | Deployed with CI/CD
          </p>
        </div>
      </div>
    </footer>
  );
}

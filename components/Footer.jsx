export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">© {year} Kite Consultancy. All rights reserved.</p>
      </div>
    </footer>
  )
}

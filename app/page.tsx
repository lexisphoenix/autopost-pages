import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">📱 AutoPost</h1>
        <p className="text-gray-600 mb-8">
          Páginas legales y de información
        </p>
        <div className="space-y-4">
          <Link
            href="/terms"
            className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Términos del Servicio
          </Link>
          <Link
            href="/privacy"
            className="block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Términos del Servicio</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed">
              Al acceder y utilizar AutoPost, aceptas cumplir con estos Términos del Servicio. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes usar el servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              AutoPost es una herramienta que permite diseñar y programar posts y carruseles 
              para redes sociales utilizando imágenes de Google Drive. El servicio facilita la 
              creación de contenido visual y la gestión de un calendario de publicaciones.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso del Servicio</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al usar AutoPost, te comprometes a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Usar el servicio de manera legal y ética</li>
              <li>No utilizar el servicio para actividades ilegales o no autorizadas</li>
              <li>Respetar los derechos de propiedad intelectual de terceros</li>
              <li>Mantener la confidencialidad de tus credenciales de acceso</li>
              <li>No intentar acceder a áreas no autorizadas del servicio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceso a Google Drive</h2>
            <p className="text-gray-700 leading-relaxed">
              AutoPost requiere acceso a tu cuenta de Google Drive para leer imágenes y archivos. 
              Este acceso se realiza mediante OAuth 2.0 y solo se utiliza para las funcionalidades 
              del servicio. Puedes revocar este acceso en cualquier momento desde la configuración 
              de tu cuenta de Google.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo el contenido que crees usando AutoPost es de tu propiedad. AutoPost no reclama 
              ningún derecho sobre tus imágenes, textos o diseños. El software de AutoPost y su 
              interfaz están protegidos por derechos de autor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed">
              AutoPost se proporciona "tal cual" sin garantías de ningún tipo. No nos hacemos 
              responsables de pérdidas de datos, interrupciones del servicio o cualquier daño 
              derivado del uso del servicio. El usuario es responsable de mantener copias de 
              seguridad de su contenido.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Modificaciones del Servicio</h2>
            <p className="text-gray-700 leading-relaxed">
              Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto 
              del servicio en cualquier momento, con o sin previo aviso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Si tienes preguntas sobre estos Términos del Servicio, puedes contactarnos a través 
              de los canales de soporte disponibles en la aplicación.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

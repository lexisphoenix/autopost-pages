export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AutoPost recopila la siguiente información:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Información de Google:</strong> Dirección de correo electrónico cuando autorizas el acceso a Google Drive</li>
              <li><strong>Datos de Google Drive:</strong> Acceso de solo lectura a tus imágenes y archivos de texto para generar posts y carruseles</li>
              <li><strong>Datos de la aplicación:</strong> Posts, carruseles y calendarios que creas, almacenados localmente en tu navegador</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Cómo Usamos tu Información</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Proporcionar acceso a tus imágenes de Google Drive</li>
              <li>Generar posts y carruseles basados en tu contenido</li>
              <li>Gestionar tu calendario de publicaciones</li>
              <li>Mejorar la funcionalidad del servicio</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Almacenamiento de Datos</h2>
            <p className="text-gray-700 leading-relaxed">
              Los datos que creas en AutoPost (posts, carruseles, calendario) se almacenan 
              localmente en tu navegador usando localStorage. Estos datos nunca se envían a 
              nuestros servidores. Solo accedemos a Google Drive para leer las imágenes y 
              archivos que seleccionas, nunca modificamos o almacenamos tu contenido de Drive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceso a Google Drive</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              AutoPost utiliza OAuth 2.0 para acceder a tu Google Drive. El acceso incluye:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Permiso de lectura:</strong> Para leer imágenes y archivos de texto de tus carpetas</li>
              <li><strong>Permiso de escritura:</strong> Para crear carpetas y subir archivos si lo solicitas</li>
              <li><strong>Email:</strong> Para identificar tu cuenta</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Puedes revocar este acceso en cualquier momento desde la configuración de tu 
              cuenta de Google en <a href="https://myaccount.google.com/permissions" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Compartir Información</h2>
            <p className="text-gray-700 leading-relaxed">
              No compartimos, vendemos ni alquilamos tu información personal a terceros. 
              Los datos de Google Drive se acceden únicamente a través de la API oficial de 
              Google y solo para las funcionalidades del servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Seguridad</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de seguridad para proteger tu información. Sin embargo, 
              ningún método de transmisión por Internet es 100% seguro. Recomendamos mantener 
              tus credenciales seguras y no compartir tu acceso.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Tus Derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Revocar el acceso a Google Drive en cualquier momento</li>
              <li>Eliminar los datos almacenados localmente limpiando el localStorage de tu navegador</li>
              <li>Solicitar información sobre los datos que procesamos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 leading-relaxed">
              AutoPost utiliza localStorage del navegador para almacenar tus preferencias y 
              datos de la aplicación. No utilizamos cookies de seguimiento ni tecnologías 
              de rastreo de terceros.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Cambios a esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos 
              de cualquier cambio significativo publicando la nueva política en esta página 
              y actualizando la fecha de "Última actualización".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos 
              tus datos, puedes contactarnos a través de los canales de soporte disponibles 
              en la aplicación.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default function Contacto() {
  return (
    <section id="contacto" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-6">
          Contáctanos
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          ¿Quieres más información sobre nuestros servicios de energía solar?  
          Escríbenos y el equipo de <span className="text-green-400">EcoEnergix</span> se pondrá en contacto contigo.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Formulario */}
        <form className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full border border-gray-600 bg-gray-900 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full border border-gray-600 bg-gray-900 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Escribe tu mensaje..."
            className="w-full border border-gray-600 bg-gray-900 text-white rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div className="flex flex-col justify-center bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">📍 Dirección</h3>
            <p className="text-gray-300">Calle Solar #123, Bogotá, Colombia</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">📞 Teléfono</h3>
            <p className="text-gray-300">+57 310 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-400 mb-2">📧 Correo</h3>
            <p className="text-gray-300">contacto@ecoenergix.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

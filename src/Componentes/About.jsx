export default function About() {
  return (
    <section
      id="nosotros"
      style={{ scrollMarginTop: "80px" }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen / ilustración */}
        <div className="w-full h-48 sm:h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg flex justify-center items-center">
          {/* Cambia la imagen por /public/team.jpg o import desde assets */}
          <img
            src="/public/team.jpg" // Cambia la ruta si tienes la imagen en assets
            alt="Equipo EcoEnergix"
            className="w-full h-full object-cover max-w-full max-h-full"
            style={{ minWidth: 0, minHeight: 0 }}
          />
        </div>

        {/* Texto */}
        <div className="backdrop-blur-lg bg-white/30 border border-white/20 rounded-2xl p-4 sm:p-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Conócenos</h3>
          <p className="text-white mb-4 text-base sm:text-lg">
            En EcoEnergix trabajamos para crear soluciones energéticas sostenibles que impulsen comunidades y empresas. Combinamos tecnología, investigación y prácticas responsables con el medio ambiente para ofrecer proyectos de energía renovable eficientes y asequibles.
          </p>
          <ul className="list-disc pl-5 text-white space-y-2 text-base sm:text-lg">
            <li>Instalación de paneles solares</li>
            <li>Optimización de consumo energético</li>
            <li>Consultoría y mantenimiento</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

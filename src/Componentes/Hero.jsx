export default function Hero() {
  return (
    <section className="items-center justify-center text-center px-6 py-20">
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-xl p-10 max-w-2xl">
        <img 
          src="/src/Image/Hero.png" 
          alt="EcoEnergix Logo" 
          className="w-80 mx-auto mb-6"
        />
        <button className="px-6 py-3 bg-[#0072ff] text-white font-semibold rounded-xl shadow-md hover:bg-[#005ed6] transition">
          Conoce más
        </button>
      </div>
    </section>
  )
}

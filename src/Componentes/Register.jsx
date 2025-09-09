import { useState } from "react"
import { Link } from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false, // nuevo campo
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.terms) {
      alert("Debes aceptar los términos y condiciones para registrarte.")
      return
    }
    alert(`Registro con: ${formData.name} - ${formData.email}`)
  }

  return (
    <div className="flex min-h-[400px] sm:min-h-screen items-center justify-center px-2 sm:px-0 py-8 sm:py-0">
      <div className="w-full max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2 sm:mb-3">
          Crear Cuenta
        </h2>
        <p className="text-base sm:text-lg text-center text-white/80 mb-4 sm:mb-6">
          Regístrate y empieza a ahorrar con energía solar
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-[#7d5fff] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-[#00c9a7] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Crea una contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-[#7d5fff] outline-none"
            />
          </div>

          {/* Checkbox de términos */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 text-[#7d5fff] border-gray-300 rounded focus:ring-[#7d5fff]"
            />
            <label className="text-sm text-white">
              Acepto los{" "}
              <Link to="/terms" className="text-[#00c9a7] hover:underline">
                Términos y Condiciones
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5f54b3] text-white py-2 rounded-lg hover:bg-[#3dc692] transition"
          >
            Registrarme
          </button>
        </form>
        <p className="text-xs sm:text-sm text-white text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-[#7d5fff] hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}


import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login con: ${formData.email} - ${formData.password}`);
  };

  return (
    <div className="flex min-h-[400px] sm:min-h-screen items-center justify-center px-2 sm:px-0 py-8 sm:py-0">
      <div className="w-full max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-lg border border-white/30">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6 ">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-[#5f54b3] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-[#3dc692] outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5f54b3] text-white py-2 rounded-lg hover:bg-[#3dc692] transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-xs sm:text-sm text-white text-center mt-4">
          ¿No tienes cuenta? <Link to="/register" className="text-blue-500">Regístrate</Link>
        </p>
      </div>
    </div>
  );
}

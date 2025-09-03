import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert(`Registro exitoso: ${formData.name} - ${formData.email}`);
    // Aquí en el futuro conectarías con tu API o backend
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">
          Crear Cuenta
        </h2>
        <p className="text-1xl text-center text-gray-500 mb-4">
          Únete a EcoEnergix y empieza a ahorrar con energía solar.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Crea una contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repite la contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5f54b3] text-white py-2 rounded-lg hover:bg-[#3dc692] transition"
          >
            Registrarse
          </button>
        </form>
        <p className="text-sm text-[#4375b2] text-center mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-500">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

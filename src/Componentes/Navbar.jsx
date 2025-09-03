import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-transparent text-white px-4 sm:px-8 py-3 flex justify-between items-center relative">
            <h1 className="text_xl font-bold px-4">EcoEnergix</h1>

            <ul className="hidden sm:flex gap-x-6">
                <li>
                    <Link to="/" className="hover:underline hover:text-[#3dc692]">Inicio</Link>
                </li>
                <li>
                    <Link to="/services" className="hover:underline hover:text-[#3dc692]">Servicios</Link>
                </li>
                 <li>
                    <Link to="/about" className="hover:underline hover:text-[#3dc692]">Nosotros</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:underline hover:text-[#3dc692]">Contacto</Link>
                </li> 
                <li>
                    <Link to="/login" className="hover:underline hover:text-[#3dc692]">Inicio de Sesión</Link>
                </li>

            </ul>

            <button className="sm:hidden text-2x1" onClick={() => setOpen(!open)}>
                {open ? '✖' : '☰'}
            </button>
            {open && ( 
                <ul className="w-full top-0 left-0 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-lg px-6 py-3 fixed z-50 ">
                     <li><Link to="/" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Inicio</Link></li>
                     <li><Link to="/services" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Servicios</Link></li>
                     <li><Link to="/about" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Nosotros</Link></li>
                     <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Contacto</Link></li>
                     <li><Link to="/login"  onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Inicio de Sesión</Link></li>
                </ul>
            )}
       </nav> 
       
    ); 
}
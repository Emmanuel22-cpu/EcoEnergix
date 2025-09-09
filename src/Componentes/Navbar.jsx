import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() { 
    const [open, setOpen] = useState(false);

    return (
        
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
           
              <div className="max-w-7xl mx-auto px-6 py-4 flex items-center  justify-between">
          
          <img
            src="/src/Image/EcoEnergixSINFONDO.png"
            alt="Logo"
            className="h-12 w-20 object-contain"
          />
          <h1 className="text-2xl font-bold text-white drop-shadow-md  ">
            EcoEnergix
          </h1>
      
            
            <ul className="hidden md:flex gap-8 text-lg text-white font-medium">
                <li>
                    <Link to="/" className="hover:underline hover:text-[#3dc692] ">Inicio</Link>
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

            <button className="md:hidden text-white text-3xl" onClick={() => setOpen(!open)}>
                {open ? '✖' : '☰'}
            </button>
            
            </div>
            
            {open && ( 
                <div className="md:hidden bg-white/20 backdrop-blur-md shadow-md">
                <ul className="flex flex-col items-center gap-4 py-6 text-white font-medium text-lg ">
                     <li><Link to="/" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Inicio</Link></li>
                     <li><Link to="/services" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Servicios</Link></li>
                     <li><Link to="/about" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Nosotros</Link></li>
                     <li><Link to="/contact" onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Contacto</Link></li>
                     <li><Link to="/login"  onClick={() => setOpen(false)} className="hover:underline hover:text-[#3dc692]">Inicio de Sesión</Link></li>
                </ul>
                </div>
            )}
       </nav> 
       
    ); 
}
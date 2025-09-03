import { Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navbar";
import Hero from "./Componentes/Hero";
import Services from "./Componentes/Services";
import About from "./Componentes/About";
import Contact from "./Componentes/Contact";
import Footer from "./Componentes/Footer";
import Login from "./Componentes/Login";
import Register from "./Componentes/Register";

function HomePage() {
  return (
    <>
      <section id="inicio" className="w-full flex items-center justify-center py-20">
        <Hero />
      </section>

      <section id="servicios" className="w-full flex items-center justify-center py-24">
        <Services />
      </section>

      <section id="nosotros" className="w-full flex items-center justify-center py-24">
        <About />
      </section>

      <section id="contacto" className="w-full flex items-center justify-center py-24">
        <Contact />
      </section>
              
      <section id="login" className="w-full flex items-center justify-center py-24">
        <Login />
        </section>

         <section id="register" className="w-full flex items-center justify-center py-24">
        <Register />
        </section>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-r from-[#0072ff] via-[#7d5fff] to-[#00c9a7] bg-[length:200%_200%] animate-gradient flex flex-col items-center">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
         <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </div>
  );
}


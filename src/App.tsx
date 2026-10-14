import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Contacto } from "./components/sections/Contacto";
import { Hero } from "./components/sections/Hero";
import { Proceso } from "./components/sections/Proceso";
import { Servicios } from "./components/sections/Servicios";
import { Stack } from "./components/sections/Stack";

function App() {
  return (
    <div id="inicio" className="min-h-svh bg-white text-zinc-900 dark:bg-base-950 dark:text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Stack />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;

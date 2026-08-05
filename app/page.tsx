import { AntesDespues } from "@/components/antes-despues";
import { Confianza } from "@/components/confianza";
import { CtaFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProcesoDivider } from "@/components/proceso-divider";
import { Servicios } from "@/components/servicios";
import { ServiciosTicker } from "@/components/servicios-ticker";
import { Testimonios } from "@/components/testimonios";
import { Ubicacion } from "@/components/ubicacion";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiciosTicker />
        <Servicios />
        <ProcesoDivider />
        <Confianza />
        <ProcesoDivider variant="line" />
        <AntesDespues />
        <Testimonios />
        <ProcesoDivider variant="line" />
        <Ubicacion />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

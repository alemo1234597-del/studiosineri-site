import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ServiceGrid from "@/components/home/ServiceGrid";
import Founder from "@/components/home/Founder";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";
import { Calendar, DraftingCompass } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
        <Hero />

        {/* Stats Section */}
        <section className="relative py-24 border-y border-white/5 bg-background-dark">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] grid-bg pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="group">
                <div className="text-5xl md:text-7xl font-mono font-bold text-primary neon-glow mb-2 group-hover:scale-110 transition-transform duration-500">
                  100%
                </div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-semibold group-hover:text-white/60 transition-colors">
                  Tasso Approvazione
                </div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-7xl font-mono font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  15+
                </div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-semibold group-hover:text-white/60 transition-colors">
                  Anni Esperienza
                </div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-7xl font-mono font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  500
                </div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-semibold group-hover:text-white/60 transition-colors">
                  Progetti Complessi
                </div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-7xl font-mono font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  24h
                </div>
                <div className="text-white/40 text-sm uppercase tracking-widest font-semibold group-hover:text-white/60 transition-colors">
                  Risposta Garantita
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceGrid />

        <Founder />

        {/* Why Choose Apex Section */}
        <section className="py-24 px-4 bg-background-dark">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">
                Il Vantaggio Competitivo
              </span>
              <h2 className="text-4xl font-bold">Perché scegliere APEX</h2>
            </div>
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/5 bg-[#020617]/40">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/5">
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-white/50 w-1/3">
                        Caratteristica
                      </th>
                      <th className="p-6 text-lg font-bold text-white w-1/3">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          STUDIO APEX
                        </span>
                      </th>
                      <th className="p-6 text-lg font-bold text-white/30 w-1/3">
                        Geometra Generico
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-white/70">
                        Tempi di Evasione
                      </td>
                      <td className="p-6 text-primary font-bold">
                        Accellerati (24-48h)
                      </td>
                      <td className="p-6 text-white/30">Standard (Settimane)</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-white/70">
                        Gestione Burocrazia
                      </td>
                      <td className="p-6 text-white">
                        <span className="flex items-center gap-2 text-green-400 font-bold">
                          {/* Using text for check/cancel to avoid extra imports for now, or could import CheckCircle/X */}
                          ✓ Totale & Digitale
                        </span>
                      </td>
                      <td className="p-6 text-white/30 flex items-center gap-2">
                        ✕ Parziale / Cartacea
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-white/70">
                        Reportistica
                      </td>
                      <td className="p-6 text-white">
                        <span className="flex items-center gap-2 text-green-400 font-bold">
                          ✓ Real-time Dashboard
                        </span>
                      </td>
                      <td className="p-6 text-white/30 flex items-center gap-2">
                        ✕ Email / Telefono
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-white/70">
                        Consulenza Legale
                      </td>
                      <td className="p-6 text-white">
                        <span className="flex items-center gap-2 text-green-400 font-bold">
                          ✓ Inclusa nel Team
                        </span>
                      </td>
                      <td className="p-6 text-white/30 flex items-center gap-2">
                        ✕ Esterna
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors">
                      <td className="p-6 font-medium text-white/70">
                        Tecnologia Rilievo
                      </td>
                      <td className="p-6 text-white">
                        <span className="flex items-center gap-2 text-green-400 font-bold">
                          ✓ Laser Scanner / Droni
                        </span>
                      </td>
                      <td className="p-6 text-white/30 flex items-center gap-2">
                        ✕ Nastro Metrico
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              PRONTO A COSTRUIRE?
            </h2>
            <p className="text-xl text-white/50 mb-10">
              Prenota una chiamata conoscitiva gratuita di 15 minuti. Analizziamo
              il tuo caso, definiamo la strategia.
            </p>
            <button className="button-glow bg-primary text-white text-xl font-bold px-12 py-5 rounded-full inline-flex items-center gap-3 hover:bg-[#ff6b42] transform transition-transform hover:-translate-y-1">
              <span>Inizia Ora</span>
              <Calendar className="w-6 h-6" />
            </button>
          </div>
        </section>

        <footer className="bg-background-darker border-t border-white/5 py-12 text-sm text-white/30">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <DraftingCompass className="text-white/60 w-6 h-6" />
              <span className="font-bold text-white text-lg">APEX</span>
            </div>
            <div className="flex gap-8">
              <Link className="hover:text-white transition-colors" href="#">
                Privacy Policy
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                Termini di Servizio
              </Link>
              <Link className="hover:text-white transition-colors" href="#">
                Lavora con Noi
              </Link>
            </div>
            <p>© 2023 Apex Surveying S.r.l. - P.IVA 12345678901</p>
          </div>
        </footer>
      </main>
    </>
  );
}

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    Building,
    TrendingDown,
    Handshake,
    Gavel,
    HardHat,
    Lock,
    ShieldCheck,
    FileText,
    CheckCircle,
    ArrowRight,
    Check
} from "lucide-react";
import { DollarSign, CheckCheck } from "lucide-react";
import Image from "next/image";

export default function ImpreseView() {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-display selection:bg-primary/30 selection:text-primary">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#020617]/80 z-10"></div>
                    <Image
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-[#0f172a]/80 backdrop-blur mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">
                            Accesso limitato alle categorie OG/OS
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white mb-6 drop-shadow-2xl">
                        NON CERCARE CLIENTI.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#FF8A65]">
                            PRENDI GLI APPALTI.
                        </span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                        Il <strong className="text-white">PROTOCOLLO ATTIVA IMPRESA®</strong> è il primo Private Procurement Network che garantisce l'accesso diretto a cantieri finanziati, eliminando la concorrenza sleale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <PrimaryButton>
                            Candidati per entrare nel Network
                            <CheckCircle className="w-5 h-5" />
                        </PrimaryButton>
                        <button className="h-16 px-10 rounded-full border border-white/20 hover:bg-white/5 text-white text-base font-bold transition-all flex items-center justify-center gap-3 uppercase tracking-wider">
                            <FileText className="w-5 h-5" />
                            Scarica il White Paper
                        </button>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="py-24 bg-[#020412]">
                <div className="container mx-auto px-6">
                    <SectionHeading
                        subtitle="Analisi di Settore"
                        title="PERCHÉ LE IMPRESE ECCELLENTI FALLISCONO"
                        description="Il mercato edile tradizionale è un sistema progettato per erodere i tuoi margini."
                        align="center"
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <FeatureCard
                            icon={TrendingDown}
                            title="Guerra del Ribasso"
                            description="Combatti ogni giorno contro competitor improvvisati che distruggono il mercato con offerte sottocosto. Il risultato? Lavori senza margine e rischi finanziari enormi."
                        />
                        <FeatureCard
                            icon={Handshake}
                            title="Il Subappalto Tossico"
                            description="Sei l'ultimo anello della catena. Il General Contractor incassa i soldi veri, tu ti prendi le responsabilità operative e i pagamenti a 120 giorni (se va bene)."
                        />
                        <FeatureCard
                            icon={Gavel}
                            title="Burocrazia Tecnica"
                            description="Cantieri fermi per mesi a causa di permessi mancanti o progettazioni errate. I costi fissi corrono, i ricavi si fermano."
                        />
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#020412] to-[#0f172a] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">La Soluzione Corporate</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4 uppercase">
                            Come Funziona il Protocollo
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent z-0"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-[#0f172a] border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,90,54,0.3)] group-hover:scale-110 transition-transform duration-300">
                                <HardHat className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Fase 1</h3>
                            <h4 className="text-xl font-extrabold text-white mb-4">Scouting & Ingegneria</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Selezioniamo solo operazioni immobiliari già finanziate e cantierabili. Analisi tecnica preventiva per eliminare i rischi di fermo cantiere.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-[#0f172a] border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,90,54,0.3)] group-hover:scale-110 transition-transform duration-300">
                                <Lock className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Fase 2</h3>
                            <h4 className="text-xl font-extrabold text-white mb-4">Esclusiva di Categoria</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Assegnazione dello Slot Operativo. Nessuna gara al ribasso. L'impresa partner ha l'esclusiva sulla propria categoria (OG/OS) per la zona.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-24 h-24 rounded-full bg-[#0f172a] border-2 border-primary flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,90,54,0.3)] group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Fase 3</h3>
                            <h4 className="text-xl font-extrabold text-white mb-4">Incasso Blindato</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Pagamenti garantiti da fondi depositati o SAL bancari diretti. Flusso di cassa pianificato e zero sorprese.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Status Board - GlassPanel Usage */}
            <section id="status-board" className="py-24 bg-[#0f172a] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <h2 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
                                <span className="text-primary mr-2">///</span> Network Status Board
                            </h2>
                            <p className="text-slate-400">Disponibilità Slot Operativi - Aggiornamento in tempo reale</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                            LIVE DATA FEED
                        </div>
                    </div>

                    <GlassPanel className="p-0 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#1e293b]/50 text-slate-400 text-xs uppercase tracking-widest border-b border-white/10">
                                        <th className="p-5 font-semibold">Categoria Operativa</th>
                                        <th className="p-5 font-semibold">Descrizione</th>
                                        <th className="p-5 font-semibold">Codice SOA</th>
                                        <th className="p-5 font-semibold">Stato Slot</th>
                                        <th className="p-5 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 font-mono text-sm">
                                    {/* Rows */}
                                    <tr className="hover:bg-white/5 transition-colors group">
                                        <td className="p-5 font-bold text-white text-lg group-hover:text-primary transition-colors">OG1</td>
                                        <td className="p-5 text-slate-300">Edifici Civili e Industriali</td>
                                        <td className="p-5 text-slate-500">III-BIS / IV</td>
                                        <td className="p-5">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-900/20 text-red-400 border border-red-900/30 uppercase text-xs font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Occupied
                                            </span>
                                        </td>
                                        <td className="p-5 text-right">
                                            <span className="text-slate-600 text-xs uppercase cursor-not-allowed">Waitlist Only</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors group bg-[#1e293b]/20">
                                        <td className="p-5 font-bold text-white text-lg group-hover:text-primary transition-colors">OS30</td>
                                        <td className="p-5 text-slate-300">Impianti Elettrici</td>
                                        <td className="p-5 text-slate-500">II / III</td>
                                        <td className="p-5">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-900/20 text-green-400 border border-green-900/30 uppercase text-xs font-bold shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available
                                            </span>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-primary hover:text-white border border-primary hover:bg-primary px-4 py-1.5 rounded text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,90,54,0.2)]">
                                                Blocca Slot
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors group">
                                        <td className="p-5 font-bold text-white text-lg group-hover:text-primary transition-colors">OS3</td>
                                        <td className="p-5 text-slate-300">Impianti Idrico-Sanitario</td>
                                        <td className="p-5 text-slate-500">I / II</td>
                                        <td className="p-5">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-yellow-900/20 text-yellow-400 border border-yellow-900/30 uppercase text-xs font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> In Selection
                                            </span>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-slate-400 hover:text-white underline text-xs uppercase">
                                                Inquire
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors group bg-[#1e293b]/20">
                                        <td className="p-5 font-bold text-white text-lg group-hover:text-primary transition-colors">OS6 / OS18</td>
                                        <td className="p-5 text-slate-300">Finiture / Serramenti</td>
                                        <td className="p-5 text-slate-500">I / II</td>
                                        <td className="p-5">
                                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-900/20 text-green-400 border border-green-900/30 uppercase text-xs font-bold shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Available
                                            </span>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-primary hover:text-white border border-primary hover:bg-primary px-4 py-1.5 rounded text-xs font-bold uppercase transition-all shadow-[0_0_15px_rgba(255,90,54,0.2)]">
                                                Blocca Slot
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </GlassPanel>
                </div>
            </section>

            {/* Application Form */}
            <section id="contact" className="py-24 relative bg-[#020617] border-t border-white/5">
                <div className="container mx-auto px-6 relative z-10">
                    <GlassPanel className="max-w-4xl mx-auto md:p-12 border-primary/30 shadow-[0_0_40px_rgba(224,93,58,0.1)]">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 uppercase tracking-tight">
                                Candidatura per Ammissione
                            </h2>
                            <p className="text-primary text-sm uppercase tracking-widest mb-6">
                                Processo di Selezione Rigoroso
                            </p>
                            <p className="text-slate-400 text-base max-w-2xl mx-auto">
                                Non accettiamo tutte le imprese. Verifichiamo solidità finanziaria e capacità tecnica. Compila il modulo per avviare l'istruttoria.
                            </p>
                        </div>
                        <form className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Ragione Sociale Impresa</label>
                                <input
                                    className="w-full bg-[#020412] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display"
                                    placeholder="Es. Edilizia Futura S.r.l." type="text"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Categoria Prevalente</label>
                                <select className="w-full bg-[#020412] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display appearance-none cursor-pointer">
                                    <option>Seleziona Categoria...</option>
                                    <option>OG1 - Edifici Civili</option>
                                    <option>OS30 - Impianti Elettrici</option>
                                    <option>OS3 - Impianti Idrici</option>
                                    <option>OS6 - Finiture</option>
                                    <option>Altro</option>
                                </select>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Attestazione SOA</label>
                                <select className="w-full bg-[#020412] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display appearance-none cursor-pointer">
                                    <option>Seleziona Classifica...</option>
                                    <option>Nessuna</option>
                                    <option>I / II Classifica</option>
                                    <option>III / III-BIS Classifica</option>
                                    <option>IV o Superiore</option>
                                </select>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Fatturato Ultimo Anno</label>
                                <input
                                    className="w-full bg-[#020412] border border-white/10 rounded px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display"
                                    placeholder="€ 0,00" type="text"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-primary uppercase tracking-widest mb-2">Principale Ostacolo Attuale</label>
                                <select className="w-full bg-[#020412] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-display appearance-none cursor-pointer">
                                    <option>Ritardi Pagamenti</option>
                                    <option>Marginalità Bassa</option>
                                    <option>Discontinuità Lavoro</option>
                                    <option>Burocrazia</option>
                                </select>
                            </div>
                            <div className="col-span-2 pt-6">
                                <PrimaryButton className="w-full h-16 text-lg uppercase tracking-wider">
                                    Invia Candidatura Ufficiale
                                    <ArrowRight className="w-5 h-5" />
                                </PrimaryButton>
                                <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-wider">
                                    I dati saranno trattati secondo normativa GDPR vigente. Riservato titolari d'impresa.
                                </p>
                            </div>
                        </form>
                    </GlassPanel>
                </div>
            </section>
        </div>
    );
}

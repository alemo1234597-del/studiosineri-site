"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
// 👇 IMPORT SERVER ACTION
import { submitAgenzie } from '@/app/actions/submit-agenzie'
import {
    Zap,
    FolderCheck,
    Check,
    RefreshCw,
    ShieldCheck,
    AlertTriangle,
    Hourglass,
    Frown,
    Ruler,
    X,
    Rocket,
    CheckCircle,
    Scan,
    Send,
    ArrowRight,
    PlayCircle,
    Triangle,
    Loader2, // Added
    AlertCircle // Added
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react"; // Added

export default function AgenzieView() {
    // 👇 FORM STATE
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        setStatus('loading')
        setErrorMessage('')

        try {
            const formData = new FormData(form)
            const result = await submitAgenzie(formData)

            if (result.success) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
                setErrorMessage(result.message || 'Errore sconosciuto')
            }
        } catch (e) {
            setStatus('error')
            setErrorMessage('Errore di connessione')
        }
    }
    // 👆 END FORM STATE

    return (
        <div className="min-h-screen bg-[#020412] text-slate-400 font-display selection:bg-primary/30 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,90,54,0.15)_0%,rgba(2,4,18,0)_50%)] opacity-60"></div>
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Nuovo Protocollo 2.0</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                                SMETTI DI PERDERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">PROVVIGIONI</span> DAVANTI AL NOTAIO.
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Il primo protocollo di due diligence tecnica pensato per <span className="text-white font-medium">Agenzie Immobiliari Top Performer</span> che vogliono chiudere rogiti blindati in 72h.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <PrimaryButton className="h-14 px-8 text-base shadow-[0_0_20px_rgba(255,90,54,0.4)]">
                                    Inizia il Fast Track
                                    <ArrowRight className="w-5 h-5" />
                                </PrimaryButton>
                                <button className="h-14 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white text-base font-medium transition-all flex items-center justify-center gap-2">
                                    <PlayCircle className="w-5 h-5" />
                                    Guarda come funziona
                                </button>
                            </div>
                        </div>

                        {/* 3D Card Visual */}
                        <div className="lg:col-span-5 relative perspective-[1000px]">
                            <div className="absolute -inset-10 bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-2xl rounded-full opacity-50 animate-pulse"></div>
                            <GlassPanel className="relative rounded-2xl p-6 transform transition-transform hover:scale-[1.02] duration-500 border-t border-white/10 shadow-2xl bg-[#1e293b]/20">
                                <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                            <FolderCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-400 uppercase font-semibold">Pratica #AZ-8892</div>
                                            <div className="text-white font-bold">Via Roma, 42 - Milano</div>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold flex items-center gap-1 animate-pulse">
                                        <Zap className="w-3 h-3 fill-current" /> FAST TRACK
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm text-slate-300 mb-2">
                                    <span>Stato Avanzamento</span>
                                    <span className="text-primary font-bold">95%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden mb-6">
                                    <div className="h-full bg-gradient-to-r from-primary to-orange-400 w-[95%] shadow-[0_0_10px_rgba(255,90,54,0.5)]"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="size-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-slate-200">Accesso agli atti (Urgente)</span>
                                        <span className="text-xs text-slate-500 ml-auto">12h</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="size-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-slate-200">Rilievo Laser Scanner</span>
                                        <span className="text-xs text-slate-500 ml-auto">24h</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center animate-spin duration-[3000ms]">
                                            <RefreshCw className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm text-white font-medium">Validazione Conformità</span>
                                        <span className="text-xs text-primary ml-auto font-bold">In corso...</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 flex gap-4 items-center">
                                    <ShieldCheck className="text-primary w-8 h-8" />
                                    <div>
                                        <div className="text-sm font-bold text-white">Rogito Blindato</div>
                                        <div className="text-xs text-slate-300">Pronto per la stipula</div>
                                    </div>
                                </div>
                            </GlassPanel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section id="nightmares" className="py-24 bg-gradient-to-b from-[#0f172a] to-[#020412] relative">
                <div className="container mx-auto px-6">
                    <div className="mb-16 text-center max-w-3xl mx-auto">
                        <SectionHeading
                            title="I 3 INCUBI DELL'AGENTE IMMOBILIARE"
                            description="Il metodo tradizionale è rotto. Ecco perché perdi tempo e soldi con i tecnici generalisti."
                            align="center"
                        />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={AlertTriangle}
                            title="Il Tecnico Pignolo"
                            description="Blocca la pratica per dettagli irrilevanti, spaventando l'acquirente e facendo saltare la vendita all'ultimo minuto."
                            className="hover:border-red-500/30 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)] group-hover:text-red-500"
                        />
                        <FeatureCard
                            icon={Hourglass}
                            title="Il Comune Lento"
                            description="Nessun canale preferenziale. Mesi di attesa per un semplice accesso agli atti mentre il cliente perde la pazienza."
                            className="hover:border-red-500/30 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]"
                        />
                        <FeatureCard
                            icon={Frown}
                            title="La Figura Barbina"
                            description="Arrivare al rogito e scoprire una difformità davanti al Notaio e ai clienti. La tua reputazione bruciata in un secondo."
                            className="hover:border-red-500/30 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.15)]"
                        />
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase">Il confronto</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Perché i Top Performer scelgono Apex</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Traditional */}
                        <div className="p-8 rounded-3xl border border-white/5 bg-[#1e293b]/30 flex flex-col gap-6 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-4">
                                <div className="size-12 rounded-full bg-slate-700/50 flex items-center justify-center text-slate-400">
                                    <Ruler className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Geometra Classico</h3>
                                    <p className="text-sm text-slate-400">L&apos;approccio &quot;si è sempre fatto così&quot;</p>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-400">
                                    <X className="w-5 h-5 text-red-400/70" />
                                    <span>Tempi incerti (30-60gg)</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <X className="w-5 h-5 text-red-400/70" />
                                    <span>Approccio reattivo (aspetti che chiami)</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <X className="w-5 h-5 text-red-400/70" />
                                    <span>Documentazione cartacea sparsa</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <X className="w-5 h-5 text-red-400/70" />
                                    <span>Comunicazione lenta e tecnica</span>
                                </li>
                            </ul>
                            <button className="w-full py-4 rounded-xl border border-white/10 text-slate-400 font-medium text-sm cursor-not-allowed">
                                Metodo Obsoleto
                            </button>
                        </div>

                        {/* Apex */}
                        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-primary to-[#FF7A5C]/50 shadow-[0_0_50px_-10px_rgba(255,90,54,0.3)]">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg z-10">
                                Consigliato dai Top Producer
                            </div>
                            <div className="h-full p-8 rounded-[22px] bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 flex flex-col gap-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white">
                                        <Rocket className="w-6 h-6 fill-current" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">STUDIO APEX <span className="text-primary text-sm font-normal ml-1">PARTNER</span></h3>
                                        <p className="text-sm text-slate-400">Protocollo Fast Track™</p>
                                    </div>
                                </div>
                                <ul className="space-y-4 relative z-10">
                                    <li className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Tempi Certi (Report in 72h)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Proattivo (Anticipiamo i problemi)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Dashboard Digitale Real-Time</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-white font-medium">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>Focus Commerciale al 100%</span>
                                    </li>
                                </ul>
                                <button className="relative z-10 w-full py-4 rounded-xl bg-primary hover:bg-[#FF7A5C] text-white font-bold text-sm transition-all shadow-lg hover:shadow-primary/40">
                                    Diventa Partner Apex
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Protocollo Rogito Blindato */}
            <section id="protocol" className="py-32 bg-gradient-to-b from-[#0f172a] to-[#020412] border-y border-white/5 relative overflow-hidden">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block"></div>
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Protocollo Rogito Blindato</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            3 step verticali per blindare la tua provvigione e garantire la vendita.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {/* Step 1 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,90,54,0.8)] z-20 hidden lg:block border-2 border-[#020412]"></div>
                            <div className="lg:text-right order-1 lg:order-1">
                                <h3 className="text-3xl font-bold text-white mb-4">DUE DILIGENCE PRE-INCARICO</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Analizziamo l&apos;immobile prima della firma. Il nostro sistema proprietario scansiona ogni documento e identifica le criticità in 48h.
                                </p>
                            </div>
                            <div className="relative order-2 lg:order-2 perspective-[1000px]">
                                <div className="glass-panel rounded-3xl p-8 relative overflow-hidden group hover:bg-white/5 transition-all duration-500 border border-white/10 shadow-2xl bg-[#1e293b]/20">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,90,54,0.1)_0%,transparent_70%)] opacity-50"></div>
                                    <div className="relative h-64 flex items-center justify-center">
                                        {/* Animation mockups */}
                                        <div className="absolute w-48 h-48 border border-white/10 rounded-full"></div>
                                        <div className="absolute w-32 h-32 border border-white/10 rounded-full"></div>
                                        <div className="absolute w-64 h-64 border border-dashed border-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                        <div className="absolute w-1/2 h-1/2 top-0 right-0 bg-gradient-to-t from-primary/20 to-transparent blur-sm origin-bottom-left animate-[spin_3s_linear_infinite] rounded-tr-full"></div>
                                        <Scan className="w-16 h-16 text-white/80 relative z-10" />
                                        <div className="absolute -top-2 -right-2 bg-[#1e293b]/90 backdrop-blur border border-primary text-primary px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce shadow-primary/10">
                                            <AlertTriangle className="w-4 h-4" />
                                            <span className="text-xs font-bold whitespace-nowrap">DIFFORMITÀ RILEVATA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,90,54,0.8)] z-20 hidden lg:block border-2 border-[#020412]"></div>
                            <div className="relative order-2 lg:order-1">
                                <div className="glass-panel rounded-3xl p-1 relative overflow-hidden border border-white/10 shadow-2xl group hover:scale-[1.02] transition-transform duration-500 bg-[#1e293b]/20">
                                    <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-[20px]">
                                        <div className="relative w-full max-w-sm mx-auto bg-white text-slate-900 p-6 rounded-lg shadow-2xl transition-transform duration-500" style={{ transform: "rotateY(12deg) rotateZ(-2deg)" }}>
                                            <div className="border-b-2 border-slate-100 pb-4 mb-4 flex justify-between items-center">
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Certificato #8821</div>
                                                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                                                <div className="h-3 bg-slate-50 rounded w-full"></div>
                                                <div className="h-3 bg-slate-50 rounded w-5/6"></div>
                                                <div className="h-3 bg-slate-50 rounded w-4/6"></div>
                                            </div>
                                            <div className="absolute -right-4 -bottom-4 bg-green-500 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg shadow-green-500/30 border-4 border-[#020412]">
                                                <ShieldCheck className="w-8 h-8" />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-green-500/10 blur-3xl pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:text-left order-1 lg:order-2">
                                <h3 className="text-3xl font-bold text-white mb-4">RELAZIONE TECNICA INTEGRATA (RTI)</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Consegniamo una relazione tecnica che certifica la conformità urbanistica e catastale. Il &quot;Bollino Verde&quot; che rassicura acquirente e notaio.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(255,90,54,0.8)] z-20 hidden lg:block border-2 border-[#020412]"></div>
                            <div className="lg:text-right order-1 lg:order-1">
                                <h3 className="text-3xl font-bold text-white mb-4">CORSIA PREFERENZIALE WHATSAPP</h3>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Niente ticket, niente attese. Un gruppo WhatsApp dedicato per ogni pratica con tecnici Apex pronti a rispondere in tempo reale.
                                </p>
                            </div>
                            <div className="relative order-2 lg:order-2">
                                <div className="glass-panel rounded-3xl p-6 relative overflow-hidden border border-white/10 shadow-2xl max-w-sm mx-auto lg:mx-0 bg-[#1e293b]/20">
                                    <div className="bg-[#111b21] rounded-2xl overflow-hidden border border-white/5">
                                        <div className="bg-[#202c33] p-4 flex items-center gap-3 border-b border-white/5">
                                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">A</div>
                                            <div>
                                                <div className="text-white font-medium text-sm">Supporto Tecnico Apex</div>
                                                <div className="text-xs text-slate-400">Online</div>
                                            </div>
                                        </div>
                                        <div className="p-4 space-y-4 min-h-[200px] bg-slate-900 bg-opacity-40">
                                            <div className="flex flex-col items-start max-w-[85%]">
                                                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none text-sm text-white shadow-sm">
                                                    Ciao Mario, controllo CILA completato. ✅
                                                </div>
                                                <span className="text-[10px] text-slate-500 mt-1 ml-1">10:23</span>
                                            </div>
                                            <div className="flex flex-col items-end max-w-[85%] ml-auto">
                                                <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none text-sm text-white shadow-sm">
                                                    Ottimo! Possiamo procedere col rogito?
                                                </div>
                                                <span className="text-[10px] text-slate-500 mt-1 mr-1">10:24</span>
                                            </div>
                                            <div className="flex flex-col items-start max-w-[85%]">
                                                <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none text-sm text-white shadow-sm">
                                                    Assolutamente sì. Ti ho appena inviato l&apos;RTI firmata via mail. 🚀
                                                </div>
                                                <span className="text-[10px] text-slate-500 mt-1 ml-1">10:25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Application Form - POWERED BY SUPABASE 🚀 */}
            <section id="contact" className="py-32 relative bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border-t border-white/20 shadow-[0_0_40px_-10px_rgba(255,90,54,0.3)] bg-[#1e293b]/20">
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                Candidatura Esclusiva
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">NON CERCHIAMO CLIENTI,<br />CERCHIAMO <span className="text-primary">PARTNER</span>.</h2>
                            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                                Lavoriamo solo con un numero limitato di agenzie per zona per garantire la massima velocità. Verifica se la tua zona è coperta.
                            </p>
                        </div>

                        {/* 👇 REAL FORM START */}
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nome Completo</label>
                                <input
                                    name="full-name"
                                    required
                                    className="w-full bg-[#020412] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Mario Rossi" type="text"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nome Agenzia</label>
                                <input
                                    name="agency-name"
                                    required
                                    className="w-full bg-[#020412] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Immobiliare Top" type="text"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Aziendale</label>
                                <input
                                    name="email"
                                    required
                                    className="w-full bg-[#020412] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="mario@immobiliaretop.it" type="email"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Città Operativa</label>
                                <input
                                    name="city"
                                    required
                                    className="w-full bg-[#020412] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Milano" type="text"
                                />
                            </div>

                            {/* ERROR MESSAGE */}
                            {status === 'error' && (
                                <div className="col-span-2 flex items-center gap-3 bg-red-900/20 border border-red-500/30 p-4 rounded-xl">
                                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                                    <p className="text-red-200 text-sm font-medium">{errorMessage}</p>
                                </div>
                            )}

                            <div className="col-span-2 pt-4">
                                <PrimaryButton
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`w-full h-14 text-lg justify-center shadow-lg hover:shadow-primary/40 
                                        ${status === 'success' ? '!bg-green-600 !hover:bg-green-600' : ''}
                                    `}
                                >
                                    {status === 'loading' ? (
                                        <> <Loader2 className="w-5 h-5 animate-spin mr-2" /> ELABORAZIONE... </>
                                    ) : status === 'success' ? (
                                        <> <CheckCircle className="w-5 h-5 mr-2" /> RICHIESTA INVIATA </>
                                    ) : (
                                        <> Invia Candidatura Partner <Send className="w-5 h-5 ml-2" /> </>
                                    )}
                                </PrimaryButton>
                                <p className="text-center text-xs text-slate-500 mt-4">Nessun impegno. Risposta in 24h lavorative.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
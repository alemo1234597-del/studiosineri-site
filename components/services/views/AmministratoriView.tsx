"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
// 👇 IMPORT THE SERVER ACTION
import { submitAmministratori } from '@/app/actions/submit-amministratori'
import {
    Ruler,
    Phone,
    Play,
    Star,
    TrendingUp,
    Gavel,
    Users,
    PhoneIncoming,
    Sparkles,
    Hourglass,
    Rocket,
    Mail,
    Smartphone,
    CalendarX,
    Eye,
    FileText,
    DollarSign,
    Shield,
    Wrench,
    Euro,
    BarChart,
    ClipboardCheck,
    CheckCircle,
    ArrowRight,
    BellRing,
    Loader2, // Added Loader
    AlertCircle // Added Alert
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AmministratoriView() {
    const [activeTab, setActiveTab] = useState('safety');

    // 👇 FORM LOGIC ADDED HERE
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        setStatus('loading')
        setErrorMessage('')

        try {
            const formData = new FormData(form)
            const result = await submitAmministratori(formData)

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
    // 👆 END OF FORM LOGIC

    const scenarios = [
        {
            id: 'safety',
            tabLabel: 'Sicurezza & Cantieri',
            title: 'SCUDO PENALE',
            icon: Shield,
            description: "Assumiamo la piena responsabilità come Responsabili dei Lavori. Il nostro team monitora il cantiere quotidianamente, gestisce la documentazione e garantisce la sicurezza. Tu rimani l'amministratore, non il capocantiere.",
            features: [
                'Coordinamento Sicurezza (CSP/CSE) incluso',
                'Dashboard aggiornata in tempo reale',
                'Report fotografici settimanali per i condomini'
            ],
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa4Fg3n7VLBMSHBDtDR58poTqI5DkPNOsaS0luJxzZQftbss-3jSpKZWE2FKN-SWCTqCmRVHsaS9Uhzr-cFU27QP-WnAytjqdgLy7aHElbmt60A5oYBqLhPtVi4AwKLrF3uTnZVrbgskp9uWXT4Fq5Ffdns6_WgkbqiEpyM0N0p6vHHKtLeEfBsRDngMbcdKh-uSr-2o0T9RI-GERVFP5DbwjdHJEdiSoXet5Dni47IVJME5Y4pBjT0hBDQMXX97UGQtCRPzxrfVs',
            badgeIcon: ClipboardCheck,
            badgeLabel: 'Stato Sicurezza',
            badgeValue: '100% Conforme',
            badgeColorClass: 'bg-green-500/20 text-green-400'
        },
        {
            id: 'maintenance',
            tabLabel: 'Manutenzione & Guasti',
            title: 'PIANO DI MANUTENZIONE',
            icon: Wrench,
            description: "Digitalizziamo il Fascicolo del Fabbricato per una gestione proattiva. Pianifichiamo interventi a lungo termine per prevenire emergenze costose e mantenere alto il valore dell'immobile nel tempo.",
            features: [
                'Fascicolo del Fabbricato Digitale sempre online',
                'Pianificazione interventi a 3 e 5 anni',
                'Riduzione costi urgenza del 40%'
            ],
            image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2662&auto=format&fit=crop',
            badgeIcon: BarChart,
            badgeLabel: 'Efficienza',
            badgeValue: '+40% Risparmio',
            badgeColorClass: 'bg-blue-500/20 text-blue-400'
        },
        {
            id: 'bonus',
            tabLabel: 'Superbonus & Facciate',
            title: 'CONTROLLO COSTI E QUALITÀ',
            icon: Euro,
            description: "Direzione Lavori Ferrea sui bonus fiscali. Verifichiamo ogni singolo SAL prima di autorizzare pagamenti, garantendo che i materiali e l'esecuzione rispecchino esattamente il capitolato approvato.",
            features: [
                'Approvazione SAL rigorosa e verificata',
                'Controllo qualità materiali in ingresso',
                'Tutela legale su ogni fase del cantiere'
            ],
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop',
            badgeIcon: ClipboardCheck,
            badgeLabel: 'Budget Control',
            badgeValue: 'Zero Extra',
            badgeColorClass: 'bg-orange-500/20 text-orange-400'
        }
    ];

    const currentScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

    return (
        <div className="min-h-screen bg-[#020412] text-slate-400 font-display selection:bg-primary/30 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden min-h-[90vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Modern Condominium at Twilight"
                        className="w-full h-full object-cover opacity-40 ml-auto"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj1zn3KqRsQBRpRmP9sF_ks3RuC2_uFKKNhSYwQqkVbyiRu4dcFCgsWQ8MyGR8IPfLenpwWmPl_m7zpJRH1-EG-JTRWzw7rrgIZTyU2WYzGcCTYue7oYFhZnEQNbQWXV3AFl-yMX-IWb2hntGzq_yraDiLcRDzpPYaNvZK-qMDTeqmCtmWokxgFrWUmbpal-BwgYAfCPuUVSAQpYPTdqtT5g7QagQJ0_WzZXBmds43_LhYxObR-r2_MgKO_kLGvhdicOaeIF6bZQc"
                    />
                    <div className="absolute inset-0 bg-[#0B253A]/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020412] via-transparent to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col items-start text-left z-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">Nuovo standard a Torino</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
                            TU GESTISCI <br className="hidden md:block" />I CONTI. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-primary to-white">NOI GESTIAMO IL CANTIERE.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 font-medium leading-relaxed">
                            Supporto tecnico d'élite per amministratori di condominio.
                            Elimina le responsabilità penali e riduci del 70% le chiamate dei condomini con la nostra supervisione attiva.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto justify-center min-w-[180px] shadow-xl shadow-primary/20">
                                SCOPRI DI PIÙ
                            </PrimaryButton>
                            <button className="w-full sm:w-auto h-[3.5rem] px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all backdrop-blur-md flex items-center gap-2 justify-center min-w-[180px] group">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 text-white fill-white" />
                                </div>
                                Guarda Demo
                            </button>
                        </div>
                    </div>

                    {/* 3D Card Representation */}
                    <div className="relative h-[500px] w-full flex items-center justify-center perspective-[1000px] lg:h-auto z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <GlassPanel className="relative w-full max-w-lg aspect-[4/3] rounded-2xl p-6 border border-white/10 transform rotate-y-[-10deg] rotate-x-[5deg] shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl">
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                                <div>
                                    <h3 className="text-lg font-bold text-white">Status Edifici</h3>
                                    <p className="text-xs text-slate-400">Panoramica Cantieri Attivi</p>
                                </div>
                                <div className="bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                                    <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Operativo</span>
                                </div>
                            </div>

                            {/* Chart Area */}
                            <div className="relative h-48 w-full bg-black/20 rounded-xl mb-4 overflow-hidden flex items-end px-2 pt-8">
                                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 p-4 opacity-10 pointer-events-none">
                                    <div className="border-t border-white w-full h-full"></div>
                                    <div className="border-t border-white w-full h-full"></div>
                                    <div className="border-t border-white w-full h-full"></div>
                                    <div className="border-t border-white w-full h-full"></div>
                                </div>
                                <svg className="w-full h-full z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                                    <path d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,5" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" style={{ filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))" }}></path>
                                    <path d="M0,80 C50,80 50,40 100,60 C150,80 150,20 200,40 C250,60 250,10 300,5 L300,100 L0,100 Z" fill="url(#gradient-green)" opacity="0.2" stroke="none"></path>
                                    <defs>
                                        <linearGradient id="gradient-green" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#22c55e" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-slate-400 mb-1">Efficienza</div>
                                    <div className="text-xl font-bold text-white flex items-center gap-2">
                                        +24% <TrendingUp className="text-green-400 w-4 h-4" />
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                    <div className="text-xs text-slate-400 mb-1">Incidenti</div>
                                    <div className="text-xl font-bold text-white">0</div>
                                </div>
                            </div>
                        </GlassPanel>

                        {/* Floating Elements */}
                        <div className="absolute top-10 -right-4 lg:right-0 bg-[#1e293b] border border-green-500/30 shadow-2xl shadow-green-900/20 rounded-full py-2 px-4 flex items-center gap-3 animate-[float-delayed_7s_ease-in-out_infinite_1s] z-20 hover:scale-105 transition-transform cursor-default">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                                <BellRing className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-white">Guasto Caldaia</div>
                                <div className="text-[10px] font-bold text-green-400 uppercase tracking-wide">RISOLTO (2h)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <SectionHeading
                            title="I 3 INCUBI DELL'AMMINISTRATORE"
                            description="Le sfide quotidiane che prosciugano il tuo tempo e aumentano i tuoi rischi. Noi li risolviamo."
                            align="center"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={Gavel}
                            title="Responsabilità Penale"
                            description="Senza un direttore lavori presente, ogni incidente in cantiere ricade su di te. Rischi legali costanti senza protezione adeguata."
                        />
                        <FeatureCard
                            icon={Users}
                            title="Assemblee Rabbiosi"
                            description="Condomini insoddisfatti per lavori in ritardo o fatti male? Le riunioni diventano un campo di battaglia infinito."
                        />
                        <FeatureCard
                            icon={PhoneIncoming}
                            title="Reperibilità H24"
                            description="Il telefono squilla anche di notte e nei weekend per emergenze tecniche che non dovresti gestire tu in prima persona."
                        />
                    </div>
                </div>
            </section>

            {/* Solution Switcher */}
            <section id="shield" className="relative z-10 py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-8">LA NOSTRA SOLUZIONE INTEGRATA</h2>
                        <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#1e293b]/20 backdrop-blur-2xl rounded-full border border-white/10">
                            {scenarios.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={cn(
                                        "px-6 py-3 rounded-full font-bold text-sm transition-all",
                                        activeTab === tab.id
                                            ? "bg-primary text-white shadow-lg shadow-primary/20"
                                            : "bg-transparent text-slate-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {tab.tabLabel}
                                </button>
                            ))}
                        </div>
                    </div>

                    <GlassPanel className="rounded-3xl overflow-hidden border border-white/10 relative min-h-[550px] md:min-h-[450px] bg-[#1e293b]/20 backdrop-blur-2xl p-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 gap-0 h-full"
                            >
                                <div className="relative h-64 md:h-auto min-h-[300px] md:min-h-[450px]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                                        style={{ backgroundImage: `url('${currentScenario.image}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent"></div>
                                    <div className="absolute inset-0 bg-black/40"></div>

                                    <div className="absolute bottom-6 left-6 md:left-auto md:right-6 bg-[#1e293b]/60 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 max-w-xs">
                                        <div className={cn("p-2 rounded-lg", currentScenario.badgeColorClass)}>
                                            <currentScenario.badgeIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-300 font-bold uppercase">{currentScenario.badgeLabel}</p>
                                            <p className="text-white font-bold">{currentScenario.badgeValue}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0f172a]/50">
                                    <div className="flex items-center gap-2 mb-4">
                                        <currentScenario.icon className="text-primary w-8 h-8" />
                                        <h3 className="text-2xl font-black text-white tracking-tight">{currentScenario.title}</h3>
                                    </div>
                                    <p className="text-slate-300 mb-8 leading-relaxed">
                                        {currentScenario.description}
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {currentScenario.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="text-primary shrink-0 w-5 h-5" />
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all group w-fit">
                                        Approfondisci il servizio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </GlassPanel>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white text-center mb-12">PERCHÉ APEX È DIVERSO</h2>
                    <GlassPanel className="rounded-3xl overflow-hidden bg-[#1e293b]/20 backdrop-blur-2xl border border-white/10 p-0">
                        {/* Header */}
                        <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
                            <div className="p-6 text-slate-400 font-medium text-sm md:text-base flex items-center">Criterio</div>
                            <div className="p-6 text-slate-400 font-bold text-sm md:text-base border-l border-white/10 text-center">Geometra Generico</div>
                            <div className="p-6 text-white font-extrabold text-sm md:text-lg border-l border-white/10 bg-primary/10 text-center flex items-center justify-center gap-2">
                                STUDIO APEX <Sparkles className="text-primary w-5 h-5 hidden md:block" />
                            </div>
                        </div>
                        {/* Rows */}
                        <div className="grid grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors">
                            <div className="p-6 text-slate-300 font-bold text-sm md:text-lg flex items-center">Velocità Intervento</div>
                            <div className="p-6 text-slate-400 text-sm md:text-base border-l border-white/10 flex flex-col items-center justify-center gap-2 text-center bg-[#1e293b]/20">
                                <Hourglass className="text-slate-500 w-5 h-5" />
                                3-5 Giorni
                            </div>
                            <div className="p-6 text-white text-sm md:text-base border-l border-white/10 bg-primary/5 flex flex-col items-center justify-center gap-2 text-center font-bold">
                                <Rocket className="text-primary w-5 h-5" />
                                Entro 4 Ore
                            </div>
                        </div>
                        <div className="grid grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors">
                            <div className="p-6 text-slate-300 font-bold text-sm md:text-lg flex items-center">Comunicazione</div>
                            <div className="p-6 text-slate-400 text-sm md:text-base border-l border-white/10 flex flex-col items-center justify-center gap-2 text-center bg-[#1e293b]/20">
                                <Mail className="text-slate-500 w-5 h-5" />
                                Email / Carta
                            </div>
                            <div className="p-6 text-white text-sm md:text-base border-l border-white/10 bg-primary/5 flex flex-col items-center justify-center gap-2 text-center font-bold">
                                <Smartphone className="text-primary w-5 h-5" />
                                App & Dashboard
                            </div>
                        </div>
                        <div className="grid grid-cols-3 hover:bg-white/5 transition-colors">
                            <div className="p-6 text-slate-300 font-bold text-sm md:text-lg flex items-center">Presenza Cantiere</div>
                            <div className="p-6 text-slate-400 text-sm md:text-base border-l border-white/10 flex flex-col items-center justify-center gap-2 text-center bg-[#1e293b]/20">
                                <CalendarX className="text-slate-500 w-5 h-5" />
                                Saltuaria
                            </div>
                            <div className="p-6 text-white text-sm md:text-base border-l border-white/10 bg-primary/5 flex flex-col items-center justify-center gap-2 text-center font-bold">
                                <Eye className="text-primary w-5 h-5" />
                                Giornaliera
                            </div>
                        </div>
                    </GlassPanel>
                </div>
            </section>

            {/* Diagnosis Form Section - NOW POWERED BY SUPABASE 🚀 */}
            <section id="diagnosis" className="relative z-10 py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="max-w-6xl mx-auto">
                    <GlassPanel className="rounded-3xl p-1 border-primary/30 relative overflow-hidden bg-[#1e293b]/20 backdrop-blur-2xl border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none"></div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
                                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wide mb-6 w-fit border border-primary/20">
                                    Offerta Limitata
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                                    DIAGNOSI TECNICA <br />
                                    <span className="text-primary">GRATUITA</span>
                                </h2>
                                <p className="text-slate-300 mb-8 text-lg">
                                    Non sai se quel condominio è a norma? Prenota una diagnosi gratuita. Il nostro team effettuerà un sopralluogo e ti consegnerà un report dettagliato sullo stato di salute dell'edificio.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl text-white">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">Report PDF Completo</h4>
                                            <p className="text-sm text-slate-400">Analisi strutturale e normativa</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/10 p-3 rounded-xl text-white">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">Stima Costi Interventi</h4>
                                            <p className="text-sm text-slate-400">Preventivo preliminare senza impegno</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="contact" className="lg:w-1/2 bg-[#1e293b]/60 p-8 md:p-12 lg:rounded-r-[2rem] rounded-b-[2rem] lg:rounded-bl-none border-t lg:border-t-0 lg:border-l border-white/5 relative z-10">

                                {/* 👇 THE REAL FORM STARTS HERE */}
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Nome Studio Amministrazione</label>
                                        <input
                                            name="studio-name"
                                            required
                                            className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Es. Studio Rossi srl" type="text"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-400 mb-2">Email Ufficio</label>
                                            <input
                                                name="email"
                                                required
                                                className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                                placeholder="info@studiorossi.it" type="email"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-400 mb-2">N° Condomini</label>
                                            <select
                                                name="condo-count"
                                                required
                                                defaultValue=""
                                                className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer"
                                            >
                                                <option value="" disabled>Seleziona...</option>
                                                <option value="1-10">1 - 10</option>
                                                <option value="11-50">11 - 50</option>
                                                <option value="50+">Oltre 50</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Problema Attuale (Opzionale)</label>
                                        <textarea
                                            name="message"
                                            className="w-full bg-[#050a14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Descrivi brevemente la situazione..." rows={3}
                                        ></textarea>
                                    </div>

                                    {/* STATUS ERROR */}
                                    {status === 'error' && (
                                        <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 flex items-center gap-3">
                                            <AlertCircle className="text-red-500 w-5 h-5" />
                                            <span className="text-red-200 text-sm font-medium">{errorMessage}</span>
                                        </div>
                                    )}

                                    <PrimaryButton
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full justify-center shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <> <Loader2 className="w-5 h-5 animate-spin mr-2" /> ELABORAZIONE... </>
                                        ) : status === 'success' ? (
                                            <> <CheckCircle className="w-5 h-5 mr-2" /> RICHIESTA INVIATA </>
                                        ) : (
                                            "RICHIEDI SUPPORTO TECNICO"
                                        )}
                                    </PrimaryButton>

                                    <p className="text-xs text-center text-slate-500 mt-4">
                                        I tuoi dati sono al sicuro. Risposta garantita entro 4 ore lavorative.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </GlassPanel>
                </div>
            </section>

        </div>
    );
}
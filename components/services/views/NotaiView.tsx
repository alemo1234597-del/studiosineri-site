"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    Ruler,
    Lock,
    ArrowRight,
    PlayCircle,
    FileText,
    ShieldCheck,
    FolderOpen,
    CheckCircle,
    FolderX,
    AlertTriangle,
    TimerOff,
    Zap,
    UserX,
    X,
    Check,
    Rocket,
    BadgeCheck,
    CheckCheck
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function NotaiView() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 0,
            title: "01. Pre-Istruttoria",
            desc: "Analisi documentale immediata entro 24h.",
            contentTitle: "DATA ROOM COMPLETA",
            contentText: "Creiamo immediatamente una Data Room strutturata con tutti i documenti digitalizzati e organizzati per un'istruttoria senza intoppi.",
            contentList: ["Scansione HD", "Indicizzazione", "Accesso Cloud"],
            icon: FolderOpen,
            tag: "ORGANIZED"
        },
        {
            id: 1,
            title: "02. Pre-Stipula",
            desc: "Verifica conformità e tutela delle parti.",
            contentTitle: "RELAZIONE TECNICA INTEGRATA (RTI)",
            contentText: "Una relazione tecnica esaustiva che garantisce la conformità urbanistica e catastale, eliminando rischi di nullità e responsabilità per il Notaio.",
            contentList: ["Verifica Ante '67", "Sanatoria Rapida", "Bollino di Conformità"],
            icon: ShieldCheck,
            tag: "VERIFIED"
        },
        {
            id: 2,
            title: "03. Post-Stipula",
            desc: "Chiusura pratica automatizzata.",
            contentTitle: "ADEMPIMENTI AUTOMATICI",
            contentText: "Gestione completa del post-stipula con aggiornamenti in tempo reale. Volture e invii telematici eseguiti automaticamente per chiudere il ciclo.",
            contentList: ["Voltura Catastale", "Invio Telematico", "Archiviazione"],
            icon: CheckCheck, // Was sync in html, CheckCheck seems appropriate for "Completed"
            tag: "COMPLETED"
        }
    ];

    const activeContent = steps.find(s => s.id === activeStep) || steps[0];

    return (
        <div className="min-h-screen bg-[#020412] text-slate-400 font-display selection:bg-primary/30 selection:text-white">
            {/* Header / Nav Placeholder (Assuming Layout handles it, but maybe needs visual tweak if consistent with html) */}

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase border border-primary/20 bg-primary/5 w-fit px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,90,54,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#FF5A36]"></span>
                            Sistema Operativo Notarile v2.4
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
                            L'ATTO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">INECCEPIBILE.</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff8c69] drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]">
                                SENZA RINVII.
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            Il partner tecnico definitivo per notai che non accettano compromessi. Precisione ingegneristica per rogiti blindati e conformità garantita.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <PrimaryButton>
                                RICHIEDI AUDIT
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </PrimaryButton>
                            <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                                <PlayCircle className="w-5 h-5" />
                                COME FUNZIONA
                            </button>
                        </div>
                    </div>

                    {/* Data Room Preview - Interactive GlassPanel */}
                    <div id="data-room" className="relative z-10 flex justify-center lg:justify-end">
                        <GlassPanel className="relative w-full max-w-[500px] aspect-[4/3] p-0 overflow-hidden shadow-[0_0_30px_rgba(255,90,54,0.15)] group">
                            {/* Browser Header */}
                            <div className="absolute top-0 w-full h-12 border-b border-white/10 flex items-center px-4 justify-between bg-black/20 z-20">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="font-mono text-[10px] text-slate-500">ID_PRATICA: 8492-X</div>
                            </div>

                            <div className="pt-16 px-6 pb-6 h-full flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-mono text-xs text-primary mb-1">ANALISI PRELIMINARE</div>
                                        <h3 className="text-2xl font-bold text-white">Immobile Via Roma 42</h3>
                                        <p className="text-sm text-slate-400">Torino, TO</p>
                                    </div>
                                    <div className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(255,90,54,0.4)]">
                                        <CheckCircle className="w-4 h-4" />
                                        STATUS: ROGITABILE
                                    </div>
                                </div>

                                {/* Graph Area */}
                                <div className="relative w-full h-32 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-white/5 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 opacity-20" style={{
                                        backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                        backgroundSize: "20px 20px"
                                    }}></div>
                                    <div className="flex gap-4 relative z-10">
                                        <div className="bg-white/10 backdrop-blur border border-white/10 p-2 rounded flex flex-col items-center w-20">
                                            <FileText className="text-slate-400 w-6 h-6" />
                                            <div className="w-12 h-1 bg-slate-600 rounded mt-2"></div>
                                            <div className="w-8 h-1 bg-slate-600 rounded mt-1"></div>
                                        </div>
                                        <div className="bg-primary/10 backdrop-blur border border-primary/30 p-2 rounded flex flex-col items-center w-20 scale-110 shadow-lg relative z-10">
                                            <BadgeCheck className="text-primary w-6 h-6" />
                                            <div className="w-12 h-1 bg-primary/40 rounded mt-2"></div>
                                            <div className="w-10 h-1 bg-primary/40 rounded mt-1"></div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur border border-white/10 p-2 rounded flex flex-col items-center w-20">
                                            <FolderOpen className="text-slate-400 w-6 h-6" />
                                            <div className="w-12 h-1 bg-slate-600 rounded mt-2"></div>
                                            <div className="w-8 h-1 bg-slate-600 rounded mt-1"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-mono">CATASTO</div>
                                        <div className="text-sm font-bold text-white">100% OK</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-mono">URBANISTICA</div>
                                        <div className="text-sm font-bold text-white">VERIFICATO</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 font-mono">APE</div>
                                        <div className="text-sm font-bold text-white">CLASSE A1</div>
                                    </div>
                                </div>
                            </div>

                            {/* Scanning Effect */}
                            <div className="absolute inset-x-0 h-1 bg-primary/50 blur-[2px] animate-[scan_3s_linear_infinite] z-20 shadow-[0_0_15px_rgba(255,90,54,0.6)] top-0"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent animate-[scan_3s_linear_infinite] z-10 opacity-30 pointer-events-none top-0"></div>
                        </GlassPanel>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section id="problems" className="py-20 px-6 lg:px-20 bg-[#020412]">
                <div className="max-w-[1280px] mx-auto">
                    <SectionHeading
                        subtitle=""
                        title="PERCHÉ GLI ATTI SALTANO"
                    />
                    <div className="h-1 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(255,90,54,0.4)] mb-12 -mt-8"></div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={FolderX}
                            title="Dossier Incompleto"
                            description="Documentazione frammentata che blocca l'istruttoria all'ultimo miglio, costringendo a rinvii imbarazzanti con i clienti."
                        />
                        <FeatureCard
                            icon={AlertTriangle}
                            title="Bomba Urbanistica"
                            description="Abusi edilizi non rilevati che emergono solo al momento della stipula, mettendo a rischio la validità dell'atto."
                        />
                        <FeatureCard
                            icon={TimerOff}
                            title="Tecnico Lento"
                            description="Tempi di risposta incompatibili con le scadenze dello studio notarile moderno."
                        />
                    </div>
                </div>
            </section>

            {/* Protocol Section (Interactive) */}
            <section id="protocol" className="py-24 px-6 lg:px-20 relative bg-[#0f172a]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">
                            IL PROTOCOLLO <span className="text-primary drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]">APEX</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Un flusso di lavoro strutturato per eliminare l'incertezza.</p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        {/* Steps Nav */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-4">
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={cn(
                                        "w-full text-left p-6 rounded-xl relative overflow-hidden group transition-all duration-300 border",
                                        activeStep === step.id
                                            ? "bg-gradient-to-r from-primary/10 to-transparent border-primary text-primary shadow-[0_0_15px_rgba(255,90,54,0.3)]"
                                            : "bg-transparent border-transparent text-slate-500 hover:text-white hover:bg-white/5 opacity-80 hover:opacity-100"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300",
                                        activeStep === step.id ? "bg-primary" : "bg-transparent group-hover:bg-slate-600"
                                    )}></div>
                                    <h4 className={cn(
                                        "text-lg font-bold mb-1 flex justify-between items-center",
                                        activeStep === step.id ? "text-primary drop-shadow-[0_0_5px_rgba(255,90,54,0.8)]" : "inherit"
                                    )}>
                                        {step.title}
                                        {activeStep === step.id && (
                                            <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                                        )}
                                    </h4>
                                    <p className={cn(
                                        "text-sm transition-colors",
                                        activeStep === step.id ? "text-slate-300" : "text-slate-600 group-hover:text-slate-500"
                                    )}>
                                        {step.desc}
                                    </p>
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="w-full lg:w-2/3">
                            <GlassPanel className="rounded-3xl p-8 lg:p-12 min-h-[450px] flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden h-full shadow-[0_0_30px_rgba(255,90,54,0.15)] border-white/10">
                                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                                    backgroundSize: "20px 20px"
                                }}></div>

                                <div className="flex flex-col lg:flex-row gap-8 items-center w-full z-10">
                                    <div className="flex-1">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary font-mono text-xs mb-6 border border-primary/20 shadow-[0_0_10px_rgba(255,90,54,0.3)]">
                                            <Zap className="w-4 h-4" />
                                            STATUS: {activeContent.tag}
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4">{activeContent.contentTitle}</h3>
                                        <p className="text-slate-300 leading-relaxed mb-6">
                                            {activeContent.contentText}
                                        </p>
                                        <ul className="space-y-3">
                                            {activeContent.contentList.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                                                    <CheckCircle className="w-5 h-5 text-primary drop-shadow-[0_0_5px_rgba(255,90,54,0.5)]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-64 aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-primary flex items-center justify-center relative shadow-2xl group shrink-0">
                                        <div className="absolute inset-0 bg-primary/5 blur-xl group-hover:bg-primary/10 transition-all"></div>

                                        {/* Icon Render */}
                                        <activeContent.icon className="w-24 h-24 text-primary animate-[float_6s_ease-in-out_infinite] drop-shadow-[0_0_20px_rgba(255,90,54,0.8)]" />

                                        <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping opacity-75 shadow-[0_0_5px_#FF5A36]"></div>

                                        <div className="absolute -bottom-4 bg-[#1e293b] border border-white/10 px-3 py-1 rounded text-xs text-white shadow-lg font-mono">
                                            SECURE_PROTOCOL_V2
                                        </div>
                                    </div>
                                </div>
                            </GlassPanel>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="max-w-[960px] mx-auto">
                    <GlassPanel className="rounded-3xl overflow-hidden border border-white/10 p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.02]">
                                <h3 className="text-xl font-bold text-slate-400 mb-8 flex items-center gap-2">
                                    <UserX className="w-6 h-6" />
                                    Geometra "Di Parte"
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4 opacity-50">
                                        <X className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-300">Conflitto d'interessi</strong>
                                            <span className="text-sm text-slate-500">Tende a minimizzare i problemi per chiudere la vendita.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 opacity-50">
                                        <X className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-300">Linguaggio Tecnico</strong>
                                            <span className="text-sm text-slate-500">Comunica in gergo incomprensibile per le parti.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 opacity-50">
                                        <X className="w-5 h-5 text-red-500 mt-0.5" />
                                        <div>
                                            <strong className="block text-slate-300">Reperibilità Casuale</strong>
                                            <span className="text-sm text-slate-500">Non risponde durante gli orari di stipula.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-8 md:p-12 bg-primary/[0.03] relative">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded shadow-[0_0_20px_rgba(255,90,54,0.4)]">RECOMMENDED</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    STUDIO APEX
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <strong className="block text-white">Terzietà Assoluta</strong>
                                            <span className="text-sm text-slate-400">Garanzia tecnica imparziale a tutela del Notaio.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <strong className="block text-white">Problem Solving</strong>
                                            <span className="text-sm text-slate-400">Soluzioni proattive prima che diventino ostacoli.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <strong className="block text-white">Reperibilità H24</strong>
                                            <span className="text-sm text-slate-400">Assistenza immediata durante l'atto.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </GlassPanel>
                </div>
            </section>

            {/* Form Section */}
            <section id="contact" className="py-32 px-6 lg:px-20 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent blur-[100px] pointer-events-none"></div>
                <div className="max-w-[800px] mx-auto relative z-10">
                    <GlassPanel className="p-10 lg:p-16 text-center border-t border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="inline-block mb-6 p-4 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(255,90,54,0.2)] animate-pulse">
                            <AlertTriangle className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                            TESTACI SU UNA <br />
                            <span className="text-white">PRATICA COMPLESSA</span>
                        </h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Hai una pratica ferma per dubbi urbanistici? Affidacela. Se non troviamo la soluzione in 48 ore, l'audit è gratuito.
                        </p>
                        <form className="flex flex-col gap-4 max-w-md mx-auto">
                            <div className="flex flex-col text-left gap-1">
                                <label className="text-xs font-mono text-slate-500 ml-1">NOME STUDIO NOTARILE</label>
                                <input
                                    className="w-full bg-[#020412]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all focus:shadow-[0_0_15px_rgba(255,90,54,0.3)]"
                                    placeholder="Es. Studio Rossi & Associati" type="text"
                                />
                            </div>
                            <div className="flex flex-col text-left gap-1">
                                <label className="text-xs font-mono text-slate-500 ml-1">DISTRETTO</label>
                                <select className="w-full bg-[#020412]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer focus:shadow-[0_0_15px_rgba(255,90,54,0.3)]">
                                    <option>Torino</option>
                                    <option>Milano</option>
                                    <option>Cuneo</option>
                                    <option>Alessandria</option>
                                </select>
                            </div>
                            <PrimaryButton className="mt-4 w-full text-lg justify-center shadow-[0_0_20px_rgba(255,90,54,0.4)] hover:shadow-[0_0_30px_rgba(255,90,54,0.6)]">
                                INIZIA LA SFIDA
                                <Rocket className="w-5 h-5" />
                            </PrimaryButton>
                        </form>
                        <p className="mt-6 text-xs text-slate-500 font-mono">
                            *Riservato esclusivamente a Notai iscritti all'albo.
                        </p>
                    </GlassPanel>
                </div>
            </section>
        </div>
    );
}

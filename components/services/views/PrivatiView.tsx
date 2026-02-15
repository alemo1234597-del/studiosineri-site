"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    Ruler,
    PlayCircle,
    Building,
    AlertTriangle,
    FolderX,
    Store,
    ShoppingBag,
    ArrowRight,
    XCircle,
    Lock,
    Gavel,
    Search,
    Zap,
    ShieldCheck,
    Timer,
    Shield,
    Check,
    X
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PrivatiView() {
    const [userType, setUserType] = useState<"seller" | "buyer">("seller");

    return (
        <div className="min-h-screen bg-[#0B0C15] text-slate-300 font-display selection:bg-primary/30 selection:text-white">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,66,19,0.15)_0%,rgba(11,12,21,0)_50%)]"></div>

                <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Turin Real Estate Intelligence</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-5xl text-white uppercase text-center">
                        La compravendita immobiliare a Torino è <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">un campo minato.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-medium">
                        IL NOTAIO NON VEDE GLI ABUSI. L'AGENZIA NON LI DICE. <span className="text-primary font-bold">TU LI PAGHI.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center">
                        <PrimaryButton className="shadow-[0_0_20px_-5px_rgba(236,66,19,0.5)] hover:shadow-[0_0_30px_-5px_rgba(236,66,19,0.6)]">
                            Proteggi il tuo Investimento
                        </PrimaryButton>
                        <button className="h-[3.5rem] px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
                            <PlayCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Guarda la Demo
                        </button>
                    </div>

                    {/* Floating UI Card */}
                    <div className="relative w-full max-w-3xl animate-[float_6s_ease-in-out_infinite]">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                        <GlassPanel className="relative bg-[#13141c] border border-white/10 p-6 md:p-8 shadow-2xl flex flex-col gap-6 text-left">
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
                                        <Building className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm">Via Roma 142, Torino</h3>
                                        <p className="text-xs text-gray-500">Audit ID: #TRN-8821</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider">
                                    <AlertTriangle className="w-4 h-4" />
                                    RISCHIO RILEVATO
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs font-medium text-gray-400">
                                            <span>Punteggio Conformità</span>
                                            <span className="text-red-500 font-bold">30/100</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-red-600 to-red-400 w-[30%] rounded-full relative overflow-hidden">
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-3 flex gap-3 items-start border border-white/5">
                                        <FolderX className="text-red-400 w-5 h-5 mt-0.5" />
                                        <div>
                                            <p className="text-sm text-white font-medium">Certificato Agibilità Mancante</p>
                                            <p className="text-xs text-gray-500 mt-1">Documento critico assente nel registro municipale. Impossibile rogitare senza sanatoria.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-1 bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 border border-white/5 flex flex-col justify-center items-center text-center gap-2">
                                    <div className="w-16 h-16 rounded-full border-4 border-l-primary border-t-primary border-r-white/10 border-b-white/10 rotate-45 flex items-center justify-center">
                                        <span className="text-xl font-bold text-white -rotate-45">3</span>
                                    </div>
                                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Criticità Gravi</p>
                                </div>
                            </div>
                        </GlassPanel>
                    </div>
                </div>
            </section>

            {/* User Type Selection */}
            <section id="path" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Scegli il Tuo Percorso</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Intelligence su misura per ogni lato della trattativa.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Seller Card */}
                    <div
                        onClick={() => setUserType('seller')}
                        className={cn(
                            "group relative bg-[#020617]/40 border rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md",
                            userType === 'seller' ? "border-primary/50 shadow-[0_0_30px_-10px_rgba(236,66,19,0.3)] bg-white/5" : "border-white/10 opacity-60 hover:opacity-100 hover:bg-white/10"
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,66,19,0.1)_0%,rgba(255,255,255,0)_50%)] transition-opacity duration-500", userType === 'seller' ? "opacity-100" : "opacity-0 group-hover:opacity-50")}></div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div>
                                <div className={cn("w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-colors", userType === 'seller' ? "bg-primary/20 text-primary border-primary/30" : "bg-white/5 border-white/10 text-white group-hover:bg-primary/10 group-hover:text-primary")}>
                                    <Store className="w-8 h-8" />
                                </div>
                                <h3 className={cn("text-2xl font-bold mb-2", userType === 'seller' ? "text-primary" : "text-white")}>SEI UN VENDITORE?</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Evita che la vendita salti il giorno del rogito. Scopri le difformità prima che lo faccia l'acquirente (o il perito della banca).
                                </p>
                            </div>
                            <div className={cn("flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all", userType === 'seller' ? "text-primary gap-4" : "text-gray-500 group-hover:text-primary group-hover:gap-4")}>
                                Analizza Proprietà <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Buyer Card */}
                    <div
                        onClick={() => setUserType('buyer')}
                        className={cn(
                            "group relative bg-[#020617]/40 border rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md",
                            userType === 'buyer' ? "border-primary/50 shadow-[0_0_30px_-10px_rgba(236,66,19,0.3)] bg-white/5" : "border-white/10 opacity-60 hover:opacity-100 hover:bg-white/10"
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,66,19,0.1)_0%,rgba(255,255,255,0)_50%)] transition-opacity duration-500", userType === 'buyer' ? "opacity-100" : "opacity-0 group-hover:opacity-50")}></div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div>
                                <div className={cn("w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-colors", userType === 'buyer' ? "bg-primary/20 text-primary border-primary/30" : "bg-white/5 border-white/10 text-white group-hover:bg-primary/10 group-hover:text-primary")}>
                                    <ShoppingBag className="w-8 h-8" />
                                </div>
                                <h3 className={cn("text-2xl font-bold mb-2", userType === 'buyer' ? "text-primary" : "text-white")}>SEI UN ACQUIRENTE?</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Non firmare nulla senza sapere cosa compri davvero. L'agente lavora per il venditore, noi lavoriamo solo per te.
                                </p>
                            </div>
                            <div className={cn("flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all", userType === 'buyer' ? "text-primary gap-4" : "text-gray-500 group-hover:text-primary group-hover:gap-4")}>
                                Verifica Acquisto <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Content Section */}
            <section id="risks" className="max-w-7xl mx-auto px-6 py-20 min-h-[600px]">
                <AnimatePresence mode="wait">
                    {userType === 'seller' ? (
                        <motion.div
                            key="seller-view"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-6xl mx-auto flex flex-col gap-16"
                        >
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wide mb-6">
                                    Analisi Criticità
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight uppercase">
                                    VENDERE AL BUIO È UN <br /><span className="text-red-500">SUICIDIO FINANZIARIO</span>
                                </h2>

                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 backdrop-blur-sm hover:bg-red-900/20 transition-colors">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-500">
                                            <XCircle className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-white text-lg font-bold mb-2">La Vendita Salta</h3>
                                        <p className="text-gray-400 text-sm">L'acquirente o il perito della banca scoprono l'abuso il giorno del rogito. Affare sfumato.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 backdrop-blur-sm hover:bg-red-900/20 transition-colors">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-500">
                                            <Lock className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-white text-lg font-bold mb-2">Sei Sotto Ricatto</h3>
                                        <p className="text-gray-400 text-sm">Il compratore usa le difformità per estorcere uno sconto del 20-30% all'ultimo minuto.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/20 backdrop-blur-sm hover:bg-red-900/20 transition-colors">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-500">
                                            <Gavel className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-white text-lg font-bold mb-2">Rischi Cause Legali</h3>
                                        <p className="text-gray-400 text-sm">Dichiarare il falso in atto pubblico comporta rischi penali e cause civili decennali.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0C15] border border-white/10 px-4 py-1 rounded-full text-xs text-gray-500 uppercase tracking-widest z-10">
                                    Il Metodo Apex
                                </div>
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <FeatureCard
                                        icon={Search}
                                        title="1. CSI Immobiliare"
                                        description="Scansione forense di ogni documento storico dell'immobile."
                                    />
                                    <FeatureCard
                                        icon={Zap}
                                        title="2. Sanatoria Lampo"
                                        description="Team dedicato per risolvere le difformità in tempi record."
                                    />
                                    <FeatureCard
                                        icon={ShieldCheck}
                                        title="3. Passaporto Casa"
                                        description="Il bollino di qualità che garantisce la vendibilità al 100%."
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="buyer-view"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-6xl mx-auto flex flex-col gap-16"
                        >
                            <div className="text-center max-w-4xl mx-auto">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                                    Intelligence Acquisti
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight uppercase">
                                    L'AGENZIA LAVORA PER IL VENDITORE. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">NOI PER TE.</span>
                                </h2>

                                <div className="grid md:grid-cols-3 gap-6 text-left">
                                    <div className="relative p-6 rounded-2xl bg-green-900/10 border border-green-500/30 overflow-hidden group">
                                        <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                                        <h3 className="text-white text-2xl font-black mb-1">AFFARE</h3>
                                        <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-4">Luce Verde</p>
                                        <p className="text-gray-400 text-sm relative z-10">Documentazione perfetta. Prezzo coerente. Procedi all'acquisto immediato.</p>
                                    </div>
                                    <div className="relative p-6 rounded-2xl bg-orange-900/10 border border-orange-500/30 overflow-hidden group">
                                        <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors"></div>
                                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]"></div>
                                        <h3 className="text-white text-2xl font-black mb-1">NEGOZIA</h3>
                                        <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">Luce Arancione</p>
                                        <p className="text-gray-400 text-sm relative z-10">Rilevate difformità sanabili. Usa il nostro report per abbassare il prezzo.</p>
                                    </div>
                                    <div className="relative p-6 rounded-2xl bg-red-900/10 border border-red-500/30 overflow-hidden group">
                                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse"></div>
                                        <h3 className="text-white text-2xl font-black mb-1">TRAPPOLA</h3>
                                        <p className="text-red-400 text-xs font-bold uppercase tracking-wider mb-4">Luce Rossa</p>
                                        <p className="text-gray-400 text-sm relative z-10">Abusi gravi o strutturali. Ritirati immediatamente dalla trattativa.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0C15] border border-white/10 px-4 py-1 rounded-full text-xs text-gray-500 uppercase tracking-widest z-10">
                                    Il Metodo Apex
                                </div>
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <FeatureCard
                                        icon={Search}
                                        title="01. Sopralluogo Killer"
                                        description="I nostri tecnici non guardano la vista, cercano le crepe e gli abusi."
                                    />
                                    <FeatureCard
                                        icon={ShieldCheck}
                                        title="02. Verifica Conformità"
                                        description="Confronto incrociato tra stato di fatto e planimetrie depositate."
                                    />
                                    <FeatureCard
                                        icon={Shield}
                                        title="03. Protezione Totale"
                                        description="Assistenza tecnica fino al rogito notarile."
                                    />
                                </div>

                                <GlassPanel className="mt-8 p-6 rounded-2xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                            <Timer className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">La Regola dei 7 Giorni</h4>
                                            <p className="text-gray-400 text-sm">Hai solo 7 giorni dalla proposta per verificare l'immobile. Non sprecarli con tecnici lenti.</p>
                                        </div>
                                    </div>
                                    <PrimaryButton className="text-sm py-3 px-6 h-auto whitespace-nowrap">
                                        Prenota Audit Rapido
                                    </PrimaryButton>
                                </GlassPanel>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="max-w-4xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IMPREVISTO vs COSTO REALE</h2>
                    <p className="text-gray-400">Perché un audit Apex si ripaga istantaneamente.</p>
                </div>
                <div className="bg-[#13141c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.02]">
                        <div className="p-6"></div>
                        <div className="p-6 text-center border-l border-white/10">
                            <h3 className="text-gray-400 font-medium text-sm uppercase tracking-wider">Senza Apex</h3>
                        </div>
                        <div className="p-6 text-center border-l border-white/10 bg-primary/5 relative">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                                <ShieldCheck className="text-primary w-4 h-4" /> PROTOCOLLO APEX
                            </h3>
                        </div>
                    </div>

                    {/* Base Row */}
                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Sicurezza Transazione</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-red-400 font-medium"><AlertTriangle className="mr-2 w-4 h-4" /> Ignota</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5"><ShieldCheck className="text-green-500 mr-2 w-4 h-4" /> 100% Verificata</div>
                    </div>

                    <AnimatePresence mode="wait">
                        {userType === 'seller' ? (
                            <React.Fragment key="table-seller">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contents">
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Doppia Caparra (Penale)</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€30k - €60k</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">€0 (Rischio Zero)</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Spese Legali (Causa Civile)</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€15,000+</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">Evitate</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Svalutazione Immobile</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">-20% Valore Mercato</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">Prezzo Massimizzato</div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment key="table-buyer">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contents">
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Demolizione Abusi</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€10k - €40k</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">A carico del Venditore</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Perdita Bonus Fiscali</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">100% Revocati</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">Garantiti</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Rifacimento Impianti</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">Non Previsto</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-primary/5">Budget Controllato</div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-3 hover:bg-white/[0.02] transition-colors">
                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Costo del Servizio</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400 italic">Costo Nascosto Alto</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-primary font-bold bg-primary/5 uppercase text-sm">Investimento Minimo</div>
                    </div>
                </div>
            </section>
            <div id="contact" className="py-20 text-center">
                <PrimaryButton>Contattaci per una Consulenza</PrimaryButton>
            </div>
        </div>
    );
}

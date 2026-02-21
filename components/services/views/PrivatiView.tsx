"use client";

import PrivatiForm from '@/components/forms/PrivatiForm'
import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
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
    CheckCircle,
    Terminal,
    FolderOpen,
    PlayCircle
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PrivatiView() {
    const [userType, setUserType] = useState<"seller" | "buyer">("seller");

    return (
        <div className="min-h-screen bg-[#0B0C15] text-slate-300 font-display selection:bg-[#ec4213]/30 selection:text-white overflow-x-hidden">

            {/* INJECTED CUSTOM CSS FOR 3D CARDS & FOLDERS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .floating-asset { animation: float-slow 8s ease-in-out infinite; }
                @keyframes float-slow {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(0.5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .folder-tab {
                    clip-path: polygon(15% 0, 85% 0, 100% 100%, 0% 100%);
                }
                .dossier-stack { position: relative; width: 100%; min-height: 480px; display: flex; justify-content: center; align-items: center; perspective: 1500px; }
                .dossier-stack-card { position: absolute; width: 320px; background-color: rgba(255, 255, 255, 0.05); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1.5rem; padding: 1.5rem; transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); transform-origin: center bottom; box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5); display: flex; flex-direction: column; justify-content: flex-start; overflow: hidden; }
                .dossier-stack-card:nth-child(1) { transform: translateX(-40px) rotate(-10deg) translateY(0); z-index: 1; }
                .dossier-stack-card:nth-child(2) { transform: translateX(0px) rotate(0deg) translateY(-20px); z-index: 2; }
                .dossier-stack-card:nth-child(3) { transform: translateX(40px) rotate(10deg) translateY(0); z-index: 3; }
                .dossier-stack:hover .dossier-stack-card:nth-child(1) { transform: translateX(-340px) rotate(0deg) translateY(0); z-index: 10; margin-right: 10px; }
                .dossier-stack:hover .dossier-stack-card:nth-child(2) { transform: translateX(0) rotate(0deg) translateY(0); z-index: 10; margin: 0 10px; }
                .dossier-stack:hover .dossier-stack-card:nth-child(3) { transform: translateX(340px) rotate(0deg) translateY(0); z-index: 10; margin-left: 10px; }
                .dossier-content-hidden { opacity: 0; transform: translateY(10px); transition: all 0.4s ease 0.1s; height: 0; }
                .dossier-stack:hover .dossier-content-hidden { opacity: 1; transform: translateY(0); height: auto; margin-top: 1rem; }
                .dossier-stack-card:hover { border-color: rgba(236, 66, 19, 0.5); box-shadow: 0 0 30px rgba(236, 66, 19, 0.2); }
                @media (max-width: 1024px) {
                    .dossier-stack { flex-direction: column; height: auto; gap: 20px; perspective: none; padding-top: 2rem; min-height: auto; }
                    .dossier-stack-card { position: relative; transform: none !important; width: 100%; max-width: 400px; margin: 0 !important; }
                    .dossier-content-hidden { opacity: 1; transform: none; height: auto; margin-top: 1rem; }
                }
            `}} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden text-center">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,66,19,0.15)_0%,rgba(11,12,21,0)_50%)]"></div>

                <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-[#ec4213] animate-pulse"></span>
                        <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Turin Real Estate Intelligence</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-5xl text-white uppercase text-center">
                        La compravendita immobiliare a Torino è <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">un campo minato.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed font-medium">
                        IL NOTAIO NON VEDE GLI ABUSI. L'AGENZIA NON LI DICE. <span className="text-[#ec4213] font-bold">TU LI PAGHI.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20 justify-center">
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 rounded-full bg-[#ec4213] hover:bg-[#ff5a36] text-white font-bold text-lg shadow-[0_0_20px_-5px_rgba(236,66,19,0.5)] hover:shadow-[0_0_30px_-5px_rgba(236,66,19,0.6)] transition-all transform hover:-translate-y-1">
                            Proteggi il tuo Investimento
                        </button>
                        <button className="h-[3.5rem] px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
                            <PlayCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            Guarda la Demo
                        </button>
                    </div>

                    {/* Floating UI Card */}
                    <div className="relative w-full max-w-3xl animate-[float_6s_ease-in-out_infinite]">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ec4213] to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
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
                                    <div className="w-16 h-16 rounded-full border-4 border-l-[#ec4213] border-t-[#ec4213] border-r-white/10 border-b-white/10 rotate-45 flex items-center justify-center">
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
                            "group relative border rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md",
                            userType === 'seller' ? "border-[#ec4213]/50 shadow-[0_0_30px_-10px_rgba(236,66,19,0.3)] bg-white/5" : "bg-[#020617]/40 border-white/10 opacity-60 hover:opacity-100 hover:bg-white/10"
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,66,19,0.1)_0%,rgba(255,255,255,0)_50%)] transition-opacity duration-500", userType === 'seller' ? "opacity-100" : "opacity-0 group-hover:opacity-50")}></div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div>
                                <div className={cn("w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-colors", userType === 'seller' ? "bg-[#ec4213]/20 text-[#ec4213] border-[#ec4213]/30" : "bg-white/5 border-white/10 text-white group-hover:bg-[#ec4213]/10 group-hover:text-[#ec4213]")}>
                                    <Store className="w-8 h-8" />
                                </div>
                                <h3 className={cn("text-2xl font-bold mb-2", userType === 'seller' ? "text-[#ec4213]" : "text-white")}>SEI UN VENDITORE?</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Evita che la vendita salti il giorno del rogito. Scopri le difformità prima che lo faccia l'acquirente (o il perito della banca).
                                </p>
                            </div>
                            <div className={cn("flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all", userType === 'seller' ? "text-[#ec4213] gap-4" : "text-gray-500 group-hover:text-[#ec4213] group-hover:gap-4")}>
                                Analizza Proprietà <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Buyer Card */}
                    <div
                        onClick={() => setUserType('buyer')}
                        className={cn(
                            "group relative border rounded-3xl p-8 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md",
                            userType === 'buyer' ? "border-[#ec4213]/50 shadow-[0_0_30px_-10px_rgba(236,66,19,0.3)] bg-white/5" : "bg-[#020617]/40 border-white/10 opacity-60 hover:opacity-100 hover:bg-white/10"
                        )}
                    >
                        <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(236,66,19,0.1)_0%,rgba(255,255,255,0)_50%)] transition-opacity duration-500", userType === 'buyer' ? "opacity-100" : "opacity-0 group-hover:opacity-50")}></div>
                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div>
                                <div className={cn("w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-colors", userType === 'buyer' ? "bg-[#ec4213]/20 text-[#ec4213] border-[#ec4213]/30" : "bg-white/5 border-white/10 text-white group-hover:bg-[#ec4213]/10 group-hover:text-[#ec4213]")}>
                                    <ShoppingBag className="w-8 h-8" />
                                </div>
                                <h3 className={cn("text-2xl font-bold mb-2", userType === 'buyer' ? "text-[#ec4213]" : "text-white")}>SEI UN ACQUIRENTE?</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Non firmare nulla senza sapere cosa compri davvero. L'agente lavora per il venditore, noi lavoriamo solo per te.
                                </p>
                            </div>
                            <div className={cn("flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-all", userType === 'buyer' ? "text-[#ec4213] gap-4" : "text-gray-500 group-hover:text-[#ec4213] group-hover:gap-4")}>
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

                            {/* NEW SELLER SECTIONS (Archivio Riservato & Metodo Apex) */}
                            <div className="py-12 border-t border-b border-white/5 bg-[#0B0C15] -mx-6 px-6 lg:-mx-20 lg:px-20">
                                <div className="flex flex-col items-center mb-16 text-center">
                                    <div className="flex items-center gap-2 mb-2 text-[#ec4213] font-mono text-xs tracking-[0.2em] uppercase">
                                        <Terminal className="w-4 h-4 animate-pulse" />
                                        Archivio Riservato
                                    </div>
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">Casi Chiusi <span className="text-gray-600">/</span> Mission Logs Torino</h3>
                                </div>

                                <div className="dossier-stack">
                                    {/* Caso 1 */}
                                    <div className="dossier-stack-card group">
                                        <div className="w-full flex flex-col items-center mb-6">
                                            <div className="w-32 h-32 rounded-lg mb-4 group-hover:scale-105 transition-transform overflow-hidden relative border border-white/20">
                                                <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors"></div>
                                                <img src="https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2077&auto=format&fit=crop" alt="Classic Apartment Turin" className="w-full h-full object-cover opacity-90" />
                                                <div className="absolute inset-0 bg-black/40 z-20"></div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-1">CASO 1</h4>
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Closed</p>
                                        </div>
                                        <div className="dossier-content-hidden w-full font-mono text-sm space-y-4">
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Obiettivo</span>
                                                <span className="text-white font-bold">Trilocale Santa Rita</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Minaccia</span>
                                                <span className="text-red-400 font-bold bg-red-950/30 px-2 py-0.5 rounded inline-block">Veranda abusiva</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Intervento</span>
                                                <span className="text-gray-300">CILA in Sanatoria</span>
                                            </div>
                                            <div className="pt-3 border-t border-dashed border-white/10">
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Risultato</span>
                                                <span className="text-[#ec4213] font-bold flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Rogito prezzo pieno
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto w-full pt-4 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-mono text-[#ec4213]">ID: 884-AX</span>
                                        </div>
                                    </div>

                                    {/* Caso 2 */}
                                    <div className="dossier-stack-card group">
                                        <div className="w-full flex flex-col items-center mb-6">
                                            <div className="w-32 h-32 rounded-lg mb-4 group-hover:scale-105 transition-transform overflow-hidden relative border border-white/20">
                                                <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors"></div>
                                                <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop" alt="Penthouse Interior" className="w-full h-full object-cover opacity-90" />
                                                <div className="absolute inset-0 bg-black/40 z-20"></div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-1">CASO 2</h4>
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Closed</p>
                                        </div>
                                        <div className="dossier-content-hidden w-full font-mono text-sm space-y-4">
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Obiettivo</span>
                                                <span className="text-white font-bold">Attico Crocetta</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Minaccia</span>
                                                <span className="text-red-400 font-bold bg-red-950/30 px-2 py-0.5 rounded inline-block">Planimetria non conforme</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Intervento</span>
                                                <span className="text-gray-300">Docfa per esatta rappresentazione</span>
                                            </div>
                                            <div className="pt-3 border-t border-dashed border-white/10">
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Risultato</span>
                                                <span className="text-[#ec4213] font-bold flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Mutuo approvato
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto w-full pt-4 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-mono text-[#ec4213]">ID: 102-BZ</span>
                                        </div>
                                    </div>

                                    {/* Caso 3 */}
                                    <div className="dossier-stack-card group">
                                        <div className="w-full flex flex-col items-center mb-6">
                                            <div className="w-32 h-32 rounded-lg mb-4 group-hover:scale-105 transition-transform overflow-hidden relative border border-white/20">
                                                <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors"></div>
                                                <img src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=2574&auto=format&fit=crop" alt="Renovated Loft" className="w-full h-full object-cover opacity-90" />
                                                <div className="absolute inset-0 bg-black/40 z-20"></div>
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-1">CASO 3</h4>
                                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Closed</p>
                                        </div>
                                        <div className="dossier-content-hidden w-full font-mono text-sm space-y-4">
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Obiettivo</span>
                                                <span className="text-white font-bold">Loft Cit Turin</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Minaccia</span>
                                                <span className="text-red-400 font-bold bg-red-950/30 px-2 py-0.5 rounded inline-block">Cambio d'uso non registrato</span>
                                            </div>
                                            <div>
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Intervento</span>
                                                <span className="text-gray-300">Pratica oneri in sanatoria</span>
                                            </div>
                                            <div className="pt-3 border-t border-dashed border-white/10">
                                                <span className="block text-[10px] text-gray-500 uppercase tracking-wider mb-1">Risultato</span>
                                                <span className="text-[#ec4213] font-bold flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Nessuna penale al rogito
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-auto w-full pt-4 text-center opacity-40 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] font-mono text-[#ec4213]">ID: 412-RX</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative pt-10">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B0C15] border border-white/10 px-4 py-1 rounded-full text-xs text-gray-500 uppercase tracking-widest z-10">
                                    Il Metodo Apex
                                </div>
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="p-6 rounded-2xl bg-[#13141c] border border-[#ec4213]/40 hover:border-[#ec4213] transition-colors group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                            <Search className="w-10 h-10 text-[#ec4213]" />
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-2">1. CSI Immobiliare</h3>
                                        <p className="text-gray-400 text-sm">Scansione forense di ogni documento storico dell'immobile.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-[#13141c] border border-[#ec4213]/40 hover:border-[#ec4213] transition-colors group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                            <Zap className="w-10 h-10 text-[#ec4213]" />
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-2">2. Sanatoria Lampo</h3>
                                        <p className="text-gray-400 text-sm">Team dedicato per risolvere le difformità in tempi record.</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-[#13141c] border border-[#ec4213]/40 hover:border-[#ec4213] transition-colors group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                            <ShieldCheck className="w-10 h-10 text-[#ec4213]" />
                                        </div>
                                        <h3 className="text-white text-xl font-bold mb-2">3. Passaporto Casa</h3>
                                        <p className="text-gray-400 text-sm">Il bollino di qualità che garantisce la vendibilità al 100%.</p>
                                    </div>
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

                                <GlassPanel className="mt-8 p-6 rounded-2xl border-2 border-dashed border-[#ec4213]/50 bg-[#ec4213]/5 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#ec4213]/20 flex items-center justify-center text-[#ec4213] shrink-0">
                                            <Timer className="w-7 h-7" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">La Regola dei 7 Giorni</h4>
                                            <p className="text-gray-400 text-sm">Hai solo 7 giorni dalla proposta per verificare l'immobile. Non sprecarli con tecnici lenti.</p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-[#ec4213] hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg shadow-[#ec4213]/20 transition-all text-sm whitespace-nowrap">
                                        Prenota Audit Rapido
                                    </button>
                                </GlassPanel>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* LA TUA ASSICURAZIONE BLINDATA (REBUILT WITH ALL 4 FOLDERS) */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="relative bg-[#0B0C15] rounded-3xl border border-white/10 overflow-hidden shadow-2xl p-8 md:p-12 lg:p-20">
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] h-[120%] bg-[#ec4213]/10 blur-[120px] rounded-full pointer-events-none"></div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

                        {/* Text Content */}
                        <div className="flex flex-col gap-8 order-2 lg:order-1">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                                    <ShieldCheck className="text-[#ec4213] w-4 h-4" />
                                    <span className="text-xs font-bold text-gray-300 tracking-wide uppercase">Garanzia Totale</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-6">
                                    LA TUA <br /> ASSICURAZIONE BLINDATA
                                </h2>
                                <div className="w-20 h-1 bg-[#ec4213] mb-8"></div>
                                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                                    Non è solo carta. È la tua Assicurazione Blindata. Il nostro Report Tecnico blocca ogni contestazione futura del notaio o dell'acquirente.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#ec4213]/30 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#ec4213]/20 flex items-center justify-center shrink-0 text-[#ec4213]">
                                        <Gavel className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Valore Legale</h4>
                                        <p className="text-sm text-gray-500">Documento opponibile a terzi in sede di contenzioso.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#ec4213]/30 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#ec4213]/20 flex items-center justify-center shrink-0 text-[#ec4213]">
                                        <Lock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Scudo anti-rivalsa</h4>
                                        <p className="text-sm text-gray-500">Protegge da richieste danni post-vendita.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CSS FOLDER ARTWORK (NOW WITH ALL 4 TABS) */}
                        <div className="order-1 lg:order-2 flex justify-center items-center perspective-1000 py-10">
                            <div className="relative w-full max-w-sm aspect-[4/5] floating-asset mx-auto">

                                {/* Base Shadow/Glow underneath everything */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#ec4213]/20 blur-[60px] rounded-full pointer-events-none"></div>

                                {/* 👇 LAYER 0: Verifica Agibilità */}
                                <div className="absolute bottom-[28px] left-0 w-full h-[88%] bg-[#2a303c] rounded-t-xl shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.6)] transform scale-[0.88] z-0 border-t border-white/10">
                                    <div className="absolute -top-7 left-4 w-[28%] h-8 bg-[#2a303c] folder-tab flex items-end justify-center pb-1 border-t border-white/10">
                                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Agibilità</span>
                                    </div>
                                </div>

                                {/* 👇 LAYER 1: Stato di Fatto */}
                                <div className="absolute bottom-[21px] left-0 w-full h-[88%] bg-[#3b4352] rounded-t-xl shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.5)] transform scale-[0.91] z-10 border-t border-white/20">
                                    <div className="absolute -top-7 left-[26%] w-[28%] h-8 bg-[#3b4352] folder-tab flex items-end justify-center pb-1 border-t border-white/20">
                                        <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Stato di Fatto</span>
                                    </div>
                                </div>

                                {/* 👇 LAYER 2: Ricerca Storica (THE MISSING LAYER RESTORED!) */}
                                <div className="absolute bottom-[14px] left-0 w-full h-[88%] bg-[#4b5563] rounded-t-xl shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.4)] transform scale-[0.94] z-20 border-t border-white/30">
                                    <div className="absolute -top-7 left-[48%] w-[28%] h-8 bg-[#4b5563] folder-tab flex items-end justify-center pb-1 border-t border-white/30">
                                        <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">Ricerca Storica</span>
                                    </div>
                                </div>

                                {/* 👇 LAYER 3: Dati Generali (Moved up to z-30) */}
                                <div className="absolute bottom-[7px] left-0 w-full h-[88%] bg-[#64748b] rounded-t-xl shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.4)] transform scale-[0.97] z-30 border-t border-white/40">
                                    <div className="absolute -top-7 right-4 w-[28%] h-8 bg-[#64748b] folder-tab flex items-end justify-center pb-1 border-t border-white/40">
                                        <span className="text-[8px] font-bold text-slate-200 uppercase tracking-widest">Dati Generali</span>
                                    </div>
                                </div>

                                {/* Front Folder: APE & Content (THE EXACT GRADIENT FROM PHOTO) */}
                                <div className="absolute bottom-0 left-0 w-full h-[88%] bg-gradient-to-r from-[#d1d9e2] via-[#e2e8f0] to-[#ffcba4] rounded-t-xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] transform scale-100 z-40 flex flex-col items-center justify-start text-center p-6 border-t border-white shadow-[inset_0_1px_4px_rgba(255,255,255,1)] overflow-hidden">

                                    {/* The intense internal orange glow on the right side */}
                                    <div className="absolute top-1/2 right-[-20%] -translate-y-1/2 w-[250px] h-[300px] bg-[#ec4213] opacity-60 blur-[60px] rounded-full pointer-events-none mix-blend-overlay"></div>
                                    <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[150px] h-[200px] bg-white opacity-40 blur-[40px] rounded-full pointer-events-none mix-blend-overlay"></div>

                                    {/* Tab for front folder */}
                                    <div className="absolute -top-7 right-[30%] w-[25%] h-8 bg-gradient-to-r from-[#e2e8f0] to-[#f0e6dd] folder-tab flex items-end justify-center pb-1 z-[-1] border-t border-white shadow-[inset_0_1px_4px_rgba(255,255,255,1)]">
                                        <span className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">APE</span>
                                    </div>

                                    {/* Inner Frosted Card */}
                                    <div className="w-full h-full relative mt-2 z-10">
                                        {/* Background Folder Icon Watermark */}
                                        <div className="absolute top-0 right-0 p-2 opacity-10">
                                            <FolderOpen className="w-24 h-24 text-slate-900" />
                                        </div>

                                        <div className="flex flex-col items-center justify-center h-full gap-6 border-[2px] border-solid border-white/60 rounded-xl p-5 relative bg-white/30 backdrop-blur-md shadow-[inset_0_0_20px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.1)]">

                                            {/* Shield Badge */}
                                            <div className="w-16 h-16 rounded-full bg-[#1e293b] border-4 border-white shadow-xl flex items-center justify-center text-white relative group cursor-pointer hover:scale-105 transition-transform duration-300">
                                                <ShieldCheck className="w-8 h-8 text-white" />
                                                <div className="absolute -bottom-2 bg-[#ec4213] text-[9px] font-bold px-2 py-0.5 rounded text-white shadow-md uppercase tracking-wider">Approved</div>
                                            </div>

                                            <div className="space-y-2 relative z-10 w-full">
                                                <div className="flex items-center justify-center gap-2 text-slate-600 mb-1">
                                                    <div className="h-px w-6 bg-slate-400"></div>
                                                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-slate-600">Studio Sineri</p>
                                                    <div className="h-px w-6 bg-slate-400"></div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h3 className="text-slate-900 font-sans font-black text-2xl tracking-tight leading-none mb-1">PASSAPORTO</h3>
                                                    <h3 className="text-slate-900 font-sans font-black text-2xl tracking-tight leading-none">CASA</h3>
                                                </div>
                                            </div>

                                            <div className="w-full mt-auto pt-4 border-t border-slate-400/30 grid grid-cols-2 gap-2">
                                                <div className="text-left bg-white/70 p-2 rounded border border-white shadow-sm backdrop-blur-sm">
                                                    <p className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-1">Document Ref</p>
                                                    <p className="text-[10px] text-slate-800 font-mono font-bold">TRN-2023-X99</p>
                                                </div>
                                                <div className="text-right bg-white/70 p-2 rounded border border-white shadow-sm backdrop-blur-sm flex flex-col justify-between items-end">
                                                    <p className="text-[8px] text-slate-500 uppercase font-bold tracking-wider mb-1">Status</p>
                                                    <div className="flex items-center gap-1.5 justify-end">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ec4213] animate-pulse"></div>
                                                        <p className="text-[9px] text-[#ec4213] font-bold uppercase tracking-wide">Verified</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section id="comparison" className="max-w-4xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IMPREVISTO vs COSTO REALE</h2>
                    <p className="text-gray-400">Perché un audit Apex si ripaga istantaneamente.</p>
                </div>
                <div className="bg-[#13141c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.02]">
                        <div className="p-6"></div>
                        <div className="p-6 text-center border-l border-white/10">
                            <h3 className="text-gray-400 font-medium text-sm uppercase tracking-wider">Senza Apex</h3>
                        </div>
                        <div className="p-6 text-center border-l border-white/10 bg-[#ec4213]/5 relative">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-[#ec4213]"></div>
                            <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                                <ShieldCheck className="text-[#ec4213] w-4 h-4" /> PROTOCOLLO APEX
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Sicurezza Transazione</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-red-400 font-medium"><AlertTriangle className="mr-2 w-4 h-4" /> Ignota</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5"><ShieldCheck className="text-green-500 mr-2 w-4 h-4" /> 100% Verificata</div>
                    </div>

                    <AnimatePresence mode="wait">
                        {userType === 'seller' ? (
                            <React.Fragment key="table-seller">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contents">
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Doppia Caparra (Penale)</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€30k - €60k</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">€0 (Rischio Zero)</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Spese Legali (Causa Civile)</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€15,000+</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">Evitate</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Svalutazione Immobile</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">-20% Valore Mercato</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">Prezzo Massimizzato</div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment key="table-buyer">
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="contents">
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Demolizione Abusi</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">€10k - €40k</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">A carico del Venditore</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Perdita Bonus Fiscali</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">100% Revocati</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">Garantiti</div>
                                    </div>
                                    <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Rifacimento Impianti</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400">Non Previsto</div>
                                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-white font-bold bg-[#ec4213]/5">Budget Controllato</div>
                                    </div>
                                </motion.div>
                            </React.Fragment>
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-3 hover:bg-white/[0.02] transition-colors">
                        <div className="p-6 flex items-center text-gray-300 font-medium text-sm md:text-base">Costo del Servizio</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-gray-400 italic">Costo Nascosto Alto</div>
                        <div className="p-6 flex items-center justify-center border-l border-white/5 text-center text-[#ec4213] font-bold bg-[#ec4213]/5 uppercase text-sm">Investimento Minimo</div>
                    </div>
                </div>
            </section>

            {/* Testimonials (Scelto dall'Elite) */}
            <section className="max-w-7xl mx-auto px-6 py-20 pb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Scelto dall'Élite di Torino</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#13141c]/60 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop')" }}></div>
                            <div>
                                <p className="text-white text-sm font-bold">Marco Rossi</p>
                                <p className="text-xs text-gray-500">Investitore Immobiliare</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "Mi hanno salvato dall'acquisto di un loft con gravi abusi strutturali. Il report a semaforo è stato tutto ciò che mi serviva per ritirarmi e risparmiare 400k€."
                        </p>
                    </div>
                    <div className="bg-[#13141c]/60 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop')" }}></div>
                            <div>
                                <p className="text-white text-sm font-bold">Elena Bianchi</p>
                                <p className="text-xs text-gray-500">Broker di Lusso</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "I miei clienti esigono velocità e certezza. Apex consegna il controllo documenti in 48 ore. È diventato il mio standard per ogni incarico."
                        </p>
                    </div>
                    <div className="bg-[#13141c]/60 p-6 rounded-2xl border border-white/10 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop')" }}></div>
                            <div>
                                <p className="text-white text-sm font-bold">Giovanni Moretti</p>
                                <p className="text-xs text-gray-500">Architetto</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "La precisione tecnica dei loro report non ha eguali. Individuano discrepanze che persino i tecnici comunali inizialmente non vedono."
                        </p>
                    </div>
                </div>
            </section>

            {/* EXISTING FORM SECTION CONNECTED TO DB */}
            <div id="contact" className="py-20 border-t border-white/5 bg-[#05060a]">
                <div className="flex flex-col items-center justify-center text-center mb-8 max-w-2xl mx-auto px-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">NON GIOCARE D'AZZARDO CON I TUOI SOLDI.</h3>
                    <p className="text-gray-500 mb-6">Compila il modulo sottostante per avviare il protocollo.</p>
                </div>
                <PrivatiForm />
            </div>

        </div>
    );
}
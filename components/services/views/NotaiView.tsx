"use client";

import { useState } from "react";
import { submitNotai } from '@/app/actions/submit-notai'
import {
    Landmark, Lock, ArrowRight, PlayCircle, FileText, ShieldCheck,
    FolderOpen, FolderX, AlertTriangle, History, Zap, UserX, X,
    Check, Rocket, Loader2, CheckCircle, AlertCircle, RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NotaiView() {
    // 👇 FORM STATE
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    // 👇 PROTOCOL SECTION STATE
    const [activeStep, setActiveStep] = useState(0);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        setStatus('loading')
        setErrorMessage('')

        try {
            const formData = new FormData(form)
            const result = await submitNotai(formData)

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
            icon: RefreshCw,
            tag: "COMPLETED"
        }
    ];

    const activeContent = steps.find(s => s.id === activeStep) || steps[0];

    return (
        <div className="min-h-screen bg-[#020412] text-slate-400 font-display selection:bg-[#FF5A36] selection:text-white overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(255,90,54,0.15)_0%,rgba(2,4,18,0)_60%)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF5A36]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8 z-10">
                        <div className="flex items-center gap-2 text-[#FF5A36] font-mono text-xs tracking-wider uppercase border border-[#FF5A36]/20 bg-[#FF5A36]/5 w-fit px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,90,54,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] animate-pulse shadow-[0_0_8px_#FF5A36]"></span>
                            Sistema Operativo Notarile v2.4
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
                            L'ATTO <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">INECCEPIBILE.</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A36] to-[#ff8c69] drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]">SENZA RINVII.</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            Il partner tecnico definitivo per notai che non accettano compromessi. Precisione ingegneristica per rogiti blindati e conformità garantita.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden rounded-xl bg-[#FF5A36] px-8 py-4 font-bold text-white shadow-[0_0_20px_rgba(255,90,54,0.4)] hover:shadow-[0_0_30px_rgba(255,90,54,0.6)] transition-all">
                                <span className="relative z-10 flex items-center gap-2">
                                    RICHIEDI AUDIT
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                                <PlayCircle className="w-5 h-5" />
                                COME FUNZIONA
                            </button>
                        </div>
                    </div>

                    {/* 3D CARD */}
                    <div className="relative z-10 flex justify-center lg:justify-end animate-[float_6s_ease-in-out_infinite]">
                        <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(255,90,54,0.15)]">
                            <div className="absolute top-0 w-full h-12 border-b border-white/10 flex items-center px-4 justify-between bg-black/20">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="font-mono text-[10px] text-slate-500">ID_PRATICA: 8492-X</div>
                            </div>
                            <div className="pt-16 px-6 pb-6 h-full flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="font-mono text-xs text-[#FF5A36] mb-1">ANALISI PRELIMINARE</div>
                                        <h3 className="text-2xl font-bold text-white">Immobile Via Roma 42</h3>
                                        <p className="text-sm text-slate-400">Torino, TO</p>
                                    </div>
                                    <div className="bg-[#FF5A36]/20 text-[#FF5A36] border border-[#FF5A36]/30 px-3 py-1 rounded text-xs font-bold flex items-center gap-1 shadow-[0_0_15px_rgba(255,90,54,0.4)]">
                                        <CheckCircle className="w-4 h-4" />
                                        STATUS: ROGITABILE
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                    <div><div className="text-[10px] text-slate-500 font-mono">CATASTO</div><div className="text-sm font-bold text-white">100% OK</div></div>
                                    <div><div className="text-[10px] text-slate-500 font-mono">URBANISTICA</div><div className="text-sm font-bold text-white">VERIFICATO</div></div>
                                    <div><div className="text-[10px] text-slate-500 font-mono">APE</div><div className="text-sm font-bold text-white">CLASSE A1</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEM SECTION */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-white">PERCHÉ GLI ATTI SALTANO</h2>
                        <div className="h-1 w-20 bg-[#FF5A36] rounded-full shadow-[0_0_10px_rgba(255,90,54,0.4)]"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <FeatureCard icon={FolderX} title="Dossier Incompleto" desc="Documentazione frammentata che blocca l'istruttoria all'ultimo miglio." />
                        <FeatureCard icon={AlertTriangle} title="Bomba Urbanistica" desc="Abusi edilizi non rilevati che emergono solo al momento della stipula." />
                        <FeatureCard icon={History} title="Tecnico Lento" desc="Tempi di risposta incompatibili con le scadenze dello studio notarile." />
                    </div>
                </div>
            </section>

            {/* PROTOCOL SECTION */}
            <section className="py-24 px-6 lg:px-20 bg-[#0f172a]">
                <div className="max-w-[1280px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-white">IL PROTOCOLLO <span className="text-[#FF5A36] drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]">APEX</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Un flusso di lavoro strutturato per eliminare l'incertezza.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-12 items-stretch">
                        <div className="w-full lg:w-1/3 flex flex-col gap-4">
                            {steps.map((step) => (
                                <button key={step.id} onClick={() => setActiveStep(step.id)}
                                    className={`w-full text-left p-6 rounded-xl relative overflow-hidden group transition-all duration-300 border ${activeStep === step.id ? "bg-gradient-to-r from-[#FF5A36]/10 to-transparent border-[#FF5A36] text-[#FF5A36]" : "bg-transparent border-transparent text-slate-500 hover:bg-white/5"
                                        }`}
                                >
                                    <h4 className="text-lg font-bold mb-1 flex justify-between items-center">
                                        {step.title}
                                        {activeStep === step.id && <ArrowRight className="w-5 h-5 animate-pulse" />}
                                    </h4>
                                    <p className={`text-sm ${activeStep === step.id ? "text-slate-300" : "text-slate-600"}`}>{step.desc}</p>
                                </button>
                            ))}
                        </div>
                        <div className="w-full lg:w-2/3">
                            <div className="bg-[#1e293b]/40 backdrop-blur-xl rounded-3xl p-8 lg:p-12 min-h-[450px] flex flex-col lg:flex-row gap-8 items-center border border-white/10 shadow-[0_0_30px_rgba(255,90,54,0.15)]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col lg:flex-row gap-8 items-center w-full"
                                    >
                                        <div className="flex-1">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF5A36]/10 text-[#FF5A36] font-mono text-xs mb-6 border border-[#FF5A36]/20">
                                                <Zap className="w-4 h-4" /> STATUS: {activeContent.tag}
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4">{activeContent.contentTitle}</h3>
                                            <p className="text-slate-300 leading-relaxed mb-6">{activeContent.contentText}</p>
                                            <ul className="space-y-3">
                                                {activeContent.contentList.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-400">
                                                        <CheckCircle className="w-5 h-5 text-[#FF5A36]" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="w-full lg:w-64 aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-[#FF5A36] flex items-center justify-center shadow-2xl relative">
                                            <div className="absolute inset-0 bg-[#FF5A36]/5 blur-xl"></div>
                                            <activeContent.icon className="w-24 h-24 text-[#FF5A36] drop-shadow-[0_0_20px_rgba(255,90,54,0.8)]" />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPARISON SECTION */}
            <section className="py-20 px-6 lg:px-20 bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="max-w-[960px] mx-auto">
                    <div className="bg-[#1e293b]/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-white/[0.02]">
                                <h3 className="text-xl font-bold text-slate-400 mb-8 flex items-center gap-2"><UserX /> Geometra "Di Parte"</h3>
                                <ul className="space-y-6">
                                    <ComparisonItem bad text="Conflitto d'interessi" sub="Tende a minimizzare i problemi." />
                                    <ComparisonItem bad text="Linguaggio Tecnico" sub="Comunica in gergo incomprensibile." />
                                    <ComparisonItem bad text="Reperibilità Casuale" sub="Non risponde durante la stipula." />
                                </ul>
                            </div>
                            <div className="p-8 md:p-12 bg-[#FF5A36]/[0.03] relative">
                                <div className="absolute top-0 right-0 p-4"><span className="bg-[#FF5A36] text-white text-xs font-bold px-2 py-1 rounded shadow-lg">RECOMMENDED</span></div>
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 drop-shadow-[0_0_15px_rgba(255,90,54,0.6)]"><ShieldCheck className="text-[#FF5A36]" /> STUDIO APEX</h3>
                                <ul className="space-y-6">
                                    <ComparisonItem text="Terzietà Assoluta" sub="Garanzia imparziale a tutela del Notaio." />
                                    <ComparisonItem text="Problem Solving" sub="Soluzioni proattive prima che diventino ostacoli." />
                                    <ComparisonItem text="Reperibilità H24" sub="Assistenza immediata durante l'atto." />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM SECTION - WIRED UP 🚀 */}
            <section id="contact-form" className="py-32 px-6 lg:px-20 relative overflow-hidden bg-gradient-to-t from-[#020412] to-[#0f172a]">
                <div className="max-w-[800px] mx-auto relative z-10">
                    <div className="bg-[#1e293b]/40 backdrop-blur-xl rounded-3xl p-10 lg:p-16 text-center border-t border-[#FF5A36]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="inline-block mb-6 p-4 rounded-full bg-[#FF5A36]/10 border border-[#FF5A36]/20 shadow-[0_0_20px_rgba(255,90,54,0.2)] animate-pulse">
                            <AlertTriangle className="text-[#FF5A36] w-8 h-8" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                            TESTACI SU UNA <br /><span className="text-white">PRATICA COMPLESSA</span>
                        </h2>
                        <p className="text-slate-400 mb-10 text-lg">
                            Hai una pratica ferma per dubbi urbanistici? Affidacela. Se non troviamo la soluzione in 48 ore, l'audit è gratuito.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
                            <InputGroup label="NOME STUDIO NOTARILE" name="studio-name" placeholder="Es. Studio Rossi & Associati" type="text" />

                            <div className="flex flex-col text-left gap-1">
                                <label className="text-xs font-mono text-slate-500 ml-1">DISTRETTO</label>
                                <div className="relative">
                                    <select name="district" className="w-full bg-[#020412]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] outline-none transition-all appearance-none cursor-pointer">
                                        <option>Torino</option>
                                        <option>Milano</option>
                                        <option>Cuneo</option>
                                        <option>Alessandria</option>
                                    </select>
                                </div>
                            </div>

                            <InputGroup label="NUMERO DI TELEFONO" name="phone" placeholder="+39 333 123 4567" type="tel" />
                            <InputGroup label="EMAIL" name="email" placeholder="notaio@studio.it" type="email" />

                            {/* ERROR MESSAGE */}
                            {status === 'error' && (
                                <div className="p-3 rounded-lg bg-red-900/20 border border-red-500/30 flex items-center gap-3">
                                    <AlertCircle className="text-red-500 w-5 h-5" />
                                    <span className="text-red-200 text-sm font-medium">{errorMessage}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`mt-4 w-full font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(255,90,54,0.4)] hover:shadow-[0_0_30px_rgba(255,90,54,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2
                                    ${status === 'success' ? 'bg-green-600 cursor-default shadow-none hover:scale-100' : 'bg-[#FF5A36] text-white'}
                                `}
                            >
                                {status === 'loading' ? (
                                    <> <Loader2 className="w-6 h-6 animate-spin" /> ELABORAZIONE... </>
                                ) : status === 'success' ? (
                                    <> <CheckCircle className="w-6 h-6" /> RICHIESTA INVIATA </>
                                ) : (
                                    <> INIZIA LA SFIDA <Rocket className="w-5 h-5" /> </>
                                )}
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-slate-500 font-mono">*Riservato esclusivamente a Notai iscritti all'albo.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helpers
function FeatureCard({ icon: Icon, title, desc }: any) {
    return (
        <div className="bg-[#1e293b]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/5 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#FF5A36]/10 flex items-center justify-center mb-6 text-[#FF5A36] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function ComparisonItem({ text, sub, bad }: any) {
    return (
        <li className={`flex items-start gap-4 ${bad ? 'opacity-50' : ''}`}>
            {bad ? <X className="text-red-500 w-5 h-5 mt-0.5" /> : <Check className="text-[#FF5A36] w-5 h-5 mt-0.5" />}
            <div>
                <strong className={`block ${bad ? 'text-slate-300' : 'text-white'}`}>{text}</strong>
                <span className="text-sm text-slate-500">{sub}</span>
            </div>
        </li>
    )
}

function InputGroup({ label, name, type, placeholder }: any) {
    return (
        <div className="flex flex-col text-left gap-1">
            <label className="text-xs font-mono text-slate-500 ml-1">{label}</label>
            <input name={name} type={type} required placeholder={placeholder}
                className="w-full bg-[#020412]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#FF5A36] focus:ring-1 focus:ring-[#FF5A36] outline-none transition-all"
            />
        </div>
    )
}
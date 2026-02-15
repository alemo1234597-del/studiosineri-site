"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
    ArrowRight,
    PlayCircle,
    Building2,
    Store,
    UtensilsCrossed,
    Stethoscope,
    ShieldCheck,
    Video,
    Volume2,
    IdCard,
    Coffee,
    Accessibility,
    Building,
    Sparkles,
    ChevronDown,
    Lock,
    Phone,
    Mail,
    MapPin,
    AlertTriangle,
    Check,
    Droplets,
    Fan,
    Landmark,
    FileText,
    Wrench,
    Activity
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CommercialiView() {
    const [activeSector, setActiveSector] = useState('food');

    const sectorsData = {
        food: {
            id: 'food',
            label: 'Food & Horeca',
            icon: UtensilsCrossed,
            title: 'Requisiti Critici per Ristorazione',
            focus: 'Focus Horeca',
            focusColor: 'primary',
            file: 'GUIDA_HORECA_2024.PDF',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw0_bLFy60Ga8I668tZ1o9AjL6I32qwQAonr8V-Nv28YUh3jxYqHb3YLy4R9pjvRtkz5eWS7XmSMnfMPJJg3yQmucaSdxRowWelb4PFXFLLYHsZQaO0H4vnLaFfpWKIQDfXuIR0eCTVa7cXg1VjfjC-KEL8RCjXU8RrkSoKDgRCoGQbjuJBQAX2hPVZnxqu_g8If4Hpf9BonX_G_l_PNLQ2IGHILSpTQVaPOdn4WkUyP6cMO4kMfuX5zDDSyPoc-TFZJJT7-4TW-U',
            checklist: [
                { icon: ShieldCheck, title: 'Nulla Osta ASL Preventivo', text: 'Verifica preliminare dei flussi sporco/pulito e spogliatoi.' },
                { icon: Video, title: 'Videoispezione Canne Fumarie', text: 'Certificazione di tiraggio e conformità al tetto (UNI 10683).' },
                { icon: Volume2, title: 'Impatto Acustico', text: 'Previsione di impatto sonoro per ottenimento licenza.' }
            ]
        },
        retail: {
            id: 'retail',
            label: 'Retail & Negozi',
            icon: Store,
            title: 'Retail & Negozi di Vicinato',
            focus: 'Focus Retail',
            focusColor: 'primary',
            file: 'GUIDA_INSEGNE_2024.PDF',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
            checklist: [
                { icon: IdCard, title: 'Pratica Insegna (Polizia Urbana)', text: 'Autorizzazione necessaria per insegne luminose e non.' },
                { icon: Coffee, title: 'Occupazione Suolo Pubblico (Dehors)', text: 'Concessione per tavolini o espositori esterni.' },
                { icon: Accessibility, title: 'Accessibilità (Pedana Disabili)', text: 'Abbattimento barriere architettoniche legge 13/89.' }
            ]
        },
        medical: {
            id: 'medical',
            label: 'Studi Medici',
            icon: Stethoscope,
            title: 'Studi Medici e Cliniche',
            focus: 'Focus Sanitario',
            focusColor: 'primary',
            file: 'REQUISITI_SANITARI_ASL.PDF',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
            checklist: [
                { icon: Accessibility, title: 'Bagno Disabili (DM 236/89)', text: 'Dimensioni e maniglioni a norma obbligatori.' },
                { icon: Building, title: "Cambio d'Uso (Cat. A/10)", text: 'Passaggio da residenziale/commerciale a ufficio.' },
                { icon: Sparkles, title: 'Sala Sterilizzazione Separata', text: 'Requisito ASL per procedure invasive.' }
            ]
        }
    };

    const currentData = sectorsData[activeSector as keyof typeof sectorsData];

    return (
        <div className="min-h-screen bg-[#020412] text-slate-400 font-display selection:bg-primary/30 selection:text-white">

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-b from-[#020412] to-[#0f172a]">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10"></div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 w-fit backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Torino Commercial Services</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                            APRI LA TUA ATTIVITÀ SENZA IL TERRORE DEI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">CONTROLLI.</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                            <span className="text-white font-medium border-b-2 border-primary">TU PENSI AL BUSINESS</span>, noi pensiamo alla burocrazia. Piattaforma tecnica integrata per aperture commerciali a norma.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <PrimaryButton className="gap-3 group">
                                <span>Richiedi Analisi Preliminare</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </PrimaryButton>
                            <button className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all text-slate-300 hover:text-white font-medium py-4 px-8 rounded-full flex items-center justify-center gap-2">
                                <PlayCircle className="text-primary w-5 h-5" />
                                <span>Come funziona</span>
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-4">
                            <div className="flex -space-x-3">
                                <div className="size-10 rounded-full border-2 border-[#020412] bg-gray-800 relative overflow-hidden">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv08b89ohkwl_gXEPwnomdxPE1RruluNGd6gzWdLra8p8xZ2r26yfx-LfIAfDQcI-JVn894tdMAoPr9bwa1H-Gv3UVLRwFBxMLO_1KZB4aBa0h1K5DWGHl4rgNy2O9h6ZMG01q6z7TPcBuqywT58rd_BAgO5tP2a9TSpTlZej7WMnmR_I2ANacBlmKK6f4wGCADsJzUzxPReqxCINrrtDC1LMdxVybiDfsRvOJrxZ0HsL4dSFoay_HzMef9Zh9EyzeU_aA4aK0Zvg" alt="Reviewer" fill className="object-cover" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-[#020412] bg-gray-800 relative overflow-hidden">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbdtgOLwbySX31O2_hPqMJSxygMGaf3_cTDM_GI1dQUuF7Xqa0q5mG-I6pyj6piv-4_ZFim5JmPOx45_vDbTP5_SS3AJ8kt0V1LB0tlw9xmA0HUzf3uemrwxNjUEd0M2jA__qCOFqfOFaP_jIKp221YLJ0dtbXyJFLwm9YVSkJtc7Jn6DH0ptGgrgbrL-iMSx7CIKMtvR7jeSZ-ykvOESa6XU3ThMBYqKuDq0aNIR3dxTw9eLJUyc_I4OzJeB03OD5-zqB1h4VWhE" alt="Reviewer" fill className="object-cover" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-[#020412] bg-gray-800 relative overflow-hidden">
                                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx9du2yuczR6PK3vFFO9-mYOVex1ZFfcdZdBktDg_YSx0IiZBB4SoUx5RrvtOr1lnD3aKOGXe3Hjci-RWxR_FlT10ndRxj_n273hlp3B3ZWVAo3M2RJ1k5rcvVWcXPfSI3vEqt7H1Pow3zBCKZNE5798imqei9Gp-AQoVwbQTN0dMctDh8evXAKNWc4fIFvM3n32rt3i1_PmA8LprsWzuSaDcg1ZmbRzDJDqn9BIj7AP5bIWddx_ONlRLEqtzksedTCGQnzpPKiog" alt="Reviewer" fill className="object-cover" />
                                </div>
                                <div className="size-10 rounded-full border-2 border-[#020412] bg-gray-800 flex items-center justify-center text-xs font-bold text-white">
                                    +150
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-primary text-sm gap-0.5">★★★★★</div>
                                <span className="text-xs text-slate-400">Locali aperti a Torino</span>
                            </div>
                        </div>
                    </div>

                    {/* 3D Visual */}
                    <div className="relative hidden lg:block perspective-[1000px]">
                        <GlassPanel className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 transform rotate-y-6 rotate-x-6 hover:rotate-0 transition-all duration-700 shadow-2xl p-0 bg-[#0F172A]">
                            <div className="h-8 bg-black/40 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="size-3 rounded-full bg-primary/80"></div>
                                <div className="size-3 rounded-full bg-yellow-500/80"></div>
                                <div className="size-3 rounded-full bg-green-500/80"></div>
                                <div className="ml-4 text-[10px] font-mono text-slate-500">blueprint_v2.cad — Read Only</div>
                            </div>
                            <div className="relative w-full h-full bg-[#0F172A] p-1">
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                                <div className="relative w-full h-full rounded border border-white/5 overflow-hidden">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfwA0zUKpnZF_uqNy6mNg1GcaqCBtmvPper9no9shpL5fhTjOw3sO-VfaA3Q4q-mEu3SEeCIPyGxVQypleKrhl6K__6-61LlfJtpWl8Twm89JQOP78NvaMTRLt96UrOisM-i14IUOzH3Jllk7KQBbH3RyG1qW7Kced3bealXNJexanFbN6KijlFC6akBZwQr8L6OIub6BGmYZZG91ZkVkARWCV4gciBE1sX1p6UAUiJmN8T-7RKX67eoWkgFmO7V3QU0Zmvfzcox8"
                                        alt="Blueprint"
                                        fill
                                        className="object-cover opacity-60 mix-blend-luminosity grayscale invert"
                                    />

                                    {/* Annotations */}
                                    <div className="absolute top-[20%] left-[15%]">
                                        <div className="relative group cursor-pointer">
                                            <div className="absolute -inset-1 bg-primary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200 animate-pulse"></div>
                                            <div className="relative flex items-center gap-2 bg-[#1a1a1a]/90 backdrop-blur border border-primary/50 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-xl shadow-primary/20">
                                                <span className="text-primary">❌</span> NO CANNA FUMARIA
                                            </div>
                                            <div className="absolute top-full left-1/2 w-px h-8 bg-primary/50"></div>
                                            <div className="absolute top-[calc(100%+32px)] left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary shadow-[0_0_10px_orange]"></div>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-[30%] right-[15%]">
                                        <div className="relative group cursor-pointer">
                                            <div className="absolute -inset-1 bg-primary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                            <div className="relative flex items-center gap-2 bg-[#1a1a1a]/90 backdrop-blur border border-primary/50 text-white text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-xl transform hover:-translate-y-1 transition-transform">
                                                <span className="text-primary">✅</span> OK BAGNI DISABILI
                                            </div>
                                            <div className="absolute bottom-full left-1/2 w-px h-8 bg-primary/50"></div>
                                            <div className="absolute bottom-[calc(100%+32px)] left-1/2 -translate-x-1/2 size-2 rounded-full bg-primary shadow-[0_0_10px_orange]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent w-full h-[10%] animate-[scan_3s_ease-in-out_infinite] pointer-events-none border-b border-primary/30"></div>
                            </div>
                        </GlassPanel>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="py-24 px-6 relative bg-gradient-to-b from-[#020412] to-[#0f172a]" id="problems">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 max-w-3xl">
                        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary"></span>
                            Il problema reale
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">L&apos;AFFITTO A VUOTO</h2>
                        <p className="text-slate-400 text-lg leading-relaxed font-light">
                            I rischi burocratici nascosti che fanno fallire il tuo business ancora prima dell&apos;apertura. Non firmare quel contratto d&apos;affitto prima di aver verificato questi punti critici.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Droplets}
                            title="Bagno Fuori Norma"
                            description="Le dimensioni minime e l'antibagno sono i primi motivi di chiusura immediata per difformità sanitarie post-ispezione ASL."
                        />
                        <FeatureCard
                            icon={Fan}
                            title="Canna Fumaria Negata"
                            description="Investimento perso su locali non idonei alla ristorazione. Il condominio può bloccare l'installazione anche se il locale è perfetto."
                        />
                        <FeatureCard
                            icon={Landmark}
                            title="Vincoli Paesaggistici"
                            description="Ritardi burocratici infiniti (6-12 mesi) per permessi di insegne o dehors in zone storiche di Torino."
                        />
                    </div>
                </div>
            </section>

            {/* Sector Switcher */}
            <section id="sectors" className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">SCEGLI IL TUO SETTORE</h2>
                        <p className="text-slate-400">Database normativo aggiornato al 2024</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {Object.values(sectorsData).map((sector) => {
                            const isActive = activeSector === sector.id;
                            const Icon = sector.icon;
                            return (
                                <div
                                    key={sector.id}
                                    onClick={() => setActiveSector(sector.id)}
                                    className="relative group cursor-pointer h-48 md:h-64"
                                >
                                    {isActive ? (
                                        <>
                                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl opacity-50 transition-opacity"></div>
                                            <div className="relative h-full bg-[#1e293b]/60 backdrop-blur-md border border-primary rounded-xl p-8 flex flex-col items-start justify-between shadow-2xl overflow-hidden">
                                                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-white mb-1">{sector.label}</h3>
                                                    <p className="text-xs text-primary font-mono uppercase tracking-wider">ACTIVE VIEW</p>
                                                </div>
                                                <div className="absolute top-4 right-4 size-3 rounded-full bg-primary animate-pulse"></div>
                                                <Icon className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5 rotate-12" />
                                            </div>
                                        </>
                                    ) : (
                                        <div className="h-full bg-[#1e293b]/40 backdrop-blur-md border border-white/10 hover:bg-white/5 rounded-xl p-8 flex flex-col items-start justify-between transition-all duration-300">
                                            <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-400 group-hover:text-white transition-colors mb-1">{sector.label}</h3>
                                                <p className="text-xs text-slate-600 group-hover:text-slate-400 font-mono uppercase tracking-wider transition-colors">SELECT TO VIEW</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <GlassPanel className="p-0 overflow-hidden shadow-none border border-white/10">
                        <div className="bg-[#020412]/60 rounded-xl p-8 md:p-12 relative overflow-hidden min-h-[500px]">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSector}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"
                                >
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                                <span className="size-2 rounded-full bg-primary"></span>
                                                {currentData.focus}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-8">{currentData.title}</h3>
                                        <ul className="space-y-6">
                                            {currentData.checklist.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#1e293b]/50 border border-white/5 hover:border-primary/30 transition-colors cursor-default">
                                                    <item.icon className="text-primary mt-0.5 w-5 h-5" />
                                                    <div>
                                                        <strong className="text-white block mb-1">{item.title}</strong>
                                                        <span className="text-slate-400 text-sm">{item.text}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl transform rotate-3"></div>
                                        <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#020412] group">
                                            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded text-white/80 text-xs font-mono">
                                                {currentData.file}
                                            </div>
                                            <Image
                                                className="object-cover w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-500 scale-105 group-hover:scale-100"
                                                src={currentData.image}
                                                alt={currentData.label}
                                                fill
                                            />
                                            <div className="absolute bottom-6 left-6 right-6 bg-[#1e293b]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-white font-bold text-sm">Checklist Conformità</span>
                                                    <span className="text-primary text-xs font-mono">85% COMPLETE</span>
                                                </div>
                                                <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                                                    <div className="bg-primary h-full w-[85%] rounded-full shadow-[0_0_10px_orange]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </GlassPanel>
                </div>
            </section>

            {/* Methodology Section Layout */}
            <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#020412] to-[#0f172a]" id="method">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
                    {/* Timeline */}
                    <div>
                        <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
                            <span className="w-8 h-px bg-primary"></span>
                            Protocollo Apex
                        </div>
                        <h2 className="text-4xl font-extrabold text-white mb-16">BUSINESS KEY TIMELINE</h2>

                        <div className="relative pl-16 space-y-16">
                            <div className="absolute left-6 top-4 bottom-10 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_15px_rgba(255,90,54,0.5)] rounded-full"></div>

                            {/* Step 1 */}
                            <div className="relative group">
                                <div className="absolute -left-[58px] top-0 size-14 rounded-full bg-[#020412] border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,90,54,0.4)] group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 transform group-hover:scale-110">1</div>
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:border-primary/30">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-glow-white transition-all duration-300">Screening Immobiliare</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Analisi tecnica preventiva dei locali e verifica catastale immediata prima della firma del contratto.</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative group">
                                <div className="absolute -left-[58px] top-0 size-14 rounded-full bg-[#020412] border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,90,54,0.4)] group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 transform group-hover:scale-110">2</div>
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:border-primary/30">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-glow-white transition-all duration-300">Pre-Audit Sanitario</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Verifica completa dei vincoli ASL e requisiti igienico-sanitari specifici per la tua attività.</p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative group">
                                <div className="absolute -left-[58px] top-0 size-14 rounded-full bg-[#020412] border-2 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,90,54,0.4)] group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 transform group-hover:scale-110">3</div>
                                <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:border-primary/30">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-glow-white transition-all duration-300">Fast-Track SCIA</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Preparazione e invio telematico immediato delle pratiche edilizie comunali e sanitarie.</p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="relative group">
                                <div className="absolute -left-[58px] top-0 size-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-[0_0_25px_rgba(255,90,54,0.8)] animate-pulse z-10 transform group-hover:scale-110">4</div>
                                <div className="bg-white/10 border border-primary/30 rounded-2xl p-6 shadow-glow-primary group-hover:bg-primary/20 transition-all duration-300">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-glow-white transition-all duration-300">Business Handover</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">Consegna del locale a norma, pronto per l&apos;apertura in sicurezza senza sorprese burocratiche.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cost Analysis Card */}
                    <div className="sticky top-32">
                        <div className="relative glass-card rounded-xl overflow-hidden shadow-2xl group transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,90,54,0.3)] bg-[#1e293b]/40 border border-white/10">
                            <div className="p-6 border-b border-white/5 flex items-center justify-between relative z-10 bg-[#1e293b]/60 backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary animate-pulse">
                                        <AlertTriangle className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-white text-lg tracking-tight">Analisi Spreco</span>
                                </div>
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-slate-400 tracking-wider">
                                    LIVE DATA
                                </div>
                            </div>
                            <div className="p-8 space-y-6 relative z-10 bg-[#020412]/80 backdrop-blur-xl">
                                <div className="flex justify-between items-center group/item p-3 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5">
                                    <span className="text-slate-400 font-display text-sm">Affitto a vuoto</span>
                                    <span className="text-white font-bold font-mono tracking-wide text-lg">€ 7.500</span>
                                </div>
                                <div className="flex justify-between items-center group/item p-3 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5">
                                    <span className="text-slate-400 font-display text-sm">Rifacimento Impianti</span>
                                    <span className="text-white font-bold font-mono tracking-wide text-lg">€ 4.200</span>
                                </div>
                                <div className="flex justify-between items-center group/item p-3 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5">
                                    <span className="text-slate-400 font-display text-sm">Sanzioni ASL</span>
                                    <span className="text-white font-bold font-mono tracking-wide text-lg">€ 2.800</span>
                                </div>
                                <div className="h-px bg-white/10 my-4"></div>
                                <div className="flex justify-between items-end px-3">
                                    <span className="text-primary font-bold uppercase text-xs tracking-wider mb-1 font-display">Totale Stimato</span>
                                    <span className="text-primary font-bold text-4xl font-mono tracking-tighter drop-shadow-lg">€ 14.500</span>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-primary to-orange-600 p-4 relative z-10 border-t border-white/10">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="bg-white/20 p-1 rounded-full backdrop-blur-sm">
                                        <Check className="text-white w-3 h-3 font-bold" />
                                    </div>
                                    <span className="text-white font-bold text-sm tracking-widest uppercase">RISPARMIO 100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section id="contact" className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#020412]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="glass-card rounded-xl p-1 border border-primary/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                        <div className="bg-[#1e293b]/40 backdrop-blur-xl rounded-[0.6rem] p-8 md:p-16 relative">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Mettici alla prova.</h2>
                                <p className="text-slate-400 text-lg font-light">Evita gli errori che costano cari. Richiedi un sopralluogo tecnico prima di firmare.</p>
                            </div>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Nome e Cognome</label>
                                        <input
                                            className="w-full bg-[#020412]/50 border border-white/10 text-white rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-600 transition-all shadow-inner hover:bg-[#020412]/70 focus:outline-none"
                                            placeholder="Mario Rossi" type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Nome Attività</label>
                                        <input
                                            className="w-full bg-[#020412]/50 border border-white/10 text-white rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-600 transition-all shadow-inner hover:bg-[#020412]/70 focus:outline-none"
                                            placeholder="Bar Sport srl" type="text"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Telefono</label>
                                        <input
                                            className="w-full bg-[#020412]/50 border border-white/10 text-white rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-600 transition-all shadow-inner hover:bg-[#020412]/70 focus:outline-none"
                                            placeholder="+39 333 ..." type="tel"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Email</label>
                                        <input
                                            className="w-full bg-[#020412]/50 border border-white/10 text-white rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-transparent placeholder-gray-600 transition-all shadow-inner hover:bg-[#020412]/70 focus:outline-none"
                                            placeholder="mario@email.com" type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400 tracking-wider ml-1">Tipo di locale</label>
                                    <div className="relative">
                                        <select className="w-full bg-[#020412]/50 border border-white/10 text-white rounded-xl p-5 focus:ring-2 focus:ring-primary focus:border-transparent [&>option]:bg-[#020412] [&>option]:text-white shadow-inner hover:bg-[#020412]/70 appearance-none cursor-pointer focus:outline-none">
                                            <option>Commerciale (&lt; 100mq)</option>
                                            <option>Commerciale (&gt; 100mq)</option>
                                            <option>Ristorazione / Bar</option>
                                            <option>Industriale / Capannone</option>
                                            <option>Ufficio / Studio Medico</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-primary hover:bg-[#ff7a5c] text-white font-bold text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(255,90,54,0.3)] hover:shadow-[0_0_50px_rgba(255,90,54,0.6)] transition-all transform hover:-translate-y-1 mt-8 flex items-center justify-center gap-3 group relative overflow-hidden tracking-widest uppercase">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                    <span className="relative z-10">RICHIEDI SOPRALLUOGO PRE-AFFITTO</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                </button>
                                <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-2">
                                    <Lock className="w-4 h-4 text-primary" />
                                    I tuoi dati sono al sicuro. Rispondiamo entro 4 ore lavorative.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

import { Facebook, Instagram, Linkedin, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Founder() {
    return (
        <section id="about" className="py-32 bg-background-dark relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center relative">
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 h-[600px] lg:h-[700px] group bg-[#020617]">
                            <Image
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsQ_4hRyikfF8uzwLoDQkbu3ErF5qfiJTTO2xzWVys1sma6uF8IhJEOnrWClnPnSbTfP2tK-jY8WlxfV33zAQIDz5j1rotmVsNfACiloJSAWmOo1-HiLuwOd6RXAnRVMSa5ADIGobVXzynBbXgV0ARu5Ff9AHgziInpUL2RztgGlf3RX9Xu8aycJEMb2gPVsUWI343Z5zXlASo0Kq7QA2OFOPfnM2pIKS4wTnfOsm-BEqHDFPhYohGXFcSVD4jE9_iZhDkIZcL3ms"
                                alt="Professional portrait of founder in suit in modern office"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                                unoptimized
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020617] via-[#020617]/90 to-transparent flex flex-col justify-end p-8 lg:p-12">
                                <h3 className="text-white font-bold text-3xl md:text-4xl mb-2 tracking-tight">Ing. Marco Rossi</h3>
                                <p className="text-white/40 text-sm md:text-base font-display uppercase tracking-widest font-medium">Fondatore & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 relative z-20 -mt-10 lg:mt-0 lg:-ml-24">
                        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[110%] h-[300px] bg-primary/30 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-[150px] bg-primary/50 blur-[60px] rounded-full -z-10 pointer-events-none"></div>
                        <div className="glass-panel border border-white/5 p-8 md:p-12 lg:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden bg-[#020617]/60">
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] shadow-[0_0_100px_40px_rgba(224,93,58,0.3)] bg-primary z-0 pointer-events-none"></div>
                            <Quote className="text-primary w-20 h-20 md:w-24 md:h-24 absolute top-8 left-8 md:left-12 opacity-80" />
                            <div className="relative z-10 pt-16 md:pt-20">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter mb-8 text-white">
                                    Non vendo pratiche, <br />
                                    <span className="text-white">vendo certezze.</span>
                                </h2>
                                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 max-w-2xl">
                                    In un mondo dove la burocrazia può paralizzare i sogni più ambiziosi, Apex Surveying nasce come scudo e ariete. Non siamo semplici geometri, siamo strateghi del territorio. Risolviamo complessità che altri evitano, trasformando ostacoli legali in fondamenta solide per il tuo investimento.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-6">
                                        <Image
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYxvDGw-W5Ufg--SO4ofaXZCGVBPuK5yT11n_DDb05aorvBDHyaTh6dx0wFZOUweuPoJwr7wNUiGJBf6PQHJzUG3xX2mYxDgo-vMc8v4LjapOE8DVBwtBG8fH1Fj9k3e1CB9vGFHXZs63M64TbdBN4HJXxaBTAXyf_8NL7YfSuo3LN14dQ8xRqbSVF8d0rKatjj_-KNM9gJoHWCyUu7wRM09D1PjQvH74YcXFVoRjqSuP_bjmEp7AALYctXUiWxXayYUvHSm1rTtg"
                                            alt="Signature of the founder"
                                            width={120}
                                            height={80}
                                            className="h-16 md:h-20 w-auto opacity-80 signature-glow mix-blend-screen"
                                            unoptimized
                                        />
                                        <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent"></div>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <Link href="#" className="text-white/30 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(224,93,58,0.6)]">
                                            <Linkedin className="w-5 h-5" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Link>
                                        <Link href="#" className="text-white/30 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(224,93,58,0.6)]">
                                            <Instagram className="w-5 h-5" />
                                            <span className="sr-only">Instagram</span>
                                        </Link>
                                        <Link href="#" className="text-white/30 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(224,93,58,0.6)]">
                                            <Facebook className="w-5 h-5" />
                                            <span className="sr-only">Facebook</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

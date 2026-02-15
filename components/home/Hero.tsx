import Link from "next/link";
import { ArrowUpRight, ChevronDown, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/60 to-[#020617] z-10"></div>
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLt-muknhGwyb5FPe9jR9qnkGkhp5SGld1OPEQqT2_9QHeTGpxNxGukEkrBeyT3U31HNDI05fgyCP3ppWBIoUafMgZ3aBkauEcYNA7CMZtfdu7uOMZ0N6Tlu1eioWh1OCjKj93s2XdTvWeWIHS79Kv1oSXXUn0qD8a0B5fX6TTck1BGPz1WhqyvpBI9tnWtwxtFo63-1TcM95icUAWfPHbF1EDQJsx9xJQQ6mAcjoAHs-Ri3_nle3nhK0ChTAhQG0eTnGK7RsG5Wo"
                    alt="Moody dusk construction site skyline"
                    fill
                    className="object-cover object-center opacity-70 mix-blend-overlay"
                    priority
                    unoptimized
                />
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl mt-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(224,93,58,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">
                        Nuova Era delle Costruzioni
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-2xl">
                    NON LASCIARE CHE
                    <br />
                    LA BUROCRAZIA
                    <br />
                    BLOCCHI IL TUO FUTURO.
                </h1>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <Link href="#contact" className="button-glow bg-primary text-white text-lg font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#ff6b42]">
                        <span>Richiedi Consulenza Premium</span>
                        <ArrowUpRight className="w-6 h-6" />
                    </Link>
                    <button className="glass-panel text-white text-lg font-medium px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/5 transition-colors border-white/10">
                        <PlayCircle className="w-6 h-6" />
                        <span>Guarda il Video</span>
                    </button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
                <span className="text-xs font-mono uppercase tracking-widest">
                    Scorri
                </span>
                <ChevronDown className="w-6 h-6" />
            </div>
        </section>
    );
}

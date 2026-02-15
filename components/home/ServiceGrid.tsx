import { ArrowRight, Building, Gavel, HardHat, Key, Store, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        id: "imprese",
        title: "IMPRESE",
        description: "Attiva Impresa: Gestione cantieri e sicurezza integrata.",
        icon: HardHat,
        number: "01",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrROy6yF3HKK9HUJaNKLSzOoJ7rKquhDFyvd7uUKx4EbavVGaKMzGp03mY_moRq928ff9eLSKtD5wF25H6R_cvlodjw_48G2ESo3hwWIpvweUCQQp4M37GDKRcn9vI5AvAVpaJSrbt6vbBLWNoLlBVDrt_TsydAE-xa02IgJQJjVjGnx7_a4P6s0xou3dhzp4Hd3Vrm6BykfGwoD63yz3G9Ag1K4ajPffaUMMxCZ6kZ8y-W9rZOhBMANTPtEQR0YOLsBPjgYZV0KI",
    },
    {
        id: "privati",
        title: "PRIVATI",
        description: "Consulenza personalizzata per proprietari e ristrutturazioni.",
        icon: UserCheck,
        number: "02",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAac_DkBu9iFhp2ufNvGVQ9VjFfxSS7wNf0_7SfGj6L8vgXbScSF2sDhdQpJf47BvGd47nTTVOtGW4rpRKqq0ts3GgPB--ZLGqPB7oxCdDNNx0iuolRDsjV-pR7CSUlzw8RuS5Jp71E4rBOnSKsSMjoEjB3LuRgzLXmFB0pBGtsF0KE83w9jrl_XJ3P9VFk16y8bSz1fWYZZzTrHaOC0jZEvJOuFG3mxXA6M9clX0ePZj8-cevhXyvJIckI_WT9kBC5GZflv5OVsRg",
    },
    {
        id: "agenzie",
        title: "AGENZIE IMMOBILIARI",
        description: "Partnership strategiche per regolarizzazioni e vendite rapide.",
        icon: Key,
        number: "03",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARwXKCq4lKGIy7n6fn4SRHi6JBfJhwaaQWZaXJLFtUhqGJuBFBpJpkTvXcJiBHHdJ3GWaKBUETNyhHxadiCwPv4D9orhY4hcJw6q8sOFCyodfOw6PQyCOsqZQEcH4fwtMRkyKXQ9Ph73CK9Xees8FF1zuXcmKcEXEci6dHuNkmE_tGGd0dX48AGDNR9hJuZKiMiJftK5flzcEyXAMsqDPOLaUxqDr1Tig8JBpA4qhgredZ5q4cjO7pnQQpMybmqlFMSzfjYP_-hUc",
    },
    {
        id: "amministratori",
        title: "AMMINISTRATORI",
        description: "Gestione Condominiale: Manutenzione e pratiche bonus.",
        icon: Building,
        number: "04",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvZpjGrm-0pKpo9ikDHXeR1-8KvX-OfIf5ToO6F48zUT7Oqr4bCDCC8s4EFuYgU2elKvBOpzMmiRFwG0gl85HkX4-MDqb-os0TM40TrALCFPa5TXKsut755TKEKzvhLRnoWZU_ULG_t6D8r2FQLx4-CDoCMObEAxmlZYLZBP06pZ95OiPJdQ426VBl9GiJt0qCDw9tIHXaRHWvizNmAfU_y8nVstu9rFjseAfVJPd67WfPTQXWWT4RTeycg9fNh3xCWjuakJ1jtLc",
    },
    {
        id: "notai",
        title: "NOTAI",
        description: "Supporto Notarile: Relazioni tecniche integrate.",
        icon: Gavel,
        number: "05",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4JyaM9ASI_yv8Rf7d0m-kYR9JjJw1Qz9iJAFqQNr65fDUvfUNyO36T0x_XoYYoFEi5W_xuOFgr8CGP314B3ogPxLMOUmJglm72rLw2q6CPL_oHmm7ghtzIvpIIAjxF9q7dpSZBxKn0wG9cWLeVxhfD0VsVbfVKTirTesO_ymh-rXq8vf0GUWkfckW3YMznbOxjOlQ6kNDNBD8ut5D_ZhCmzEyOBvsq_jm9FSsgV1ZAa88z2V-8Wx2ATEpSDyvdZZLEZzdlwoBq78",
    },
    {
        id: "commerciali",
        title: "COMMERCIALI",
        description: "Valorizzazione Attività: Cambio d'uso e layout.",
        icon: Store,
        number: "06",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkBaJdOIAx2T3qdl-WAxK5BuCafa_h_GAvZ972T31-IKvkJPs62DBjGKzx_9XM8klxqCRJsHX-zbq6-Bw370rzWY0YfIm7OB-Sj4aZuSMrB6ef8q-METTe9hsgmnkoTE8er3Fd6dV3F576y2an1alQ2VHbZAiqAZ1jq0Mo9iGgZ6UBCAGqFqzFgLoOFCxEh7JBVIjvg8-J9VEDRIJ5YjoKoKcJq-iU4bz_667lgFVVuF0MynFiFCQpP5xAX_aPRoz9CrVeHHqXmBQ",
    },
];

export default function ServiceGrid() {
    return (
        <section id="services" className="py-32 px-4 md:px-10 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">I Nostri Protocolli</h2>
                        <p className="text-white/50 max-w-lg text-lg">Soluzioni integrate per ogni attore del mercato. Scegli il tuo percorso.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[450px]">
                    {services.map((service) => (
                        <div key={service.id} className="group relative rounded-3xl overflow-hidden bg-[#030816] transition-all duration-300 hover-glow-primary border border-white/5">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 right-4 glass-panel p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-xl border border-white/5 group-hover:border-primary/30 transition-colors bg-[#020617]/40">
                                <div className="flex justify-between items-start">
                                    <service.icon className="text-primary w-8 h-8" />
                                    <span className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded">{service.number}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                                    <p className="text-sm text-white/60">{service.description}</p>
                                </div>
                                <Link href={`/services/${service.id}`} className="liquid-btn rounded-xl py-3 px-4 flex justify-between items-center group/btn w-full mt-auto">
                                    <span className="text-sm font-medium text-white/90">Scopri di più</span>
                                    <ArrowRight className="text-primary group-hover/btn:translate-x-1 transition-transform w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

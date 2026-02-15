import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        text: "Apex ha trasformato un incubo burocratico in una passeggiata. La loro precisione chirurgica ci ha salvato mesi di ritardi.",
        author: "Dott.ssa Bianchi",
        role: "Amministratore Condominiale",
        initials: "DB",
    },
    {
        id: 2,
        text: "Non pensavo fosse possibile ottenere i permessi così velocemente. Il team tecnico è di un altro livello.",
        author: "Marco V.",
        role: "Proprietario Immobiliare",
        initials: "MV",
    },
    {
        id: 3,
        text: "Competenza, chiarezza e rapidità. Finalmente uno studio tecnico che parla la lingua del business.",
        author: "Giuseppe L.",
        role: "Sviluppatore Edile",
        initials: "GL",
    },
];

export default function Testimonials() {
    return (
        <section id="projects" className="py-32 bg-background-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">
                            Cosa Dicono i Clienti
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold">Storie di Successo</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button className="group bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/50 text-white hover:text-primary rounded-full p-4 transition-all duration-300 backdrop-blur-md">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button className="group bg-white/5 hover:bg-primary/10 border border-white/5 hover:border-primary/50 text-white hover:text-primary rounded-full p-4 transition-all duration-300 backdrop-blur-md">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="min-w-[85vw] md:min-w-[500px] snap-center relative group"
                        >
                            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-12 h-full flex flex-col justify-between relative overflow-hidden hover:border-white/20 transition-colors shadow-xl">
                                <Quote className="absolute top-6 left-8 w-40 h-40 text-primary/10 select-none pointer-events-none transform rotate-180" />
                                <div className="relative z-10 pt-8">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-primary fill-primary"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-2xl md:text-3xl text-white font-medium leading-tight mb-8">
                                        {testimonial.text}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 border-t border-white/5 pt-8 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary font-bold text-xl border border-white/5">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">
                                            {testimonial.author}
                                        </h4>
                                        <p className="text-white/40 text-sm uppercase tracking-wider font-medium">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-3">
                    <div className="h-1.5 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(224,93,58,0.5)]"></div>
                    <div className="h-1.5 w-2 bg-white/10 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
                    <div className="h-1.5 w-2 bg-white/10 rounded-full hover:bg-white/30 transition-colors cursor-pointer"></div>
                </div>
            </div>
        </section>
    );
}

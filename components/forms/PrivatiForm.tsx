'use client'

import { useState } from 'react'
import { submitPrivati } from '@/app/actions/submit-privati'
import { Building2, Clock, MapPin, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react'

export default function PrivatiForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        setStatus('loading')

        const formData = new FormData(form)
        const result = await submitPrivati(formData)

        if (result.success) {
            setStatus('success')
            form.reset()
        } else {
            setStatus('error')
            setErrorMessage(result.message || 'Errore sconosciuto')
        }
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-sans text-white">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">

                {/* --- LEFT SIDE: INFO --- */}
                <section className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent border-b lg:border-b-0 lg:border-r border-white/10">
                    <div>
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-10 h-10 bg-[#E05D3A] rounded-lg flex items-center justify-center">
                                <Building2 className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter italic">
                                APEX <span className="text-[#E05D3A]">SURVEYING</span>
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                            PARLIAMO DEL TUO <span className="text-[#E05D3A]">PROGETTO.</span>
                        </h1>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-md">
                            Smetti di sperare nella burocrazia. Inizia a costruire con certezze tecniche e supporto professionale d'eccellenza.
                        </p>
                    </div>

                    {/* Trust Elements */}
                    <div className="mt-12 space-y-6">
                        <TrustItem icon={Clock} title="Risposta garantita entro 4 ore" subtitle="I nostri tecnici sono operativi 24/7" />
                        <TrustItem icon={MapPin} title="Sopralluoghi in tutta Torino e Provincia" subtitle="Copertura capillare sul territorio" />
                        <TrustItem icon={ShieldCheck} title="Dati protetti GDPR 2024" subtitle="Massima riservatezza e sicurezza" />
                    </div>
                </section>

                {/* --- RIGHT SIDE: FORM --- */}
                <section className="lg:w-3/5 p-8 lg:p-12 bg-[#0a0e17]/50">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Nome Completo" name="full-name" placeholder="Ing. Mario Rossi" type="text" />
                            <InputGroup label="Email Aziendale" name="company-email" placeholder="mario.rossi@azienda.it" type="email" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="Numero di Telefono" name="phone" placeholder="+39 333 000 0000" type="tel" />

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-300">Tipo di Servizio</label>
                                <select
                                    name="service-type"
                                    required
                                    defaultValue=""
                                    className="w-full bg-[#1c2431] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#E05D3A] focus:ring-1 focus:ring-[#E05D3A] transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Seleziona un'opzione</option>
                                    <option value="Ristrutturazione">Ristrutturazione</option>
                                    <option value="Acquisto">Acquisto</option>
                                    <option value="Commerciale">Commerciale</option>
                                    <option value="Pratiche Edilizie">Pratiche Edilizie</option>
                                    <option value="Altro">Altro</option>
                                </select>
                            </div>
                        </div>

                        <InputGroup label="MQ Immobile (Approssimativi)" name="property-size" placeholder="es. 120" type="number" />

                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-slate-300">Breve Messaggio</label>
                            <textarea name="message" rows={4} required placeholder="Descrivi brevemente la tua necessità tecnica..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#E05D3A] focus:ring-1 focus:ring-[#E05D3A] transition-all outline-none resize-none"></textarea>
                        </div>

                        {/* Error Message */}
                        {status === 'error' && (
                            <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 text-red-200 text-sm font-medium">
                                ⚠️ {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className={`w-full font-extrabold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 group
                                    ${status === 'success'
                                        ? 'bg-green-600 text-white cursor-default'
                                        : 'bg-[#E05D3A] hover:bg-[#c95132] text-white shadow-[0_0_20px_0_rgba(224,93,58,0.4)] hover:shadow-[0_0_35px_0_rgba(224,93,58,0.6)]'
                                    }
                                `}
                            >
                                {status === 'loading' ? (
                                    <> <Loader2 className="w-5 h-5 animate-spin" /> INVIO IN CORSO... </>
                                ) : status === 'success' ? (
                                    <> <ShieldCheck className="w-6 h-6" /> RICHIESTA INVIATA CON SUCCESSO! </>
                                ) : (
                                    <> RICHIEDI CONSULENZA TECNICA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> </>
                                )}
                            </button>
                            <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest">
                                Nessun obbligo di acquisto • Analisi preliminare gratuita
                            </p>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

// Small Helper Components to keep code clean
function TrustItem({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 bg-[#E05D3A]/20 p-2 rounded-lg">
                <Icon className="text-[#E05D3A] w-5 h-5" />
            </div>
            <div>
                <p className="font-bold">{title}</p>
                <p className="text-sm text-slate-500">{subtitle}</p>
            </div>
        </div>
    )
}

function InputGroup({ label, name, type, placeholder }: any) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-300">{label}</label>
            <input
                name={name}
                type={type}
                required
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-[#E05D3A] focus:ring-1 focus:ring-[#E05D3A] transition-all outline-none"
            />
        </div>
    )
}
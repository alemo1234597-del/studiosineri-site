'use client'

import { useState } from 'react'
import { submitImprese } from '@/app/actions/submit-imprese'
import { CheckCircle, AlertCircle, ArrowRight, Loader2 } from 'lucide-react'

export default function ImpreseForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget // Save form reference

        setStatus('loading')
        setErrorMessage('')

        try {
            const formData = new FormData(form)
            const result = await submitImprese(formData)

            if (result.success) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
                setErrorMessage(result.message || 'Errore sconosciuto')
            }
        } catch (e) {
            console.error('Submission Error:', e)
            setStatus('error')
            setErrorMessage('Errore di connessione')
        }
    }

    // SHARED STYLES
    const labelStyle = "block text-[11px] font-bold text-orange-500 uppercase tracking-[0.15em] mb-2"
    const inputStyle = "w-full bg-[#020412] border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
    const selectStyle = "w-full bg-[#020412] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer"

    return (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

            {/* Ragione Sociale */}
            <div>
                <label className={labelStyle}>Ragione Sociale Impresa</label>
                <input
                    name="ragione_sociale"
                    type="text"
                    required
                    placeholder="Es. EDILIZIA FUTURA S.R.L."
                    className={inputStyle}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Categoria */}
                <div className="relative">
                    <label className={labelStyle}>Categoria Prevalente</label>
                    <div className="relative">
                        <select name="categoria_prevalente" className={selectStyle}>
                            <option value="OG1">OG1 (Edifici Civili)</option>
                            <option value="OG2">OG2 (Restauro)</option>
                            <option value="OG3">OG3 (Strade)</option>
                            <option value="OS6">OS6 (Finiture)</option>
                            <option value="Altro">Altro</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white"><path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>

                {/* SOA */}
                <div className="relative">
                    <label className={labelStyle}>Attestazione SOA</label>
                    <div className="relative">
                        <select name="attestazione_soa" className={selectStyle}>
                            <option value="I">I Classifica (Fino a € 258k)</option>
                            <option value="II">II Classifica (Fino a € 516k)</option>
                            <option value="III">III Classifica (Fino a € 1M)</option>
                            <option value="IV">IV Classifica o sup.</option>
                            <option value="Nessuna">Nessuna</option>
                        </select>
                        {/* Custom Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white"><path d="M1 1L5 5L9 1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fatturato */}
                <div>
                    <label className={labelStyle}>Fatturato Ultimo Anno</label>
                    <input
                        name="fatturato_ultimo_anno"
                        type="text"
                        placeholder="€ 0,00"
                        className={inputStyle}
                    />
                </div>

                {/* Ostacolo */}
                <div>
                    <label className={labelStyle}>Principale Ostacolo</label>
                    <input
                        name="principale_ostacolo"
                        type="text"
                        placeholder="Es. Ritardi Pagamenti / Burocrazia"
                        className={inputStyle}
                    />
                </div>
            </div>

            {/* ERROR MESSAGE */}
            {status === 'error' && (
                <div className="flex items-center gap-3 bg-red-900/20 border border-red-500/30 p-4 rounded-lg animate-in fade-in slide-in-from-top-2">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <p className="text-red-200 text-sm font-medium">{errorMessage}</p>
                </div>
            )}

            {/* ACTION BUTTON */}
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`
                    group w-full h-16 rounded-lg font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg
                    ${status === 'success'
                        ? 'bg-green-500 text-white cursor-default shadow-[0_0_30px_rgba(34,197,94,0.4)]'
                        : status === 'error'
                            ? 'bg-red-600 text-white'
                            : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-[1.01]'
                    }
                `}
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        ELABORAZIONE...
                    </>
                ) : status === 'success' ? (
                    <>
                        <CheckCircle className="w-6 h-6" />
                        CANDIDATURA INVIATA
                    </>
                ) : (
                    <>
                        INVIA CANDIDATURA UFFICIALE
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>

            {/* GDPR Footer */}
            <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest opacity-60">
                I dati saranno trattati secondo normativa GDPR vigente. Riservato titolari d'impresa.
            </p>
        </form>
    )
}
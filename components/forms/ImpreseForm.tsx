'use client'

import { useState } from 'react'
import { submitImprese } from '@/app/actions/submit-imprese'

export default function ImpreseForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault() // Stops the page from reloading
        setStatus('loading')
        setErrorMessage('')

        try {
            const formData = new FormData(event.currentTarget)
            const result = await submitImprese(formData)

            console.log('Server Response:', result) // We can see this in the browser console

            if (result.success) {
                setStatus('success')
                event.currentTarget.reset()
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

    return (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Ragione Sociale */}
            <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">RAGIONE SOCIALE IMPRESA</label>
                <input
                    name="ragione_sociale"
                    type="text"
                    required
                    placeholder="Es. Edilizia Futura S.r.l."
                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Categoria */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1">CATEGORIA PREVALENTE</label>
                    <select
                        name="categoria_prevalente"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-orange-500"
                    >
                        <option value="OG1">OG1 (Edifici Civili)</option>
                        <option value="OG2">OG2 (Restauro)</option>
                        <option value="OG3">OG3 (Strade)</option>
                        <option value="OS6">OS6 (Finiture)</option>
                        <option value="Altro">Altro</option>
                    </select>
                </div>

                {/* SOA */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1">ATTESTAZIONE SOA</label>
                    <select
                        name="attestazione_soa"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-orange-500"
                    >
                        <option value="I">I Classifica</option>
                        <option value="II">II Classifica</option>
                        <option value="III">III Classifica</option>
                        <option value="IV">IV Classifica o sup.</option>
                        <option value="Nessuna">Nessuna</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Fatturato */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1">FATTURATO ULTIMO ANNO</label>
                    <input
                        name="fatturato_ultimo_anno"
                        type="text"
                        placeholder="€ 0,00"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    />
                </div>

                {/* Ostacolo */}
                <div>
                    <label className="block text-xs font-bold text-gray-400 mb-1">PRINCIPALE OSTACOLO ATTUALE</label>
                    <input
                        name="principale_ostacolo"
                        type="text"
                        placeholder="Ritardi Pagamenti"
                        className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                    />
                </div>
            </div>

            {/* Button with Colors */}
            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-all ${status === 'success' ? 'bg-green-600 text-white cursor-default' :
                    status === 'error' ? 'bg-red-600 text-white' :
                        'bg-orange-500 hover:bg-orange-600 text-white'
                    }`}
            >
                {status === 'loading' ? 'Invio in corso...' :
                    status === 'success' ? 'Candidatura Inviata! ✅' :
                        status === 'error' ? 'Errore - Riprova' :
                            'Invia Candidatura Ufficiale →'}
            </button>

            {/* Explicit Error Message */}
            {status === 'error' && (
                <p className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded border border-red-500/50 mt-2">
                    ⚠️ {errorMessage}
                </p>
            )}
        </form>
    )
}
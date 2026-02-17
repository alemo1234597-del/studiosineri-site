'use server'

import { supabase } from '@/lib/supabase'

export async function submitImprese(formData: FormData) {
    console.log("🚀 Server Action Started")

    // 🕵️‍♂️ 1. DEBUG: Check if Vercel sees the keys
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!url || !key) {
        console.error("❌ CRITICAL ERROR: Missing Keys on Server")
        return {
            success: false,
            message: `ERRORE CONFIGURAZIONE: Vercel non vede le chiavi. URL: ${url ? 'Ok' : 'Missing'}, Key: ${key ? 'Ok' : 'Missing'}`
        }
    }

    const rawData = {
        ragione_sociale: formData.get('ragione_sociale'),
        categoria_prevalente: formData.get('categoria_prevalente'),
        attestazione_soa: formData.get('attestazione_soa'),
        fatturato_ultimo_anno: formData.get('fatturato_ultimo_anno'),
        principale_ostacolo: formData.get('principale_ostacolo'),
    }

    try {
        const { error } = await supabase
            .from('imprese_leads')
            .insert([rawData])

        if (error) {
            console.error('❌ Supabase Error:', error)
            return { success: false, message: `Errore Database: ${error.message}` }
        }

        return { success: true, message: 'Candidatura inviata con successo!' }
    } catch (e: any) {
        console.error('❌ Unexpected Error:', e)
        return { success: false, message: `Errore Imprevisto: ${e.message}` }
    }
}
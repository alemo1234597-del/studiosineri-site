'use server'

import { supabase } from '@/lib/supabase'

export async function submitAmministratori(formData: FormData) {
    console.log("🚀 Server Action Amministratori Started")

    // 1. Security Check
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return { success: false, message: 'ERRORE CONFIGURAZIONE: Chiavi mancanti.' }
    }

    // 2. Data Collection
    const rawData = {
        nome_studio: formData.get('studio-name'),
        email_ufficio: formData.get('email'),
        numero_condomini: formData.get('condo-count'), // e.g. "10-50", "50+"
        problema_attuale: formData.get('message'),
    }

    try {
        // 3. Send to Supabase 'amministratori_leads'
        const { error } = await supabase
            .from('amministratori_leads')
            .insert([rawData])

        if (error) {
            console.error('❌ Supabase Error:', error)
            return { success: false, message: `Errore Database: ${error.message}` }
        }

        return { success: true, message: 'Richiesta inviata con successo!' }
    } catch (e: any) {
        console.error('❌ Unexpected Error:', e)
        return { success: false, message: `Errore Imprevisto: ${e.message}` }
    }
}
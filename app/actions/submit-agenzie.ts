'use server'

import { supabase } from '@/lib/supabase'

export async function submitAgenzie(formData: FormData) {
    console.log("🚀 Server Action Agenzie Started")

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return { success: false, message: 'ERRORE CONFIGURAZIONE: Chiavi mancanti.' }
    }

    const rawData = {
        nome_completo: formData.get('full-name'),
        nome_agenzia: formData.get('agency-name'),
        email_aziendale: formData.get('email'),
        citta_operativa: formData.get('city'),
        // No 'message' column in this table either, based on your screenshot!
    }

    try {
        const { error } = await supabase
            .from('agenzie_leads')
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
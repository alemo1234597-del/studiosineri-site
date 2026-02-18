'use server'

import { supabase } from '@/lib/supabase'

export async function submitCommerciali(formData: FormData) {
    console.log("🚀 Server Action Commerciali Started")

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return { success: false, message: 'ERRORE CONFIGURAZIONE: Chiavi mancanti.' }
    }

    const rawData = {
        nome_cognome: formData.get('full-name'),
        nome_attivita: formData.get('business-name'),
        email: formData.get('email'),
        telefono: formData.get('phone'),
        tipo_locale: formData.get('locale-type'),
        // ❌ REMOVED 'messaggio' because it doesn't exist in the DB or Form
    }

    try {
        const { error } = await supabase
            .from('commerciali_leads')
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
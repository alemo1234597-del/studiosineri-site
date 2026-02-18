'use server'

import { supabase } from '@/lib/supabase'

export async function submitNotai(formData: FormData) {
    console.log("🚀 Server Action Notai Started")

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return { success: false, message: 'ERRORE CONFIGURAZIONE: Chiavi mancanti.' }
    }

    // Capture the phone input
    const phone = formData.get('phone')
    const email = formData.get('email')

    // Combine Email + Phone so we don't lose the phone number!
    const combinedContact = phone ? `${email} | Tel: ${phone}` : email

    const rawData = {
        nome_studio: formData.get('studio-name'),
        distretto: formData.get('district'),
        email_contatto: combinedContact, // Saves both here
    }

    try {
        const { error } = await supabase
            .from('notai_leads')
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
'use server'

import { supabase } from '@/lib/supabase'

export async function submitPrivati(formData: FormData) {
    console.log("🚀 Server Action Privati (New Design) Started")

    // 1. Security Check
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return { success: false, message: 'ERRORE CONFIGURAZIONE: Chiavi mancanti.' }
    }

    // 2. Smart Data Mapping
    // We combine "MQ" into the message so we don't need to change the database structure.
    const mq = formData.get('property-size')
    const userMessage = formData.get('message')
    const combinedMessage = `[MQ IMMOBILE: ${mq || 'N/D'}] - ${userMessage}`

    // We split "Full Name" into Nome/Cognome loosely
    const fullName = formData.get('full-name') as string || ''
    const nameParts = fullName.trim().split(' ')
    const nome = nameParts[0] || ''
    const cognome = nameParts.slice(1).join(' ') || ''

    const rawData = {
        nome: nome,
        cognome: cognome, // Saves the rest of the name here
        email: formData.get('company-email'), // Maps 'company-email' to DB 'email'
        telefono: formData.get('phone'),
        tipo_intervento: formData.get('service-type'),
        messaggio: combinedMessage, // Saves MQ + Message together
    }

    try {
        const { error } = await supabase
            .from('privati_leads')
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
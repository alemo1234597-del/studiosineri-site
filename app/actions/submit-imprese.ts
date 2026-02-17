'use server'

import { supabase } from '@/lib/supabase'

export async function submitImprese(formData: FormData) {
    const rawData = {
        ragione_sociale: formData.get('ragione_sociale'),
        categoria_prevalente: formData.get('categoria_prevalente'),
        attestazione_soa: formData.get('attestazione_soa'),
        fatturato_ultimo_anno: formData.get('fatturato_ultimo_anno'),
        principale_ostacolo: formData.get('principale_ostacolo'),
    }

    console.log('Attempting to save:', rawData)

    const { error } = await supabase
        .from('imprese_leads')
        .insert([rawData])

    if (error) {
        console.error('Supabase Error:', error)
        return { success: false, message: 'Errore nel salvataggio dati.' }
    }

    return { success: true, message: 'Candidatura inviata con successo!' }
}
'use server'

import { supabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export async function submitImprese(formData: FormData) {
    const rawData = {
        ragione_sociale: formData.get('ragione_sociale'),
        categoria_prevalente: formData.get('categoria_prevalente'),
        attestazione_soa: formData.get('attestazione_soa'),
        fatturato_ultimo_anno: formData.get('fatturato_ultimo_anno'),
        principale_ostacolo: formData.get('principale_ostacolo'),
    }

    // 1. Save to Supabase
    const { error } = await supabase
        .from('imprese_leads')
        .insert([rawData])

    if (error) {
        console.error('Supabase Error:', error)
        return { success: false, message: 'Errore nel salvataggio dati.' }
    }

    // 2. Revalidate (Refresh) the page so the form resets
    revalidatePath('/services/imprese')

    // 3. Return success
    return { success: true, message: 'Candidatura inviata con successo!' }
}
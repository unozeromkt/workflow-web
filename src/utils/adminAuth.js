import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const notConfiguredResult = {
    ok: false,
    error: 'Faltan variables de configuración en el frontend.'
};

export const getAdminSession = async () => {
    if (!isSupabaseConfigured || !supabase) {
        return { session: null, error: notConfiguredResult.error };
    }

    const { data, error } = await supabase.auth.getSession();
    return {
        session: data?.session || null,
        error: error?.message || null
    };
};

export const isCurrentUserAdmin = async () => {
    if (!isSupabaseConfigured || !supabase) {
        return notConfiguredResult;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData?.user) {
        return { ok: false, error: userError?.message || 'No hay usuario autenticado.' };
    }

    const { data, error } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', userData.user.id)
        .maybeSingle();

    if (error) {
        return { ok: false, error: error.message };
    }

    return {
        ok: data?.is_admin === true,
        error: data?.is_admin === true ? null : 'Tu usuario no tiene permisos de administrador.'
    };
};

export const loginAsAdmin = async (email, password) => {
    if (!isSupabaseConfigured || !supabase) {
        return notConfiguredResult;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        return { ok: false, error: error.message };
    }

    const adminCheck = await isCurrentUserAdmin();
    if (!adminCheck.ok) {
        await supabase.auth.signOut();
        return adminCheck;
    }

    return { ok: true, error: null };
};

export const logoutAdmin = async () => {
    if (!isSupabaseConfigured || !supabase) {
        return notConfiguredResult;
    }

    const { error } = await supabase.auth.signOut();
    return {
        ok: !error,
        error: error?.message || null
    };
};

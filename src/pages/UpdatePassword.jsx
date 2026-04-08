import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkingSession, setCheckingSession] = useState(true);
    const [hasRecoverySession, setHasRecoverySession] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!isSupabaseConfigured || !supabase) {
            setError('Supabase no está configurado en este entorno.');
            setCheckingSession(false);
            return;
        }

        let isMounted = true;

        const checkSession = async () => {
            const { data, error: sessionError } = await supabase.auth.getSession();
            if (!isMounted) {
                return;
            }

            if (sessionError) {
                setError(sessionError.message || 'No se pudo validar la sesión de recuperación.');
            }

            setHasRecoverySession(Boolean(data?.session));
            setCheckingSession(false);
        };

        checkSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                setHasRecoverySession(Boolean(session));
                setError('');
            }
        });

        return () => {
            isMounted = false;
            authListener?.subscription?.unsubscribe();
        };
    }, []);

    const validate = () => {
        if (password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres.';
        }

        if (password !== confirmPassword) {
            return 'Las contraseñas no coinciden.';
        }

        return '';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        if (!isSupabaseConfigured || !supabase) {
            setError('Supabase no está configurado en este entorno.');
            return;
        }

        if (!hasRecoverySession) {
            setError('El enlace de recuperación es inválido o expiró. Solicita uno nuevo.');
            return;
        }

        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setIsSubmitting(true);

        const { error: updateError } = await supabase.auth.updateUser({ password });

        if (updateError) {
            setError(updateError.message || 'No se pudo actualizar la contraseña.');
            setIsSubmitting(false);
            return;
        }

        setSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => navigate('/admin'), 1200);
    };

    return (
        <section
            className="section-dark section-padding"
            style={{
                minHeight: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)'
            }}
        >
            <div
                className="glass"
                style={{
                    width: '100%',
                    maxWidth: '560px',
                    padding: '2.25rem',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.72)',
                    border: '1px solid rgba(2, 100, 160, 0.2)'
                }}
            >
                <h1 style={{ marginBottom: '0.75rem', fontSize: 'clamp(1.7rem, 3.5vw, 2.2rem)', color: 'var(--text-primary-dark)' }}>
                    Actualizar contraseña
                </h1>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary-dark)', lineHeight: 1.6 }}>
                    Ingresa tu nueva contraseña para completar la recuperación de acceso.
                </p>

                {checkingSession ? (
                    <p style={{ color: 'var(--text-secondary-dark)', margin: 0 }}>Validando enlace de recuperación...</p>
                ) : success ? (
                    <div
                        style={{
                            display: 'flex',
                            gap: '0.75rem',
                            alignItems: 'center',
                            padding: '0.9rem 1rem',
                            borderRadius: '10px',
                            background: 'rgba(34, 197, 94, 0.15)',
                            color: '#166534',
                            border: '1px solid rgba(34, 197, 94, 0.3)'
                        }}
                    >
                        <CheckCircle2 size={18} />
                        <span>Contraseña actualizada correctamente. Redirigiendo...</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-primary-dark)', fontWeight: 600 }}>
                                Nueva contraseña
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    required
                                    style={{
                                        borderRadius: '10px',
                                        border: '1px solid rgba(2, 100, 160, 0.3)',
                                        padding: '0.75rem 0.9rem',
                                        fontSize: '0.95rem'
                                    }}
                                />
                            </label>

                            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-primary-dark)', fontWeight: 600 }}>
                                Confirmar contraseña
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    autoComplete="new-password"
                                    required
                                    style={{
                                        borderRadius: '10px',
                                        border: '1px solid rgba(2, 100, 160, 0.3)',
                                        padding: '0.75rem 0.9rem',
                                        fontSize: '0.95rem'
                                    }}
                                />
                            </label>
                        </div>

                        {error && (
                            <div
                                style={{
                                    marginBottom: '1rem',
                                    padding: '0.75rem 0.9rem',
                                    borderRadius: '10px',
                                    background: 'rgba(239, 68, 68, 0.12)',
                                    color: '#991b1b',
                                    border: '1px solid rgba(239, 68, 68, 0.3)'
                                }}
                            >
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting || !hasRecoverySession}
                            style={{
                                width: '100%',
                                border: 'none',
                                borderRadius: '999px',
                                padding: '0.8rem 1rem',
                                fontSize: '0.95rem',
                                fontWeight: 700,
                                color: '#fff',
                                background: isSubmitting || !hasRecoverySession ? '#7faec6' : '#0264A0',
                                cursor: isSubmitting || !hasRecoverySession ? 'not-allowed' : 'pointer',
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {isSubmitting ? 'Actualizando...' : 'Guardar nueva contraseña'} <ArrowRight size={16} />
                        </button>

                        {!hasRecoverySession && (
                            <p style={{ marginTop: '0.9rem', color: 'var(--text-secondary-dark)', fontSize: '0.9rem' }}>
                                Abre esta página desde el enlace de recuperación enviado por correo.
                            </p>
                        )}

                        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                            <Link to="/admin" style={{ color: '#0264A0', textDecoration: 'none', fontWeight: 600 }}>
                                Volver al acceso de administración
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default UpdatePassword;

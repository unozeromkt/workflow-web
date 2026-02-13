import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const AIAgentWidget = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="btn-primary"
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)',
                    zIndex: 9999,
                    cursor: 'pointer'
                }}
            >
                <MessageSquare size={24} color="white" />
            </button>
        );
    }

    return (
        <div className="glass" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '320px',
            zIndex: 9999,
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            animation: 'slideUp 0.3s ease-out'
        }}>
            <div style={{
                background: 'var(--gradient-primary)',
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%' }}></div>
                    <span style={{ fontWeight: '600', color: 'white' }}>Workflow AI Agent</span>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                    <X size={18} />
                </button>
            </div>

            <div style={{ padding: '1.5rem', background: 'rgba(5, 5, 17, 0.95)' }}>
                <p style={{ fontSize: '0.9rem', color: '#E2E8F0', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    Hola, soy el Agente de IA de Workflow. Puedo ayudarte a agendar una cita técnica o contarte más sobre nuestras soluciones en segundos.
                </p>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                        type="text"
                        placeholder="Escribe tu mensaje..."
                        style={{
                            flex: 1,
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            padding: '0.5rem',
                            color: 'white',
                            outline: 'none'
                        }}
                    />
                    <button style={{
                        background: 'var(--primary)',
                        border: 'none',
                        borderRadius: '8px',
                        width: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}>
                        <Send size={16} color="white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIAgentWidget;

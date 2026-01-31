// Theme Configuration
// Customize colors, fonts, and animations here

export const theme = {
    // Color Palette (Dark Theme)
    colors: {
        // Background colors
        background: {
            primary: '#0a0a0f',
            secondary: '#13131a',
            tertiary: '#1a1a24',
            card: 'rgba(26, 26, 36, 0.6)'
        },

        // Accent colors
        accent: {
            primary: '#6366f1', // Indigo
            secondary: '#8b5cf6', // Purple
            tertiary: '#ec4899', // Pink
            gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)'
        },

        // Text colors
        text: {
            primary: '#f8fafc',
            secondary: '#cbd5e1',
            tertiary: '#94a3b8',
            muted: '#64748b'
        },

        // Border colors
        border: {
            primary: 'rgba(148, 163, 184, 0.1)',
            secondary: 'rgba(148, 163, 184, 0.2)',
            accent: 'rgba(99, 102, 241, 0.3)'
        }
    },

    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "'JetBrains Mono', 'Fira Code', monospace"
    },

    // Spacing
    spacing: {
        section: '6rem',
        container: '1200px'
    },

    // Border Radius
    radius: {
        small: '0.5rem',
        medium: '1rem',
        large: '1.5rem',
        full: '9999px'
    },

    // Shadows
    shadows: {
        small: '0 2px 8px rgba(0, 0, 0, 0.1)',
        medium: '0 4px 16px rgba(0, 0, 0, 0.2)',
        large: '0 8px 32px rgba(0, 0, 0, 0.3)',
        glow: '0 0 20px rgba(99, 102, 241, 0.3)'
    },

    // Animations
    animations: {
        duration: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms'
        },
        easing: {
            default: 'cubic-bezier(0.4, 0, 0.2, 1)',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
    },

    // Glassmorphism
    glass: {
        background: 'rgba(26, 26, 36, 0.4)',
        blur: '12px',
        border: '1px solid rgba(148, 163, 184, 0.1)'
    }
};

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise dark theme palette
        'void': '#0a0a0f',
        'obsidian': '#12121a',
        'slate-dark': '#1a1a24',
        'steel': '#252532',
        'graphite': '#2d2d3a',
        'mercury': '#9ca3af',
        'silver': '#d1d5db',
        // Accent colors - terminal inspired
        'terminal-green': '#00ff9d',
        'terminal-cyan': '#00d4ff',
        'terminal-amber': '#ffb800',
        'terminal-red': '#ff4757',
        // Red Hat brand
        'redhat': '#ee0000',
        'redhat-dark': '#cc0000',
        // AWS brand
        'aws-orange': '#ff9900',
        // CNCF/K8s brand
        'k8s-blue': '#326ce5',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-terminal': 'linear-gradient(135deg, rgba(0,255,157,0.1) 0%, rgba(0,212,255,0.05) 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'scan-line': 'scan 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0,255,157,0.5), 0 0 10px rgba(0,255,157,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0,255,157,0.8), 0 0 30px rgba(0,255,157,0.5)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'terminal': '0 0 0 1px rgba(0,255,157,0.2), 0 0 30px rgba(0,255,157,0.1)',
        'card': '0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,157,0.2)',
      },
    },
  },
  plugins: [],
}

export default config

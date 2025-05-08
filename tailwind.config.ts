
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        'vt': ['VT323', 'monospace'],
        'runescape': ['RuneScape', 'serif'],
        'pixel': ['"Press Start 2P"', 'monospace'],
        'commodore': ['C64', 'monospace'],
        'amiga': ['"Amiga Forever"', 'monospace'],
        'ibm': ['"IBM PC"', 'monospace'],
        'atari': ['"Atari Classic"', 'monospace'],
        'apple2': ['"Apple II"', 'monospace'],
        'cga': ['CGA', 'monospace'],
        'zxspectrum': ['"ZX Spectrum"', 'monospace'],
        'msx': ['MSX', 'monospace'],
        'arcade': ['Arcade', 'monospace'],
        'nintendo': ['Nintendo', 'monospace'],
        'gameboy': ['GameBoy', 'monospace'],
        'sega': ['Sega', 'monospace'],
        'teletext': ['Teletext', 'monospace'],
        'terminal': ['Terminal', 'monospace'],
      },
      colors: {
        'win98': {
          'bg': '#c0c0c0',
          'border-light': '#ffffff',
          'border-dark': '#808080',
          'border-darker': '#404040',
          'title': '#000080',
          'button': '#c0c0c0',
        },
        'rs': {
          'black': '#000000',
          'red': '#ff0000',
          'yellow': '#ffff00',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'stars': "url('/lovable-uploads/2b052671-48b3-4c4f-b6cb-ff5708c94649.png')",
        'checkered': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2YwZjBmMCIvPjxyZWN0IHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiNmMGYwZjAiLz48cmVjdCB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')",
        'dots': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiM0MDQwNDAiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIxIiBmaWxsPSIjNDA0MDQwIi8+PC9zdmc+')",
      },
      animation: {
        "blink": "blink 1s steps(1) infinite",
        "rainbow": "rainbow 3s linear infinite",
        "pulse": "pulse 2s ease-in-out infinite",
        "glow": "glow 1.5s ease-in-out infinite",
        "fire": "fire 2s ease-in infinite",
        "sparkle": "sparkle 3s ease infinite",
        "rotate": "rotate 10s linear infinite",
        "bounce": "bounce 1s infinite",
        "shake": "shake 0.5s infinite",
        "flip": "flip 2s infinite",
        "zigzag": "zigzag 2s ease-in-out infinite",
        "glitch": "glitch 0.5s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        rainbow: {
          "0%": { color: "red" },
          "15%": { color: "orange" },
          "30%": { color: "yellow" },
          "45%": { color: "green" },
          "60%": { color: "blue" },
          "75%": { color: "indigo" },
          "90%": { color: "violet" },
          "100%": { color: "red" },
        },
        pulse: {
          "0%": { opacity: "0.7", transform: "scale(0.98)" },
          "50%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0.7", transform: "scale(0.98)" },
        },
        glow: {
          "0%": { textShadow: "0 0 0px currentColor" },
          "50%": { textShadow: "0 0 10px currentColor" },
          "100%": { textShadow: "0 0 0px currentColor" },
        },
        fire: {
          "0%": { textShadow: "0 0 5px #ff0000, 0 0 10px #ff8800" },
          "50%": { textShadow: "0 0 5px #ff0000, 0 0 15px #ff8800, 0 0 20px #ff0000" },
          "100%": { textShadow: "0 0 5px #ff0000, 0 0 10px #ff8800" },
        },
        sparkle: {
          "0%": { textShadow: "0 0 5px #ffffff, 0 0 10px #00ffff" },
          "50%": { textShadow: "0 0 10px #ffffff, 0 0 20px #00ffff, 0 0 30px #ffffff" },
          "100%": { textShadow: "0 0 5px #ffffff, 0 0 10px #00ffff" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(2px)" },
        },
        flip: {
          "0%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(-1)" },
          "100%": { transform: "scaleX(1)" },
        },
        zigzag: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px) translateY(-2px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(2px) translateY(-2px)" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

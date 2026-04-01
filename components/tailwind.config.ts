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
        tebex: {
          black: '#0A0A0A',
          white: '#FFFFFF',
          blue: '#0041E2',
          green: '#32B700',
          yellow: '#FFD400',
          red: '#F22800',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],  // DaisyUI removido — causava conflitos
}

export default config

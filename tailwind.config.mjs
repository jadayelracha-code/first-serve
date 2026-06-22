/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FDFBF5',          // Warm off-white — sunlit, soft
        surface: '#FFFFFF',     // Clean white cards
        court: {
          DEFAULT: '#5B8C5A',   // Tennis-court green — primary brand
          deep: '#3E6B3D',      // Deeper green for hover/contrast
        },
        clay: {
          DEFAULT: '#D96E3F',   // Warm clay-court orange — energy accent, CTAs
          deep: '#BC5628',      // Hover state for clay CTAs
        },
        sun: '#F2C14E',         // Sunny yellow — small highlights, the "ball"
        text: {
          DEFAULT: '#2B2B26',   // Soft near-black, never pure #000
          muted: '#6F6A60',     // Muted body / captions
        },
        line: '#E7E2D6',        // Hairline borders
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

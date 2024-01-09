/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    ],
    relative: true,
  },
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1536px',
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        bgBtnHover: 'var(--bg-button-hover)',
        bgMain: 'var(--bg-light)',
        bgDark: 'var(--bg-dark)',
        bgElement: 'var(--bg-element)',
        bgElementDark: 'var(--bg-element-dark)',
        colorTextMain: 'var(--color-text-main)',
        colorTextDark: 'var(--color-text-dark)',
        colorBorderMain: 'var(--color-border-main)',
        colorBorderDark: 'var(--color-border-dark)',
        colorBgInputMain: 'var(--color-bg-input)',
        colorBgInputDark: 'var(--color-bg-input-dark)',
      },
    },
    container: {
      padding: {
        DEFAULT: '10px',
        xl: '0',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1536px',
    },
    themes: [
      {
        dark: {
          primary: '#161616',
          secondary: '#ff7f07',
        },
      },
    ],
    darkTheme: 'dark',
  },
};

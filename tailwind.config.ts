import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgb-200-50-192': 'rgb(200, 50, 192)',
        'rgb-243-198-88': 'rgb(243, 198, 88)',
        'rgb-112-19-191': 'rgb(112, 19, 191)',
        custom: 'rgb(246, 195, 246)',
        'rgb-99-185-54': 'rgb(99, 185, 54)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom: 'rgb(246, 195, 246)',
      },
    },
  },
  plugins: [],
}

export default config

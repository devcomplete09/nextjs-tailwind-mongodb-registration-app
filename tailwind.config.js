module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: ['11px', '12px'],
        sm: ['12px', '16px'],
        base: ['14px', '20px'],
        md: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '32px'],
        xxl: ['24px', '36px'],
        xxxl: ['28px', '44px']
      },
      colors: {
        blue: '#0F52BA',
        dblue: '#1134A6',
        gray: '#EEEEEE',
        darkgray: '#b6b6b6',
        crayon: '#44444',
        platinum: '#EDE6E6',
        ivory: '#FBF9F6',
        white: '#FFFFFF',
        black: '#000000',
        red: '#ff6961',
        green: '#90ee90',
        plus: '#FFD700',
        pro: '#FF5A5F'
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      title: [
        '96px',
        {
          lineHeight: '116px',
          fontWeight: '500',
        },
      ],
      heading1: [
        '96px',
        {
          lineHeight: '86px',
          fontWeight: '700',
        },
      ],
      heading2: [
        '64px',
        {
          lineHeight: '76px',
          fontWeight: '500',
        },
      ],
      heading3: [
        '48px',
        {
          lineHeight: '48px',
          fontWeight: '500',
        },
      ],
      heading4: [
        '36px',
        {
          lineHeight: '44px',
          fontWeight: '500',
        },
      ],
      body1: [
        '32px',
        {
          lineHeight: '44px',
          fontWeight: '500',
        },
      ],
      body2: [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '500',
        },
      ],
      body3: [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '400',
        },
      ],
      body4: [
        '20px',
        {
          lineHeight: '27px',
          fontWeight: '400',
        },
      ],
      body5: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      body6: [
        '18px',
        {
          lineHeight: '24px',
          fontWeight: '700',
        },
      ],
      feedback: [
        '32px',
        {
          lineHeight: '52px',
          fontWeight: '400',
        },
      ],
      btnText: [
        '24px',
        {
          lineHeight: '28px',
          fontWeight: '400',
        },
      ],
      menuText: [
        '20px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      tinyText1: [
        '16px',
        {
          lineHeight: '22px',
          fontWeight: '400',
        },
      ],
      tinyText2: [
        '14px',
        {
          lineHeight: '22px',
          fontWeight: '500',
        },
      ],
      tinyText3: [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
    },
    colors: {
      light: `var(--light)`,
      light: `var(--light)`,
      light: `var(--light)`,
      light: `var(--light)`,
      dark1: `var(--dark1)`,
      dark2: `var(--dark2)`,
      dark3: `var(--dark3)`,
      dark4: `var(--dark4)`,
      blue1: `var(--blue1)`,
      blue2: `var(--blue2)`,
      blue3: `var(--blue3)`,
      grey1: `var(--grey1)`,
    },
    extend: {},
  },
  plugins: [],
};

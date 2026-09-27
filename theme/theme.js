import { createTheme } from '@mui/material/styles';

// Font stacks. The CSS variables are declared by next/font in app/layout.js.
export const HEADING = 'var(--font-heading), "Segoe UI", "Helvetica Neue", Arial, sans-serif';
export const BODY = 'var(--font-body), "Segoe UI", "Helvetica Neue", Arial, sans-serif';

// Deep neutral navy used for photo shading (hero, page banners, dark bands). Use as `rgba(${SHADE}, a)`.
export const SHADE = '12, 17, 36';

const { breakpoints } = createTheme();
const up = (key) => breakpoints.up(key);

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b3a6c',
      light: '#4a5fa8',
      dark: '#1f2d54',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fbbc04',
      light: '#fcc934',
      dark: '#e0a803',
      contrastText: '#1a1a1a',
    },
    background: {
      default: '#faf7f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#2c2c2c',
      secondary: '#6b6b6b',
    },
  },
  typography: {
    // Body family (Lato). Headings, buttons and brand marks use HEADING (Montserrat).
    fontFamily: BODY,
    fontWeightLight: 400, // Lato is loaded at 400/700 only
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 700,

    // ── Headings ── Montserrat, sizes step down ~1.25× and scale up at md
    h1: {
      fontFamily: HEADING,
      fontWeight: 800,
      fontSize: '2.25rem',   // 36px mobile
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
      [up('sm')]: { fontSize: '2.75rem' },
      [up('md')]: { fontSize: '3.5rem' }, // 56px desktop
    },
    h2: {
      fontFamily: HEADING,
      fontWeight: 800,
      fontSize: '1.875rem',  // 30px
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      [up('md')]: { fontSize: '2.5rem' }, // 40px
    },
    h3: {
      fontFamily: HEADING,
      fontWeight: 700,
      fontSize: '1.5rem',    // 24px
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      [up('md')]: { fontSize: '1.875rem' }, // 30px
    },
    h4: {
      fontFamily: HEADING,
      fontWeight: 700,
      fontSize: '1.3125rem', // 21px
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
      [up('md')]: { fontSize: '1.5rem' }, // 24px
    },
    h5: {
      fontFamily: HEADING,
      fontWeight: 700,
      fontSize: '1.125rem',  // 18px
      lineHeight: 1.35,
      [up('md')]: { fontSize: '1.25rem' }, // 20px
    },
    h6: {
      fontFamily: HEADING,
      fontWeight: 600,
      fontSize: '1rem',      // 16px
      lineHeight: 1.4,
    },

    // ── Supporting text ── Lato
    subtitle1: {             // lead / intro paragraph under page titles
      fontFamily: BODY,
      fontWeight: 400,
      fontSize: '1.125rem',
      lineHeight: 1.6,
      [up('md')]: { fontSize: '1.25rem' },
    },
    subtitle2: {             // small emphasised label
      fontFamily: BODY,
      fontWeight: 700,
      fontSize: '0.9375rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: BODY,
      fontSize: '1rem',      // 16px
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: BODY,
      fontSize: '0.875rem',  // 14px
      lineHeight: 1.6,
    },
    button: {
      fontFamily: HEADING,
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    caption: {               // meta info: dates, locations, fine print
      fontFamily: BODY,
      fontSize: '0.8125rem', // 13px
      lineHeight: 1.5,
      letterSpacing: '0.01em',
    },
    overline: {              // eyebrows, tags, stat labels, footer column titles
      fontFamily: BODY,
      fontWeight: 700,
      fontSize: '0.75rem',   // 12px
      lineHeight: 1.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },

    // ── Custom variant ── big numbers (stats, dates, amounts)
    stat: {
      fontFamily: HEADING,
      fontWeight: 800,
      fontSize: '2rem',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums',
      [up('md')]: { fontSize: '2.25rem' },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(43, 58, 108, 0.08)',
    '0 2px 12px rgba(43, 58, 108, 0.1)',
    '0 2px 16px rgba(43, 58, 108, 0.12)',
    '0 4px 20px rgba(43, 58, 108, 0.15)',
    '0 4px 24px rgba(43, 58, 108, 0.18)',
    '0 4px 28px rgba(43, 58, 108, 0.2)',
    '0 6px 32px rgba(43, 58, 108, 0.22)',
    '0 8px 36px rgba(43, 58, 108, 0.24)',
    '0 8px 40px rgba(43, 58, 108, 0.26)',
    '0 10px 44px rgba(43, 58, 108, 0.28)',
    '0 10px 48px rgba(43, 58, 108, 0.3)',
    '0 12px 52px rgba(43, 58, 108, 0.32)',
    '0 12px 56px rgba(43, 58, 108, 0.34)',
    '0 14px 60px rgba(43, 58, 108, 0.36)',
    '0 14px 64px rgba(43, 58, 108, 0.38)',
    '0 16px 68px rgba(43, 58, 108, 0.4)',
    '0 16px 72px rgba(43, 58, 108, 0.42)',
    '0 18px 76px rgba(43, 58, 108, 0.44)',
    '0 18px 80px rgba(43, 58, 108, 0.46)',
    '0 20px 84px rgba(43, 58, 108, 0.48)',
    '0 20px 88px rgba(43, 58, 108, 0.5)',
    '0 22px 92px rgba(43, 58, 108, 0.52)',
    '0 22px 96px rgba(43, 58, 108, 0.54)',
    '0 24px 100px rgba(43, 58, 108, 0.56)',
  ],
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'p',
          subtitle2: 'p',
          overline: 'span',
          stat: 'p',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: BODY,
          fontWeight: 700,
          letterSpacing: '0.02em',
        },
        sizeSmall: {
          fontSize: '0.75rem',
        },
      },
    },
    // Calm, flat buttons: no glow, no lift - colour change only on hover.
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: {
          fontSize: '1rem',
          padding: '12px 28px',
        },
        root: {
          borderRadius: 30,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease',
          '&:hover': { boxShadow: 'none' },
        },
        outlined: {
          borderWidth: 1,
        },
      },
    },
    // Flat cards with a hairline border. Clickable cards add their own soft hover shadow.
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid rgba(43, 58, 108, 0.1)',
          transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: { borderRadius: 12 },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { height: 6, borderRadius: 3, backgroundColor: 'rgba(43, 58, 108, 0.08)' },
        bar: { borderRadius: 3 },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 20px rgba(43, 58, 108, 0.1)',
        },
      },
    },
  },
});

export default theme;

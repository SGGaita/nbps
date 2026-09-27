import { createTheme } from '@mui/material/styles';

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
    fontFamily: '"DM Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 900,
      fontSize: '3.5rem',
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 30,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: '0 4px 14px rgba(251, 188, 4, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(251, 188, 4, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 32px rgba(43, 58, 108, 0.2)',
          },
        },
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

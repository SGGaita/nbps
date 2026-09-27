'use client';

import { Box, Typography } from '@mui/material';

// Scroll-reveal props for framer-motion elements: <motion.div {...reveal} transition={{ ... }}>
export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

// Gold-line section label used above every section heading.
export function Eyebrow({ children, light }) {
  return (
    <Typography
      variant="overline"
      sx={{
        color: light ? 'secondary.light' : 'secondary.dark',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        mb: 1.5,
        '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
      }}
    >
      {children}
    </Typography>
  );
}

// Rounded square icon tile for cards. `dark` for use on the deep navy bands.
export function IconTile({ icon: Icon, dark }) {
  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: dark ? 'rgba(251, 188, 4, 0.14)' : 'rgba(43, 58, 108, 0.06)',
        color: dark ? 'secondary.main' : 'primary.main',
        mb: 2.5,
        flexShrink: 0,
      }}
    >
      <Icon />
    </Box>
  );
}

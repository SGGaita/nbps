'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { SHADE } from '../theme/theme';

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Photo banner used at the top of every inner page - same shading and type as the home hero.
 *
 * <PageHero eyebrow="Alumni Projects at NBPS" title="Our Projects" description="…" image="/hero/x.jpg" />
 * Optional: `position` (background-position), `children` (e.g. buttons under the description).
 */
export default function PageHero({ eyebrow, title, description, image, position = 'center', children }) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: 340, md: 440 },
        height: { md: '48vh' },
        maxHeight: 540,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: `rgb(${SHADE})`,
        color: 'common.white',
      }}
    >
      {/* Photo with a slow settle-in zoom */}
      <motion.div
        aria-hidden
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: position,
        }}
      />

      {/* Shading: strong behind the text, clear over the right of the photo */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: `linear-gradient(180deg, rgba(${SHADE},0.55) 0%, rgba(${SHADE},0.8) 100%)`,
            md: `linear-gradient(90deg, rgba(${SHADE},0.88) 0%, rgba(${SHADE},0.66) 38%, rgba(${SHADE},0.15) 72%, rgba(${SHADE},0.05) 100%)`,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 7, md: 8 } }}>
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
        >
          <Box sx={{ maxWidth: 620 }}>
            {eyebrow && (
              <motion.div variants={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ width: 32, height: 2, backgroundColor: 'secondary.main' }} />
                  <Typography
                    variant="overline"
                    sx={{ color: 'secondary.light', letterSpacing: '0.18em', lineHeight: 1 }}
                  >
                    {eyebrow}
                  </Typography>
                </Box>
              </motion.div>
            )}

            <motion.div variants={item}>
              <Typography
                variant="h1"
                sx={{ lineHeight: 1.08, textWrap: 'balance', mb: description ? 2 : 0 }}
              >
                {title}
              </Typography>
            </motion.div>

            {description && (
              <motion.div variants={item}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'rgba(255,255,255,0.82)', maxWidth: 540, textWrap: 'pretty' }}
                >
                  {description}
                </Typography>
              </motion.div>
            )}

            {children && (
              <motion.div variants={item}>
                <Box sx={{ mt: 4, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>{children}</Box>
              </motion.div>
            )}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

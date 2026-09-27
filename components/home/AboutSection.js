'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  People,
  Timeline,
} from '@mui/icons-material';
import { HEADING, SHADE } from '../../theme/theme';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: People, number: '1,200+', label: 'Registered Alumni' },
  { icon: Timeline, number: '30+', label: 'Years of Alumni Network' },
];

export default function AboutSection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: 'primary.main',
        py: { xs: 8, md: 11 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: '1 1 0', minWidth: 0, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.light',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                Who We Are
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography variant="h2" sx={{ color: 'common.white', mb: 2.5, textWrap: 'balance' }}>
                One School, One Family
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.72)', maxWidth: 460, mb: 5 }}
              >
                The Nyandarua Boarding Primary School Alumni Association unites graduates across
                generations, fostering lifelong bonds, community development, and giving back to our
                beloved institution in Nyandarua County, Kenya.
              </Typography>
            </motion.div>

            {/* Stats Grid */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  style={{ flex: '1 1 calc(50% - 8px)', minWidth: 170 }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      height: '100%',
                    }}
                  >
                    <CardContent sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(251, 188, 4, 0.12)',
                          color: 'secondary.main',
                          flexShrink: 0,
                        }}
                      >
                        <stat.icon sx={{ fontSize: '1.25rem' }} />
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="stat" sx={{ color: 'common.white', fontSize: '1.375rem', lineHeight: 1.1 }}>
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'rgba(255, 255, 255, 0.55)', display: 'block', mt: 0.25 }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Right Visual */}
          <Box sx={{ flex: '1 1 0', width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 320, sm: 400, md: 460 },
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url(/hero/alumni-family.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                  }}
                />
                <Box
                  aria-hidden
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(0deg, rgba(${SHADE},0.75) 0%, rgba(${SHADE},0) 45%)`,
                  }}
                />

                {/* Caption */}
                <Box sx={{ position: 'absolute', left: 24, right: 24, bottom: 22 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: 'common.white', fontSize: '1.0625rem', mb: 0.25 }}
                  >
                    The NBPS Alumni family
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Gathered together, generations apart
                  </Typography>
                </Box>

                {/* Est. badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(12, 17, 36, 0.55)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '30px',
                    pl: 1,
                    pr: 2,
                    py: 0.75,
                  }}
                >
                  <Box
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      backgroundColor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: HEADING,
                      fontWeight: 800,
                      fontSize: '0.75rem',
                      color: 'primary.main',
                      flexShrink: 0,
                    }}
                  >
                    90
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ color: 'common.white', fontWeight: 600, letterSpacing: '0.02em' }}
                  >
                    Est. 1990
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

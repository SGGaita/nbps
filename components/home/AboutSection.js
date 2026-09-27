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
  Construction,
  AttachMoney,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { icon: People, number: '1,200+', label: 'Registered Alumni' },
  { icon: Timeline, number: '30+', label: 'Years of Alumni Network' },
  { icon: Construction, number: '12', label: 'Active Projects' },
  { icon: AttachMoney, number: 'KSh 4M+', label: 'Raised for School' },
];

export default function AboutSection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: 'primary.main',
        py: { xs: 6, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': {
                    content: '""',
                    width: 30,
                    height: 2,
                    backgroundColor: 'secondary.main',
                    borderRadius: 1,
                  },
                }}
              >
                Who We Are
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 900,
                  color: 'white',
                  mb: 2,
                  lineHeight: 1.15,
                }}
              >
                NBPS Alumni —<br />One School, One Family
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  maxWidth: 460,
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                The Nyandarua Boarding Primary School Alumni Association unites graduates across generations, fostering lifelong bonds, community development, and giving back to our beloved institution in Nyandarua County, Kenya.
              </Typography>
            </motion.div>

            {/* Stats Grid */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  style={{ flex: '1 1 calc(50% - 8px)', minWidth: 180 }}
                >
                  <Card
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      border: `1px solid rgba(251, 188, 4, 0.25)`,
                      borderLeft: `3px solid ${theme.palette.secondary.main}`,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: '2.2rem',
                          fontWeight: 900,
                          color: 'secondary.light',
                          lineHeight: 1,
                          mb: 0.5,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Right Visual */}
          <Box sx={{ flex: 1, width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: 420,
                  borderRadius: 4,
                  overflow: 'hidden',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(58, 77, 138, 0.7), rgba(74, 95, 168, 0.7))',
                  },
                }}
              >
                {/* Icon Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 24,
                    left: 24,
                    width: 50,
                    height: 50,
                    backgroundColor: 'rgba(251, 188, 4, 0.2)',
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <People sx={{ fontSize: '1.4rem', color: 'secondary.light' }} />
                </Box>

                {/* Est Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 24,
                    right: 24,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2.5,
                    px: 3,
                    py: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: 'white',
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    Est. 1990
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    Alumni Association
                  </Typography>
                </Box>

                {/* Center Text */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '5rem',
                      fontWeight: 900,
                      color: 'rgba(255, 255, 255, 0.15)',
                      letterSpacing: '-5px',
                      userSelect: 'none',
                    }}
                  >
                    NBPS
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

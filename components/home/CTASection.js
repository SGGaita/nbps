'use client';

import { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import {
  Favorite,
  PersonAdd,
  ArrowForward,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const ctaCards = [
  {
    icon: Favorite,
    title: 'Support Our Cause — Donate Today',
    description: 'Every shilling you give goes directly towards transforming the NBPS experience for current students and supporting our fellow alumni in need.',
    buttonText: 'Make a Donation',
    href: '/donate',
    color: 'primary',
  },
  {
    icon: PersonAdd,
    title: 'Join the Alumni Network — Register Now',
    description: 'Are you an NBPS graduate? Register today and become part of our growing family. Stay informed, attend events, and reconnect with old classmates.',
    buttonText: 'Register as Alumni',
    href: '/register',
    color: 'secondary',
  },
];

export default function CTASection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: '#f0ead8',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {ctaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{
                  flex: '1 1 calc(50% - 12px)',
                  minWidth: 280,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: card.color === 'primary' ? 'primary.main' : 'secondary.main',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: theme.shadows[12],
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      right: -40,
                      bottom: -40,
                      width: 200,
                      height: 200,
                      opacity: 0.08,
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='${
                        card.icon === Favorite
                          ? 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                          : 'M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'
                      }'/%3E%3C/svg%3E")`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Icon sx={{ fontSize: '2rem' }} />
                    </Box>

                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        mb: 2,
                        lineHeight: 1.2,
                      }}
                    >
                      {card.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        opacity: 0.9,
                        mb: 3,
                        lineHeight: 1.6,
                        maxWidth: 340,
                      }}
                    >
                      {card.description}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="large"
                      endIcon={<ArrowForward />}
                      href={card.href}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'white',
                        fontWeight: 600,
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      {card.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

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

const ctaCards = [
  {
    icon: Favorite,
    title: 'Support Our Cause',
    description: 'Every shilling you give goes directly towards transforming the NBPS experience for current students and supporting fellow alumni in need.',
    buttonText: 'Make a Donation',
    href: '/donate',
  },
  {
    icon: PersonAdd,
    title: 'Join the Alumni Network',
    description: 'Are you an NBPS graduate? Register today and become part of our growing family - stay informed, attend events, and reconnect with old classmates.',
    buttonText: 'Register as Alumni',
    href: '/register',
  },
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box ref={ref} sx={{ backgroundColor: '#f0ead8', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 5 }, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="overline" sx={{ color: 'secondary.dark', display: 'block', mb: 1 }}>
              Get Involved
            </Typography>
            <Typography variant="h3" sx={{ color: 'primary.main' }}>
              Two Ways to Give Back
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {ctaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ flex: '1 1 calc(50% - 12px)', minWidth: 280 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(74, 95, 168, 0.06)',
                    border: '1px solid rgba(74, 95, 168, 0.18)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      borderColor: 'rgba(74, 95, 168, 0.32)',
                      boxShadow: '0 12px 32px rgba(12, 17, 36, 0.06)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, display: 'flex', alignItems: 'flex-start', gap: 2.5 }}>
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 52,
                        height: 52,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(74, 95, 168, 0.14)',
                        color: 'primary.light',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon sx={{ fontSize: '1.625rem' }} />
                    </Box>

                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                        {card.description}
                      </Typography>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<ArrowForward />}
                        href={card.href}
                        sx={{ borderColor: 'rgba(74, 95, 168, 0.4)' }}
                      >
                        {card.buttonText}
                      </Button>
                    </Box>
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

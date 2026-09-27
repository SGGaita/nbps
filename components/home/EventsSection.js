'use client';

import { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import {
  CalendarMonth,
  LocationOn,
  Schedule,
  ArrowForward,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const events = [
  {
    day: '26',
    month: 'Apr',
    title: 'Annual General Meeting (AGM) 2025',
    location: 'Nyandarua County Hall',
    time: '10:00 AM',
    color: 'primary',
  },
  {
    day: '03',
    month: 'May',
    title: 'Alumni Fun Day 2025 🎉',
    location: 'NBPS Grounds',
    time: '9:00 AM – 6:00 PM',
    color: 'secondary',
  },
  {
    day: '17',
    month: 'May',
    title: 'Health & Fitness Walk/Run Challenge',
    location: 'Nyahururu Town',
    time: '6:00 AM',
    color: 'info',
  },
];

export default function EventsSection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: '#f0ead8',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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
            Stay Connected
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'var(--font-playfair)',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 900,
              color: 'primary.main',
              mb: 1,
            }}
          >
            Upcoming Events
          </Typography>
        </motion.div>

        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: 'secondary.main',
            borderRadius: 2,
            mb: 5,
          }}
        />

        {/* Events List */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mb: 4,
          }}
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card
                sx={{
                  display: 'flex',
                  gap: 2,
                  p: 2,
                  borderLeft: `3px solid ${
                    event.color === 'primary'
                      ? theme.palette.primary.main
                      : event.color === 'secondary'
                      ? theme.palette.secondary.main
                      : '#1a3a5e'
                  }`,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    boxShadow: theme.shadows[6],
                  },
                }}
              >
                {/* Date Box */}
                <Box
                  sx={{
                    minWidth: 70,
                    height: 70,
                    backgroundColor:
                      event.color === 'primary'
                        ? 'primary.main'
                        : event.color === 'secondary'
                        ? 'secondary.main'
                        : '#1a3a5e',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-playfair)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {event.day}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      opacity: 0.9,
                    }}
                  >
                    {event.month}
                  </Typography>
                </Box>

                {/* Event Info */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 0.5,
                      fontSize: '1.05rem',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        {event.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Schedule sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForward />}
            href="/activities"
            size="large"
          >
            Full Events Calendar
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

'use client';

import { useRef } from 'react';
import { Box, Container, Typography, Card, Button } from '@mui/material';
import { LocationOn, Schedule, ArrowForward, Groups } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const events = [
  {
    day: '26',
    month: 'Apr',
    title: 'Annual General Meeting (AGM) 2025',
    location: 'Nyandarua County Hall',
    time: '10:00 AM',
    category: 'Meeting',
    image: null,
  },
  {
    day: '03',
    month: 'May',
    title: 'Alumni Fun Day 2025',
    location: 'NBPS Grounds',
    time: '9:00 AM - 6:00 PM',
    category: 'Social',
    image: '/hero/fun-day.jpg',
  },
  {
    day: '17',
    month: 'May',
    title: 'Health & Fitness Walk/Run Challenge',
    location: 'Nyahururu Town',
    time: '6:00 AM',
    category: 'Fitness',
    image: '/hero/fitness.jpg',
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box ref={ref} sx={{ backgroundColor: '#f0ead8', py: { xs: 8, md: 11 } }}>
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
              color: 'secondary.dark',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 1.5,
              '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
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
          <Typography variant="h2" sx={{ color: 'primary.main', mb: 6 }}>
            Upcoming Events
          </Typography>
        </motion.div>

        {/* Events List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 5 }}>
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card
                component="a"
                href="/activities"
                sx={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: { xs: 2, sm: 2.5 },
                  p: { xs: 2, sm: 2.5 },
                  textDecoration: 'none',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    borderColor: 'rgba(43, 58, 108, 0.22)',
                    boxShadow: '0 12px 32px rgba(12, 17, 36, 0.08)',
                  },
                }}
              >
                {/* Date */}
                <Box
                  sx={{
                    width: 68,
                    flexShrink: 0,
                    backgroundColor: 'rgba(43, 58, 108, 0.05)',
                    borderTop: '3px solid',
                    borderTopColor: 'secondary.main',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.main',
                  }}
                >
                  <Typography variant="stat" sx={{ fontSize: '1.625rem' }}>
                    {event.day}
                  </Typography>
                  <Typography variant="overline" sx={{ opacity: 0.85 }}>
                    {event.month}
                  </Typography>
                </Box>

                {/* Image (or a plain placeholder when none is set) */}
                <Box
                  sx={{
                    width: { xs: 84, sm: 120 },
                    flexShrink: 0,
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(43, 58, 108, 0.06)',
                    display: event.image ? 'block' : 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {event.image ? (
                    <Box
                      component="img"
                      src={event.image}
                      alt=""
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <Groups sx={{ color: 'primary.main', opacity: 0.35, fontSize: '1.75rem' }} />
                  )}
                </Box>

                {/* Event Info */}
                <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0.75 }}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.75,
                      alignSelf: 'flex-start',
                      px: 1.25,
                      py: 0.25,
                      borderRadius: '30px',
                      backgroundColor: 'rgba(43, 58, 108, 0.06)',
                    }}
                  >
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'secondary.main' }} />
                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>
                      {event.category}
                    </Typography>
                  </Box>

                  <Typography variant="h6" sx={{ color: 'primary.main' }}>
                    {event.title}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {event.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Schedule sx={{ fontSize: '0.9rem', color: 'text.secondary' }} />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {event.time}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Affordance */}
                <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', pl: 1 }}>
                  <ArrowForward sx={{ color: 'text.secondary', fontSize: '1.125rem' }} />
                </Box>
              </Card>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button variant="contained" color="secondary" endIcon={<ArrowForward />} href="/activities" size="large">
            Full Events Calendar
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}

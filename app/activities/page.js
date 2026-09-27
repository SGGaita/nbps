'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import {
  CalendarMonth,
  LocationOn,
  Schedule,
  ArrowForward,
  EmojiEvents,
  Favorite,
  Groups,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const upcomingEvents = [
  {
    day: '26',
    month: 'Apr',
    year: '2025',
    title: 'Annual General Meeting (AGM) 2025',
    description: 'Join us for our yearly AGM where we review progress, elect new officials, and plan for the future of our association.',
    location: 'Nyandarua County Hall',
    time: '10:00 AM - 2:00 PM',
    category: 'Official',
    icon: Groups,
  },
  {
    day: '03',
    month: 'May',
    year: '2025',
    title: 'Alumni Fun Day 2025',
    description: 'Our biggest event of the year! Games, food, music, networking, and reconnecting with old classmates.',
    location: 'NBPS Grounds',
    time: '9:00 AM - 6:00 PM',
    category: 'Social',
    icon: EmojiEvents,
  },
  {
    day: '17',
    month: 'May',
    year: '2025',
    title: 'Health & Fitness Walk/Run Challenge',
    description: 'A 5km/10km charity walk/run to promote health and raise funds for school projects.',
    location: 'Nyahururu Town',
    time: '6:00 AM',
    category: 'Charity',
    icon: Favorite,
  },
];

const pastEvents = [
  {
    title: 'Fun Day 2024',
    date: 'May 2024',
    description: 'Over 300 alumni attended our annual fun day with games, food, and entertainment.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  },
  {
    title: 'Classroom Handover Ceremony',
    date: 'March 2024',
    description: 'Successfully handed over 4 renovated classrooms to the school administration.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  },
  {
    title: 'Networking Dinner',
    date: 'December 2023',
    description: 'Professional networking event bringing together alumni from various industries.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
];

export default function ActivitiesPage() {
  const theme = useTheme();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(43, 58, 108, 0.92)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                mb: 2,
              }}
            >
              Events & Activities
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Stay connected through our vibrant calendar of alumni events and activities
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Upcoming Events */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            <Box
              sx={{
                width: 60,
                height: 3,
                backgroundColor: 'secondary.main',
                borderRadius: 2,
                mb: 5,
              }}
            />
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 3,
                      p: 3,
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    {/* Date Box */}
                    <Box
                      sx={{
                        minWidth: 100,
                        height: 100,
                        backgroundColor: 'secondary.main',
                        borderRadius: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontSize: '2.5rem',
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {event.day}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          opacity: 0.9,
                        }}
                      >
                        {event.month}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '0.7rem',
                          opacity: 0.8,
                        }}
                      >
                        {event.year}
                      </Typography>
                    </Box>

                    {/* Event Info */}
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1 }}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            backgroundColor: 'rgba(251, 188, 4, 0.15)',
                            borderRadius: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                            <Typography
                              variant="h5"
                              sx={{
                                fontWeight: 600,
                                color: 'primary.main',
                                fontSize: '1.25rem',
                              }}
                            >
                              {event.title}
                            </Typography>
                            <Chip
                              label={event.category}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(43, 58, 108, 0.1)',
                                color: 'primary.main',
                                fontWeight: 600,
                                fontSize: '0.7rem',
                              }}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              mb: 2,
                              lineHeight: 1.6,
                            }}
                          >
                            {event.description}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 3,
                              flexWrap: 'wrap',
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                              <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                {event.location}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                              <Schedule sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                                {event.time}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    {/* Action Button */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        endIcon={<ArrowForward />}
                        sx={{ whiteSpace: 'nowrap' }}
                      >
                        Register
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Past Events */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f0ead8' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Past Events Highlights
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 3,
                backgroundColor: 'secondary.main',
                borderRadius: 2,
                mb: 5,
              }}
            />
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: '1 1 calc(33.333% - 22px)',
                  minWidth: 280,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 200,
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {event.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        my: 1,
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

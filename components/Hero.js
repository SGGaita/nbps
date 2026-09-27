'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  Favorite,
  ChevronLeft,
  ChevronRight,
  FiberManualRecord,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const slides = [
  {
    title: 'Together We Rise, Forever NBPS',
    description: 'Connecting generations of Nyandarua Boarding Primary School graduates. Building community, giving back, and honoring our roots in the heart of Nyandarua County.',
    tag: 'NBPS Alumni Association',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80', // University campus
    primaryAction: { text: 'Meet the Alumni', href: '/about' },
    secondaryAction: { text: 'Support Us', href: '/donate' },
  },
  {
    title: 'Looking Out For Each Other',
    description: 'Our welfare arm ensures no alumnus walks through hardship alone. From medical emergencies to bereavement support — we stand together as one family.',
    tag: 'Welfare Program',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80', // Community support
    primaryAction: { text: 'Welfare Details', href: '/about' },
    secondaryAction: { text: 'Contribute Now', href: '/donate' },
  },
  {
    title: 'Reunion, Laughter & Memories',
    description: 'Our annual Fun Day brings together alumni from all graduation years for a day of games, networking, and celebrating our shared heritage.',
    tag: 'Annual Fun Day',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&q=80', // Group celebration
    primaryAction: { text: 'View Events', href: '/activities' },
    secondaryAction: { text: 'Register Today', href: '/register' },
  },
  {
    title: 'Building a Legacy Back at NBPS',
    description: 'From classroom renovations to bursary funds, our projects are transforming lives. Alumni giving back to the institution that shaped us.',
    tag: 'Community Projects',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80', // School building
    primaryAction: { text: 'View Projects', href: '/projects' },
    secondaryAction: { text: 'Fund a Project', href: '/donate' },
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '70vh', md: '85vh' },
        minHeight: 560,
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {/* Background Image */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(105deg, rgba(43, 58, 108, 0.92) 0%, rgba(43, 58, 108, 0.6) 55%, rgba(43, 58, 108, 0.3) 100%)',
              },
            }}
          />

          {/* Content */}
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: 680, color: 'white' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(251, 188, 4, 0.2)',
                    border: `1px solid ${theme.palette.secondary.main}`,
                    borderRadius: 25,
                    px: 2,
                    py: 0.75,
                    mb: 3,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.secondary.light,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontSize: '0.72rem',
                    }}
                  >
                    {slides[currentSlide].tag}
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  {slides[currentSlide].title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    mb: 4,
                    maxWidth: 480,
                    lineHeight: 1.7,
                  }}
                >
                  {slides[currentSlide].description}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForward />}
                    href={slides[currentSlide].primaryAction.href}
                    sx={{
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    {slides[currentSlide].primaryAction.text}
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<Favorite />}
                    href={slides[currentSlide].secondaryAction.href}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    {slides[currentSlide].secondaryAction.text}
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </motion.div>
      </AnimatePresence>

      {/* Slide Counter */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: 16, md: 32 },
          right: { xs: 16, md: 48 },
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.6)',
          letterSpacing: '0.05em',
          zIndex: 10,
        }}
      >
        <Box component="span" sx={{ color: theme.palette.secondary.light, fontWeight: 600 }}>
          {String(currentSlide + 1).padStart(2, '0')}
        </Box>
        {' / '}
        {String(slides.length).padStart(2, '0')}
      </Box>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 24, md: 40 },
          left: { xs: 16, md: 80 },
          display: 'flex',
          gap: 1.5,
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <IconButton
            key={index}
            size="small"
            onClick={() => setCurrentSlide(index)}
            sx={{
              p: 0,
              color: index === currentSlide ? theme.palette.secondary.main : 'rgba(255, 255, 255, 0.5)',
              transition: 'all 0.3s',
              transform: index === currentSlide ? 'scale(1.3)' : 'scale(1)',
            }}
          >
            <FiberManualRecord sx={{ fontSize: 10 }} />
          </IconButton>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 20, md: 32 },
          right: { xs: 16, md: 48 },
          display: 'flex',
          gap: 1.5,
          zIndex: 10,
        }}
      >
        {[
          { icon: ChevronLeft, onClick: handlePrevious },
          { icon: ChevronRight, onClick: handleNext },
        ].map((item, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              onClick={item.onClick}
              sx={{
                width: 44,
                height: 44,
                border: '1px solid rgba(255, 255, 255, 0.4)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(6px)',
                color: 'white',
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                },
              }}
            >
              <item.icon />
            </IconButton>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

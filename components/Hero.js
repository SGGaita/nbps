'use client';

import { useState } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { ArrowForward, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { HEADING, SHADE } from '../theme/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

// How long each slide stays on screen (ms). Pauses while the pointer is over the hero.
const SLIDE_DURATION = 30000;

const slides = [
  {
    title: 'Together We Rise, Forever NBPS',
    description: 'Connecting generations of Nyandarua Boarding Primary School graduates. Building community, giving back, and honoring our roots in the heart of Nyandarua County.',
    tag: 'NBPS Alumni Association',
    label: 'Our Alumni',
    image: '/hero/alumni-group.jpg', // NBPS alumni group photo
    position: 'center 55%',
    primaryAction: { text: 'Meet the Alumni', href: '/about' },
    secondaryAction: { text: 'Support Us', href: '/donate' },
  },
  {
    title: 'Building a Legacy Back at NBPS',
    description: 'From classroom renovations to bursary funds, our projects are transforming lives - alumni giving back to the school that shaped us.',
    tag: 'Alumni Projects at NBPS',
    label: 'School Projects',
    image: '/hero/nbps-library.jpg', // NBPS Library render (Atrium Architects)
    position: 'center 40%',
    primaryAction: { text: 'View Projects', href: '/projects' },
    secondaryAction: { text: 'Fund a Project', href: '/donate' },
  },
  {
    title: 'Looking Out For Each Other',
    description: 'Our welfare arm ensures no alumnus walks through hardship alone. From medical emergencies to bereavement support - we stand together as one family.',
    tag: 'Welfare Program',
    label: 'Welfare',
    image: '/hero/welfare.jpg', // NBPS alumni gathering at the school
    position: 'center 45%',
    primaryAction: { text: 'Welfare Details', href: '/welfare' },
    secondaryAction: { text: 'Contribute Now', href: '/donate' },
  },
  {
    title: 'A Community That Keeps Us Moving',
    description: 'Hikes, walk/run and virtual challenges, bootcamps and daily encouragement on WhatsApp and StepUp - the NBPS Fitness Community keeps alumni active, together.',
    tag: 'NBPS Fitness Community',
    label: 'Fitness',
    image: '/hero/fitness.jpg', // NBPS Fitness Community bootcamp
    position: 'center 62%',
    primaryAction: { text: 'Explore Fitness', href: '/fitness' },
    secondaryAction: { text: 'Join the Group', href: '/fitness#join' },
  },
  {
    title: 'Reunion, Laughter & Memories',
    description: 'Our annual Fun Day brings together alumni from all graduation years for a day of games, networking, and celebrating our shared heritage.',
    tag: 'Annual Fun Day',
    label: 'Fun Day',
    image: '/hero/fun-day.jpg', // NBPS Alumni Fun Day
    position: 'center 62%',
    primaryAction: { text: 'View Events', href: '/activities' },
    secondaryAction: { text: 'Register Today', href: '/register' },
  },
];

const fill = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const theme = useTheme();
  const slide = slides[current];

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: 'relative',
        height: { xs: '78vh', md: '82vh' },
        minHeight: 560,
        maxHeight: 860,
        overflow: 'hidden',
        backgroundColor: `rgb(${SHADE})`,
      }}
    >
      {/* Background */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: slide.position,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Readability shading: strong behind the text, clear over the photo, soft floor for controls */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: `linear-gradient(180deg, rgba(${SHADE},0.35) 0%, rgba(${SHADE},0.7) 100%)`,
            md: `linear-gradient(90deg, rgba(${SHADE},0.85) 0%, rgba(${SHADE},0.62) 35%, rgba(${SHADE},0.12) 68%, rgba(${SHADE},0) 100%)`,
          },
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(0deg, rgba(${SHADE},0.6) 0%, rgba(${SHADE},0) 28%)`,
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
          pb: { xs: 8, md: 6 },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial="hidden"
            animate="show"
            exit="exit"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              exit: { opacity: 0, transition: { duration: 0.3 } },
            }}
          >
            <Box sx={{ maxWidth: 600, color: 'common.white' }}>
              <motion.div variants={item}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ width: 32, height: 2, backgroundColor: 'secondary.main' }} />
                  <Typography
                    variant="overline"
                    sx={{ color: 'secondary.light', letterSpacing: '0.18em', lineHeight: 1 }}
                  >
                    {slide.tag}
                  </Typography>
                </Box>
              </motion.div>

              <motion.div variants={item}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.5rem' },
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    textWrap: 'balance',
                    mb: 2.5,
                  }}
                >
                  {slide.title}
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.82)',
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    lineHeight: 1.65,
                    maxWidth: 520,
                    textWrap: 'pretty',
                    mb: 4.5,
                  }}
                >
                  {slide.description}
                </Typography>
              </motion.div>

              <motion.div variants={item}>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    disableElevation
                    endIcon={<ArrowForward />}
                    href={slide.primaryAction.href}
                    sx={{ px: 3.5, py: 1.4, boxShadow: 'none' }}
                  >
                    {slide.primaryAction.text}
                  </Button>
                  <Button
                    variant="text"
                    size="large"
                    href={slide.secondaryAction.href}
                    sx={{
                      color: 'common.white',
                      px: 2.5,
                      py: 1.4,
                      textDecoration: 'underline',
                      textDecorationColor: 'rgba(255,255,255,0.4)',
                      textUnderlineOffset: '6px',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        textDecorationColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {slide.secondaryAction.text}
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Bottom controls - aligned to the same column as the text */}
      <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: 20, md: 36 }, zIndex: 2 }}>
        <Container
          maxWidth="lg"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}
        >
          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 }, flex: 1, maxWidth: 680 }}>
            {slides.map((s, index) => {
              const active = index === current;
              return (
                <Box
                  key={s.tag}
                  component="button"
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to slide ${index + 1}: ${s.label || s.tag}`}
                  aria-current={active}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    background: 'none',
                    border: 0,
                    p: 0,
                    pt: 1,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: active ? 'common.white' : 'rgba(255,255,255,0.55)',
                    transition: 'color 0.3s',
                    '&:hover': { color: 'common.white' },
                    '&:focus-visible': { outline: `2px solid ${theme.palette.secondary.main}`, outlineOffset: 4 },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 2,
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      overflow: 'hidden',
                      mb: 1,
                    }}
                  >
                    {active && (
                      <Box
                        key={current}
                        onAnimationEnd={() => goTo(current + 1)}
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'secondary.main',
                          transformOrigin: 'left',
                          animation: `${fill} ${SLIDE_DURATION}ms linear forwards`,
                          animationPlayState: paused ? 'paused' : 'running',
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      gap: 1,
                      fontFamily: HEADING,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Box component="span" sx={{ fontVariantNumeric: 'tabular-nums', opacity: 0.7 }}>
                      {String(index + 1).padStart(2, '0')}
                    </Box>
                    {s.label || s.tag}
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { icon: ChevronLeft, label: 'Previous slide', onClick: () => goTo(current - 1) },
              { icon: ChevronRight, label: 'Next slide', onClick: () => goTo(current + 1) },
            ].map(({ icon: Icon, label, onClick }) => (
              <IconButton
                key={label}
                onClick={onClick}
                aria-label={label}
                sx={{
                  width: 44,
                  height: 44,
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  color: 'common.white',
                  transition: 'all 0.25s',
                  '&:hover': {
                    backgroundColor: 'secondary.main',
                    borderColor: 'secondary.main',
                    color: theme.palette.secondary.contrastText,
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

'use client';

import { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  LinearProgress,
} from '@mui/material';
import {
  ArrowForward,
  School,
  WaterDrop,
  Construction as ConstructionIcon,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const projects = [
  {
    title: 'Classroom Block Renovation',
    category: 'Infrastructure',
    description: 'Renovating 4 classrooms with new desks, roofing, and modern blackboards for current students of NBPS.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    raised: 850000,
    goal: 1250000,
    icon: ConstructionIcon,
  },
  {
    title: 'Bursary Fund 2025',
    category: 'Education',
    description: 'Providing bursaries to needy students joining secondary school from NBPS.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    raised: 320000,
    goal: 760000,
    icon: School,
  },
  {
    title: 'Clean Water Initiative',
    category: 'Water & Sanitation',
    description: 'Installing a borehole and piped water system to serve the school compound.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    raised: 180000,
    goal: 750000,
    icon: WaterDrop,
  },
];

export default function ProjectsSection() {
  const theme = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 3,
            mb: 5,
          }}
        >
          <Box>
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
                What We're Building
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
                }}
              >
                Our Ongoing Projects
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ArrowForward />}
              href="/projects"
              sx={{ whiteSpace: 'nowrap' }}
            >
              View All
            </Button>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {projects.map((project, index) => {
            const progress = (project.raised / project.goal) * 100;
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                style={{
                  flex: index === 0 ? '1 1 100%' : '1 1 calc(50% - 12px)',
                  minWidth: index === 0 ? '100%' : 280,
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height={index === 0 ? 220 : 180}
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 48,
                        height: 48,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: theme.shadows[3],
                      }}
                    >
                      <Icon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />
                    </Box>
                  </Box>

                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'secondary.main',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        mb: 0.5,
                      }}
                    >
                      {project.category}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 1,
                        lineHeight: 1.3,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 2,
                        lineHeight: 1.6,
                        flex: 1,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Progress */}
                    <Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          mb: 0.75,
                        }}
                      >
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          KSh {project.raised.toLocaleString()} raised
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 600 }}>
                          {Math.round(progress)}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{
                          height: 4,
                          borderRadius: 2,
                          backgroundColor: 'rgba(43, 58, 108, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #3a4d8a, #fbbc04)',
                          },
                        }}
                      />
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

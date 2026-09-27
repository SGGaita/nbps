'use client';

import { useRef } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { ArrowForward, School, WaterDrop, Construction as ConstructionIcon } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title: 'Classroom Block Renovation',
    category: 'Infrastructure',
    description: 'Renovating 4 classrooms with new desks, roofing, and modern blackboards for current students of NBPS.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    icon: ConstructionIcon,
  },
  {
    title: 'Bursary Fund 2025',
    category: 'Education',
    description: 'Providing bursaries to needy students joining secondary school from NBPS.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    icon: School,
  },
  {
    title: 'Clean Water Initiative',
    category: 'Water & Sanitation',
    description: 'Installing a borehole and piped water system to serve the school compound.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    icon: WaterDrop,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Box ref={ref} sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 3,
            mb: 6,
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
                  color: 'secondary.dark',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
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
              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Current Projects
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
              View All Projects
            </Button>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: 280 }}
              >
                <Card
                  component="a"
                  href="/projects"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      borderColor: 'rgba(43, 58, 108, 0.22)',
                      boxShadow: '0 12px 32px rgba(12, 17, 36, 0.08)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height="190" image={project.image} alt={project.title} sx={{ objectFit: 'cover' }} />
                    <Chip
                      icon={<Icon sx={{ fontSize: '1rem !important' }} />}
                      label="Current"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        color: 'primary.main',
                        fontWeight: 700,
                        '& .MuiChip-icon': { color: 'secondary.main' },
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                    <Typography variant="overline" sx={{ color: 'secondary.dark', mb: 0.5 }}>
                      {project.category}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'primary.main', mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
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

'use client';

import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, Tabs, Tab } from '@mui/material';
import {
  School,
  WaterDrop,
  Construction as ConstructionIcon,
  LocalLibrary,
  HealthAndSafety,
  Computer,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

const projects = [
  {
    title: 'Classroom Block Renovation',
    category: 'Infrastructure',
    status: 'current',
    description: 'Renovation of 4 classrooms including new desks, roofing, painting, and modern blackboards for current NBPS students.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    icon: ConstructionIcon,
  },
  {
    title: 'Bursary Fund 2025',
    category: 'Education',
    status: 'current',
    description: 'Providing bursaries to needy students joining secondary school from NBPS, ensuring no child is left behind due to financial constraints.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    icon: School,
  },
  {
    title: 'Clean Water Initiative',
    category: 'Water & Sanitation',
    status: 'current',
    description: 'Installing a borehole and piped water system to provide clean, safe drinking water throughout the school compound.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    icon: WaterDrop,
  },
  {
    title: 'Computer Lab Upgrade',
    category: 'Technology',
    status: 'upcoming',
    description: 'Planned upgrade of the computer lab with new computers, internet connectivity, and modern software for digital learning.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    icon: Computer,
  },
  {
    title: 'Library Expansion Project',
    category: 'Education',
    status: 'past',
    description: 'Expanded the school library with 500+ new books, reading tables, and a digital learning corner.',
    image: '/hero/nbps-library.jpg',
    icon: LocalLibrary,
  },
  {
    title: 'Medical Clinic Setup',
    category: 'Health',
    status: 'past',
    description: 'Established a fully equipped medical clinic with a qualified nurse to attend to students health needs.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    icon: HealthAndSafety,
  },
];

const filters = [
  { value: 'all', label: 'All Projects' },
  { value: 'current', label: 'Current' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'past', label: 'Past' },
];

const statusMeta = {
  current: { label: 'Current', color: 'primary.main', bg: 'rgba(43, 58, 108, 0.06)' },
  upcoming: { label: 'Upcoming', color: 'secondary.dark', bg: 'rgba(251, 188, 4, 0.14)' },
  past: { label: 'Completed', color: 'text.secondary', bg: 'rgba(43, 58, 108, 0.06)' },
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? projects : projects.filter((p) => p.status === filter);

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Alumni Projects at NBPS"
        title="Our Projects"
        description="Improvements the NBPS Alumni Association has made, and is making, to our school - from classrooms and clean water to bursaries and the new library."
        image="/hero/nbps-library.jpg"
        position="center 40%"
      />

      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Filter tabs */}
          <Box sx={{ mb: { xs: 4, md: 5 }, borderBottom: '1px solid rgba(43, 58, 108, 0.1)' }}>
            <Tabs
              value={filter}
              onChange={(e, val) => setFilter(val)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              slotProps={{ indicator: { sx: { backgroundColor: 'secondary.main', height: 3, borderRadius: '3px 3px 0 0' } } }}
              sx={{
                minHeight: 48,
                '& .MuiTab-root': {
                  textTransform: 'none',
                  fontFamily: 'inherit',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  color: 'text.secondary',
                  minHeight: 48,
                  px: 0,
                  mr: 4,
                },
                '& .Mui-selected': { color: 'primary.main !important' },
              }}
            >
              {filters.map((f) => (
                <Tab key={f.value} value={f.value} label={f.label} disableRipple />
              ))}
            </Tabs>
          </Box>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {visible.length === 0 ? (
                <Typography sx={{ color: 'text.secondary', py: 6, textAlign: 'center' }}>
                  No projects in this category yet.
                </Typography>
              ) : (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {visible.map((project, index) => {
                    const Icon = project.icon;
                    const meta = statusMeta[project.status];
                    return (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                        style={{ flex: '1 1 calc(33.333% - 22px)', minWidth: 300 }}
                      >
                        <Card
                          sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                            '&:hover': {
                              borderColor: 'rgba(43, 58, 108, 0.22)',
                              boxShadow: '0 12px 32px rgba(12, 17, 36, 0.08)',
                            },
                          }}
                        >
                          <Box sx={{ position: 'relative' }}>
                            <CardMedia
                              component="img"
                              height="200"
                              image={project.image}
                              alt={project.title}
                              sx={{ objectFit: 'cover' }}
                            />
                            <Chip
                              label={meta.label}
                              size="small"
                              sx={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                color: meta.color,
                                fontWeight: 700,
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                width: 44,
                                height: 44,
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Icon sx={{ color: 'secondary.dark', fontSize: '1.375rem' }} />
                            </Box>
                          </Box>

                          <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                            <Typography variant="overline" sx={{ color: 'secondary.dark', mb: 0.5 }}>
                              {project.category}
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                              {project.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, flex: 1 }}>
                              {project.description}
                            </Typography>
                            <Box
                              sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 0.75,
                                alignSelf: 'flex-start',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: '30px',
                                backgroundColor: meta.bg,
                              }}
                            >
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: meta.color }} />
                              <Typography variant="caption" sx={{ color: meta.color, fontWeight: 700 }}>
                                {meta.label} project
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </Box>
              )}
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

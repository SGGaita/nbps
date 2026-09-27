'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  LinearProgress,
  Button,
} from '@mui/material';
import {
  School,
  WaterDrop,
  Construction as ConstructionIcon,
  LocalLibrary,
  HealthAndSafety,
  Computer,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const projects = [
  {
    title: 'Classroom Block Renovation',
    category: 'Infrastructure',
    status: 'Active',
    description: 'Complete renovation of 4 classrooms including new desks, roofing, painting, and modern blackboards for current NBPS students.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    raised: 850000,
    goal: 1250000,
    icon: ConstructionIcon,
  },
  {
    title: 'Bursary Fund 2025',
    category: 'Education',
    status: 'Active',
    description: 'Providing bursaries to needy students joining secondary school from NBPS, ensuring no child is left behind due to financial constraints.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
    raised: 320000,
    goal: 760000,
    icon: School,
  },
  {
    title: 'Clean Water Initiative',
    category: 'Water & Sanitation',
    status: 'Active',
    description: 'Installing a borehole and piped water system to provide clean, safe drinking water throughout the school compound.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    raised: 180000,
    goal: 750000,
    icon: WaterDrop,
  },
  {
    title: 'Library Expansion Project',
    category: 'Education',
    status: 'Completed',
    description: 'Successfully expanded the school library with 500+ new books, reading tables, and a digital learning corner.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    raised: 450000,
    goal: 450000,
    icon: LocalLibrary,
  },
  {
    title: 'Medical Clinic Setup',
    category: 'Health',
    status: 'Completed',
    description: 'Established a fully equipped medical clinic with a qualified nurse to attend to students health needs.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    raised: 680000,
    goal: 680000,
    icon: HealthAndSafety,
  },
  {
    title: 'Computer Lab Upgrade',
    category: 'Technology',
    status: 'Upcoming',
    description: 'Planned upgrade of the computer lab with 20 new computers, internet connectivity, and modern software for digital learning.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    raised: 0,
    goal: 950000,
    icon: Computer,
  },
];

export default function ProjectsPage() {
  const theme = useTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'primary';
      case 'Completed':
        return 'success';
      case 'Upcoming':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          backgroundImage: 'url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&q=80)',
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
              Our Projects
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Building a legacy through impactful community projects at NBPS
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {projects.map((project, index) => {
              const progress = (project.raised / project.goal) * 100;
              const Icon = project.icon;

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  style={{
                    flex: '1 1 calc(33.333% - 22px)',
                    minWidth: 300,
                  }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[10],
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
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
                          left: 16,
                        }}
                      >
                        <Chip
                          label={project.status}
                          color={getStatusColor(project.status)}
                          size="small"
                          sx={{
                            fontWeight: 600,
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          }}
                        />
                      </Box>
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
                          mb: 1.5,
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          mb: 3,
                          lineHeight: 1.6,
                          flex: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Progress */}
                      {project.status !== 'Upcoming' && (
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
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: 'rgba(43, 58, 108, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 3,
                                background: project.status === 'Completed' 
                                  ? 'linear-gradient(90deg, #4caf50, #81c784)'
                                  : 'linear-gradient(90deg, #3a4d8a, #fbbc04)',
                              },
                            }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              display: 'block',
                              mt: 0.5,
                              color: 'text.secondary',
                              fontSize: '0.7rem',
                            }}
                          >
                            Goal: KSh {project.goal.toLocaleString()}
                          </Typography>
                        </Box>
                      )}

                      {project.status === 'Upcoming' && (
                        <Box
                          sx={{
                            backgroundColor: 'rgba(251, 188, 4, 0.1)',
                            borderRadius: 2,
                            p: 2,
                            textAlign: 'center',
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              fontWeight: 500,
                            }}
                          >
                            Target: KSh {project.goal.toLocaleString()}
                          </Typography>
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

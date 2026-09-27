'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import {
  People,
  Favorite,
  EmojiEvents,
  Handshake,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const values = [
  {
    icon: People,
    title: 'Community',
    description: 'We believe in the power of togetherness. Our alumni network is built on mutual support and shared heritage.',
  },
  {
    icon: Favorite,
    title: 'Compassion',
    description: 'We care for each other through welfare programs, ensuring no alumnus faces hardship alone.',
  },
  {
    icon: EmojiEvents,
    title: 'Excellence',
    description: 'We uphold the high standards that NBPS instilled in us, striving for excellence in all we do.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'Transparency and accountability guide our operations, ensuring trust in everything we undertake.',
  },
];

const leadership = [
  {
    name: 'John Kamau',
    role: 'Chairperson',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Mary Wanjiru',
    role: 'Vice Chairperson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Peter Mwangi',
    role: 'Secretary',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Grace Njeri',
    role: 'Treasurer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];

export default function AboutPage() {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80)',
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
              About NBPS Alumni
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Connecting generations of Nyandarua Boarding Primary School graduates since 1990
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
            }}
          >
            {[
              {
                title: 'Our Mission',
                content: 'To unite NBPS alumni, foster lifelong connections, support our alma mater, and empower our community through collaborative projects and welfare initiatives.',
              },
              {
                title: 'Our Vision',
                content: 'A thriving network of NBPS alumni making a lasting impact in Nyandarua County and beyond, while preserving the legacy and values of our beloved school.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ flex: '1 1 calc(50% - 16px)', minWidth: 280 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        color: 'primary.main',
                        mb: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.8,
                      }}
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Core Values */}
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
                textAlign: 'center',
                mb: 6,
              }}
            >
              Our Core Values
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: '1 1 calc(50% - 12px)', minWidth: 260 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          backgroundColor: 'rgba(251, 188, 4, 0.15)',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <Icon sx={{ fontSize: '2rem', color: 'secondary.main' }} />
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 1.5,
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.7,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Leadership */}
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
                textAlign: 'center',
                mb: 2,
              }}
            >
              Our Leadership Team
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                mb: 6,
              }}
            >
              Dedicated alumni leading our association with passion and commitment
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
            }}
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: '0 1 240px' }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Avatar
                      src={leader.image}
                      alt={leader.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: `3px solid ${theme.palette.secondary.main}`,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 0.5,
                      }}
                    >
                      {leader.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'secondary.main',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '0.75rem',
                      }}
                    >
                      {leader.role}
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

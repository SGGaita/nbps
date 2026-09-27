'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  Download,
  Article,
  VideoLibrary,
  Link as LinkIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const documents = [
  { title: 'NBPS Alumni Constitution', type: 'PDF', size: '2.4 MB', icon: Article },
  { title: 'Annual Report 2024', type: 'PDF', size: '5.1 MB', icon: Article },
  { title: 'Financial Statements 2024', type: 'PDF', size: '1.8 MB', icon: Article },
  { title: 'Project Proposals Template', type: 'DOCX', size: '450 KB', icon: Article },
];

const videos = [
  {
    title: 'NBPS Alumni Fun Day 2024 Highlights',
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80',
  },
  {
    title: 'Classroom Renovation Project Documentary',
    duration: '8:20',
    thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
  },
  {
    title: 'Alumni Success Stories',
    duration: '15:30',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
  },
];

const links = [
  { title: 'NBPS Official School Website', url: 'https://nbps.ac.ke' },
  { title: 'Nyandarua County Government', url: 'https://nyandarua.go.ke' },
  { title: 'Alumni WhatsApp Group', url: '#' },
  { title: 'Facebook Alumni Page', url: '#' },
];

const faqs = [
  {
    question: 'How do I become a member of the NBPS Alumni Association?',
    answer: 'Simply fill out the registration form on our website. Membership is open to all NBPS graduates. Once registered, you\'ll receive a confirmation email and access to all alumni benefits.',
  },
  {
    question: 'Is there a membership fee?',
    answer: 'Currently, membership is free. However, we encourage voluntary contributions to support our projects and activities. You can donate through our website or during events.',
  },
  {
    question: 'How can I contribute to school projects?',
    answer: 'You can contribute financially through our donation page, volunteer your time and skills, or propose new project ideas. Contact our projects committee for more information.',
  },
  {
    question: 'How do I update my contact information?',
    answer: 'Log into your alumni profile on our website or send an email to info@nbpsalumni.co.ke with your updated details.',
  },
  {
    question: 'Can I access welfare support if I\'m facing hardship?',
    answer: 'Yes, our welfare program is designed to support alumni in times of need. Contact the welfare committee confidentially through welfare@nbpsalumni.co.ke.',
  },
  {
    question: 'How often are alumni events held?',
    answer: 'We hold several events throughout the year including the Annual General Meeting, Fun Day, networking sessions, and charity events. Check our events calendar for upcoming activities.',
  },
];

export default function ResourcesPage() {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920&q=80)',
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
              Resources
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Documents, videos, and helpful information for our alumni community
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Documents Section */}
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
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 900,
                color: 'primary.main',
                mb: 4,
              }}
            >
              Documents & Downloads
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    flex: '1 1 calc(50% - 8px)',
                    minWidth: 280,
                  }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2.5,
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: theme.shadows[6],
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
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
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 0.25,
                        }}
                      >
                        {doc.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      >
                        {doc.type} • {doc.size}
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      startIcon={<Download />}
                    >
                      Download
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Videos Section */}
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
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 900,
                color: 'primary.main',
                mb: 4,
              }}
            >
              Video Library
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
            }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: '1 1 calc(33.333% - 16px)',
                  minWidth: 280,
                }}
              >
                <Card
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: 180,
                      backgroundImage: `url(${video.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 60,
                        height: 60,
                        backgroundColor: 'rgba(251, 188, 4, 0.95)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <VideoLibrary sx={{ fontSize: '2rem', color: 'white' }} />
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {video.duration}
                    </Box>
                  </Box>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {video.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Useful Links */}
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
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 900,
                color: 'primary.main',
                mb: 4,
              }}
            >
              Useful Links
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  flex: '1 1 calc(50% - 8px)',
                  minWidth: 280,
                }}
              >
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: theme.shadows[4],
                    },
                  }}
                  component="a"
                  href={link.url}
                  target="_blank"
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: 'rgba(43, 58, 108, 0.1)',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <LinkIcon sx={{ color: 'primary.main', fontSize: '1.2rem' }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: 'primary.main',
                    }}
                  >
                    {link.title}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FAQs */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f0ead8' }}>
        <Container maxWidth="md">
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
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 900,
                color: 'primary.main',
                mb: 1,
                textAlign: 'center',
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: 4,
              }}
            >
              Find answers to common questions about the NBPS Alumni Association
            </Typography>
          </motion.div>

          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: theme.shadows[2],
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      my: 1.5,
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Container>
      </Box>

      <Footer />
    </>
  );
}

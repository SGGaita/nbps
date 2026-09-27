'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Tabs,
  Tab,
  Dialog,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const galleryImages = {
  events: [
    { src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80', title: 'Annual Fun Day 2024' },
    { src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80', title: 'Alumni Gathering' },
    { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80', title: 'AGM 2024' },
    { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', title: 'Networking Session' },
    { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80', title: 'Team Building' },
    { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80', title: 'Community Outreach' },
  ],
  projects: [
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', title: 'Classroom Renovation' },
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', title: 'Water Project' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', title: 'Construction Progress' },
    { src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80', title: 'Library Expansion' },
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', title: 'Medical Clinic' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80', title: 'Computer Lab' },
  ],
  school: [
    { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', title: 'NBPS Campus' },
    { src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80', title: 'School Building' },
    { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80', title: 'Students Learning' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', title: 'Playground' },
    { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', title: 'Sports Day' },
    { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80', title: 'Assembly Ground' },
  ],
};

export default function GalleryPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['events', 'projects', 'school'];
  const currentImages = galleryImages[categories[activeTab]];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          backgroundImage: 'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80)',
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
              Photo Gallery
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 600,
                opacity: 0.9,
                fontWeight: 300,
              }}
            >
              Capturing moments, preserving memories from our alumni community
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Gallery Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Tabs */}
          <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              sx={{
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'capitalize',
                  minWidth: 120,
                },
              }}
            >
              <Tab label="Events" />
              <Tab label="Projects" />
              <Tab label="School Life" />
            </Tabs>
          </Box>

          {/* Image Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ImageList
                variant="masonry"
                cols={3}
                gap={16}
                sx={{
                  '@media (max-width: 900px)': {
                    gridTemplateColumns: 'repeat(2, 1fr) !important',
                  },
                  '@media (max-width: 600px)': {
                    gridTemplateColumns: 'repeat(1, 1fr) !important',
                  },
                }}
              >
                {currentImages.map((item, index) => (
                  <ImageListItem
                    key={item.src}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(item)}
                    sx={{
                      cursor: 'pointer',
                      overflow: 'hidden',
                      borderRadius: 2,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                        color: 'white',
                        p: 2,
                        opacity: 0,
                        transition: 'opacity 0.3s',
                        '&:hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              '&:hover': {
                backgroundColor: 'white',
              },
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                borderRadius: 8,
              }}
            />
          )}
        </Box>
      </Dialog>

      <Footer />
    </>
  );
}

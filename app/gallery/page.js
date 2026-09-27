'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Dialog,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
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
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['events', 'projects', 'school'];
  const currentImages = galleryImages[categories[activeTab]];

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Memories"
        title="Photo Gallery"
        description="Capturing moments, preserving memories from our alumni community"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80"
      />

      {/* Gallery Content */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Tabs */}
          <Box sx={{ mb: { xs: 4, md: 5 }, borderBottom: '1px solid rgba(43, 58, 108, 0.1)' }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
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
              <Tab label="Events" disableRipple />
              <Tab label="Projects" disableRipple />
              <Tab label="School Life" disableRipple />
            </Tabs>
          </Box>

          {/* Polaroid Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                    md: 'repeat(4, 1fr)',
                  },
                  gap: { xs: 3, md: 4 },
                }}
              >
                {currentImages.map((item, index) => (
                  <motion.div
                    key={item.src + item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Box
                      onClick={() => setSelectedImage(item)}
                      sx={{
                        cursor: 'pointer',
                        backgroundColor: '#ffffff',
                        border: '1px solid rgba(43, 58, 108, 0.1)',
                        borderRadius: '4px',
                        boxShadow: '0 6px 20px rgba(12, 17, 36, 0.08)',
                        p: 1.25,
                        pb: 2.5,
                        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          borderColor: 'rgba(43, 58, 108, 0.22)',
                          boxShadow: '0 10px 28px rgba(12, 17, 36, 0.12)',
                        },
                      }}
                    >
                      <Box sx={{ overflow: 'hidden', borderRadius: '2px', aspectRatio: '1 / 1' }}>
                        <Box
                          component="img"
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.6s ease',
                            '&:hover': { transform: 'scale(1.04)' },
                          }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 1.5,
                          textAlign: 'center',
                          color: 'text.primary',
                          fontWeight: 700,
                          fontSize: '0.8125rem',
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#ffffff',
              borderRadius: '4px',
              p: 1.5,
              pb: 3,
            },
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              border: '1px solid rgba(43, 58, 108, 0.1)',
              '&:hover': { backgroundColor: 'white' },
              zIndex: 1,
            }}
          >
            <Close />
          </IconButton>
          {selectedImage && (
            <>
              <Box sx={{ overflow: 'hidden', borderRadius: '2px' }}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  style={{ width: '100%', display: 'block' }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ mt: 2, textAlign: 'center', color: 'text.primary', fontWeight: 700 }}
              >
                {selectedImage.title}
              </Typography>
            </>
          )}
        </Box>
      </Dialog>

      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About NBPS', href: '/about' },
  { label: 'Activities', href: '/activities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Resources', href: '/resources' },
];

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}>
        <Typography variant="h6" sx={{ fontFamily: 'var(--font-playfair)', color: 'primary.main' }}>
          NBPS Alumni
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(43, 58, 108, 0.08)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem>
          <Button
            component={Link}
            href="/donate"
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<FavoriteIcon />}
            sx={{ mt: 2 }}
          >
            Donate
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderBottom: '1px solid rgba(251, 188, 4, 0.3)',
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: 'secondary.light',
                fontFamily: 'var(--font-dm-mono)',
                letterSpacing: '0.08em',
                fontSize: '0.7rem',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Welcome to NBPS Alumni Association – Nyandarua Boarding Primary School
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: WhatsApp, href: '#' },
                { icon: YouTube, href: '#' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  size="small"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    '&:hover': {
                      color: 'secondary.light',
                    },
                  }}
                  component="a"
                  href={social.href}
                >
                  <social.icon sx={{ fontSize: '0.9rem' }} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation */}
      <HideOnScroll>
        <AppBar
          position="sticky"
          elevation={2}
          sx={{
            backgroundColor: 'primary.main',
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component={Link}
                  href="/"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      backgroundColor: 'primary.main',
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${theme.palette.secondary.main}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-playfair)',
                        fontSize: '1.1rem',
                        fontWeight: 900,
                        color: 'secondary.main',
                        letterSpacing: '-1px',
                      }}
                    >
                      NB
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.2,
                        fontSize: '1.1rem',
                      }}
                    >
                      NBPS Alumni
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Nyandarua Boarding Primary School
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      href={item.href}
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        px: 1.5,
                        py: 0.75,
                        borderRadius: 1.5,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.15)',
                          color: 'secondary.light',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Button
                    component={Link}
                    href="/donate"
                    variant="contained"
                    color="secondary"
                    startIcon={<FavoriteIcon />}
                    sx={{
                      ml: 1,
                      fontWeight: 600,
                    }}
                  >
                    Donate
                  </Button>
                </motion.div>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  color: 'white',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

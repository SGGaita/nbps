'use client';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  YouTube,
  Send as SendIcon,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  navigate: [
    { label: 'Home', href: '/' },
    { label: 'About NBPS', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Projects', href: '/projects' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Resources', href: '/resources' },
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate' },
    { label: 'Register', href: '/register' },
    { label: 'Volunteer', href: '#' },
    { label: 'Sponsor a Project', href: '#' },
    { label: 'Refer an Alumni', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
};

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'rgba(255, 255, 255, 0.7)',
        pt: 6,
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box sx={{ flex: '2 1 280px', minWidth: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1rem',
                    fontWeight: 900,
                    color: 'white',
                  }}
                >
                  NB
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'var(--font-playfair)',
                  color: 'white',
                }}
              >
                NBPS Alumni
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                maxWidth: 280,
                color: 'rgba(255, 255, 255, 0.5)',
                lineHeight: 1.75,
              }}
            >
              Nyandarua Boarding Primary School Alumni Association — uniting graduates, empowering communities, and honoring our heritage in Nyandarua County, Kenya.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[Facebook, Twitter, Instagram, WhatsApp, YouTube].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.07)',
                      color: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: 'white',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: '0.9rem' }} />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          {/* Navigate Links */}
          <Box sx={{ flex: '1 1 150px', minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.secondary.main,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                mb: 2,
                fontSize: '0.8rem',
              }}
            >
              Navigate
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.navigate.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = theme.palette.secondary.light)}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Get Involved Links */}
          <Box sx={{ flex: '1 1 150px', minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.secondary.main,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                mb: 2,
                fontSize: '0.8rem',
              }}
            >
              Get Involved
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.getInvolved.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = theme.palette.secondary.light)}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.5)')}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Newsletter Section */}
          <Box sx={{ flex: '1 1 250px', minWidth: 0 }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.secondary.main,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 600,
                mb: 2,
                fontSize: '0.8rem',
              }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 1.5,
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
              }}
            >
              Get NBPS Alumni updates, event announcements, and project news delivered to your inbox.
            </Typography>
            <Box sx={{ display: 'flex', gap: 0 }}>
              <TextField
                placeholder="your@email.com"
                size="small"
                sx={{
                  flex: 1,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    borderRadius: '8px 0 0 8px',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.12)',
                      borderRight: 'none',
                    },
                    '& input': {
                      color: 'white',
                      fontSize: '0.82rem',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: '0 8px 8px 0',
                  minWidth: 'auto',
                  px: 2,
                }}
              >
                <SendIcon sx={{ fontSize: '0.9rem' }} />
              </Button>
            </Box>

            {/* Contact Info */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.secondary.main,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: '0.8rem',
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { icon: Email, text: 'info@nbpsalumni.co.ke' },
                  { icon: Phone, text: '+254 700 000 000' },
                  { icon: LocationOn, text: 'Nyandarua County, Kenya' },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <item.icon sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.45)' }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.45)',
                        fontSize: '0.78rem',
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', mb: 2 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
            pb: 3,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.35)',
              fontSize: '0.75rem',
            }}
          >
            © 2025 NBPS Alumni Association. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Privacy Policy', 'Terms of Use'].map((text) => (
              <Link
                key={text}
                href="#"
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.35)',
                  fontSize: '0.75rem',
                }}
              >
                {text}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

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
  Send as SendIcon,
  Email,
  LocationOn,
} from '@mui/icons-material';
import { socialLinks } from './socialLinks';
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
    { label: 'Fitness', href: '/fitness' },
    { label: 'Welfare', href: '/welfare' },
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate' },
    { label: 'Register', href: '/register' },
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
                component="img"
                src="/logo-mark.png"
                alt="NBPS Alumni crest"
                sx={{ width: 40, height: 'auto', display: 'block' }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.125rem',
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
              }}
            >
              The NBPS Alumni Association brings together former students of Nyandarua Boarding Primary School, united by a shared history, lasting friendships and a desire to give back to the NBPS community.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconButton
                    size="small"
                    component="a"
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
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
              variant="overline"
              sx={{
                color: theme.palette.secondary.main,
                mb: 2,
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
              variant="overline"
              sx={{
                color: theme.palette.secondary.main,
                mb: 2,
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
              variant="overline"
              sx={{
                color: theme.palette.secondary.main,
                mb: 2,
              }}
            >
              Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 1.5,
                color: 'rgba(255, 255, 255, 0.5)',
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
                      fontSize: '0.875rem',
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
                variant="overline"
                sx={{
                  color: theme.palette.secondary.main,
                  mb: 1.5,
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {[
                  { icon: Email, text: 'alumninbps@gmail.com' },
                  { icon: LocationOn, text: 'Nyandarua County, Kenya' },
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <item.icon sx={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.45)' }} />
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.45)',
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
            justifyContent: 'center',
            alignItems: 'center',
            pb: 3,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(255, 255, 255, 0.35)',
            }}
          >
            © {new Date().getFullYear()} NBPS Alumni Association. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

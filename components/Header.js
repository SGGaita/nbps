'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  PersonAdd as PersonAddIcon,
  ChevronRight as ChevronRightIcon,
  KeyboardArrowDown as ArrowDownIcon,
} from '@mui/icons-material';
import { socialLinks } from './socialLinks';
import { useTheme } from '@mui/material/styles';
import { HEADING } from '../theme/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About NBPS', href: '/about' },
  { label: 'Activities', href: '/activities' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Documents & FAQs', href: '/resources', description: 'Downloads, videos and answers to common questions' },
      { label: 'Fitness Community', href: '/fitness', description: 'Hikes, challenges and daily encouragement' },
      { label: 'Welfare', href: '/welfare', description: 'Support for alumni in times of need' },
    ],
  },
];


const navButtonSx = {
  color: 'primary.main',
  fontSize: '0.9375rem',
  px: 1.75,
  py: 1,
  borderRadius: 1.5,
  '&:hover': {
    backgroundColor: 'rgba(43, 58, 108, 0.06)',
    color: 'primary.dark',
  },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pathname = usePathname();
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      {/* Drawer header: brand + close */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 3,
          py: 2.5,
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            component="img"
            src="/logo-mark.png"
            alt="NBPS Alumni crest"
            sx={{ width: 44, height: 'auto', display: 'block' }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, fontSize: '1.125rem' }}>
            NBPS Alumni
          </Typography>
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          aria-label="close menu"
          sx={{
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Links */}
      <List component="nav" sx={{ px: 2, py: 2, flex: 1, overflowY: 'auto' }}>
        {navItems.map((item) => {
          const active = item.children
            ? item.children.some((c) => isActive(c.href))
            : isActive(item.href);
          return (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5, flexDirection: 'column', alignItems: 'stretch' }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                aria-current={active ? 'page' : undefined}
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: 2,
                  borderLeft: '3px solid',
                  borderColor: active ? 'secondary.main' : 'transparent',
                  backgroundColor: active ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: HEADING,
                        fontWeight: 600,
                        fontSize: '1.0625rem',
                        color: active ? 'secondary.main' : 'white',
                      },
                    },
                  }}
                />
                <ChevronRightIcon
                  sx={{
                    fontSize: '1.25rem',
                    color: active ? 'secondary.main' : 'rgba(255, 255, 255, 0.35)',
                  }}
                />
              </ListItemButton>
              {item.children && (
                <List disablePadding sx={{ width: '100%', pl: 2, mt: 0.5 }}>
                  {item.children.map((child) => {
                    const childActive = pathname === child.href;
                    return (
                      <ListItemButton
                        key={child.label}
                        component={Link}
                        href={child.href}
                        onClick={handleDrawerToggle}
                        aria-current={childActive ? 'page' : undefined}
                        sx={{
                          py: 1,
                          px: 2,
                          borderRadius: 2,
                          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
                        }}
                      >
                        <ListItemText
                          primary={child.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontFamily: HEADING,
                                fontWeight: 500,
                                fontSize: '0.9375rem',
                                color: childActive ? 'secondary.main' : 'rgba(255, 255, 255, 0.8)',
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              )}
            </ListItem>
          );
        })}
      </List>

      {/* Actions + socials pinned to the bottom */}
      <Box sx={{ px: 3, pt: 2, pb: 3, borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Button
            component={Link}
            href="/donate"
            onClick={handleDrawerToggle}
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            startIcon={<FavoriteIcon />}
          >
            Donate
          </Button>
          <Button
            component={Link}
            href="/register"
            onClick={handleDrawerToggle}
            variant="outlined"
            size="large"
            fullWidth
            startIcon={<PersonAddIcon />}
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            }}
          >
            Register as Alumni
          </Button>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                '&:hover': { color: 'secondary.light', borderColor: 'secondary.main' },
              }}
            >
              <Icon sx={{ fontSize: '1.1rem' }} />
            </IconButton>
          ))}
        </Box>
        <Typography
          variant="caption"
          sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'rgba(255, 255, 255, 0.5)' }}
        >
          Nyandarua Boarding Primary School
        </Typography>
      </Box>
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
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Uniting graduates, empowering communities, honoring our heritage
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {socialLinks.map((social, index) => (
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
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon sx={{ fontSize: '0.9rem' }} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navigation */}
      <AppBar
          position="sticky"
          elevation={2}
          sx={{
            backgroundColor: 'background.paper',
            color: 'primary.main',
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{
                justifyContent: 'space-between',
                minHeight: { xs: 76, md: 92 },
                py: 1.5,
              }}
            >
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
                    component="img"
                    src="/logo-mark.png"
                    alt="NBPS Alumni crest"
                    sx={{ width: 54, height: 'auto', display: 'block' }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        lineHeight: 1.2,
                      }}
                    >
                      NBPS Alumni
                    </Typography>
                    <Typography
                      variant="overline"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        fontSize: '0.6875rem',
                        fontWeight: 400,
                        letterSpacing: '0.08em',
                        lineHeight: 1.4,
                      }}
                    >
                      Nyandarua Boarding Primary School
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5, alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.children ? (
                      <Box
                        sx={{
                          position: 'relative',
                          '&:hover .nbps-submenu, &:focus-within .nbps-submenu': {
                            opacity: 1,
                            visibility: 'visible',
                            transform: 'translate(-50%, 0)',
                          },
                          '&:hover .nbps-caret, &:focus-within .nbps-caret': { transform: 'rotate(180deg)' },
                        }}
                      >
                        <Button
                          component={Link}
                          href={item.href}
                          aria-haspopup="true"
                          endIcon={<ArrowDownIcon className="nbps-caret" sx={{ transition: 'transform 0.2s' }} />}
                          sx={{ ...navButtonSx, '& .MuiButton-endIcon': { ml: 0.25 } }}
                        >
                          {item.label}
                        </Button>
                        <Box
                          className="nbps-submenu"
                          role="menu"
                          sx={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translate(-50%, 8px)',
                            pt: 1.5,
                            opacity: 0,
                            visibility: 'hidden',
                            transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s',
                            zIndex: 10,
                          }}
                        >
                          <Box
                            sx={{
                              width: 300,
                              p: 1,
                              backgroundColor: 'background.paper',
                              borderRadius: '12px',
                              border: '1px solid rgba(43, 58, 108, 0.1)',
                              boxShadow: '0 16px 40px rgba(12, 17, 36, 0.12)',
                            }}
                          >
                            {item.children.map((child) => (
                              <Box
                                key={child.label}
                                component={Link}
                                href={child.href}
                                role="menuitem"
                                sx={{
                                  display: 'block',
                                  px: 2,
                                  py: 1.5,
                                  borderRadius: '8px',
                                  textDecoration: 'none',
                                  '&:hover, &:focus-visible': { backgroundColor: 'rgba(43, 58, 108, 0.05)', outline: 'none' },
                                  '&:hover .nbps-sub-title': { color: 'primary.dark' },
                                }}
                              >
                                <Typography
                                  className="nbps-sub-title"
                                  sx={{ fontFamily: HEADING, fontWeight: 600, fontSize: '0.9375rem', color: 'primary.main' }}
                                >
                                  {child.label}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                  {child.description}
                                </Typography>
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    ) : (
                      <Button component={Link} href={item.href} sx={navButtonSx}>
                        {item.label}
                      </Button>
                    )}
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
                      ml: 1.5,
                      px: 3,
                      py: 1.25,
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
                  display: { lg: 'none' },
                  color: 'primary.main',
                }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '88vw', sm: 400 },
              maxWidth: 420,
              backgroundColor: 'primary.main',
              backgroundImage: 'none',
              borderLeft: `3px solid ${theme.palette.secondary.main}`,
            },
          },
          backdrop: {
            sx: {
              backgroundColor: 'rgba(20, 28, 54, 0.55)',
              backdropFilter: 'blur(3px)',
            },
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

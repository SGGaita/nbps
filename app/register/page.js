'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';
import { PersonAdd, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const graduationYears = Array.from({ length: 40 }, (_, i) => 2025 - i);

export default function RegisterPage() {
  const theme = useTheme();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
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
        <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <PersonAdd sx={{ fontSize: '4rem', mb: 2, color: 'secondary.main' }} />
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                mb: 2,
              }}
            >
              Join the NBPS Alumni Family
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 600,
                mx: 'auto',
                opacity: 0.9,
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Register today to stay connected, attend events, and be part of our growing community
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Registration Form */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card
              sx={{
                borderRadius: 4,
                boxShadow: theme.shadows[8],
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  Alumni Registration Form
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  Please fill in your details to complete your registration
                </Typography>

                {/* Personal Information */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  Personal Information
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <TextField
                      label="First Name"
                      required
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                    <TextField
                      label="Last Name"
                      required
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                  </Box>

                  <TextField
                    label="Email Address"
                    type="email"
                    required
                    fullWidth
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <TextField
                      label="Phone Number"
                      required
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                    <TextField
                      label="ID Number"
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                  </Box>

                  <TextField
                    label="Current Residence (Town/City)"
                    fullWidth
                  />
                </Box>

                {/* NBPS Information */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  NBPS Information
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <TextField
                      select
                      label="Year of Graduation"
                      required
                      fullWidth
                      defaultValue=""
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    >
                      {graduationYears.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      label="Admission Number (if remembered)"
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                  </Box>

                  <TextField
                    label="House/Stream (if applicable)"
                    fullWidth
                  />
                </Box>

                {/* Professional Information */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  Professional Information (Optional)
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                    mb: 4,
                  }}
                >
                  <TextField
                    label="Current Occupation"
                    fullWidth
                  />

                  <TextField
                    label="Employer/Business Name"
                    fullWidth
                  />

                  <TextField
                    label="LinkedIn Profile (URL)"
                    fullWidth
                  />
                </Box>

                {/* Additional Information */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  Additional Information
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2.5,
                    mb: 4,
                  }}
                >
                  <TextField
                    label="How did you hear about the Alumni Association?"
                    fullWidth
                  />

                  <TextField
                    label="Any special skills or talents you'd like to share?"
                    multiline
                    rows={3}
                    fullWidth
                  />

                  <TextField
                    label="Would you like to volunteer? (Specify areas of interest)"
                    multiline
                    rows={2}
                    fullWidth
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  startIcon={<CheckCircle />}
                  sx={{
                    py: 1.75,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Complete Registration
                </Button>

                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                    mt: 2,
                  }}
                >
                  By registering, you agree to receive updates and communications from NBPS Alumni Association
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits Section */}
          <Box sx={{ mt: 6 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                color: 'primary.main',
                textAlign: 'center',
                mb: 4,
              }}
            >
              Membership Benefits
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
              }}
            >
              {[
                {
                  icon: '🤝',
                  title: 'Networking',
                  description: 'Connect with fellow alumni across different graduation years and professions',
                },
                {
                  icon: '📅',
                  title: 'Exclusive Events',
                  description: 'Access to alumni gatherings, fun days, and professional development events',
                },
                {
                  icon: '💼',
                  title: 'Career Support',
                  description: 'Job opportunities, mentorship programs, and professional connections',
                },
                {
                  icon: '❤️',
                  title: 'Welfare Support',
                  description: 'Access to emergency assistance and community support programs',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: '1 1 calc(50% - 12px)', minWidth: 240 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      backgroundColor: 'rgba(251, 188, 4, 0.05)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography sx={{ fontSize: '3rem', mb: 1 }}>
                        {benefit.icon}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'primary.main',
                          mb: 1,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

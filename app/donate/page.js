'use client';

import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputAdornment,
} from '@mui/material';
import {
  Favorite,
  CreditCard,
  Phone,
  AccountBalance,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const donationOptions = [
  { value: '500', label: 'KSh 500' },
  { value: '1000', label: 'KSh 1,000' },
  { value: '2500', label: 'KSh 2,500' },
  { value: '5000', label: 'KSh 5,000' },
  { value: 'custom', label: 'Custom Amount' },
];

const paymentMethods = [
  { value: 'mpesa', label: 'M-Pesa', icon: Phone },
  { value: 'card', label: 'Credit/Debit Card', icon: CreditCard },
  { value: 'bank', label: 'Bank Transfer', icon: AccountBalance },
];

export default function DonatePage() {
  const theme = useTheme();
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&q=80)',
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
            <Favorite sx={{ fontSize: '4rem', mb: 2, color: 'secondary.main' }} />
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'var(--font-playfair)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                mb: 2,
              }}
            >
              Support Our Cause
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
              Your contribution helps transform lives at NBPS and supports our fellow alumni in need
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Donation Form */}
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
                {/* Amount Selection */}
                <FormControl component="fieldset" fullWidth sx={{ mb: 4 }}>
                  <FormLabel
                    component="legend"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 2,
                      fontSize: '1.1rem',
                    }}
                  >
                    Select Donation Amount
                  </FormLabel>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    {donationOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={amount === option.value ? 'contained' : 'outlined'}
                        color={amount === option.value ? 'secondary' : 'primary'}
                        onClick={() => setAmount(option.value)}
                        sx={{
                          flex: '1 1 calc(33.333% - 12px)',
                          minWidth: 120,
                          py: 1.5,
                        }}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </Box>

                  {amount === 'custom' && (
                    <TextField
                      fullWidth
                      label="Enter Custom Amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      InputProps={{
                        startAdornment: <InputAdornment position="start">KSh</InputAdornment>,
                      }}
                      sx={{ mt: 2 }}
                    />
                  )}
                </FormControl>

                {/* Payment Method */}
                <FormControl component="fieldset" fullWidth sx={{ mb: 4 }}>
                  <FormLabel
                    component="legend"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 2,
                      fontSize: '1.1rem',
                    }}
                  >
                    Payment Method
                  </FormLabel>
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <Card
                          key={method.value}
                          sx={{
                            mb: 1.5,
                            border: `2px solid ${
                              paymentMethod === method.value
                                ? theme.palette.secondary.main
                                : 'transparent'
                            }`,
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            '&:hover': {
                              borderColor: theme.palette.secondary.light,
                            },
                          }}
                          onClick={() => setPaymentMethod(method.value)}
                        >
                          <CardContent sx={{ p: 2 }}>
                            <FormControlLabel
                              value={method.value}
                              control={<Radio />}
                              label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                  <Icon sx={{ color: 'primary.main' }} />
                                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                    {method.label}
                                  </Typography>
                                </Box>
                              }
                              sx={{ m: 0, width: '100%' }}
                            />
                          </CardContent>
                        </Card>
                      );
                    })}
                  </RadioGroup>
                </FormControl>

                {/* Donor Information */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  Your Information
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
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                    <TextField
                      label="Last Name"
                      fullWidth
                      sx={{ flex: '1 1 calc(50% - 8px)', minWidth: 200 }}
                    />
                  </Box>
                  <TextField
                    label="Email Address"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    label="Phone Number"
                    fullWidth
                  />
                  <TextField
                    label="Message (Optional)"
                    multiline
                    rows={3}
                    fullWidth
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  fullWidth
                  startIcon={<Favorite />}
                  sx={{
                    py: 1.75,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                >
                  Complete Donation
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
                  Your donation is secure and will be processed safely
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Impact Section */}
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
              Your Impact
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
                  amount: 'KSh 500',
                  impact: 'Provides school supplies for one student',
                },
                {
                  amount: 'KSh 2,500',
                  impact: 'Contributes to classroom furniture',
                },
                {
                  amount: 'KSh 5,000',
                  impact: 'Supports a student bursary fund',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.amount}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: 200 }}
                >
                  <Card
                    sx={{
                      textAlign: 'center',
                      height: '100%',
                      backgroundColor: 'rgba(251, 188, 4, 0.08)',
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: 'var(--font-playfair)',
                          fontWeight: 700,
                          color: 'secondary.main',
                          mb: 1,
                        }}
                      >
                        {item.amount}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                        }}
                      >
                        {item.impact}
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

'use client';

import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import {
  ArrowForward,
  LocalHospitalOutlined,
  VolunteerActivismOutlined,
  CelebrationOutlined,
  ChildCareOutlined,
  WarningAmberOutlined,
  MailOutlined,
  LockOutlined,
  FactCheckOutlined,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';
import { SHADE } from '../../theme/theme';
import { Eyebrow, IconTile, reveal } from '../../components/ui';

const WELFARE_EMAIL = 'alumninbps@gmail.com';

const support = [
  {
    icon: VolunteerActivismOutlined,
    title: 'Bereavement',
    text: 'Providing financial and emotional support to members and their immediate families during loss.',
  },
  {
    icon: CelebrationOutlined,
    title: 'Marriage',
    text: 'Celebrating members as they begin a new chapter of life.',
  },
  {
    icon: ChildCareOutlined,
    title: 'Newborns',
    text: 'Extending a token of support to members welcoming a new child.',
  },
  {
    icon: LocalHospitalOutlined,
    title: 'Illness & Hospitalisation',
    text: 'Providing medical assistance to eligible members facing illness or hospitalisation.',
  },
  {
    icon: WarningAmberOutlined,
    title: 'Emergencies & Hazards',
    text: 'Offering support when members experience unforeseen challenges or emergencies.',
  },
];

const principles = ['Unity', 'Accountability', 'Transparency', 'Mutual Care'];

const giving = [
  { title: 'Register as a member', text: 'Registered alumni are part of the welfare network and hear first when a fellow member needs support.' },
  { title: 'Contribute', text: 'Every contribution - big or small - strengthens our ability to respond quickly when someone is in need.' },
  { title: 'Show up', text: 'A visit, a call or a message of encouragement often means as much as any financial help.' },
];

export default function WelfarePage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Welfare Program"
        title="No Alumnus Walks Through Hardship Alone"
        description="Our welfare arm is how the NBPS family looks out for its own - from medical emergencies to bereavement support, we stand together as one family."
        image="/hero/welfare.jpg"
        position="center 45%"
      />

      {/* About the Welfare */}
      <Box sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div {...reveal} transition={{ duration: 0.6 }}>
            <Eyebrow>About The NBPS Welfare</Eyebrow>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 3, maxWidth: 680, textWrap: 'balance' }}>
              Standing Together. Supporting One Another.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mb: 2 }}>
              The Nyandarua Boarding Alumni Welfare Group (NBWG) exists to promote solidarity, mutual support
              and the wellbeing of our alumni community.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720 }}>
              Through the Welfare, members come together to support one another during life's significant
              moments - celebrating milestones and standing together during times of need.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* How we support each other */}
      <Box sx={{ backgroundColor: '#f0ead8', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div {...reveal} transition={{ duration: 0.6 }}>
            <Eyebrow>How We Help</Eyebrow>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 2, maxWidth: 640, textWrap: 'balance' }}>
              Our support covers areas including
            </Typography>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {support.map((item, i) => (
              <motion.div key={item.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                    <IconTile icon={item.icon} />
                    <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Sustained by members, guided by trust */}
      <Box sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 5, md: 8 }, alignItems: { md: 'flex-start' } }}>
            <motion.div {...reveal} transition={{ duration: 0.6 }} style={{ flex: '1 1 0' }}>
              <Eyebrow>Sustained By Members</Eyebrow>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2, textWrap: 'balance' }}>
                Contributions, Guided by Trust
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 480, mb: 3 }}>
                The Welfare is sustained through member contributions and is guided by principles of unity,
                accountability, transparency and mutual care.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {principles.map((p) => (
                  <Box
                    key={p}
                    sx={{
                      px: 2,
                      py: 0.75,
                      borderRadius: '30px',
                      backgroundColor: 'rgba(43, 58, 108, 0.06)',
                      border: '1px solid rgba(43, 58, 108, 0.12)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700 }}>
                      {p}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} style={{ flex: '1 1 0' }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                  <IconTile icon={FactCheckOutlined} />
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
                    Responsible stewardship
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    The Association maintains financial records, provides regular statements to members and
                    conducts annual audits to promote responsible stewardship of members' contributions.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Ask for support */}
      <Box sx={{ backgroundColor: `rgb(${SHADE})`, color: 'common.white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 5, md: 10 },
              alignItems: { md: 'center' },
            }}
          >
            <motion.div {...reveal} transition={{ duration: 0.6 }} style={{ flex: '1 1 0' }}>
              <Eyebrow light>Need Support?</Eyebrow>
              <Typography variant="h2" sx={{ mb: 2, textWrap: 'balance' }}>
                Reach out - in confidence
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520 }}>
                If you, or an alumnus you know, is facing hardship, contact the welfare committee directly.
                Every request is handled confidentially and with care.
              </Typography>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }} style={{ flex: '1 1 0' }}>
              <Card
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  color: 'common.white',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, '&:last-child': { pb: { xs: 3, md: 4 } } }}>
                  <IconTile icon={MailOutlined} dark />
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.6)', display: 'block' }}>
                    Welfare committee
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 3, wordBreak: 'break-word' }}>
                    {WELFARE_EMAIL}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForward />}
                    href={`mailto:${WELFARE_EMAIL}`}
                  >
                    Email the committee
                  </Button>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 3, color: 'rgba(255,255,255,0.6)' }}>
                    <LockOutlined sx={{ fontSize: '1rem' }} />
                    <Typography variant="caption">Your message goes only to the welfare committee.</Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* How to help */}
      <Box sx={{ backgroundColor: '#f0ead8', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 5, md: 10 },
              alignItems: { md: 'center' },
            }}
          >
            <motion.div {...reveal} transition={{ duration: 0.6 }} style={{ flex: '1 1 0' }}>
              <Eyebrow>Get Involved</Eyebrow>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                Be part of the safety net
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 460 }}>
                The welfare program is only as strong as the members behind it. Here is how you can help
                keep it ready for whoever needs it next.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="contained" color="primary" size="large" endIcon={<ArrowForward />} href="/donate">
                  Contribute Now
                </Button>
                <Button variant="text" size="large" href="/register" sx={{ color: 'primary.main' }}>
                  Register as alumni
                </Button>
              </Box>
            </motion.div>

            <Box sx={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              {giving.map((g, i) => (
                <motion.div key={g.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2.5,
                      alignItems: 'flex-start',
                      p: 3,
                      borderRadius: '12px',
                      backgroundColor: 'background.paper',
                      border: '1px solid rgba(43, 58, 108, 0.1)',
                    }}
                  >
                    <Typography variant="stat" sx={{ color: 'secondary.dark', fontSize: '1.5rem', minWidth: 36 }}>
                      {String(i + 1).padStart(2, '0')}
                    </Typography>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'primary.main', mb: 0.5 }}>
                        {g.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {g.text}
                      </Typography>
                    </Box>
                  </Box>
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

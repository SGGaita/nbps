'use client';

import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import {
  ArrowForward,
  WhatsApp,
  PhoneIphone,
  Terrain,
  DirectionsRun,
  Public,
  FitnessCenter,
  Groups,
  EmojiEvents,
  FavoriteBorder,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';
import { SHADE } from '../../theme/theme';
import { Eyebrow, IconTile, reveal } from '../../components/ui';

// ── Replace these with the real links ─────────────────────────────
const WHATSAPP_URL = 'https://chat.whatsapp.com/REPLACE_WITH_INVITE_CODE';
const STEPUP_URL = '#'; // StepUp link
// ──────────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: Groups,
    title: 'Every level welcome',
    text: 'First 5K or fiftieth hike - you belong here. We move at the pace of the group and nobody gets left behind.',
  },
  {
    icon: EmojiEvents,
    title: 'Accountability that works',
    text: 'A quick check-in, a shared photo, a friendly nudge. Small daily encouragement keeps us all showing up.',
  },
  {
    icon: FavoriteBorder,
    title: 'Health for life',
    text: 'Fitness is about feeling good for the long run - more energy, less stress and time well spent with old friends.',
  },
];

const online = [
  {
    icon: WhatsApp,
    title: 'WhatsApp Fitness Group',
    text: 'This is where the daily motivation happens. Members share their walks, runs and workouts, celebrate milestones and cheer each other on through the slow days. Hikes, meet-ups and new challenges are announced here first.',
    action: { text: 'Join the WhatsApp Group', href: WHATSAPP_URL, external: true },
  },
  {
    icon: PhoneIphone,
    title: 'StepUp',
    text: 'StepUp is one of our recommended online resources for staying active. Use it alongside the WhatsApp group to keep track of your progress and take part in our community challenges wherever you are.',
    action: { text: 'Open StepUp', href: STEPUP_URL, external: true },
  },
];

const activities = [
  {
    icon: Terrain,
    title: 'Group Hikes',
    text: "Regular hikes across Kenya's highlands and trails - a chance to explore, catch up and push a little further together. Routes are chosen so first-timers and seasoned hikers can both enjoy the day.",
  },
  {
    icon: DirectionsRun,
    title: 'Walk/Run Challenges',
    text: 'From our annual Health & Fitness Walk/Run to community 5K and 10K events - walk, jog or run at your own pace. Every finisher counts.',
  },
  {
    icon: Public,
    title: 'Virtual Challenges',
    text: 'Monthly step and distance targets you can complete anywhere, on your own schedule - ideal for alumni living outside Nyandarua or abroad. Progress is shared and celebrated in the group.',
  },
  {
    icon: FitnessCenter,
    title: 'Fitness Bootcamps',
    text: 'High-energy group workouts - circuits, cardio, core and stretching - scaled so that everyone can join in, whatever their starting point.',
  },
];

const steps = [
  { title: 'Join the WhatsApp group', text: 'Tap the button below to join - it takes less than a minute.' },
  { title: 'Say hello and set a goal', text: 'Introduce yourself, share your class year and pick something to aim for.' },
  { title: 'Show up', text: 'Log your activity online or join us in person for the next hike, walk or bootcamp.' },
];

export default function FitnessPage() {
  return (
    <>
      <Header />

      <PageHero
        eyebrow="NBPS Fitness Community"
        title="Stronger Together, One Step at a Time"
        description="A robust, welcoming fitness community for NBPS alumni - keeping each other active through daily online encouragement, walk/run challenges, hikes and bootcamps, whatever your fitness level."
        image="/hero/fitness.jpg"
        position="center 62%"
      />

      {/* Intro + pillars */}
      <Box sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 5, md: 10 },
              alignItems: 'flex-start',
            }}
          >
            <motion.div {...reveal} transition={{ duration: 0.6 }} style={{ flex: '1 1 0' }}>
              <Eyebrow>Why We Move</Eyebrow>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 3, textWrap: 'balance' }}>
                More than exercise - a community that shows up for each other
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2, maxWidth: 520 }}>
                The NBPS Fitness Community grew out of a simple idea: the classmates who once raced each
                other across the school field can still push each other on today.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 520 }}>
                Whether you are training for your first 5K, getting back into shape after years away, or
                simply looking for good company on a weekend hike, you will find alumni here who will
                cheer you on - online every day, and in person whenever we can meet.
              </Typography>
            </motion.div>

            <Box sx={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              {pillars.map((p, i) => (
                <motion.div key={p.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card>
                    <CardContent sx={{ p: 3, display: 'flex', gap: 2.5, '&:last-child': { pb: 3 } }}>
                      <IconTile icon={p.icon} />
                      <Box>
                        <Typography variant="h6" sx={{ color: 'primary.main', mb: 0.5 }}>
                          {p.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {p.text}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Online encouragement */}
      <Box sx={{ backgroundColor: `rgb(${SHADE})`, color: 'common.white', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div {...reveal} transition={{ duration: 0.6 }}>
            <Eyebrow light>Online Encouragement</Eyebrow>
            <Typography variant="h2" sx={{ mb: 2, maxWidth: 640, textWrap: 'balance' }}>
              Motivation in your pocket, every single day
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', maxWidth: 600, mb: 6 }}>
              Wherever you live and whatever your schedule, you are never training alone. Our online
              spaces keep the whole community connected between meet-ups.
            </Typography>
          </motion.div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {online.map((o, i) => (
              <motion.div key={o.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.12)',
                    color: 'common.white',
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:last-child': { pb: { xs: 3, md: 4 } },
                    }}
                  >
                    <IconTile icon={o.icon} dark />
                    <Typography variant="h4" sx={{ mb: 1.5 }}>
                      {o.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.75)', mb: 4, flex: 1 }}>
                      {o.text}
                    </Typography>
                    <Box>
                      <Button
                        variant="contained"
                        color="secondary"
                        endIcon={<ArrowForward />}
                        href={o.action.href}
                        {...(o.action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {o.action.text}
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Ways to take part */}
      <Box sx={{ backgroundColor: 'background.default', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 3,
              mb: 6,
            }}
          >
            <motion.div {...reveal} transition={{ duration: 0.6 }}>
              <Eyebrow>Get Moving</Eyebrow>
              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Ways to take part
              </Typography>
            </motion.div>
            <Button variant="text" endIcon={<ArrowForward />} href="/activities" sx={{ color: 'primary.main' }}>
              See upcoming dates
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {activities.map((a, i) => (
              <motion.div key={a.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    <IconTile icon={a.icon} />
                    <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>
                      {a.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {a.text}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* How to join */}
      <Box id="join" sx={{ backgroundColor: '#f0ead8', py: { xs: 8, md: 12 }, scrollMarginTop: 96 }}>
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
              <Eyebrow>Join Us</Eyebrow>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                Ready to step up?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 460 }}>
                The Fitness Community is open to all NBPS alumni. Join the group today and take part in
                the next challenge.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<WhatsApp />}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join on WhatsApp
                </Button>
                <Button variant="text" size="large" href="/register" sx={{ color: 'primary.main' }}>
                  Not registered yet?
                </Button>
              </Box>
              <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', mt: 3 }}>
                Starting something new? Please check with your doctor before beginning a new exercise
                routine.
              </Typography>
            </motion.div>

            <Box sx={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              {steps.map((s, i) => (
                <motion.div key={s.title} {...reveal} transition={{ duration: 0.5, delay: i * 0.1 }}>
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
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {s.text}
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

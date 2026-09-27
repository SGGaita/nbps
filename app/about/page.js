'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  People,
  Favorite,
  EmojiEvents,
  Handshake,
  Facebook,
  WhatsApp,
  CheckCircleOutlined,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import Header from '../../components/Header';
import PageHero from '../../components/PageHero';
import Footer from '../../components/Footer';

const communityStats = [
  { icon: Facebook, number: '2,800+', label: 'Members in our Facebook community' },
  { icon: WhatsApp, number: '600+', label: 'Members in our WhatsApp community' },
];

const strategyFocus = [
  'Strengthening alumni engagement, chapters and networks',
  'Developing the NBPS Library project',
  'Completing ongoing school projects',
  'Creating career exposure opportunities for learners',
  'Exploring bursary support',
  'Building sustainable partnerships and fundraising systems',
];

const values = [
  {
    icon: People,
    title: 'Community',
    description: 'We believe in the power of togetherness. Our alumni network is built on mutual support and shared heritage.',
  },
  {
    icon: Favorite,
    title: 'Compassion',
    description: 'We care for each other through welfare programs, ensuring no alumnus faces hardship alone.',
  },
  {
    icon: EmojiEvents,
    title: 'Excellence',
    description: 'We uphold the high standards that NBPS instilled in us, striving for excellence in all we do.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description: 'Transparency and accountability guide our operations, ensuring trust in everything we undertake.',
  },
];

// NBPS Alumni Leadership - 2026-2028 term.
const leadership = [
  { name: 'Dr. Bancy Mwangi', role: 'Patron' },
  { name: 'Magdalene Wanjugu', role: 'Chairperson', image: '/team/chairperson.png' },
  { name: 'Robinson Kiarie', role: 'Assistant Chairperson', image: '/team/robinson-kiarie.png' },
  { name: 'Mercy Macharia', role: 'Secretary', image: '/team/mercy-macharia.png' },
  { name: 'Vee Gichanga', role: 'Assistant Secretary', image: '/team/vee-gichanga.png' },
  { name: 'Haggee Jamuma', role: 'Treasurer', image: '/team/haggee-jamuma.png' },
  { name: 'Anita Wanjiru', role: 'Assistant Treasurer', image: '/team/anita-wanjiru.png' },
  { name: 'Victor Wachira', role: 'Liaison Officer', image: '/team/victor-wachira.png' },
  { name: 'Anita Wangechi', role: 'Assistant Liaison Officer', image: '/team/anita-wangechi.png' },
];

// Welfare committee - coordinates the support described on the Welfare page.
const welfareLeadership = [
  { name: 'James Maina', role: 'Welfare Chairperson' },
  { name: 'Lillian Mukiri', role: 'Welfare Secretary' },
  { name: 'Alex Mathenge', role: 'Welfare Treasurer' },
];

// Other offices held alongside the executive committee.
const otherOffices = [
  { name: 'Joy Wambui', role: 'Communications Lead' },
  { name: 'David Wachira', role: 'NBPS Board Representative' },
];

const initialsOf = (name) =>
  name
    .replace(/^Dr\.\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

function TeamGrid({ members }) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, 1fr)',
          sm: 'repeat(3, 1fr)',
        },
        gap: { xs: 3, md: 4 },
      }}
    >
      {members.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.06 }}
        >
          <Card
            sx={{
              overflow: 'hidden',
              transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                borderColor: 'rgba(43, 58, 108, 0.22)',
                boxShadow: '0 16px 36px rgba(12, 17, 36, 0.12)',
              },
            }}
          >
            <Box
              sx={{
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                backgroundColor: 'primary.main',
                backgroundImage: member.image
                  ? 'none'
                  : 'linear-gradient(155deg, rgba(74, 95, 168, 0.9), rgba(12, 17, 36, 0.95))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 0.25s ease',
                boxShadow: 'inset 0 0 0 0px rgba(251, 188, 4, 0.85)',
                '.MuiCard-root:hover &': {
                  boxShadow: 'inset 0 0 0 3px rgba(251, 188, 4, 0.85)',
                },
              }}
            >
              {member.image ? (
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    '.MuiCard-root:hover &': { transform: 'scale(1.08)' },
                  }}
                />
              ) : (
                <Typography
                  sx={{
                    fontFamily: 'var(--font-heading), sans-serif',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: 'secondary.main',
                    letterSpacing: '-0.02em',
                    transition: 'transform 0.5s ease',
                    '.MuiCard-root:hover &': { transform: 'scale(1.12)' },
                  }}
                >
                  {initialsOf(member.name)}
                </Typography>
              )}
            </Box>
            <CardContent sx={{ textAlign: 'center', py: 2.5, px: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'var(--font-heading), sans-serif',
                  fontWeight: 700,
                  fontSize: '1.0625rem',
                  lineHeight: 1.3,
                  color: 'primary.main',
                  mb: 0.75,
                }}
              >
                {member.name}
              </Typography>
              <Box
                sx={{
                  width: 22,
                  height: 2,
                  backgroundColor: 'secondary.main',
                  mx: 'auto',
                  mb: 0.75,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  display: 'inline-block',
                  color: 'secondary.dark',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {member.role}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
}

export default function AboutPage() {
  const theme = useTheme();

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Who We Are"
        title="About NBPS Alumni"
        description="Connecting generations of Nyandarua Boarding Primary School graduates since 1990"
        image="/hero/alumni-group.jpg"
        position="center 55%"
      />

      {/* About the Alumni Association */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: 'secondary.dark',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 1.5,
                '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
              }}
            >
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ color: 'primary.main', mb: 3, maxWidth: 720, textWrap: 'balance' }}>
              About The Alumni Association
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 4, md: 6 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ flex: '2 1 420px', minWidth: 280 }}
            >
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
                The NBPS Alumni Association brings together former students of Nyandarua Boarding Primary
                School, united by a shared history, lasting friendships and a desire to give back to the
                NBPS community.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
                What started with a shared school experience has grown into a vibrant alumni network, with
                over 2,800 members in our Facebook community and more than 600 members in our WhatsApp
                community. Through our social, professional and welfare networks, we create opportunities
                for alumni to connect, support one another, share knowledge and build meaningful
                relationships across generations.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Our Association is led by an elected leadership team, with elections held every two years,
                ensuring continuity, accountability and fresh ideas. We also hold at least two major alumni
                events each year, alongside smaller activities and interest-based initiatives that keep our
                community active.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ flex: '1 1 240px', minWidth: 240, display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {communityStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <Box
                    key={stat.label}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2.5,
                      borderRadius: '12px',
                      backgroundColor: 'rgba(43, 58, 108, 0.04)',
                      border: '1px solid rgba(43, 58, 108, 0.1)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        flexShrink: 0,
                        borderRadius: '12px',
                        backgroundColor: 'rgba(251, 188, 4, 0.15)',
                        color: 'secondary.dark',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box>
                      <Typography variant="stat" sx={{ color: 'primary.main', fontSize: '1.5rem', display: 'block' }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* More Than a Reunion */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#f0ead8' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 5, md: 8 } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ flex: '1 1 380px', minWidth: 280 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                Our Vision
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                More Than a Reunion
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: 'secondary.dark', mb: 3 }}
              >
                Community. Institution. Impact.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                We are strengthening our alumni community and welfare, building better systems and
                governance, creating opportunities for mentorship and career exposure, and supporting
                initiatives that create lasting value for current and future NBPS learners.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ flex: '1 1 380px', minWidth: 280 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="overline" sx={{ color: 'secondary.dark', display: 'block', mb: 2 }}>
                    2026-2028 Strategic Focus
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.75 }}>
                    {strategyFocus.map((item) => (
                      <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <CheckCircleOutlined sx={{ color: 'secondary.main', fontSize: '1.25rem', mt: 0.25, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {[
              {
                title: 'Our Mission',
                content: 'To unite NBPS alumni, foster lifelong connections, support our alma mater, and empower our community through collaborative projects and welfare initiatives.',
              },
              {
                title: 'Our Vision',
                content: 'A thriving network of NBPS alumni making a lasting impact in Nyandarua County and beyond, while preserving the legacy and values of our beloved school.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ flex: '1 1 calc(50% - 16px)', minWidth: 280 }}
              >
                <Card sx={{ height: '100%', borderLeft: `4px solid ${theme.palette.secondary.main}` }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Core Values */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#f0ead8' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                What Guides Us
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.main' }}>
                Our Core Values
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ flex: '1 1 calc(50% - 12px)', minWidth: 260 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        borderColor: 'rgba(43, 58, 108, 0.22)',
                        boxShadow: '0 12px 32px rgba(12, 17, 36, 0.08)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 70,
                          height: 70,
                          backgroundColor: 'rgba(251, 188, 4, 0.15)',
                          borderRadius: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <Icon sx={{ fontSize: '2rem', color: 'secondary.main' }} />
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 1.5 }}>
                        {value.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Leadership Team */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                Who Leads Us
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                Our Leadership Team.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                The executive committee steering the association's day-to-day work and long-term direction - serving the 2026-2028 term.
              </Typography>
            </motion.div>
          </Box>

          <TeamGrid members={leadership} />
        </Container>
      </Box>

      {/* Welfare Leadership */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: '#f0ead8' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                Looking Out For Each Other
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                Welfare Leadership
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                The committee that coordinates support for alumni through medical emergencies, bereavement, and other times of need.
              </Typography>
            </motion.div>
          </Box>

          <TeamGrid members={welfareLeadership} />
        </Container>
      </Box>

      {/* Other Leadership Roles */}
      <Box sx={{ py: { xs: 7, md: 10 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.dark',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 1.5,
                  '&::before': { content: '""', width: 30, height: 2, backgroundColor: 'secondary.main' },
                }}
              >
                Also Serving The Association
              </Typography>
              <Typography variant="h2" sx={{ color: 'primary.main', mb: 2 }}>
                Other Leadership Roles
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                Additional offices supporting the executive committee's work.
              </Typography>
            </motion.div>
          </Box>

          <TeamGrid members={otherOffices} />
        </Container>
      </Box>

      <Footer />
    </>
  );
}

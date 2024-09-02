import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100vh;
  padding: 40px 0;
`;

const StyledPaper = styled(Paper)`
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 16px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;

const GlowingText = styled(Typography)`
  color: #FFCC80;
  text-shadow: 0 0 10px rgba(255, 204, 128, 0.5);
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <GradientBackground>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <GlowingText variant="h2" gutterBottom align="center">
            About Me
          </GlowingText>
          <motion.div variants={itemVariants}>
            <StyledPaper>
              <Typography variant="body1" paragraph style={{ color: '#E0E0E0' }}>
                I am a dynamic software engineer with a strong passion for automation and system optimization. 
                My experience spans across software development, application administration, and DevOps practices. 
                I am dedicated to ensuring seamless system performance and accelerating delivery in innovative and efficiency-focused environments.
              </Typography>
            </StyledPaper>
          </motion.div>

          <motion.div variants={itemVariants}>
            <StyledPaper>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Briefcase size={40} color="#FFCC80" />
                </Grid>
                <Grid item xs>
                  <GlowingText variant="h5" gutterBottom>
                    Work Experience
                  </GlowingText>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                  Software Engineer
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{ color: '#E0E0E0' }}>
                  New York Property Insurance Underwriting Association | January 2021 – Present
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                  • Led the development and deployment of the Majesco Policy Administration application
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Automated installation procedures through Jenkins
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Maintained REST APIs and oversaw application administration
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Implemented Enterprise Data Warehouse and Data Analytics platform
                </Typography>
                <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                  Eloquence Author / Document Generation & Distribution Specialist
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{ color: '#E0E0E0' }}>
                  Ethan Allen Workforce Solutions | May 2019 – December 2020
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Led implementation of 562 policy administration insurance documents
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Collaborated with Product Owners and QA team for comprehensive testing         
                </Typography>
                <Typography variant="body2" paragraph style={{ color: '#E0E0E0' }}>
                    • Developed complex backend code in Eloquence for document generation
                </Typography>

              </Box>
            </StyledPaper>
          </motion.div>

          <motion.div variants={itemVariants}>
            <StyledPaper>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <GraduationCap size={40} color="#FFCC80" />
                </Grid>
                <Grid item xs>
                  <GlowingText variant="h5" gutterBottom>
                    Education
                  </GlowingText>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography variant="subtitle1" gutterBottom style={{ color: '#E0E0E0' }}>
                  College of Staten Island | September 2017 – May 2020
                </Typography>
              </Box>
            </StyledPaper>
          </motion.div>

          <motion.div variants={itemVariants}>
            <StyledPaper>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Award size={40} color="#FFCC80" />
                </Grid>
                <Grid item xs>
                  <GlowingText variant="h5" gutterBottom>
                    Certifications
                  </GlowingText>
                </Grid>
              </Grid>
              <Box mt={2}>
                <Typography variant="body1" paragraph style={{ color: '#E0E0E0' }}>
                    • Google Data Analytics | Google | April 2023
                </Typography>
                <Typography variant="body1" paragraph style={{ color: '#E0E0E0' }}>
                    • Core Java | Learn Quest | July 2024
                </Typography>
              </Box>
            </StyledPaper>
          </motion.div>
        </motion.div>
      </Container>
    </GradientBackground>
  );
};

export default About;
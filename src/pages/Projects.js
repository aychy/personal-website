import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100vh;
  padding: 40px 0;
`;

const ProjectCard = styled(motion(Card))`
  margin: 20px 0;
  background: rgba(34, 34, 34, 0.8);
  color: #FFCC80;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 204, 128, 0.1);
`;

const ProjectTitle = styled(Typography)`
  font-weight: bold;
  color: #FFCC80;
`;

const ProjectDescription = styled(Typography)`
  color: #FFFFFF;
`;

const ProjectButton = styled(Button)`
  background-color: #FFCC80;
  color: #000000;
  &:hover {
    background-color: #e0b56e;
  }
`;

const GlowingText = styled(Typography)`
  color: #FFCC80;
  text-shadow: 0 0 10px rgba(255, 204, 128, 0.5);
`;

const Projects = () => {
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
          <GlowingText variant="h2" component="h1" gutterBottom align="center">
            My Projects
          </GlowingText>

          {/* New ProjectCard for Muslim Center of Staten Island */}
          <motion.div variants={itemVariants}>
            <ProjectCard>
              <CardContent>
                <ProjectTitle variant="h5">Muslim Center of Staten Island</ProjectTitle>
                <ProjectDescription paragraph>
                  This project is a website for the Muslim Center of Staten Island, a welcoming community dedicated to serving Allah and the local community. The website features information about upcoming events, prayer times, and a donation option.
                  <br /><br />
                  The site includes sections for weekly events like Halaqa on Saturdays and Quranic & Islamic Studies on Mondays, as well as special events. It also provides real-time prayer times for the local community.
                </ProjectDescription>
              </CardContent>
              <CardActions>
                <ProjectButton
                  component="a"
                  href="https://mcsi.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </motion.div>

          {/* Existing ProjectCards */}
          <motion.div variants={itemVariants}>
            <ProjectCard>
              <CardContent>
                <ProjectTitle variant="h5">CoverLetterCraft</ProjectTitle>
                <ProjectDescription paragraph>
                    This application helps users generate personalized cover letters quickly and efficiently. The app allows you to input key details such as your name, the position you're applying for, the company name, your experience, and relevant skills. With a few clicks, you can generate a professional cover letter tailored to your job application.
                    <br /><br />
                    In the future, the app will integrate with the OpenAI API to generate even more tailored and sophisticated cover letters, taking into account the specific job descriptions and industry trends.
                </ProjectDescription>
              </CardContent>
              <CardActions>
                <ProjectButton
                    component="a"
                    href="https://coverlettercraft.onrender.com"
                    target="_blank"
                >
                    View Project
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ProjectCard>
              <CardContent>
                <ProjectTitle variant="h5">SkillSync</ProjectTitle>
                <ProjectDescription paragraph>
                  This application utilizes the RemoteOK API to help users find job opportunities based on their specific skills. I created this app to address the challenge of finding jobs that match one's skill set more efficiently. Users can enter their skills, and the app will match them against live job postings.
                  <br /><br />
                  Currently, the app works with the RemoteOK API. I aimed to make job searching easier for individuals with specific skills, though access to larger job platforms like LinkedIn and Indeed would be ideal for future expansion.
                </ProjectDescription>
              </CardContent>
              <CardActions>
                <ProjectButton
                  component="a"
                  href="https://skillsync-zm63.onrender.com/"
                  target="_blank"
                >
                  View Project
                </ProjectButton>
              </CardActions>
            </ProjectCard>
          </motion.div>
        </motion.div>
      </Container>
    </GradientBackground>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Typography, Button, Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Code, Database, Server, GitBranch } from 'lucide-react';

// Styled components (unchanged)
const GradientBackground = styled(Box)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GlowingText = styled(Typography)`
  color: #FFCC80;
  text-shadow: 0 0 10px rgba(255, 204, 128, 0.5);
`;

const GlowingButton = styled(Button)`
  background: linear-gradient(45deg, #FFCC80 30%, #FFB74D 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 204, 128, .3);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    background: linear-gradient(45deg, #FFB74D 30%, #FFA726 90%);
    box-shadow: 0 5px 15px 2px rgba(255, 204, 128, .5);
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

// Main component
const ModernHomepage = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Aydan Maksudovski";
  const controls = useAnimation();

  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    };

    typeText();
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

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
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={controls}>
              <GlowingText variant="h2" gutterBottom>
                {typedText}
              </GlowingText>
              <Typography variant="h5" gutterBottom style={{ color: '#E0E0E0' }}>
                Software Engineer & DevOps Enthusiast
              </Typography>
              <Typography variant="body1" paragraph style={{ color: '#E0E0E0' }}>
                Specializing in automation, application administration, and software development. 
                Experienced in ensuring seamless system performance and accelerating delivery.
              </Typography>
              <Box mt={4}>
                <GlowingButton variant="contained" size="large">
                  View My Projects
                </GlowingButton>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <SkillCard variants={itemVariants}>
                    <Code size={40} color="#FFCC80" />
                    <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                      Full-Stack Development
                    </Typography>
                    <Typography variant="body2" style={{ color: '#E0E0E0' }}>
                      Python, Java, JavaScript, React, SQL
                    </Typography>
                  </SkillCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SkillCard variants={itemVariants}>
                    <Server size={40} color="#FFCC80" />
                    <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                      DevOps & Automation
                    </Typography>
                    <Typography variant="body2" style={{ color: '#E0E0E0' }}>
                      Jenkins, CI/CD, Scripting, Monitoring
                    </Typography>
                  </SkillCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SkillCard variants={itemVariants}>
                    <Database size={40} color="#FFCC80" />
                    <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                      Database Management
                    </Typography>
                    <Typography variant="body2" style={{ color: '#E0E0E0' }}>
                      MS SQL Server, Oracle, MySQL
                    </Typography>
                  </SkillCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <SkillCard variants={itemVariants}>
                    <GitBranch size={40} color="#FFCC80" />
                    <Typography variant="h6" gutterBottom style={{ color: '#FFCC80' }}>
                      Version Control & Tools
                    </Typography>
                    <Typography variant="body2" style={{ color: '#E0E0E0' }}>
                      Git, SVN, Maven, Postman
                    </Typography>
                  </SkillCard>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default ModernHomepage;
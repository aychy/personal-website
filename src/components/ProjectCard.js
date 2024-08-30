import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

// Define a styled component using Emotion
const StyledCard = styled(motion.div)`
  margin: 20px;
  max-width: 345px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectCard = ({ title, description, link }) => (
  <StyledCard whileHover={{ scale: 1.05 }}>
    <Card style={{ background: '#212121', color: '#FFCC80' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#FFCC80' }}>
          View Project
        </Button>
      </CardActions>
    </Card>
  </StyledCard>
);

export default ProjectCard;

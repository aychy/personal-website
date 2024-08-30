import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => (
  <footer style={{ marginTop: 'auto', padding: '20px', backgroundColor: '#000000' }}>
    <Container>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Aydan Maksudovski. All rights reserved.
      </Typography>
    </Container>
  </footer>
);

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

const StyledAppBar = styled(AppBar)`
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: none;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFCC80;
  position: relative;
  font-weight: 500;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #FFCC80;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #FFE0B2;
    &:after {
      transform: scaleX(1);
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 26, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFCC80' }}>
          AM
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleMenu} aria-label="menu">
              <Menu color="#FFCC80" />
            </IconButton>
            <AnimatePresence>
              {isOpen && (
                <MobileMenu
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={menuVariants}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <IconButton color="inherit" onClick={toggleMenu} aria-label="close menu" sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <X color="#FFCC80" />
                  </IconButton>
                  {navItems.map((item) => (
                    <StyledLink key={item.name} to={item.path} onClick={toggleMenu}>
                      <Typography variant="h6">{item.name}</Typography>
                    </StyledLink>
                  ))}
                </MobileMenu>
              )}
            </AnimatePresence>
          </>
        ) : (
          <NavLinks>
            {navItems.map((item) => (
              <StyledLink key={item.name} to={item.path}>
                {item.name}
              </StyledLink>
            ))}
          </NavLinks>
        )}
        <IconButton color="inherit" onClick={toggleTheme} aria-label="toggle theme">
          {isDarkMode ? <Sun color="#FFCC80" /> : <Moon color="#FFCC80" />}
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
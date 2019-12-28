import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import WhoAmI from './WhoAmI';
import Skills from './Skills';
import Works from './Works';
import Links from './Links';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/koji-1009">
        Koji Wakamiya
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Self Introduction
        </Typography>

        <WhoAmI />
        <Skills />
        <Works />
        <Links />
        <Copyright />
      </Box>
    </Container>
  );
}

import { WhoAmI } from './widget/WhoAmI'
import { Skills } from './widget/Skills'
import { Works } from './widget/Works'
import { Links } from './widget/Links'
import { Box, Container, Link, Typography } from '@mui/material'

function Copyright(): JSX.Element {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/koji-1009">
        Koji Wakamiya
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

function App() {
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

export default App;

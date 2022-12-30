import { WhoAmI } from './WhoAmI'
import { Skills } from './Skills'
import { Works } from './Works'
import { Links } from './Links'
import { Box, Container, Link, Typography } from '@mui/material'

function Copyright (): JSX.Element {
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

export default function App (): JSX.Element {
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
  )
}

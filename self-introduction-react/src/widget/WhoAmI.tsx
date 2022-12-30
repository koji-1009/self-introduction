import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'

export function WhoAmI(): JSX.Element {
  return (
    <List>
      <Typography variant="h4" component="h2" gutterBottom>
        Who am I?
      </Typography>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="koji-1009"
            src="https://avatars1.githubusercontent.com/u/17231507"
          />
        </ListItemAvatar>
        <ListItemText
          primary="Koji Wakamiya"
          secondary="Mobile Application Developer"
        />
      </ListItem>
    </List>
  )
}

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  List,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ListItem,
  ListItemText,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";

export default function Skills() {
  return (
    <List>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Flutter Application</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Skills</Typography>
                <ListItem>
                  <ListItemText primary="RxStream" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="RiverPod/Provider" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Freezed + StateNotifier" />
                </ListItem>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Application</Typography>
                <Grid item>
                  <Link href="https://github.com/koji-1009/color_bg">
                    color_bg
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/koji-1009/flutter_web_deploy">
                    flutter_web_deploy
                  </Link>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Library</Typography>
                <Grid item>
                  <Link href="https://github.com/koji-1009/flutter_auth_ui">
                    flutter_auth_ui
                  </Link>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Android Application</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Skills</Typography>
                <ListItem>
                  <ListItemText primary="Java 7, 8 + RxJava" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Kotlin + Kotlin Coroutines" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Dagger 2" />
                </ListItem>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Library</Typography>
                <Grid item>
                  <Link href="https://github.com/koji-1009/EmptyRecyclerView">
                    EmptyRecyclerView
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/koji-1009/EasySettingsPanel">
                    EasySettingsPanel
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/koji-1009/ChronoDialogPreference">
                    ChronoDialogPreference
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/koji-1009/FailureStatus">
                    FailureStatus
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://github.com/koji-1009/dangerjs-android-plugin">
                    dangerjs-android-plugin
                  </Link>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Apps</Typography>
                <Grid item>
                  <Link href="https://play.google.com/store/apps/details?id=com.app.dr1009.qrshot">
                    QRShot
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://play.google.com/store/apps/details?id=com.app.dr1009.webviewchecker">
                    WebViewChecker(by flutter)
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="https://play.google.com/store/apps/details?id=com.sf_lolitahag.kitsunehomerun">
                    きつねホームラン
                  </Link>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>iOS Application</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Skills</Typography>
                <Grid item>
                  <ListItemText primary="Swift" />
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="column" justify="center" spacing={1}>
                <Typography variant="subtitle1">Apps</Typography>
                <Grid item>
                  <Typography>Kaede50(closed)</Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </List>
  );
}

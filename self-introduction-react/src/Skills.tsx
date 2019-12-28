import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ListItem, ListItemText, Grid, Link, Typography } from '@material-ui/core';

export default function Skills() {
    return (
        <List>
            <Typography variant="h4" component="h2" gutterBottom>Skills</Typography>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Android Application</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <ListItemText primary="Java 7, 8 + RxJava" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Kotlin + Kotlin Coroutines" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Flutter" />
                        </ListItem>
                        <ListItem>
                            <Grid container direction="column" justify="center" spacing={1}>
                                <Typography variant="subtitle1">Library</Typography>
                                <Grid item>
                                    <Link href="https://github.com/koji-1009/EmptyRecyclerView">EmptyRecyclerView</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="https://github.com/koji-1009/EasySettingsPanel">EasySettingsPanel</Link>ï
                                </Grid>
                                <Grid item>
                                    <Link href="https://github.com/koji-1009/ChronoDialogPreference">ChronoDialogPreference</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="https://github.com/koji-1009/FailureStatus">FailureStatus</Link>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem>
                            <Grid container direction="column" justify="center" spacing={1}>
                                <Typography variant="subtitle1">Apps</Typography>
                                <Grid item>
                                    <Link href="https://play.google.com/store/apps/details?id=com.app.dr1009.qrshot">QRShot</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="https://play.google.com/store/apps/details?id=com.app.dr1009.webviewchecker">WebViewChecker(by flutter)</Link>
                                </Grid>
                                <Grid item>
                                    <Link href="https://play.google.com/store/apps/details?id=com.sf_lolitahag.kitsunehomerun">きつねホームラン</Link>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>iOS Application</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <ListItemText primary="Swift" />
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
            <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Web</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <List>
                        <ListItem>
                            <ListItemText primary="React + TypeScript" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Flutter" />
                        </ListItem>
                        <ListItem>
                            <Grid container direction="column" justify="center" spacing={1}>
                                <Typography variant="subtitle1">Apps</Typography>
                                <Grid item>
                                    <Typography>Self Introduction(This page)</Typography>
                                </Grid>
                                <Grid item>
                                    <Link href="https://flutter-web-deploy-demo.firebaseapp.com">Flutter web deploy demo</Link>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </List>
    );
}

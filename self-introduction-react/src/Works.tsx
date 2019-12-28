import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { List, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Grid, Link } from '@material-ui/core';

export default function Works() {
    return (
        <List>
            <Typography variant="h4" component="h2" gutterBottom>Works</Typography>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Full time</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container direction="column" justify="center" spacing={1}>
                        <Typography variant="subtitle1">Studyplus</Typography>
                        <Grid item>
                            <Typography>2019.11~now : Android & iOS application</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>2018.09~2019.10 : Android application</Typography>
                        </Grid>
                        <Grid item>
                            <Link href="https://play.google.com/store/apps/details?id=jp.studyplus.android.app">Studyplus(Android)</Link>
                        </Grid>
                        <Grid item>
                            <Link href="https://apps.apple.com/jp/app/%E5%8B%89%E5%BC%B7%E3%82%92%E7%BF%92%E6%85%A3%E5%8C%96-studyplus-%E3%82%B9%E3%82%BF%E3%83%87%E3%82%A3%E3%83%97%E3%83%A9%E3%82%B9/id505410049">Studyplus(iOS)</Link>
                        </Grid>
                        <Typography variant="subtitle1">Navitime Japan</Typography>
                        <Grid item>
                            <Typography>2017.04~2018.08 : Android application</Typography>
                        </Grid>
                        <Typography variant="subtitle1">SES</Typography>
                        <Grid item>
                            <Typography>2015.04~2016.010 : Android application</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                    <Typography>Second job</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container direction="column" justify="center" spacing={1}>
                        <Grid item>
                            <Typography>2019.06~2019.07 : Android application</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </List>
    );
}

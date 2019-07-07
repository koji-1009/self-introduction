import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Box, Grid, Paper, Typography } from "@material-ui/core";

const styles = (theme: Theme): StyleRules => createStyles({
});

interface Props extends WithStyles<typeof styles> {
}

class ProfileComponent extends React.Component<Props> {

    public render() {
        return <Box component="span" m={1} >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1">Hi! I'm Koji-1009, Android Application Developer!</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">Skill</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper square={true}>
                        <Typography variant="subtitle1">Android</Typography>
                        <ul>
                            <li>Java, Kotlin</li>
                            <li>Kotlin Coroutines</li>
                            <li>Android DataBinding</li>
                            <li>Android Archiecture Component</li>
                            <li>RxJava, RxKotlin, RxAndroid</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper square={true}>
                        <Typography variant="subtitle1">CI</Typography>
                        <ul>
                            <li>CircleCI</li>
                            <li>Bitrise</li>
                        </ul>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">links</Typography>
                    <ul>
                        <li><a href="https://github.com/koji-1009" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://dr1009.hatenablog.com/" target="_blank" rel="noopener noreferrer">Blog(in Japanease)</a></li>
                    </ul>
                </Grid>
            </Grid>
        </ Box>
    }
}

export default withStyles(styles)(ProfileComponent);
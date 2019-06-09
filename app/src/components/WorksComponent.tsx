import React from "react";

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import withStyles, { WithStyles, StyleRules } from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Box } from "@material-ui/core";

const styles = (theme: Theme): StyleRules => createStyles({
});

interface Props extends WithStyles<typeof styles> {
}

class WorkComponent extends React.Component<Props> {

    public render() {
        return (
            <Box component="span">
                <ul>
                    <li>Play Stored Application <a href="https://play.google.com/store/apps/developer?id=Koji+Wakamiya&hl=ja" target="_blank" rel="noopener noreferrer">Store</a>
                        <ul>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.qrshot" target="_blank" rel="noopener noreferrer">QRShot</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.dailytodo" target="_blank" rel="noopener noreferrer">DailyToDo</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.addbu" target="_blank" rel="noopener noreferrer">LocationViewer</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.sf_lolitahag.kitsunehomerun" target="_blank" rel="noopener noreferrer">きつねホームラン</a></li>
                            <li><a href="https://play.google.com/store/apps/details?id=com.app.dr1009.webviewchecker" target="_blank" rel="noopener noreferrer">WebviewChecker</a></li>
                        </ul>
                    </li>
                    <li>Android Library
                        <ul>
                            <li><a href="https://github.com/koji-1009/EmptyRecyclerView" target="_blank" rel="noopener noreferrer">EmptyRecyclerView</a></li>
                            <li><a href="https://github.com/koji-1009/FailureStatus" target="_blank" rel="noopener noreferrer">FailureStatus</a></li>
                            <li><a href="https://github.com/koji-1009/ChronoDialogPreference" target="_blank" rel="noopener noreferrer">ChronoDialogPreference</a></li>
                            <li><a href="https://github.com/koji-1009/EasyNotificationChannel" target="_blank" rel="noopener noreferrer">EasyNotificationChannel</a></li>
                        </ul>
                    </li>
                </ul>
            </Box>
        );
    }
}

export default withStyles(styles)(WorkComponent);
